import { useState, useContext } from 'react'

import GitContext from '../../context/github/GitContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../API'

const UserSearch = () => {
    const [text, setText] = useState('')

    const { dispatch, users } = useContext(GitContext)
    const { setAlert } = useContext(AlertContext)


    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert('Fill the input', 'error');
        } else {
            dispatch({
                type: 'SET_LOADING'
            })
            const users =await searchUsers(text);
            dispatch({
                type: 'GET_USERS',
                payload: users
            })
            setText('');
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}
                    className='form-control'
                >
                    <div className="relative">
                        <input
                            value={text}
                            onChange={handleChange}
                            type="text"
                            placeholder='Search'
                            className='w-full pr-40 bg-gray-200 input input-lg text-black'
                        />
                        <button
                            type="submit"
                            className='absolute top-0 right-0 rounder-l-none w-36 btn btn-lg'
                        >
                            Go
                        </button>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <button 
                onClick={()=>dispatch({
                    type:'CLEAR_USERS'
                })}
                    className="btn btn-ghost btn-lg">
                    Clear
                </button>
            )}
        </div>

    )
}

export default UserSearch
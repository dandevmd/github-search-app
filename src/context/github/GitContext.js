import { createContext, useReducer } from "react";
import gitReducer from '../reducers/gitReducer';


const GitContext = createContext();

export const GitProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }
    const [state, dispatch] = useReducer(gitReducer, initialState);


    return <GitContext.Provider value={
        {
            ...state,
            dispatch,
            
        }
    }>{children}</GitContext.Provider >
}



export default GitContext;



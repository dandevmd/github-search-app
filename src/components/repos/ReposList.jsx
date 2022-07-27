import RepoItem from './RepoItem';
import PropTypes from 'prop-types'

const ReposList = ({ repos }) => {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
          {repos.map(repo=>(
            <RepoItem key={repo.id} repo={repo}/>
          ))}
        </h2>
      </div>
    </div>
  )
}


ReposList.propTypes = {
  repos: PropTypes.array.isRequired
}

export default ReposList
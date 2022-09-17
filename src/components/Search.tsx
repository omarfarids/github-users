import React, { useContext } from 'react'
import { AppContext } from './context'
import '../styles/search.css'

type Repo = {
    name:string,
    description:string,
    html_url:string
}


const Search = () => {
    const { userInfo,
        getGithubUser,
        searchValue,
        setSearchValue,
        history,
        setHistory} = useContext<any>(AppContext)
    

    const handleSubmit = (e:any) =>{
        e.preventDefault()
        getGithubUser(searchValue)
        setSearchValue('')
        setHistory([userInfo,...history])
    }
    
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <input className='form-input' type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <button className='form-btn' type='submit'>Search</button>
            </form>
            {Array.isArray(userInfo.repositories) && (
                    <div>
                        <div className='user'>
                            <img className='user-avatar' src={userInfo.userData.avatar_url} alt={userInfo.userData.name} />
                            <div className='user-info'>
                                <p>name: {userInfo.userData?.name}</p>
                                <p>email: {userInfo.userData?.email?userInfo.userData?.email:'not available'}</p>
                                <p>bio: {userInfo.userData?.bio?userInfo.userData?.bio:'not available'}</p>
                                <p>URL: <a href={userInfo.userData?.html_url}>Click Here</a></p>
                                <p>public repos: {userInfo.userData?.public_repos}</p>
                                <p>repos URL: <a href={userInfo.userData?.repos_url}>Click Here</a></p>
                            </div>
                        </div>
                        <div className='repo'>
                            <h2 className='repo-title title'>Repositories</h2>
                            <ul className='repo-repositories'>{userInfo.repositories.map((repo:Repo,index:number):any=>{
                                return <div className='repo-single__repo' key={index}>
                                            <li><a href={repo?.html_url}>{repo?.name}</a></li>
                                            <p>{repo.description?repo.description:'No description found'}</p>
                                            <hr/>
                                        </div>

                            })}</ul>
                        </div>
                    </div>
                        )}
        </div>
    )
}

export default Search
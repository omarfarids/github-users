import React, { useContext } from 'react'
import { AppContext } from './context'
import '../styles/history.css'

type UserData = {
    avatar_url:string
    name:string,
    email:string,
    bio:string,
    html_url:string
}

type User = {
    user:string,
    userData:UserData,
    repositories:object,
    timestamp:string
}


const History = () => {
    const { userInfo , history ,singleSearch , setSingleSearch } = useContext<any>(AppContext)

    console.log(singleSearch)

    return (
        <>
            <h1 className='title'>History Log</h1>
            <div className='history-log'>
                {history.map((element:User,index:number)=>{
                    return <div key={index}>
                                <p onClick={()=>{setSingleSearch({
                                    avatar_url:element.userData?.avatar_url?element.userData?.avatar_url:'',
                                    name:element.userData?.name,
                                    email:element.userData?.email,
                                    bio:element.userData?.bio,
                                    html_url:element.userData?.html_url
                                })}} className='single-log'>{element.user} {element.timestamp}</p>
                            </div>
                })}
            </div>
            {singleSearch.avatar !== '' && <div className={`user ${singleSearch.avatar_url.length === 0?'hidden':'centered'}`}>
                <img className='user-avatar' src={singleSearch.avatar_url} alt={singleSearch.name} />
                <div className='user-info'>
                    <p>name: {singleSearch.name}</p>
                    <p>email: {singleSearch.email?userInfo.userData?.email:'not available'}</p>
                    <p>bio: {singleSearch.bio?userInfo.userData.bio:'not available'}</p>
                    <p>URL: <a href={singleSearch.html_url}>{singleSearch.html_url}</a></p>
                </div>
            </div>}
        </>
    )
}

export default History
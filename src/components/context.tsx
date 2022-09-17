import React, { createContext, useState } from 'react'

type ContextProps = {
    userInfo:object,
    searchValue:string,
    history:object,
    isHidden:boolean,
    singleSearch:object,
    setSingleSearch:(info:UserData)=>void,
    setIsHidden:(hide:boolean)=>void,
    getGithubUser:(user:string)=>void,
    setSearchValue:(name:string)=>void,
    setHistory:(history:any[])=>void
};

type UserData = {
    avatar_url:string
    name:string,
    email:string,
    bio:string,
    html_url:string
}

const AppContext = createContext<Partial<ContextProps>>({})



const AppProvider = ({children}:any) => {
    // app states 
    const[userInfo , setUserInfo] = useState<Object>({})
    const [ searchValue , setSearchValue ] = useState<string>('')
    const [ history , setHistory ] = useState<object[]>([])
    const [ isHidden , setIsHidden ] = useState<boolean>(true);
    const [ singleSearch , setSingleSearch] = useState<UserData>({
        avatar_url:'',
        name:'',
        email:'',
        bio:'',
        html_url:''
    })


    // functions 
    const getGithubUser = async (user:string) =>{
        try{
            const response = await fetch(`https://api.github.com/users/${user}`)
            const userData = await response.json()
            const response2 = await fetch(`https://api.github.com/users/${user}/repos`)
            const repositories = await response2.json()
            setUserInfo({
                user,
                userData,
                repositories,
                timestamp:`${new Date()}`
            })
        }    
        catch(err){
            console.log(err)
        }
    }

    return (
        <AppContext.Provider value={{
                                        userInfo,
                                        getGithubUser,
                                        searchValue,
                                        setSearchValue,
                                        history,
                                        setHistory,
                                        isHidden,
                                        setIsHidden,
                                        singleSearch,
                                        setSingleSearch
                                    }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider , AppContext}
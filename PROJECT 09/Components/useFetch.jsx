import React from "react"
const useFetch = (url)=>{
    const [isLoading, setIsLoading] =React.useState(true);
    const [isError, setIsError] =React.useState(false);
    const [user, setUser] =React.useState(null);
    React.useEffect(()=>{
        const fetchUser= async()=>{
            try{
                const resp= await fetch (url);
                if(!resp.ok){
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user=await resp.json();
                setUser(user);
            } catch(error){
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchUser();
    },[]);
    return {isLoading,isError,user};
};
export default useFetch;
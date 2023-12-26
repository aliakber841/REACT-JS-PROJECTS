import useFetch from "./useFetch"
const url='https://api.github.com/users/QuincyLarson'

const FetchData = () => {
    const {isLoading,isError,user}=useFetch(url)
    if(isLoading){
        return <h2 className="loading">Loading.....</h2>
    }
    if(isError){
        return <h2 className="error">There was an error.....</h2>
    }
    const {avatar_url,name,company,bio} =user;
  return (
    <div className="fetch-container">
       <img style={{width:"100px",borderRadius:"25px"}}
        src={avatar_url}
        alt={name}/>
        <h2>{name}</h2>
        <h2>{company}</h2>
        <h2>{bio}</h2>
    </div>
  )
}

export default FetchData
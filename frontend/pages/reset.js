import RequestReset from "../components/RequestReset"
import Reset from "../components/Reset"

export default function ResetPage({query}){

  if(!query?.token){
      return (<p>
          Sorry, you must supply token
          <RequestReset/>
      </p>)
  }
    return(
        <div>
            <p>Reset password {query.token} </p> 
            <Reset token={query.token} />
        </div>
    )
}
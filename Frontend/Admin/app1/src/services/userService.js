import config from './config'
import axios from 'axios'



export async function signIn(email,password){
    const url=config.BASE_URL+'/user/signin'
    const body={email,password}

    const result=await axios.post(url,body)
    return result.data
}
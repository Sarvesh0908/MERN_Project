import axios from 'axios'
import config from './config'


export async function loginUser(email, password) {
    const URL = config.BASE_URL + "/user/signin"
    const body = { email, password }
    const response = await axios.post(URL, body) 
    return response.data
}

export async function SignupUser(name, email, password, mobile) {
    const URL = config.BASE_URL + '/user/signup'
    const body = { name, email, password, mobile }
    const response = await axios.post(URL, body)
    return response.data
}

export async function getAllCourses(token){
    const url=config.BASE_URL+'/courses/allcourses'
    const headers={token}
    const result= await axios.get(url,{headers})
    return result.data

}
export async function getUserProfile(email, token) {
    
   const url=config.BASE_URL+'/student/show'
    const headers={token, email}
    const result= await axios.get(url,{headers})
    return result.data
   
}

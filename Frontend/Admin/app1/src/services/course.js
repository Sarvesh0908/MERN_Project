import config from "./config"
import axios from "axios"

export async function getAllCourses(token){
    const url=config.BASE_URL+'/courses'

    const headers={token}
    const result= await axios.get(url,{headers})
    return result.data

}

export async function getActiveCourses(token){
       const url=config.BASE_URL+'/courses/active_course'

    const headers={token}
    const result= await axios.get(url,{headers})
    return result.data

}

import axios from 'axios'
import config from './config'

export async function getAllCourses(token){
    const url=config.BASE_URL+'/courses/allcourses'
    const headers={token}
    const result= await axios.get(url,{headers})
    return result.data

}

export async function registe_to_course(courseId,email,name,mobileNo,token) {
    const URL = config.BASE_URL+"/student/register-to-course"
    const headers={token}
    const body = { courseId ,email,name,mobileNo}
    const response = await axios.post(URL, body,{headers}) 
    return response.data
}
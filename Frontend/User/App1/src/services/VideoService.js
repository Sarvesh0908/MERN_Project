import axios from 'axios'
import config from './config'

export async function getVideosByCourse(course_id,token) {
    const URL = `${config.BASE_URL}/video/all-videos/${course_id}`;


    const headers={token}
    const response = await axios.get(URL,{headers})

    return response.data
}
import axios from "axios"
const KEY="AIzaSyC57YWTyh_YnuW7T6eXHGqtYhjbsIqTLoI"

export default axios.create({baseURL:"https://www.googleapis.com/youtube/v3",
params:{
    part:"snippet",
    maxResults:5,
    type: 'video',
    key:KEY
}
})
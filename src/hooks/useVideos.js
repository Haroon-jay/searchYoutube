import {useState,useEffect} from "react"
import youtube from "../apis/Youtube"
const useVideos=(def)=>{
    const[videos,setVideos]=useState([]);

    useEffect(()=>{
        search(def)
    },[def])

    const search=async(term)=>{
        const res=await youtube.get("/search",{
            params:{
                q:term
            }
        })
        setVideos(res.data.items)}
        // selectVid(res.data.items[0])
        
    return [videos,search]

}
export default useVideos
import React,{useState,useEffect} from "react"
import SearchBar from "./SearchBar"
import VideoList from  "./VideoList"
import VideoDetail from "./VideoDetail"
import useVideos from "../hooks/useVideos"
const App=()=>{
    const [selectedVideo,selectVid]=useState(null)
    const [videos,search]=useVideos("buildings")
    // const onTermSubmit=async(term)=>{
    //     const res=await youtube.get("/search",{
    //         params:{
    //             q:term
    //         }
    //     })
    //     setVideos(res.data.items),
    //     selectVid(res.data.items[0])
    //     }
    
    useEffect(()=>{selectVid(videos[0])},[videos])

    return(
        <div className="ui container"><SearchBar onFormSubmit={search} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
         <VideoDetail video={selectedVideo} /></div>
         <div className="five wide column">
         <VideoList onVideoSelect={selectVid} videos={videos}/>
         </div></div> </div></div>
    )
}

// class App extends React.Component{
    // constructor(props){
    //     super(props)
    //  //   state={}
    // }
    // componentDidMount(){
    // this.onTermSubmit("Buildings")
    // }
    // state={videos:[],selectedVideo:null}


//     onTermSubmit=async(term)=>{
// //console.log(term)




// }
//     render(){
//         return (
          
//         )
//     }
// }

export default App
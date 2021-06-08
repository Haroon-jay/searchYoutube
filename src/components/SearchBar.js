import React,{useState} from "react"

const SearchBar=({onFormSubmit})=>{
    const [term,setTerm]=useState("")
   
    const onInputChange=(event)=>{
        setTerm(event.target.value)
            }
        
          const onSubmit=(e)=>{
           e.preventDefault();
           onFormSubmit(term)
            }
   
    return(
        <div className="ui segment search-bar">
        <form  onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label >Search</label>
        <input value={term} onChange={onInputChange} type="text"></input></div>
        </form></div>
    )
}

export default SearchBar
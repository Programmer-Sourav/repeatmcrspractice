import { useContext, useState } from "react"
import { ForumContext } from "../contexts/ForumContext"
import ForumCard from "../Components/ForumCard"
import { useStatStyles } from "@chakra-ui/react"

export default function ForumHome(){

    const { data } = useContext(ForumContext)
    const [selectedState, setSelectedState] = useState("Latest")


    const onChangeHandler = (e) =>{
        setSelectedState(e.target.value)
    }

    let filteredList = []
    if(selectedState==="Latest"){
      filteredList = [...data].sort((p1, p2)=> new Date(p1.createdAt)> new Date(p2.createdAt) ? 1 : -1) //sort method returns a numeric value
    }
    if(selectedState==="upvotes"){
        filteredList = [...data].sort((p1,p2)=>p1.upvotes>p2.upvotes ? 1 : -1) //ascending order (least upvoted first)
    }
   // console.log(656, filteredList)

    return(
        <div>{
            <ul>
            <select value={selectedState} onChange={(e)=>{onChangeHandler(e)}}>
                <option value="Latest"> Latest</option>
                <option value="upvotes"> Most Upvoted</option>
            </select>
           { filteredList.map((forumData)=>(
                <ForumCard data = {forumData}/>
            ))}
            </ul>}</div>
    )
}
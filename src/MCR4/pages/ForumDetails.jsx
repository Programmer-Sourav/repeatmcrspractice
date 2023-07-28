import { useContext, useState } from "react"
import { ForumContext } from "../contexts/ForumContext"
import { useParams } from "react-router"
import ForumCard from "../Components/ForumCard"
import { useStatStyles } from "@chakra-ui/react"

export default function ForumDetails(){

    const { data } = useContext(ForumContext)
    const { postId } = useParams()
    
    
    const findDetails = findPostDetails()
    console.log(3456, findDetails)
    function findPostDetails(){
        return data.find((dataItem)=>(dataItem.postId===postId))
       
    }

    return(
        <div> {
            <ul>
            <ForumCard data={findDetails}/>
            {console.log(findDetails.comments)}
            <p>{findDetails.comments.map((comment)=>(comment.username))}</p>
            <p>{findDetails.comments.map((comment)=>(comment.comment))}</p>
            </ul>
            }</div>
    )
}
import { useContext } from "react"
import { ForumContext } from "../contexts/ForumContext"
import { Link, useNavigate } from "react-router-dom"


export default function ForumCard({data}){

  const { doUpvoteOnClick, doDownvoteOnClick , doBookMark, details} = useContext(ForumContext)
  const navigate = useNavigate()

  const doViewDetails = (data) =>{
      // <Link to={`/forumdetails/${data.postId}`}></Link>
      navigate(`/forumdetails/${data.postId}`)
  }

    return(
        <div class="cardthree">
        <div class="buttons">
          <button onClick={()=>{doUpvoteOnClick(data)}}>Upvote</button>
          <p>{data.upvotes}</p>
          <button onClick={()=>{doDownvoteOnClick(data)}}>Downvote</button>
        </div>
        <div class="content">
          <p>Posted By @{details.username}</p>
          <h2>{data.post}</h2>
          {data.tags.map((tag)=>(<button>{tag}</button>))}
          <p>{data.postDescription}</p>
          <button style={{background: data.isBookMarked ? "red" : "gray"}} onClick={()=>{doBookMark(data)}}>BookMark</button>
          <button onClick={()=>{doViewDetails(data)}}>Details</button>
        </div>
      </div>
    )
}
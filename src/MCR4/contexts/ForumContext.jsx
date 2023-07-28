import { createContext, useState } from "react";
import { forumData } from "../data/api";


export const ForumContext = createContext()


export function ForumProvider({children}){

    const [data, setData ] = useState(forumData.posts)
    const [details, setDetails ] = useState(forumData)
   
    const doUpvoteOnClick = (dataItem) =>{
      const updated = data.map((forumData)=>forumData.postId===dataItem.postId ? {...forumData, upvotes: forumData.upvotes+1} : forumData)
      setData(updated)
    }

    const doDownvoteOnClick = (dataItem) =>{
     const updated = data.map((forumData)=>forumData.postId===dataItem.postId? {...forumData, downvotes: forumData.downvotes+1, upvotes: forumData.upvotes-1 }: forumData)
     setData(updated)
    }

    const doBookMark = (dataItem) =>{
      const updated = data.map((forumData)=>forumData.postId===dataItem.postId? {...forumData, isBookMarked: !forumData.isBookmarked} : forumData)
      setData(updated)
    }
    

    return(
        <ForumContext.Provider value={{data, doUpvoteOnClick, doDownvoteOnClick, doBookMark, details }}>{children}</ForumContext.Provider>
    )
}
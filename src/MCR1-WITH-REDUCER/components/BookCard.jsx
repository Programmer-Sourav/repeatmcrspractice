import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

export default function BookCard({bookdata}){

 const { selectedCategory, handleCategorySelection}  = useContext(BookContext)
 
    return(
        <div style={{width:"192px", height:"320px", border: "1px solid black", display:"inline-block"}}>{
            <div>
            <img src={bookdata.image} alt="bookpic" height="172px"/>
            <p> {bookdata.title}</p>
            <p>{bookdata.author}</p>
            <select value = {bookdata.category} onChange={(e)=>{handleCategorySelection(e, bookdata)}}>
                <option value="read"> Read </option>
                <option value="want"> want to Read </option>
                <option value="reading"> Reading </option>
            </select>
            </div>
            }</div>
    )
}
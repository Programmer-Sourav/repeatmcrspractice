import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "../component/BookCard"

export default function Search(){

  const { books, handleSearchValue, searchState } = useContext(BookContext)


  const filteredList = books.filter((book)=>book.title.toLowerCase().includes(searchState.toLowerCase()))

    return(
        <div> 
            {
            <div>
             <input type="search" value = {searchState} placeholder="Search" onChange={(e)=>{handleSearchValue(e)}}/>
              <ul>
             {filteredList.map((book)=>(
             <BookCard bookdata={book}/>))}
             </ul>
             </div>
            }     
        </div>
    )
}
import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"
import BookCard from "../component/BookCard"
import { Link } from "react-router-dom"

export default function Home(){

     const { books, handleCategorySelection } = useContext(BookContext)

     const categories = [{id: 1, category: "read"}, 
                          {id:2, category: "want"},
                            {id: 3, category: "reading"}]

    //category can also be a simple array, categories = ["read","want", "reading"]

    let filteredList = []  
    
    const getFilteredList = (category) =>{
       filteredList =  books.filter((book)=>(book.category===category))  
       return filteredList 
    }
  
  
    return(
        <div> 
            {/* steps: for each category filter books by category. So we need to traverse(map) the array category and for each category we need to map over filtered list */}
            <Link to="/"> Home</Link>
            <Link to="/search">Search</Link>
            {
               categories.map((cate)=>( 
                <div>
                <h1>{cate.category}</h1>
              <ul>
              {getFilteredList(cate.category) .map((bookdata)=>(
                <BookCard bookdata={bookdata}/>
               ))}
               </ul>
               </div>  
                ))}
        </div>
    )
    
}
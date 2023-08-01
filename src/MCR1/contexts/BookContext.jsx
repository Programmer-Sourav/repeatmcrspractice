import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/api";

export const BookContext = createContext()

export function BookProvider({children}){
  const [selectedCategory, setSelectedCategory] = useState("")
  const [books, setBooks]  = useState([])
  const [searchState, setSearchState] = useState("")
  const categories = [{id: 1, category: "read", title: "Read"}, 
  {id:2, category: "want", title: "Want to Read"},
    {id: 3, category: "reading", title: "Currently Reading"}]


  
  const getBooks = async() =>{
    try{
      const response = await fakeFetch("https://example.com/api/books")
      setBooks(response.data.books)
    }
    catch(e){

    }
  }
  

  useEffect(()=>{getBooks()},[])


  const handleCategorySelection = (e, bookItem) =>{
     setSelectedCategory(e.target.value)
     //console.log(323, selectedCategory)
     const updated = books.map((book)=>book.id===bookItem.id ? {...book, category: e.target.value} : book)
     setBooks(updated)
  }

  const handleSearchValue = (e) =>{
    setSearchState(e.target.value)
  }

    return(
      <BookContext.Provider value={{selectedCategory, handleCategorySelection, books, searchState, handleSearchValue, categories}}> { children }</BookContext.Provider>
    )
}
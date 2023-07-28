import { useContext } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { HabitContext } from "../contexts/HabitContext"
import { ChakraProvider } from "@chakra-ui/react"
import AddDetailsHabit from "../Modal/AddDetailsHabit"
import EditDetailsHabit from "../Modal/EditDetailsHabit"

export default function HabitDisplayCard({data}){

  const navigate = useNavigate()
  const { deleteTheHabit, handleArchive, editTheHabit } = useContext(HabitContext)

  const goToDetails = (id) =>{
     navigate(`/habitdetails/${id}`)
     console.log("Inside HDC", id);
    //  <Link to={`/habitdetails/${id}`}></Link>
     
  }
    return(
      <div style={{height: "320px", width: "320px"}}>
        <div className="habitcardd"  onClick={()=>{goToDetails(data.id)}}>
          <p>{data.title}</p>
        </div>
        <div>
          <button onClick={()=>{deleteTheHabit(data)}} style={{margin: "4px"}}>Delete</button>
          <ChakraProvider>   
                <EditDetailsHabit  data={data}/>
                </ChakraProvider>  
          <button onClick={()=>{handleArchive(data)}} style={{margin: "4px"}}>Archive</button>
          </div>
        </div>
    )
}
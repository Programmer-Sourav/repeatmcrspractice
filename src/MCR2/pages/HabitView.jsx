import { useContext } from "react"
import { HabitContext } from "../contexts/HabitContext"
import { useParams } from "react-router"

export default function HabitView(){
    const { habitList } = useContext(HabitContext)
    const {id} = useParams()
    console.log(222, id)

    const findDetails = getHabitDetails()

    function getHabitDetails(){
        const result = habitList.find((habit)=>habit.id.toString()===id)
        return result
    }

    return(
        <div>
            <ul>
            {<h1>Habit Details</h1>}
        <p> Title: {findDetails.title}</p>
        
        <p> Repeat: {findDetails.repeat}</p>
        <p> Daily Goal: {findDetails.goal}</p>
        <p> Start Date: {findDetails.start}</p>
        </ul></div>
    )
}
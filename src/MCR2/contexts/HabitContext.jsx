import { createContext, useState } from "react";

export const HabitContext = createContext()

export function HabitProvider({children}){

    const [habitList, setHabitList] = useState([])
    const [archiveList, setArchiveList] = useState([])



    const addHabitsOnUserRequest = (habitItem) =>{
     console.log(123, habitItem)
     setHabitList(habitList=>([...habitList, habitItem]))
    }

    const deleteTheHabit = (habitItem) =>{
      const res = habitList.filter((habit)=>habit.id!==habitItem.id)
      setHabitList(res)
    }

    const archiveTheHabit = (habitItem) =>{

    }
    
    const editTheHabit = (id, habitItem) =>{
        const updated = habitList.map((habit)=>habit.id===id ? {...habit, title: habitItem.title, repeat: habitItem.repeat, time: habitItem.time, goal: habitItem.goal, start: habitItem.start } : habit)
        console.log(222, updated)
        setHabitList(updated)
    }

    const handleArchive = (newItem) =>{
        setArchiveList([...archiveList, newItem])
        setHabitList(habitList.filter((habit)=>habit.id!==newItem.id))
        console.log(archiveList.length)
    }

    return(
        <HabitContext.Provider value={{habitList, addHabitsOnUserRequest, deleteTheHabit, archiveTheHabit, editTheHabit, setHabitList, handleArchive}}>{children}</HabitContext.Provider>
    )
}
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  border,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverFooter,
  background
} from "@chakra-ui/react";
import {  ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { HabitContext } from "../contexts/HabitContext";

export default function AddDetailsHabit() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {habitList, addHabitsOnUserRequest} = useContext(HabitContext)

  const [habitTitle, setHabitTitle] = useState("")
  const [repeatFreq, setRepeatFreq] = useState("Daily")
  const [goalFreq, setGoalFreq] = useState("1 Times Daily")
  const [timeOfTheDay, setTimeOfTheDay] = useState("Any Time")
  const [startDate, setStartDate] = useState("Today")

  console.log(123, habitList)
  
  return(
    <div>
   <div className="habitcard" onClick={onOpen}>
          <p>Create my own</p>
        </div> 
  <Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay>
    <ModalContent>
      <ModalHeader>New Habit</ModalHeader>
      <ModalCloseButton />

      <ModalBody>
        <label>Name
        <input type="text"
          value={habitTitle}
          style={{
            border: "1px solid black",
            height: "40px",
            width: "392px"
          }}
          onChange={(e) => {
            setHabitTitle(e.target.value);
          }}
        />
        </label>
        <label> 
            <p>REPEAT</p>
            <select value={repeatFreq} onChange={(e)=>{setRepeatFreq(e.target.value)}}>
                <option value="Daily">Daily</option>
                <option value="Alternative"> ALternative Day </option>
            </select>
        </label>
        <label> 
            <p>GOAL</p>
            <select value={goalFreq} onChange={(e)=>{setGoalFreq(e.target.value)}}>
                <option value="1 Times Daily">1 Times Daily</option>
                <option value="1 Times Weekly"> 1 Times Weekly</option>
            </select>
        </label>
        <label> 
            <p>TIME OF DAY</p>
            <select value={timeOfTheDay} onChange={(e)=>{setTimeOfTheDay(e.target.value)}}>
                <option value="Any time">Any Time</option>
                <option value="Morning"> Morning</option>
            </select>
        </label>
        <label> 
            <p>START DATE</p>
            <select value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}>
                <option value="Today">Today</option>
                <option value="Tomorrow"> Tomorrow</option>
            </select>
        </label>
        <button
          style={{
            background: "blue",
            paddingLeft: "32px",
            paddingRight: "32px",
            height: "40px",
            color: "white",
            margin: "8px",
            float: "right",
            borderRadius: "8px"
          }}
         
        onClick={()=>{addHabitsOnUserRequest({id:habitList.length+1 ,title: habitTitle, repeat: repeatFreq, goal: goalFreq, time: timeOfTheDay, start: startDate},onClose(), setHabitTitle(""))}}
          
        >
          {" "}
          Save{" "}
        </button>
      </ModalBody>

      <ModalFooter>
    
      </ModalFooter>
    </ModalContent>
  </ModalOverlay>
</Modal>
</div>
  )
}
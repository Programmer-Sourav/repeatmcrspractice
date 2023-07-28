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
  
  export default function EditDetailsHabit({data}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {habitList, addHabitsOnUserRequest,  editTheHabit} = useContext(HabitContext)
  
    const [habitTitle, setHabitTitle] = useState(data.title)
    const [repeatFreq, setRepeatFreq] = useState(data.repeat)
    const [goalFreq, setGoalFreq] = useState(data.goal)
    const [timeOfTheDay, setTimeOfTheDay] = useState(data.time)
    const [startDate, setStartDate] = useState(data.start)
  
    console.log(223, habitList, data)

    console.log(34, habitTitle)
    const onTitleChangeHandler = (e, id) =>{
         console.log(123, e.target.value, id)
        setHabitTitle(e.target.value)    
    }
    console.log(35, habitTitle)
    
    return(
      <div>
     <button onClick={onOpen}>Edit</button>
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Edit Habit Details</ModalHeader>
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
              onTitleChangeHandler(e, data.id)
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
           
          onClick={()=>{editTheHabit(data.id, {id:habitList.length ,title: habitTitle, repeat: repeatFreq, goal: goalFreq, time: timeOfTheDay, start: startDate},onClose(), setHabitTitle(""))}}
            
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
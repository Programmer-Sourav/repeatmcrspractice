import { useContext, useState } from "react"
import { HabitContext } from "../contexts/HabitContext"
import HabitCard from "../components/HabitCard"

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
import HabitDisplayCard from "../components/HabitDisplayCard";
import AddDetailsHabit from "../Modal/AddDetailsHabit";


export default function HabitList(){

   const { habitList } = useContext(HabitContext)

    return(
        <div>
            {
                <div>
                <ChakraProvider>   
                <AddDetailsHabit/>
                </ChakraProvider>  
                {
                    habitList.map((habit)=>(<HabitDisplayCard data={habit}/>))
                }
                </div>
            }
        </div>
    )
}
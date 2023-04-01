import {
    Input,
    Stack
  } from '@chakra-ui/react'

import { useDispatch, useSelector } from "react-redux";
import styles from "./AddCourseForms.module.css"
import { useNavigate } from 'react-router-dom'
import {fetchRoadMap} from './../store/addLearningFormActions'



export default function AddCourseForms() {

    var learning='default'
    var durationoflearning= 'default'
    var hoursoflearning ='default'
    var proficiency ='default'
    const navigate = useNavigate()
    const dispatch = useDispatch()

const handleChangeLearning = (e) =>{
         learning=e.target.value
    }
const handleChangeDurationoflearning = (e) =>{
        durationoflearning= e.target.value
        
   }
const handleChangeHoursoflearning = (e) =>{
    hoursoflearning =e.target.value
}

const handleChangeProficiency = (e) =>{
    proficiency =e.target.value
}

const onSubmit = () =>{
        console.log(learning,durationoflearning,hoursoflearning,proficiency)
        dispatch(fetchRoadMap({learning, durationoflearning,hoursoflearning, proficiency}))
        console.log("action triggered")
    }

const onCancel = () =>{
navigate("/")
}
    return (<>
    <h1>Please answer blow questions to create your roadmap</h1>
  <div className={styles.block}>
   
    <div>
    <label for="learning">What do you want to learn Today</label>
    <input onChange={handleChangeLearning} type="text" id="learning" name="learning"></input>
    </div>

    <div>  
    <label for="durationoflearning">How long do you want to learn?</label>
    <input onChange={handleChangeDurationoflearning} type="text" id="durationoflearning" name="durationoflearning"></input>
    </div>

    <div>
    <label for="hoursoflearning">How many hours can you learn in a day?</label>
    <input onChange={handleChangeHoursoflearning}  type="text" id="hoursoflearning" name="hoursoflearning"></input>
    </div>

    <div>
    <h2 for="proficiency">What is the level of proficiency?</h2>
    <div>
        <input type="radio" onChange={handleChangeProficiency} value="Beginner" name="gender" /> Beginner
        <input type="radio" onChange={handleChangeProficiency}  value="Intermidiate" name="gender" /> Intermidiate
        <input type="radio" onChange={handleChangeProficiency} value="Advanced" name="gender" /> Advanced
      </div>
   
    </div>
    <div>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
    </div>

  </div>

   </>)
  }
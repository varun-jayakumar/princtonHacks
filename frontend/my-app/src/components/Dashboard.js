import AddCourseForms from "./AddCourseForms";
import { useEffect,useState } from "react";
import {
    Link
  } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export default function Dashboard(){
const navigate = useNavigate()

const onClickAddCourseHandler = () =>{
    navigate("/add")
}



    return (
        <>

  <div class="grid grid-cols-1">
    <div class="mx-auto">
    <button onClick={onClickAddCourseHandler} class="w-96 rounded-md bg-gray-950 text-gray-100 px-8 py-3">add Learning</button>
    </div>
    <div>2</div>
    
  </div>
</>

    );

}


/* <div class="items-center">
      <button
        type="button"
        class="w-1/2 inline-block rounded-full bg-neutral-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]">
        Dark
      </button>
    </div> */
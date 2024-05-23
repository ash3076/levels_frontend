import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DailyTaskComponent from './DailyTaskComponent';
import {URL} from "../utils/contants"


const DailyTasks = ({setDailyTaskBar}) => {

    const [dailyTask , setDailyTask] = useState([]);


    useEffect(()=>{
        const getDailyTasks = async () => {
            
            const response = await axios.get(`${URL}api/v1/dailyTasks`);
            // console.log(response?.data?.tasks[0]);
            setDailyTask(response?.data?.tasks);
        }

        getDailyTasks();
    },[]);



    const closeDailyTab = () =>{
        setDailyTaskBar((prev) => !prev);
    }

  return (
    <div className='daily-task'>
        {
            dailyTask?.map((task)=>(
                <DailyTaskComponent key={task?._id} tasks={task} /> 
            ))
        }
        <button onClick={closeDailyTab} className='close-btn'>
            X
        </button>
    </div>
  )
}

export default DailyTasks
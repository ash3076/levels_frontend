import React from 'react';
import axios from "axios";

import {URL} from "../utils/contants" 

const Task = ({data,setChanged}) => {
    // const isPos = data?.isPos;
    const { task_title , description,score,isPos } = data;
    // console.log(data);

    const handleScore =  async (score) => {
        const response = await axios.post(`${URL}api/v1/user/addPoints` ,{points :  score});
        console.log(response?.data);
        setChanged(prev => !prev);
    }

  return (
    <button onClick={()=>handleScore(score)} className={ isPos > 0 ? "pos task-btn" : "neg task-btn"}>
      <div className='details'>
        <h2 className='title'>{task_title}</h2>
        <p className='desc'>{description}</p>
      </div>
      <div className='score'>
        <p >{score}</p>
      </div>
    </button>
  )
}

export default Task
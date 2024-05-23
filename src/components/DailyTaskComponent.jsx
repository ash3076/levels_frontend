import axios from 'axios';
import React, { useState } from 'react';
import {URL} from "../utils/contants"



const DailyTaskComponent = ({ tasks }) => {
  const { _id, title, description, isDone } = tasks;
  const [showDescription, setShowDescription] = useState(false);

  const taskChecked = async (taskId) => {
    const response = await axios.post(`${URL}api/v1/dailyTasks/${taskId}`);
    // Handle the response if needed
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className='tasks-daily'>
      <button className={`check-btn ${isDone ? "checked" : ""}`} onClick={() => taskChecked(_id)}></button>
      <div className={`taskDetails ${showDescription ? "show-description" : ""}`}>
        <h2 onClick={toggleDescription}>{title}</h2>
        {showDescription && (
          <div className='taskDescription'>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyTaskComponent;

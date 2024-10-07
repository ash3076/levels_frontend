import axios from 'axios';
import React, { useState } from 'react';
import { URL } from "../utils/contants";

const DailyTaskComponent = ({ tasks }) => {
  const { _id, title, description, isDone: initialIsDone } = tasks;
  const [isTaskDone, setIsTaskDone] = useState(initialIsDone);
  const [showDescription, setShowDescription] = useState(false);

  const taskChecked = async (taskId) => {
    try {
      const response = await axios.post(`${URL}api/v1/dailyTasks/${taskId}`);
      // Assuming the response will have the updated task
      setIsTaskDone(response.data.isDone); // Update local isDone state
    } catch (error) {
      console.error("Error updating the task status:", error);
    }
  };

  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className='tasks-daily'>
      <button
        className={`check-btn ${isTaskDone ? "checked" : ""}`}
        onClick={() => taskChecked(_id)}
      ></button>
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

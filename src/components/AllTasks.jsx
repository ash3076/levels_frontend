import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Task from './Task';
import User from './User';
import {URL} from "../utils/contants"

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [changed , setChanged] = useState(false);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await axios.get(`${URL}api/v1/tasks`);
        const { data } = response;
        setTasks(data); // Set tasks data if fetch is successful
        // toast.success("data connected !!" , toastOptions)
      } catch (error) {
        if (error.response && error.response.status === 500) {
          toast.error("Internal server error. Please try again later." , toastOptions);
        } else {
          toast.error("Error fetching tasks. Please try again later.",toastOptions);
        }
        // console.log(error.message);
      }
    }

    getTasks();
  }, []);

  return (
    <div>
      <User changed = {changed} />
      
      {
        <ul className='tasks'>
          {tasks.map(task => (
            <Task key={task._id} data = {task} setChanged={setChanged}/>
          ))}
        </ul>
      }


      <ToastContainer/>
    </div>
  );
}

export default AllTasks;

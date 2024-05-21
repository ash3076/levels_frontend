import React, { useEffect, useState } from 'react'
import axios from "axios";
import Progress from './Progress';
import {URL} from "../utils/contants"

const User = ({changed}) => {
    const [user ,setUser] = useState([]);
    const [percentageBar , setPercentageBar] = useState(0);
    const [level , setLevel] = useState(0);
    const [nextLevelPoints , setNextLevelPoints] = useState(0);


    useEffect(() => {
        const getLevel = async () => {
            const response = await axios.get(`${URL}api/v1/user/level`);
            // console.log(response?.data);
            const levels_array = response?.data; 
            const curLvl = user.currentLevel;
            // console.log(currentLevel);
            levels_array.sort((a, b) => a.ashers - b.ashers);
            for(let i = 0 ; i < 100 ; i++)
            {
                if(levels_array[i].ashers > curLvl)
                {
                    // console.log("here at il : ",i , " here level val : ",levels_array[i].ashers , " and cur level : ",curLvl);
                    setLevel(i);
                    setNextLevelPoints(levels_array[i+1].ashers);
                    // console.log(" \n->>>>level : ",i);
                    break;   
                }
            }
            // console.log(level);
        }

        getLevel();
    },[user.currentLevel , user.maxLevel])

    useEffect(() => {

        const getUserDetails = async () =>{
            try{
                const response = await axios.get(`${URL}api/v1/user`);
                // console.log("data ", response?.data[0]);
                setUser(response.data[0]);
            }
            catch(error)
            {
                console.log(error,message);
            }
        }

        getUserDetails();
    },[changed]);


  return (
    <div className='header-container'>
        
        <div className="header-username">
            <h1>{user.username}</h1>
        </div>
        <div className='header-percentage-container'>
            <Progress data = {user} setPercentageBar = {setPercentageBar} />
            <div className='header-percentage'>
            <span>{percentageBar}%</span>
            <span className='level'>Lvl {level}</span>

            </div>

        </div>
        <p className='current-level'>{user.currentLevel} / {user.maxLevel} ashers </p>
        <div className="nextLvl">
            <span className='nextLvlText'>Next level {level+1} </span>
            <span className='nextLvlScore'>Required Points {nextLevelPoints - user?.currentLevel}</span>
        </div>
    </div>
  )
}

export default User
import React, { useState } from 'react'
import AllTasks from './components/AllTasks';
import User from './components/User';
import "./index.css"
import DailyTasks from './components/DailyTasks';

const App = () => {


  const [dailyTaskBar , setDailyTaskBar] = useState(false);

  const handleDailyButton = () => {
    setDailyTaskBar(prev => !prev);
  }

  return (
    <div>
      <div className="mobileBg">
        <img src="https://w0.peakpx.com/wallpaper/736/971/HD-wallpaper-solo-leveling-sung-jin-woo.jpg" alt="" />

      </div>
      <button onClick={handleDailyButton} className='dailyTasksBar'>
        //
      </button>
      <AllTasks  />
      {
        dailyTaskBar &&
        <DailyTasks setDailyTaskBar = {setDailyTaskBar} />
      }

    </div>
  )
}

export default App;
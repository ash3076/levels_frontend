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
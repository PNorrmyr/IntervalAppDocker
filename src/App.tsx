import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from './pages/LoadingPage'
import SetTimerPage from './pages/SetTimerPage'
import AnalogTimerPage from './pages/AnalogTimerPage'
import DigitalTimerPage from './pages/DigitalTimerPage'
import AlarmViewPage from './pages/AlarmViewPage'
import PauseViewPage from './pages/PauseViewPage'



function App() {

  return (

    <Routes>
      <Route path='/' element={<LoadingPage/>}/>
      <Route path='/settimer' element={<SetTimerPage/>}/>
      <Route path='/analogtimer' element={<AnalogTimerPage/>}/>
      <Route path='/digitaltimer' element={<DigitalTimerPage/>}/>
      <Route path='/alarmview' element={<AlarmViewPage/>}/>
      <Route path='/pauseview' element={<PauseViewPage/>}/>
      
    </Routes>

  )
}

export default App

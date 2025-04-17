import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx'
// import { Comibine } from './Components/GlobalState/Comibine.jsx'
import { UserCard } from './Components/ArrayPlaying/UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Comibine/> */}
    <UserCard/>
  </StrictMode>,
)

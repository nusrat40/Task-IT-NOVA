import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubscriptionForm from './component/SubscriptionForm'

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
     <SubscriptionForm></SubscriptionForm>
    </div>
  )
}

export default App

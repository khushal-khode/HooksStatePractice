import { useHookstate } from '@hookstate/core'
import React from 'react'
import { countStore } from './store'

export const CounterB = () => {
  // Hooks
  const count = useHookstate(countStore)
  
  // Logic
  const handleDecreement=()=>{
    count.set(p=>p-1)
  }
  return (
    <>
      <button onClick={handleDecreement}>Decreement</button>
    </>
  )
}

import { useHookstate } from '@hookstate/core'
import React from 'react'
import { countStore } from './store'

export const CounterA = () => {
  // Hooks
  const count = useHookstate(countStore)



  // Logic
  const handleIncreement=()=>{
    count.set(p=>p+1)
  }
  return (
    <>
      <button onClick={handleIncreement}>Increement</button>
    </>
  )
}

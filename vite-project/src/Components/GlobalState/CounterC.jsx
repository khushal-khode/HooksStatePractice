import { useHookstate } from '@hookstate/core'
import React from 'react'
import { countStore } from './store'

export const CounterC = () => {
  // Hooks
  const count = useHookstate(countStore)
  // Logic
  const handleReset=()=>{
    count.set((p)=>{
      return 0
    })
  }
  return (
    <>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

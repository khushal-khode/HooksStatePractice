import React from 'react'
import { CounterA } from './CounterA'
import { countStore } from './store'
import { useHookstate } from '@hookstate/core'
import { CounterB } from './CounterB'
import { CounterC } from './CounterC'

export const Comibine = () => {
  // Hooks
  const count = useHookstate(countStore)
  return (
    <>
    {`Display: ${count.get()}`} <br />
      <CounterA/>
      <CounterB/>
      <CounterC/>
    </>
  )
}

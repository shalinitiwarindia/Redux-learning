import React from 'react'
import { useDispatch } from 'react-redux'

// action type (actionTypes.js)
const INCREMENT_COUNTER = "INCREMENT_COUNTER";

// action creator (action.js)
const incrementCounter = () => {
    return { 
        type: INCREMENT_COUNTER
    }
}

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  const handleIncrementCounter = () => {
      const action = incrementCounter()
      dispatch( action )
  }

  return (
    <div>
      <span>{value}</span>
      <button onClick={handleIncrementCounter}>
        Increment counter
      </button>
    </div>
  )
}


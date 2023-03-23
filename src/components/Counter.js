// This component is for the example

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { INCREMENT, DECREMENT } from '../../constants/actionConstants'

export const Counter = () => {
  const number = useSelector((state) => state.count)
  const dispatch = useDispatch()

  // const decrement = () => {
  //   return { type: DECREMENT }
  // }
  // const increment = () => {
  //   return { type: INCREMENT }
  // }
  // const increment10 = (value) => {
  //     return {type: INCREMENT, payload: value}
  // }

  return (
    <>
      {/* <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button> */}
      {/* <button onClick={() => dispatch(increment10(10))}>+ 10</button> */}
      {/* <button onClick={() => dispatch({type: INCREMENT, payload: {}})}>+</button> */}
      <span>count: {number}</span>
      <input type="text" />
    </>
  )
}

export default Counter

// const initialState = {
//     count: 10
// }

// const counerReducer = (state=initialState, action) => {

//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             };

//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             };

//         default:
//             return state;
//     }
// }
// export default counerReducer

// **************************

// const initialState = {
//     count: 10
// }

// const counerReducer = (state=initialState, action) => {

//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             };

//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             };

//         default:
//             return state;
//     }
// }
// export default counerReducer

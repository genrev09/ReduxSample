import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement, multiply2, divide2, reset } from './actions';
 
function CounterWithReduxState(){
const counter = useSelector(state => state.counter);
const dispatch = useDispatch();
 
return(
    <div>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(multiply2())}>*2</button>
        <button onClick={() => dispatch(divide2())}>/2</button>
        <button onClick={() => dispatch(reset())}>R</button>
    </div>
)
    
}
 
export default CounterWithReduxState;
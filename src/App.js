import React from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux';
import { decNumber,incNumber} from "./Actions/index";

const App =()=> {
  const myState=useSelector((state)=> state.changeNumber);
  const dispatch=useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment /Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <a  className='quantity_minus' title='Decrement' onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input type="text" name='quantity_input' value={myState}  />
        <a className='quantity_plus' title='Increment' onClick={ ()=>dispatch( incNumber())}><span>+</span>
        </a>

      </div>
    </div>
    </>
  )
}

export default App
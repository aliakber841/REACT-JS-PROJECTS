import React from 'react';
import data from '../data';
import { CLEAR_LIST,RESET_LIST,REMOVE_ITEM } from './Actions';
import Reducer from './Reducer';
const UseReducer = () => {
  
   
  const defaultState={
    people:data,
}

const [state,dispatch] = React.useReducer(Reducer,defaultState)
  
const removeitem=(id)=>{
  dispatch({type:REMOVE_ITEM,payload:{id}})
//    let newPeople= people.filter((person)=>person.id!==id);
//    setPeople(newPeople);
};
const clearlist=()=>{
    dispatch({type:CLEAR_LIST})
  //  setPeople([])
}
const resetlist=()=>{
  dispatch({type:RESET_LIST})
  //  setPeople(data)
}

  return (
    <div className='reducer-container'>
        {state.people.map((person)=>{
            const {id,name}=person;
            return(
                <div key={id} className='item'> 
                <h4>{name}</h4>
                <button onClick={()=>removeitem(id)}>Remove</button>
                </div>
            );
        })}
        {state.people.length <1 ?(
             <button className='butn' style={{marginTop:"2rem"}} onClick={resetlist}>Reset</button>
        )
         : (<button className='butn' style={{marginTop:"2rem"}} onClick={clearlist}>Clear</button>)}
        
    </div>
   
  )
}

export default UseReducer
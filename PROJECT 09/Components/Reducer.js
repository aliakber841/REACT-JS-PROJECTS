import { CLEAR_LIST,RESET_LIST,REMOVE_ITEM } from './Actions';
import data from '../data';
import React from 'react';

const Reducer=(state,action)=>{
    if(action.type==="CLEAR_LIST"){
      return {...state,people:[]}
    }
    else if(action.type==="RESET_LIST"){
      return {...state,people:data}
    }
    else if(action.type==="REMOVE_ITEM"){
      let newPeople= state.people.filter((person)=>person.id!==action.payload.id);
      return {...state,people:newPeople}
    }
   // return state;
   throw new Error(`No Matching "${action.type}" - action type`)
  }
 
  export default Reducer;
import React from "react";
import {combineReducers} from "redux"

const initialState={
    employees:[]
}

export const addEmployee= (employee)=>{
    return {type:"ADD_EMPLOYEE",payload:employee}
}

export const deleteEmployee =(employeeId)=>{
    return {type:"DELETE_EMPLOYEE",payload:employeeId}
}


export const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ("ADD_EMPLOYEE"):
            return {...state,employees:[...state.employees,action.payload]}
        case ("DELETE_EMPLOYEE"):
            return {...state,employees:state.employees.filter((ele)=>ele.id!=action.payload)}

        default:
            return state;
    }


}
export const rootReducer=()=>combineReducers({
    employees:reducer
})
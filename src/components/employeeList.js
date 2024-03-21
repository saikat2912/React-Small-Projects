import React,{useState} from "react";
import { connect } from "react-redux";
import { addEmployee,deleteEmployee } from "./ReducerConfig";

export const EmployeeList=({employees,addEmployee,deleteEmployee})=>{
    const [newEmployee,setNewEmployee]= React.useState("");

    const handleAddEmployee =(e)=>{
        let name=newEmployee.trim();
        let lastIndex= employees.length==0?0:employees[employees.length-1].id
        addEmployee({lastIndex,name})
        setNewEmployee("");
    }
    return (
        <>
        <div className="employee-list">
            <h1>Employee List</h1>
            <h2>Add Employee</h2>
            <input type="text" value={newEmployee} onChange={(e)=>setNewEmployee(e.target.value)} />
            <button onClick={handleAddEmployee}>Add Employee</button>
            <ul>
            {employees.map((ele,index)=>{
                return(
                <li key={ele.id}>
                    {ele.name}
                    <button onClick={()=>deleteEmployee(ele.id)}>Delete Employee</button>
                </li>)
            })}
            </ul>
        </div>
        </>
    )
 
}

const mapStateToProps =(state)=>{
    return {employees:state.employees.employees}
}

const mapDispatchToProps ={
    addEmployee,
    deleteEmployee
}


export default connect(mapStateToProps,mapDispatchToProps)(EmployeeList)
import React,{useEffect,useState} from "react";

export default function FormPractice(){

    const [userDetail,setUserDetail]= useState({
        "name":"",
        "email":"",
        "city":"",
        "options":"",
        "gender":"",
        "date":""
    })

    return(
        <>
          <div className="main-container">
            <div className="container">
                <div className="form">
                    <div className="form-header">
                        <h1>Fill In Form</h1>
                    </div>
                    <div className="form-elements">
                        <div className="form-element">
                            <label htmlFor="name">Name</label>
                            <input type="text"id="name" value={userDetail.name} onChange={(e)=>setUserDetail((prevValue)=>{return{...prevValue,"name":e.target.value}})}/>
                        </div>
                        <div className="form-element">
                        <label htmlFor="mail">Email</label>
                            <input type="email"id="mail" value={userDetail.email} onChange={(e)=>setUserDetail((prevValue)=>{return{...prevValue,"email":e.target.value}})}/>
                        </div>
                        <div className="form-element">
                        <label htmlFor="city">City</label>
                            
                        </div>
                        <div className="form-element">
                            <label htmlFor=""></label>
                        </div>
                        <div className="form-element">
                            <label htmlFor="Female"></label>
                        <input type="radio" value="Female" name="gender" checked={userDetail.gender==="Female"} onChange={(e)=>setUserDetail(((prevValue)=>{return{...prevValue,"gender":"Female"}}))}/>
                        <label htmlFor="Male"></label>
                        <input type="radio" value="Male" name="gender" checked={userDetail.gender==="Male"} onChange={(e)=>setUserDetail(((prevValue)=>{return{...prevValue,"gender":"Male"}}))}/>
                        <label htmlFor="Other"></label>
                        <input type="radio" value="Other" name="gender" checked={userDetail.gender==="Other"} onChange={(e)=>setUserDetail(((prevValue)=>{return{...prevValue,"gender":"Other"}}))}/>
                           
                        </div>
                        <div className="form-element">
                            date-datepicker
                        </div>

                    </div>
                </div>
            </div>

          </div>
        </>
    )
}
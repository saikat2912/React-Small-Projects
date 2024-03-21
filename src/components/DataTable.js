import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


export default function DataTable(){
    const location= useLocation();
    console.log("the location is ",location.state);
    const [data,setData]= useState(!location.state.postReq? location.state|| []:[]);
    const [error,setError]=  useState("");
  
    const URL=`https://dummyjson.com/products`;
   

   

    useEffect(()=>{
        
        if(location.state.postReq){
            const urlreq=axios.get(URL);

            urlreq.then((res)=>{
            setData(res.data.products);
        })
        .catch((err)=>{
            setError(err);
        })
        }
    },)
    return(
        <>
        {console.log(data)}
       <ul>
        {data.map((ele,index)=>{
                    return(
                        <li>{ele.title}</li>
                    )
                }
            )
        }
        </ul>
        </>
    )
}
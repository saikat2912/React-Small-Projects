import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL=`https://dummyjson.com/products`;

const POST_URL =`https://dummyjson.com/products/add`;

export default function DataList(){
    const [data,setData] = useState([]);
    const [error,setError] = useState("");
    const [title,setTitle] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        
    },[])



    const triggerApi=()=>{
        
        const urlreq=axios.get(URL);

        urlreq.then((res)=>{
        setData(res.data.products);

        
        navigate('/tablePage',{state:res.data.products})
        console.log(data);
    })
    .catch((err)=>{
        setError(err);
    })
    }

    const triggerPost =()=>{
        fetch(POST_URL,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                'title':title
            })
        })
        .then((res)=>{
            console.log(res);
            navigate('/tablePage',{state:{"postReq":true}})
        })
    }
    
    
    return(
        <>
            <h1>Click this button to generate data</h1>
            <button onClick={triggerApi}>Click</button>
            <h2>Enter the product you want to add</h2>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <button onClick={triggerPost}>Post</button>
            

        </>
    )
}
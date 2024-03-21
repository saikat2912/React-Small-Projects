import React,{useState} from "react";

export default function CheckBox(){
    const [checkBox,setCheckBox] = useState({
        "checkbox1":false,
        "checkbox2":false,
        "checkbox3":false,
        "checkbox4":false,
        "checkbox5":false,

    })
    return(
        <>
        <div>
        <input type="checkbox" id="checkAll" checked={checkBox.checkbox1 && checkBox.checkbox2 && checkBox.checkbox3 && checkBox.checkbox4 && checkBox.checkbox5} onChange={()=>setCheckBox({...checkBox,"checkbox1":!checkBox.checkbox1,"checkbox2":!checkBox.checkbox2,"checkbox3":!checkBox.checkbox3,"checkbox4":!checkBox.checkbox4,"checkbox5":!checkBox.checkbox5})} />
        <label htmlFor="checkAll">Check all</label>       
         </div>
        <div>
        <input type="checkbox" id="1" checked={checkBox.checkbox1} onChange={()=>setCheckBox({...checkBox,"checkbox1":!checkBox.checkbox1})} />
        <label htmlFor="1">1</label>
        <input type="checkbox" id="2" checked={checkBox.checkbox2} onChange={()=>setCheckBox({...checkBox,"checkbox2":!checkBox.checkbox2})} />
        <label htmlFor="2">2</label>
        <input type="checkbox" id="3" checked={checkBox.checkbox3} onChange={()=>setCheckBox({...checkBox,"checkbox3":!checkBox.checkbox3})} />
        <label htmlFor="3">3</label>
        <input type="checkbox" id="4" checked={checkBox.checkbox4} onChange={()=>setCheckBox({...checkBox,"checkbox4":!checkBox.checkbox4})} />
        <label htmlFor="4">4</label>
        <input type="checkbox" id="5" checked={checkBox.checkbox5} onChange={()=>setCheckBox({...checkBox,"checkbox5":!checkBox.checkbox5})} />
        <label htmlFor="5">5</label>
        </div>
        </>
    )
}
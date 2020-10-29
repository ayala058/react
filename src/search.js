import React from 'react';
import './search.css'
export default function Search(props){
    let txt;
    function onclick(e){
        txt=e.target.value;

    }
    return <div className="ui action input">
    <input onChange={onclick} type="text" placeholder="Search..." />
    <button onClick={()=>{props.send(txt)}} className="ui icon button"><i aria-hidden="true" className="search icon"></i></button>
  </div>

}
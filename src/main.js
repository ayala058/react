import React from 'react';
import './main.css'
import Search from './search';
import axios from 'axios';
import Img from './img';

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={picture:[]}
    }
    send=(txt)=>{
        console.log(txt);
        axios.get("https://api.unsplash.com/search/photos/?client_id=Sp7CGYIrwI_PlXv7bzGkaHHTWfg3Imker4inxwtx25c&query=" + txt+"&per_page=50" )
   
        // Sp7CGYIrwI_PlXv7bzGkaHHTWfg3Imker4inxwtx25
        .then(succ=>{
            console.log(succ)
        this.setState({picture :succ.data.results})
    console.log("picture",this.state.picture)
})

        .catch(err=>{console.log(err)})
    }
    render(){
        return(<div>
            <h1>what do you want to search??</h1>
            <Search send={this.send}/>
          <div className="container-img">
            {this.state.picture.map((pic, i) => {
                    return   <Img  index={i} pic={pic} key={i}/>
                })}</div >
   
            </div>)
    }
}
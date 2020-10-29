import React from 'react';
import './img.css'
export default class Img extends React.Component{
    constructor(props){
        super(props);
        this.state={spans:0};
        this.myImg=React.createRef();
    }
    componentDidMount(){
        this.myImg.current.addEventListener('load',this.setSpans)
     }
    setSpans=()=>{
        const sp=Math.ceil(this.myImg.current.clientHeight);
        this.setState({spans:sp})
    }
    render(){
        return<img style={{"gridRowEnd":`span ${this.state.spans}`}}  src={this.props.pic.urls.regular} ref={this.myImg} />
    }
}
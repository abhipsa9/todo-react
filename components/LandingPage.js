import React,{Component} from 'react'
import Input from './Input'
import List from './List'
import './style.css'

class LandingPage extends Component{
  constructor(){
    super();
    this.state = {
      Message:"Welcome to Todo",
      Task:[]
      
    }
  }

  onadd = (task)=>{
    this.setState ({
      Task:[...this.state.Task,task]
    })
  }
    render(){
      return(
        <React.Fragment>
          <div class="head">
          <h1>{this.state.Message}</h1>
          </div>
          <Input add = {this.onadd}></Input>
          <List read = {this.state.Task}></List>
        </React.Fragment>
      );
    }
    

}export default LandingPage;


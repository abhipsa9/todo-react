import React,{Component} from 'react'

class Input extends Component{
  constructor(){
    super();
    this.state = {
      Item:""
    }
  }

  update=(e)=>{
    this.setState({
      Item:e.target.value
    })
  }

  render(){
    return(
      <React.Fragment>
      <div className="in">
        <input className="task" type="text" value={this.state.Item} placeholder="add your task" onChange={this.update}/>
        <button className="button"type="button" onClick={()=>this.props.add(this.state.Item)}>Add Me on your List!</button>
      </div> 
      </React.Fragment>
    );
  }

}export default Input;
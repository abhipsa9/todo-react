import React,{Component} from 'react'

class List extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <React.Fragment>
      {this.props.read.map((x)=>{
        return (<li>{x}</li>);
      })}

      </React.Fragment>
    );
  }
  


} 
export default List;


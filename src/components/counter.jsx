import React, {Component} from "react";
import Badge from "react-bootstrap/Badge";


class Counter extends Component{
  // state = {
  //   value : this.props.counter.value ,
  //   // tags : ["tag1", "tag2", "tag3"]
  // }

  // constructor(){
  //   super();
  //   this.handelIncreament = this.handelIncreament.bind(this);  // bind the returend object or function to the current object and reset handeIncreament function
  // }

  // using arrow function here because they do not rebind the this 
  // to the window or global variable, instead they just inhirit it

  // handelIncreament = () => {
  //   this.setState({ value : this.state.value+ 1});
  //   // console.log(this.state.count);
  // }

  render(){

    // Every component has an attirbute called props .. 
    // it is used for sending args to a chiled componente .. they are passed in
      // when calling the component as an html attirbutes. this is the syntax og JSX
      // console.log(this.props);

    // const styleH3 = {
    //   display: 'inline',
  
    // };

    return ( 
      <div> 
      {/* <h3 className="m-2" style={{display: 'inline-block' }}> */}
        <Badge className="fs-4 b-2" bg={this.getBadgeVariant()}>  {this.formatCount()} </Badge>
        {/* </h3> */}

      <button onClick={ () => this.props.onIncreament(this.props.counter)} 
      className="btn btn-success m-2 fs-2"> Increment </button>
      
      <button onClick={ () => this.props.onDelete(this.props.counter.id)} 
      className="btn btn-danger m-2 fs-2"> Delete </button>

      {/* <ul>
        <li> {this.state.tags.map( tag => <li key={tag} > {tag} </li>) } </li>
      </ul> */}
      </div>
    );
  }

  getBadgeVariant(){
    let badgeVariant = this.props.counter.value === 0 ? "primary" : "warning";
    return badgeVariant;
  }

  formatCount(){
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}


export default Counter; 
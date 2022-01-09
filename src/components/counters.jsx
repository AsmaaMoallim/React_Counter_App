import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component{
  
    render(){
        return (
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary m-4 fs-2"> Reset All </button>
            {this.props.counters.map( counter => 
            <Counter 
            onDelete={this.props.onDelete} 
            onIncreament={this.props.onIncreament} 
            key={counter.id} 
            counter={counter}/>)}
        </div>
        );
    }

}

export default Counters; 
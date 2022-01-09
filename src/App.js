import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';
import { render } from '@testing-library/react';

class App extends Component {
    state = {
        counters : [
            { id : 1 , value : 0 },
            { id : 2 , value : 0 },
            { id : 3 , value : 0 },
            { id : 4 , value : 0 }
        ]
    }

    hadelReset = () => {
        const counters = this.state.counters.map(c => {
            c.value =0 ;
            return c;
        });
        this.setState({counters});
    }

    hadelDelete = (counterId) => {
        // console.log(this.state.counters[counterId-1].value)

        const counters = this.state.counters.filter(c => c.id !== counterId);

        this.setState({counters});

        // if(this.state.counters.id == id){
        // }
    }

    hadelIncreament = (counterObj) => {

        // unessary way 
        // const counters = this.state.counters.map(c => {
        //     if (c.id == counterObj.id){
        //         counterObj.value ++;
        //     }
        //     return c;
        // })

        // anotherr way 
        // const counters = [...this.state.counters];
        // const index =  counters.indexOf(counterObj);
        // counters[index].value++;

        // and  another one
        const counters = [...this.state.counters];
        counters[counterObj.id - 1].value++;
        this.setState({counters});
        // counter.value +
    }

  render(){
    return (
    <React.Fragment>
      <NavBar counters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className='container'> 
      <Counters
      counters={this.state.counters}
      onReset={this.hadelReset}
      onDelete={this.hadelDelete} 
      onIncreament={this.hadelIncreament}
            />
      </main>
    </React.Fragment>
  );
  }  ;
  
}

export default App;

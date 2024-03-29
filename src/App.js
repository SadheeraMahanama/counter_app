import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
// import Counter from './components/counter'

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
  };
  
  constructor(){
    super();
    console.log("App-Constructor", this.props);
    // this.state = this.props.something;
  }

  componentDidMount() {
    //Ajax Call
    // this.setState({ movies })
    console.log("App-Mounted")
  }

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	handleDelete = counterId => {
		//  console.log('Event Handler Called',counterId);
		const counters = this.state.counters.filter(c => c.id !== counterId);
		// this.setState({counters:counters});
		this.setState({ counters });
	};

	handleIncrement = counter => {
		// console.log(counter);
    // const counters = [...this.props.counters];
    const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		// console.log(this.state.counters[0]);
		this.setState({ counters });
	};


  handleDecrement = counter => {
		// console.log(counter);
    // const counters = [...this.props.counters];
    const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		// console.log(this.state.counters[0]);
		this.setState({ counters });
	};

	render() {
    console.log("App-Rendered");
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement} 
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;

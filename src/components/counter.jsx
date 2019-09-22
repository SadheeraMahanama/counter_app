// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0
//     // tags: ["tag1", "tag2", "tag3"]
//     // // count: 1
//     // imageUrl: 'https://picsum.photos/200'
//   };

//   // styles = {
//   //     fontSize:  50,
//   //     fontWeight: 'bold'

//   // };

//   // constructor(){
//   //   super();
//   //   // console.log("Constructor", this)
//   //   this.handleIncrement = this.handleIncrement.bind(this);
//   // }

//   handleIncrement = ()  => {
//     // this.state.count++;
//     this.setState({ count : this.state.count+1});
//     // console.log("Increment Clicked", this);
//   }

//   render() {
//     // let classes = this.getBadgeClasses();

//     return (
//       <div>
//         {/* <span>{this.state.count}</span> */}
//         {/* <img src={this.state.imageUrl} alt=""/> */}
//         {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>  */}

//         {/* <span style={{ fontSize: 50 }} className="badge badge-warning m-2">
//           {this.formatCount()}
//         </span> */}

//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button
//           onClick={this.handleIncrement}
//           className="btn btn-secondary btn-sm"
//         >
//           Increment
//         </button>
//         {/* bootstrap badge, margin 2 */}

//         {/* <ul>
//             {this.state.tags.map(tag => <li key={tag  }>{tag}</li>)}
//         </ul> */}
//       </div>
//     );
//   }
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//     // const x = <h1>Zero</h1>
//     // return count === 0 ? x : count;
//   }
// }

// export default Counter;

// ---------------------------------------------------------------

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     // tags: ["tag1", "tag2", "tag3"]
//     tags: []
//   };

//   renderTags(){
//     // if(this.state.tags.length === 0) return null;

//     return <ul>{this.state.tags.map(tag =>  <li key={tag}>{tag}</li>)}</ul>;
//   }

//   render() {
//     return (
//       <div>
//         {this.state.tags.length === 0 && "Please create a new tag!"}
//         {this.renderTags()}
//       </div>
//     );
//   }
// }

// export default Counter;

// --------------------------------------------------------------------------------

import React, { Component } from "react";

class Counter extends Component {
	// state = {
	// 	value: this.props.counter. value
	// };

	// handleIncrement = () => {
	// 	// console.log(product);
	// 	// this.props.value= 0; //make an  error
	// 	this.setState({ value: this.state.value + 1 });
	// };

	// doHandleIncrement = () => {
	//   this.handleIncrement({ id: 1 });
	// };

	// handleDelete = product => {
	//   this.setState({count:this.state.count - 1});
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log("prevProps", prevProps);
	// 	console.log("prevState", prevState);
	// 	if (prevProps.counter.value !== this.props.counter.value) {
	// 		//Ajax call and get new data from the server
	// 	}
	// }

	// componentWillMount() {
	// 	console.log("Counter-Unmount");
	// }

	render() {
		// console.log("Counter-Rendered");

		return (
			<div className="row">
				<div className="col-1">
					{" "}
					<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						className="btn btn-secondary btn-sm"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
					>
						-
					</button>
					<button
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm"
					>
						Delete
					</button>
				</div>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;

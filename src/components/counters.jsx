// import React, { Component } from "react";
// import Counter from "./counter";

// class Counters extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 4 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 }
//     ]
//   };

//   handleDelete = (counterId) => {
//       const counters = this.state.counters.filter(c => c.id !== counterId);
//       this.setState({counters});
//     // console.log("Event Handler Called", counterId );
//   };

//   render() {
//     return (
//       <div>
//         {/* <Counter/>
//             <Counter/>
//             <Counter/>
//             <Counter/> */}
//         {this.state.counters.map(counter => (
//           <Counter
//             key={counter.id}
//             onDelete={this.handleDelete}
//             value={counter.value}
//             id={counter.id}
//             selected={counter.selected}
//           />
//           //    {/* <h4>Counter #{counter.id}</h4> */}
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	}; 
	render() {
		return (
			<div>
				{/* <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}

				{this.state.counters.map(counter => (
					<Counter key={counter.id} value={counter.value} id={counter.id} />
				))}
			</div>
		);
	}
}

export default Counters;

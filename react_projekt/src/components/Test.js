// import React from 'react';

// class Test extends React.Component{
//     constructor(props){
//         super();
//         this.state = {
//             s: props.arg
//         }
//     }

//     btnH = () => {
//         let val = this.state.s;
//         val++;
//         this.setState({s : val})
//     }

//     static getDerivedStateFromProps(props, state){
//         return ({s: props.arg})
//     }

//     componentDidMount(){
//         let val = this.state.s;
//         val++;
//         this.setState({s : val})
//     }

//     render(){
//         return (
//             <div>
//                 {/* <button onClick={this.btnH}>Push</button> */}
//                 {this.state.s}
//             </div>
//         );
//     }
// }

// export default Test;
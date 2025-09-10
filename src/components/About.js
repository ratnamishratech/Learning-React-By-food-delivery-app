//10. this comp is created to showing routers to do this firstly install npm i react-router-dom
// import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>Hello All!</h2>
//              {/*1. this is the way how props passed in functional based comp. */}
//              {/* <User name={"Vish (fun)"} />     */}
//              {/* this is the way how props passed in class based comp by constructor. */}
//              <UserClass name={"Ratna (class)"} location={"Delhi class"}/>
//         </div>
//     );
// };

// 4. above one is functional comp now create class based this for understanding life cycle of React.
// class About extends React.Component {
// or
class About extends Component {
    constructor(props) {
        super(props);

        // console.log("parent const");
    }

    componentDidMount() {
    //   console.log("parent comp did mount");
    }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>Hello All!</h2>
        <UserClass name={"Ratna (class)"} location={"Delhi class"} />
      </div>
    );
  }
}

export default About;
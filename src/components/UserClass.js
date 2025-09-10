import React from "react";

class UserClass extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //       count: 0,
    //       count2: 2,
    //     };  
    // };

    // 3. now i want a button by click this count update
    constructor(props) {
      super(props);
          // this.state = {
          //   count: 0,
          // };
          // console.log("child const");
          // 4. cont...
           this.state = {
              userInfo: {
               name: "dummy",
               location: "default",
               avatar_url: "htp://dummy-pic.com",
              },
          };
      };

   async componentDidMount() {
      // console.log("child comp did mount");
      // 4. after the life cycle now api call by async and await in this like functional comp in useeffect
      const data = await fetch("https://api.github.com/users/ratnamishratech");
      const json = await data.json();

       this.setState({
        userInfo: json,

        // 5. setinterval which not stopped for this kind of things cleanup required.
        componentDidMount(){
          this.timer = setInterval(() => {
            console.log("hey this is setInterval");
          }, 1000);

        }
    });

        console.log(json);
    }
  // 4. this happend after the update cycle 
  componentDidUpdate(){
    console.log("comp did update");
  }
  //4. this happens when we unmounting means unload this page and go to other page used for cleanup.
  componentWillUnmount(){
    // 5. cont...
    clearInterval(this.timer);
     console.log("comp will unmount");
  }

  render() {
    // const {name, location} = this.props;
    // const {count, count2} = this.state;
    // const {count} = this.state;

    // console.log("child render");
//  4.cont..
 const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        {/*<h1>Count: {this.state.count}</h1>
         <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3> */}
        {/* //destructurting */}
         {/* <h1>Count: {count}</h1> */}
         {/* <h1>Count2: {count2}</h1> */}
         {/* <button onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
         }}>Count Inc.</button>
         <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @mishra2002</h4> */}

        {/* 4. cont...  */}
        <img src={avatar_url} alt="User Avatar" width="150" style={{ borderRadius: "50%" }}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

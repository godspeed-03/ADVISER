import React from "react";
import axios from "axios";

import "./index.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {this.fetchAdvice()}
  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      // console.log(response)
      const {advice} = response.data.slip;
      this.setState({advice})

    })
    .catch((err)=>{

    })
  };
  render() {
    return (
      <div className="app h-[100%]  bg-cover bg-center flex justify-center items-center text-center">
        <div className="card w-[50%] h-[30%] bg-slate-200 flex flex-col justify-center items-center p-[2%] rounded-3xl ">
          <h1 className="heading text-2xl flex">
            {this.state.advice}
          </h1>
          <button className="relative flex justify-center items-center cursor-pointer m-2 border-2 rounded-3xl border-blue-500  text-blue-600" onclick ={this.fetchAdvice}>
            <span className="p-1">
              GIVE ME ADVICE !
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

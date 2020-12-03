import React, { Component, useState } from "react"
import '../myStyle.css'

class Mersenne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null,
            output: ""
        };
    }

    mersennePrime = (props) => {
        const num=this.state.num;
        //alert("This is a very slow algorithm");
        var p1 = parseInt(num,10);
        if (p1 > 100)
        {
            this.setState({
                output: "Input is too large! Please use n <= 100 due to computation speed."
            });
            return; 
        }
        p1 = Math.pow(2, p1) -1;
        //alert(String(num))
        for(let i = 2, s = Math.sqrt(p1); i <= s; i++) {
          if(p1 % i === 0){
            this.setState({
                output: "Input is not a mersenne prime!"
            });
            return;
          }
        }
        //alert("done")
        this.setState({
            output: "Input is a mersenne prime!"
        });
        return;
    }

    handleChange = (event) => {
        this.setState({num: event.target.value});
    }

    render() {
        return (
            <div>
                <hr/>
                <p className="output">This is done using Sieve of Eratosthenes algorithm</p>
                <p className="output"> Number being computed: {this.state.num}</p>
                <input className = "input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className ="input" onClick = {this.mersennePrime}>Begin computation</button>
                <p className="output">{this.state.output}</p>
            </div>
        )
    }
}

export default Mersenne
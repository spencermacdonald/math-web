import React, { Component, useState } from "react"
import '../myStyle.css'

class Mersenne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 2,
            output: "Waiting on input..."
        };
    }

    mersennePrime = (props) => {
        const num=this.state.num;
        //alert("This is a very slow algorithm");
        var p1 = num
        //error checking
        if (p1 > 30)
        {
            this.setState({
                output: "Input is too large! Please use n <= 30 due to computational limits."
            });
            return; 
        }

        if(p1 < 2)
        {
            this.setState({
                output: "Please enter an n >= 2."
            });
            return; 
        }
        //computation
        p1 = Math.pow(2, p1) -1;
        for(let i = 2, s = Math.sqrt(p1); i <= s; i++) {
          if(p1 % i === 0){
            this.setState({
                output: String(num)+" is not a mersenne prime!"
            });
            return;
          }
        }
        this.setState({
            output: String(num)+" is a mersenne prime!"
        });
        return;
    }

    handleChange = (event) => {
        this.setState({num: event.target.value});
    }

    render() {
        return (
            <div>
                <p className="output">This is done using Sieve of Eratosthenes algorithm</p>
                <p className="notice"><u>Please note!</u> This algorithm will only accept n less than 31, due to react's computation of numbers.</p>
                <p className="output"> Number being computed: 2<sup>{this.state.num}</sup>-1</p>
                <input className = "input"
                    defaultValue={2}
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange}
                    min="2"
                />
                <button className ="input" onClick = {this.mersennePrime}>Begin computation</button>
                <p className="output">{this.state.output}</p>
            </div>
        )
    }
}

export default Mersenne
import React, { Component, useState } from "react"
import '../myStyle.css'

class MersenneFast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null,
            output: "Waiting on input..."
        };
    }

    mersennePrimeFast = (props) => {
        const num=this.state.num;
        //var p1 = parseInt(num,10);
        var p1 = num
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

        //calculations done here forward

        var p2 = Math.pow(2, p1) -1;
    
        var next = 4 % p2;
        for (let i = 1; i < p1 -1; i++)
        {
            next = (next * next -2)%p2
        }

        if(next === 0)
        {
            this.setState({
                output: String(num)+" is a mersenne prime!"
            });
        } else {
            this.setState({
                output: String(num)+" is not a mersenne prime!"
            });
        }

        //alert("done")
        return;
    }

    handleChange = (event) => {
        this.setState({num: event.target.value});
    }

    render() {
        return (
            <div>
                <hr />
                <p className="output">This is done using Lucas-Lehmer</p>
                <p className="notice"><u>Please note!</u> This algorithm will only accept n less than 31, due to signed 32 bit numbers in the program language.</p>
                <p className="output"> Number being computed: {this.state.num}</p>
                <input className = "input"
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange}
                    min="2"
                />
                <button className ="input" onClick = {this.mersennePrimeFast}>Begin computation</button>
                <p className="output">{this.state.output}</p>
                <hr/>
            </div>
        )
    }
}

export default MersenneFast
import React, { Component, useState } from "react"
import '../myStyle.css'

class MersenneFast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 2,
            output: "Waiting on input..."
        };
    }

    mersennePrimeFast = (props) => {
        const num=this.state.num;
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

        if(Number(p1) === 2)
        {
            this.setState({
                output: String(num)+" is a mersenne prime!"
            });
            return;
        }
        console.log("p1 value is: "+ String(p1))
        //calculations done here forward

        var p2 = Math.pow(2, p1) -1;
        console.log("p2 value is: "+ String(p2))
        var next = 4 % p2
        for (let i = 1; i < p1 -1; i++)
        {
            next = (next * next -2)%p2
        }
        console.log("next value is: "+ String(next))
        if(next === 0)
        {
            this.setState({
                output: String(num)+" is a mersenne prime!"
            });
            return;
        } else {
            this.setState({
                output: String(num)+" is not a mersenne prime!"
            });
            return;
        }
    }

    handleChange = (event) => {
        this.setState({num: event.target.value});
    }

    render() {
        return (
            <div>
                <hr />
                <p className="output">This is done using Lucas-Lehmer</p>
                <p className="notice"><u>Please note!</u> This algorithm will only accept n less than 31, due to react's computation of numbers.</p>
                <p className="output"> Number being computed: 2<sup>{this.state.num}</sup>-1</p>
                <input className = "input"
                    defaultValue= {2}
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
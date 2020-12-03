import React, { Component, useState } from "react"
import '../myStyle.css'

class MersenneFast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null,
            output: ""
        };
    }

    mersennePrimeFast = (props) => {
        const num=this.state.num;
        var p1 = parseInt(num,10);
        if (p1 > 100)
        {
            this.setState({
                output: "Input is too large! Please use n <= 100 due to computation speed."
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
                output: "Input is a mersenne prime!"
            });
        } else {
            this.setState({
                output: "Input is not a mersenne prime!"
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
                <p className="output">This is done using Lucas-Lehmer</p>
                <p className="output"> Number being computed: {this.state.num}</p>
                <input className = "input"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button className ="input" onClick = {this.mersennePrimeFast}>Begin computation</button>
                <p className="output">{this.state.output}</p>
                <hr/>
            </div>
        )
    }
}

export default MersenneFast
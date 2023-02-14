import React, { Component } from 'react'
import './style.css'

export class EVENT_HANDLING_CLASS extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchValue : ''
        }
    }

    handleOnChange = (e) => {
        console.log(e.target.value);

        this.setState({
            searchValue : e.target.value
        }, () => {
            console.log("Inside setState(callback-async) : " + this.state.searchValue)
        })

        console.log("Outside setState(not instant) : " + this.state.searchValue)
        console.log("Outside setState(instant) : " + e.target.value)
        // it's update the value instantly
    }
    
    handleSignUpClick = () =>{
        console.log("sign up is clicked")
    }

    render() {
        const { searchValue } = this.state;
        
        return (
            <div>
                <input type="text" value={searchValue} onChange={this.handleOnChange} />
                <button onClick={this.handleSignUpClick}>Sign Up</button>
                <p>{searchValue}</p>
            </div>
        )
    }
}

export default EVENT_HANDLING_CLASS;
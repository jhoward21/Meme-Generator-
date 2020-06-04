import React, { Component } from "react"

class StatePractice2 extends Component {
    constructor () {
        super ()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let wordDisplay
        if (this.state.isLoggedIn === false) {
            wordDisplay = "out"
        } else {
            wordDisplay = "in"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default StatePractice2
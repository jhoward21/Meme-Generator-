import React, { Component } from "react"

class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            name: "Jermell",
            age: "20",
            login: "in",
            logout:"out",
            isLoggedIn: true
        }
    }
    render () {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old!</h1>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default StatePractice

import React from "react"

function Conditional2 (props) {
    if (props.isLoading === true) {
        return (
            <h1>You're logged in!</h1>
        )
    } else {
        return (
            <h1>Your logged out!</h1>
        )
    }
}


export default Conditional2
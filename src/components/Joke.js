import React from "react"

function Joke (props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none", color:"#b51212"}}>Question: {props.question} </h3>
            <h3 style={{color:"#12b51a"}}>Answer: {props.punchline}</h3>
        </div>
    )
}

export default Joke
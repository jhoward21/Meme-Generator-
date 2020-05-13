import React from "react"

function MainContent() {
        const firstName = "Jermell"
        const lastName = "Howard"
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        const txtcustom = {
            color: "#FF8C00",
            fontSize: "34px"
        }
    return (
        <div>
        <h1>Hello {`${firstName}  ${lastName}`}!</h1>
        <h2 style={txtcustom}>Good {timeOfDay}!</h2>
    </div>
    )
}



export default MainContent
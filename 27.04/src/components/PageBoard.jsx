import React from "react";
import Event from "./Event";


const PageBoard = ({ events }) => {
    return (
        <Event
        name={events.name}
        start={events.time.start}
        end={events.time.end}
        location={events.location}
        speaker={events.speaker} />
    )
}

export default PageBoard

import React from "react";
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import { FaUser } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa'        
import { FaClock } from 'react-icons/fa';
import styled from "styled-components";

const Item = styled.div`
display: flex;
flex-direction: column;
padding: 10px 12px;
background: orange;
border: 2px solid tomato;
  width: 300px;
`

const Names = styled.h2`
color: #000;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 38px; /* 190% */
`

const P = styled.p`
font-size:16px;
font-weight: 500;
`


const Event = ({ name, start, end, location, speaker }) => {
    const startDate = new Date(start);
  const endDate = new Date(end);

  const formattedDate = startDate.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const durationInHours = (endDate - startDate) / (1000 * 60 * 60);

    return (
        <Item>
        <Names>{name}</Names>
        <P><FaMapMarkerAlt />{location}</P>
        <P><FaUser />{speaker}</P>
        <P><FaCalendarAlt /> {formattedDate}</P>
        <P><FaClock /> {durationInHours} Hours</P>
        </Item>
    )
}

export default Event

import React from "react";
import styled from 'styled-components'

const DivCard = styled.div`
background: #3c4043;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;    
height: 100%;
video {
    background-color: #353b48;
    height: 100%;
    width: 100%;
    position: relative;
    object-fit: cover;
    border-radius: 5px;
}
.muted {
    color: #fff;
    right: 10px;
    position: absolute;
    top: 10px;
    background: red;
    border-radius: 50%;
    height: 22px;
    width: 22px !important;
  }
`

export default function Card (props) {
    return <DivCard>{props.children}</DivCard>;
};

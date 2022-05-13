import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faInbox, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import NextMeetsTable from './nextMeetsTable';
import ReactTooltip from 'react-tooltip';
import CalendarMeets from '../calendar/calendar';


const Container = styled.div`
`

const BoardContainer = styled.div`
`

const DataContainer = styled.div`
margin: 0em 0em 0em 2em;
`

const DashBoardButton = styled.div`
font-size: 6em;
background-color: ${props => props.theme.mainBrand};
color: ${props => props.theme.textColor};
&:hover{
    background-color: ${props => props.theme.lightShades};
    color: ${props => props.theme.textColorDark};
    box-shade
}
`

export default function DashBoard() {
    const [route, setRoute] = useState("calendar");
    const changeRoute = (routeName) => {
        setRoute(routeName)
    }
    return <Container className='d-flex flex-row container mt-3'>
        <BoardContainer className='d-flex flex-column w-25'>
            <DashBoardButton onClick={() => changeRoute("mail")} data-tip="Bandeja de Entrada" className='btn my-1 col text-center'>
                <FontAwesomeIcon icon={faInbox} />
            </DashBoardButton>
            <DashBoardButton onClick={() => changeRoute("calendar")} data-tip="Calendario" className='btn my-1 col text-center'>
                <FontAwesomeIcon icon={faCalendarDays} />
            </DashBoardButton>
            <DashBoardButton onClick={() => changeRoute("nextMeets")} data-tip="Reuniones" className='btn my-1 col text-center'>
                <FontAwesomeIcon icon={faFolderOpen} />
            </DashBoardButton>
        </BoardContainer>
        {
            (route === "mail") ? <DataContainer className='container w-75 mt-3' data-aos="flip-left">
                mail
            </DataContainer> :
                (route === "calendar") ? <DataContainer className='container w-75 mt-3' data-aos="flip-up">
                    <CalendarMeets />
                </DataContainer> : <DataContainer className='container w-75 mt-3' data-aos="flip-right">
                    <NextMeetsTable></NextMeetsTable>
                </DataContainer>
        }
        <ReactTooltip />
    </Container>

}
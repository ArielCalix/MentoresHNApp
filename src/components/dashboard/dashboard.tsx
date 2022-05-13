import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faInbox, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import NextMeetsTable from './nextMeetsTable';
import ReactTooltip from 'react-tooltip';
import CalendarMeets from '../calendar/calendar';
import { ContentContainer } from '../shared/contentcontainer/ContentContainer';

const BoardContainer = styled(ContentContainer)`
width: 25%;
`

const DataContainer = styled(ContentContainer)`
width: 75%;
`

const DashBoardButton = styled.button`
font-size: 6em;
background-color: ${props => props.theme.mainBrand};
color: ${props => props.theme.textColor};
&:hover{
    background-color: ${props => props.theme.lightShades};
    color: ${props => props.theme.textColorDark};
}
`

export default function DashBoard() {
    const [route, setRoute] = useState("calendar");
    const changeRoute = (routeName) => {
        setRoute(routeName)
    }
    return <ContentContainer className='d-flex flex-row mt-3'>
        <BoardContainer className='container d-flex flex-column'>
            <DashBoardButton onClick={() => changeRoute("mail")} data-tip="Bandeja de Entrada" className='btn my-1 text-center'>
                <FontAwesomeIcon icon={faInbox} />
            </DashBoardButton>
            <DashBoardButton onClick={() => changeRoute("calendar")} data-tip="Calendario" className='btn my-1 text-center'>
                <FontAwesomeIcon icon={faCalendarDays} />
            </DashBoardButton>
            <DashBoardButton onClick={() => changeRoute("nextMeets")} data-tip="Reuniones" className='btn my-1 text-center'>
                <FontAwesomeIcon icon={faFolderOpen} />
            </DashBoardButton>
        </BoardContainer>
        {
            (route === "mail") ? <DataContainer className='container mt-3' data-aos="flip-up">
                mail
            </DataContainer> :
                (route === "calendar") ? <DataContainer className='container mt-3' data-aos="flip-up">
                    <CalendarMeets />
                </DataContainer> : <DataContainer className='container mt-3' data-aos="flip-up">
                    <NextMeetsTable></NextMeetsTable>
                </DataContainer>
        }
        <ReactTooltip />
    </ContentContainer>

}
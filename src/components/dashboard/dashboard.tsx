import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faInbox, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import NextMeetsTable from './nextMeetsTable';
import ReactTooltip from 'react-tooltip';


const Container = styled.div`
`

const BoardContainer = styled.div`
`

const NextMeetsContainer = styled.div`
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
    return <Container className='container w-100 mt-5 '>
        <BoardContainer className='row'>
            <DashBoardButton data-tip="Bandeja de Entrada" className='btn mx-1 col text-center'>
                <FontAwesomeIcon icon={faInbox} />
            </DashBoardButton>
            <DashBoardButton data-tip="Calendario" className='btn mx-1 col text-center'>
                <FontAwesomeIcon icon={faCalendarDays} />
            </DashBoardButton>
            <DashBoardButton data-tip="Reuniones" className='btn mx-1 col text-center'>
                <FontAwesomeIcon icon={faFolderOpen} />
            </DashBoardButton>
        </BoardContainer>
        <NextMeetsContainer className='container w-100 mt-5'>
            <NextMeetsTable></NextMeetsTable>
        </NextMeetsContainer>
        <ReactTooltip />
    </Container>

}
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Table = styled.table`

`

const MeetLink = styled.a`
color: ${props => props.theme.textColorDark};
&:hover {
    color: ${props => props.theme.darkAccent};
}
`

const data = [
    {
        "Orden": "1",
        "Clase": "Matematicas",
        "Mentor": "Mark Otto",
        "Hora": "05:00 p.m.",
        "Enlace": "/meet?id=mdo&userName=Ariel"
    }, {
        "Orden": "2",
        "Clase": "Matematicas",
        "Mentor": "Mark Otto",
        "Hora": "05:00 p.m.",
        "Enlace": "/meet?id=mdo&userName=Ariel"
    }, {
        "Orden": "3",
        "Clase": "Matematicas",
        "Mentor": "Mark Otto",
        "Hora": "05:00 p.m.",
        "Enlace": "/meet?id=mdo&userName=Ariel"
    },
]

export default function NextMeetsTable() {
    return <Table className='table table-striped table-hover'>
        <thead>
            <tr>
                <th scope="col">Orden</th>
                <th scope="col">Clase</th>
                <th scope="col">Mentor</th>
                <th scope="col">Hora</th>
                <th scope="col">Enlace</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map(item => {
                return <tr>
                    <th className='col-1' scope="row">{item.Orden}</th>
                    <td className='col-3'>{item.Clase}</td>
                    <td className='col-4'>{item.Mentor}</td>
                    <td className='col-3'>{item.Hora}</td>
                    <td className='col-1 text-center'><MeetLink href={item.Enlace}><FontAwesomeIcon icon={faUsers} /></MeetLink></td>
                </tr>
            })
            }
        </tbody>
    </Table>
}
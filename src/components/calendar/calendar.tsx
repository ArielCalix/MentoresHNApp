import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import "@fullcalendar/daygrid/main.css";

const CalendarContainer = styled.div`

.event {
    background-color: ${props => props.theme.mainBrand};
    color: ${props => props.theme.textColor};
}
.days {
    .fc-daygrid-day-number {
        color: ${props => props.theme.textColorDark};    
    }
    background-color: ${props => props.theme.lightShades};
    color: ${props => props.theme.textColorDark};
}
.day-header {
    background-color: ${props => props.theme.mainBrand};
    color: ${props => props.theme.textColor};
    font-weight: 600;
}
`

export default function CalendarMeets() {
    const events = [{ title: "today's event", date: new Date() }];
    const handleEventDrop = () => {

    }
    const handleEventClick = () => {

    }
    return <CalendarContainer>
        <FullCalendar
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth, dayGridDay'
            }}
            plugins={[dayGridPlugin, interactionPlugin]}
            editable={true}
            eventDrop={handleEventDrop}
            eventClick={handleEventClick}
            events={events}
            initialView='dayGridMonth' dayHeaderClassNames="day-header"
            viewClassNames="views" allDayClassNames="days" eventClassNames="event" dayCellClassNames="days"
            slotLaneClassNames="day-header" slotLabelClassNames="day-header" nowIndicatorClassNames="event" />
    </CalendarContainer>
}
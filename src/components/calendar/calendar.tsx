import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';
import addHours from 'date-fns/addHours';
import startOfHour from 'date-fns/startOfHour';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// require('globalize/lib/cultures/globalize.culture.es');
//TODO: Refactorizar el componente y terminar configuracion de calendario.
const lang = {
    es: {
        week: 'Semanal',
        work_week: 'Semana de trabajo',
        day: 'Día',
        month: 'Mes',
        previous: 'Anterior',
        next: 'Siguiente',
        today: 'Hoy',
        agenda: 'Agenda Diaria',

        showMore: (total) => `+${total} más`,
    },
}

const CalendarContainer = styled.div`
font-family: "Roboto", san-serif;
.hide-button { display: none; }
.rbc-toolbar {
    background-color: ${props => props.theme.mainBrand};
    .rbc-btn-group > button {
        border-radius: 1px;
        color: ${props => props.theme.textColor};
        &.rbc-active {
            color: ${props => props.theme.textColorDark};
            background-color: ${props => props.theme.mainBrandAlternative};
        }
        &:hover {
            background-color: ${props => props.theme.mainBrandAlternative};
            color: ${props => props.theme.textColorDark};
        }
    }
    .rbc-toolbar-label {
        color: ${props => props.theme.textColor};
    }
}
.rbc-month-view, .rbc-time-view, .rbc-agenda-view {
    .rbc-time-header > .rbc-time-header-content > .rbc-time-header-cell > .rbc-today, .rbc-time-header > .rbc-time-header-content > .rbc-allday-cell > .rbc-row-bg > .rbc-today, .rbc-time-content > .rbc-today  {
        background-color: ${props => props.theme.mainBrandTransparent};
    }
    .rbc-time-content > .rbc-today > .rbc-current-time-indicator {
        background-color: ${props => props.theme.mainBrand};
        height: 0.12em;
    }
    .rbc-month-row > .rbc-row-bg > .rbc-day-bg, .rbc-month-row, .rbc-time-content {
        & > .rbc-today, &.rbc-today {
            background-color: ${props => props.theme.mainBrandTransparent};
        }
        .rbc-row-content > .rbc-row > .rbc-row-segment > .rbc-event, .rbc-event {
            border-radius: 0;
            background-color: ${props => props.theme.mainBrandAlternative};
            color: ${props => props.theme.textColorDark};
            &:hover{
                background-color: ${props => props.theme.mainBrand};
                color: ${props => props.theme.textColorAlternative};
            }
            .rbc-event-label {
                display:none;
            }
            .rbc-event-content {
                font-weight: 500;
            }
        }
        .rbc-event {
            border: none;
        }
        .rbc-today > .rbc-events-container {
            margin:0;
        }
    }
    .rbc-month-header, .rbc-time-header, .rbc-agenda-table {
        .rbc-header, .rbc-time-header-cell > .rbc-header, .rbc-header {
            font-weight: 500;
        }
    }
}
`

export default function CalendarMeets() {
    const [culture, setCulture] = useState('es')
    const locales = {
        'es': es,
    }
    const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
    const now = new Date()
    const start = endOfHour(now)
    const end = addHours(start, 2)
    // const events = [{ title: "today's event", date: new Date() }];
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })
    const [events, setEvents] = useState<Event[]>([
        {
            title: 'Learn cool stuff',
            start,
            end,
        },
    ])
    const setData = () => {
        setEvents(["undefined"])
        setCulture("undefined")
    }
    const { messages } = useMemo(
        () => ({
            defaultDate: new Date(2015, 3, 1),
            messages: lang[culture],
        }), [culture]
    )
    return <CalendarContainer>
        <Calendar
            culture={es}
            events={events}
            localizer={localizer}
            showMultiDayTimes
            dayLayoutAlgorithm="no-overlap"
            step={60}
            views={["month", "week", "agenda"]}
            style={{ height: '78vh' }}
            messages={messages}
        />
        <button className='hide-button' onClick={setData}></button>
    </CalendarContainer>
}
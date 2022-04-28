import React from "react";
import styled from 'styled-components';
import PureCounter from '@srexi/purecounterjs'
import { useEffect } from "react";
new PureCounter()

const FactsContents = {
    FactsDescription: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.",
    Facts: [
        {
            FactsTitle: "Alumnos Satisfechos",
            FactsDescription: "por clase",
            FactsValue: "400"
        },
        {
            FactsTitle: "Clases impartidas",
            FactsDescription: "por materia",
            FactsValue: "45"
        },
        {
            FactsTitle: "Horas clase",
            FactsDescription: "impartidas",
            FactsValue: "200"
        },
    ]

}

const Content = styled.div``
const CountBox = styled.div``

const FactsSection = styled.section`
padding-bottom: 30px;
overflow: hidden;
${Content} {
    ${CountBox} {
        padding: 30px;
        width: 100%;
        i {
            display: block;
            font-size: 44px;
            color: ${props => props.theme.textColorDark};
            float: left;
            line-height: 0;
        }
        span {
            font-size: 48px;
            line-height: 40px;
            display: block;
            font-weight: 700;
            color: ${props => props.theme.textColorDark};
            margin-left: 60px;
        }
        p {
            padding: 15px 0 0 0;
            margin: 0 0 0 60px;
            font-family: "Raleway", sans-serif;
            font-size: 14px;
            color: ${props => props.theme.textColorDark};
        }
        a {
            font-weight: 600;
            display: block;
            margin-top: 20px;
            color: ${props => props.theme.textColorDark};
            font-size: 15px;
            font-family: "Poppins", sans-serif;
            transition: ease-in-out 0.3s;
        }
        a:hover {
            color: ${props => props.theme.textColorDark};
        }
    }
}
`

export default function Facts({ TrainerId }) {
    useEffect(() => {
        new PureCounter();
    })
    const facts = FactsContents.Facts.map((fact, index) => {
        return <div key={index} className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <CountBox>
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end={fact.FactsValue}
                    className="purecounter"></span>
                <p><strong>{fact.FactsTitle}</strong> {fact.FactsDescription}</p>
            </CountBox>
        </div>
    });
    return <FactsSection id="facts" className="section section-bg">
        <div className="container">

            <div className="header-section">
                <h2>Logros</h2>
                <p>{FactsContents.FactsDescription}</p>
            </div>

            <Content className="body-section row no-gutters">
                {facts}
            </Content>

        </div>
    </FactsSection>
}
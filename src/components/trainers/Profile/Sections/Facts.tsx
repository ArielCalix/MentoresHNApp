import React from "react";
import styled from 'styled-components';

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

export default function Facts() {
    return <FactsSection id="facts" className="section section-bg">
        <div className="container">

            <div className="header-section">
                <h2>Facts</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <Content className="body-section row no-gutters">
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                    <CountBox>
                        <i className="bi bi-emoji-smile"></i>
                        <span data-purecounter-start="0" data-purecounter-end="232"
                            className="purecounter"></span>
                        <p><strong>Happy Clients</strong> consequuntur quae</p>
                    </CountBox>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                    <CountBox className="count-box">
                        <i className="bi bi-journal-richtext"></i>
                        <span data-purecounter-start="0" data-purecounter-end="521"
                            className="purecounter"></span>
                        <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                    </CountBox>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                    <CountBox className="count-box">
                        <i className="bi bi-headset"></i>
                        <span data-purecounter-start="0" data-purecounter-end="1453"
                            className="purecounter"></span>
                        <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                    </CountBox>
                </div>

                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                    <CountBox className="count-box">
                        <i className="bi bi-people"></i>
                        <span className="purecounter" data-purecounter-start="0"
                            data-purecounter-end="950"
                        ></span>
                        <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                    </CountBox>
                </div>

            </Content>

        </div>
    </FactsSection>
}
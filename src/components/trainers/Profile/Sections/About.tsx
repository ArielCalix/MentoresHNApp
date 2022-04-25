import React from "react";
import styled from 'styled-components';
import bg from "../../../../assets/img/hero-bg.jpg";

const Content = styled.div``

const AboutSection = styled.section`
padding: 60px 0;
overflow: hidden;

${Content} {
    &.content h3 {
        font-weight: 700;
        font-size: 26px;
        color: ${props => props.theme.textColorDark};
    }
    &.content ul {
        list-style: none;
        padding: 0;
    }
    &.content ul li {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }
    &.content ul strong {
        margin-right: 10px;
    }
    &.content ul i {
        font-size: 16px;
        margin-right: 5px;
        color: ${props => props.theme.textColorDark};
        line-height: 0;
    }
    &.content p:last-child {
        margin-bottom: 0;
    }
}
`

export default function About() {
    return <AboutSection id="about" className="section">
        <div className="container">
            <div className="header-section">
                <h2>About</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="body-section row">
                <div className="col-lg-4" data-aos="fade-right">
                    <img src={bg} className="img-fluid" alt="" />
                </div>
                <Content id="about" className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>UI/UX Designer &amp; Web Developer.</h3>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                        magna aliqua.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span>
                                </li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et
                        ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                        Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                    </p>
                </Content>
            </div>

        </div>
    </AboutSection>
}
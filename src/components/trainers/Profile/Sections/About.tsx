import React from "react";
import styled from 'styled-components';

const AboutContent = { "About": "Provident et velit porro eligendi vel molestiae culpa sint rerum. Et magni illo qui aspernatur laboriosam quia eum dolores nisi. Sunt temporibus sit occaecati corporis non doloribus at sequi possimus. Et explicabo cupiditate quam iusto. Id odit magni est hic dolor asperiores qui quia.", "JobTitle": "Dynamic Accounts Supervisor", "JobTitleDesription": "Central", "BirthDate": "28/10/1991", "WebSite": "https://fiona.name", "City": "East Damarisbury", "Age": 29627, "Degree": "Accountability", "Status": true, "JobDescription": "Odit amet at reiciendis recusandae deleniti dolorum saepe eum dolor. Nulla itaque ea corporis modi saepe itaque quidem. Nisi possimus in unde sequi labore magnam et provident et. Maxime provident suscipit dicta rerum ex qui molestias eos quo. Natus minima qui omnis unde.", "ImageProfileBackground": "http://placeimg.com/640/480/city", "id": "1", "TrainersProfileId": "1" }

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

export default function About({ TrainerId }) {
    return <AboutSection id="about" className="section">
        <div className="container">
            <div className="header-section">
                <h2>Sobre mí</h2>
                <p>{AboutContent.About}</p>
            </div>

            <div className="body-section row">
                <div className="col-lg-4" data-aos="fade-right">
                    <img src={AboutContent.ImageProfileBackground} className="img-fluid" alt="" />
                </div>
                <Content id="about" className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>{AboutContent.JobTitle}</h3>
                    <p className="fst-italic">{AboutContent.JobDescription}</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{AboutContent.BirthDate}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{AboutContent.WebSite}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{AboutContent.City}</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{AboutContent.Age}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{AboutContent.Degree}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{AboutContent.Status}</span></li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        {AboutContent.JobDescription}
                    </p>
                </Content>
            </div>

        </div>
    </AboutSection>
}
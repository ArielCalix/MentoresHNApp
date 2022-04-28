import styled from "styled-components"

const ResumeContent = { "Resume": "Eveniet ratione perspiciatis est. Aut non est voluptas. Odit quos rerum praesentium ut ratione facere quibusdam.", "Bio": "Quis repellat magni eum. Distinctio atque aliquam animi dolores sapiente corrupti qui. Officiis perferendis dolores dolor unde neque unde cumque. Maxime natus quis molestiae enim nihil quibusdam repellendus.", "TrainerEducation": [{ "Degree": "Master of Fine Arts Graphic Design", "Date": "2015 - 2016", "Institute": "Rochester Institute of Technology, Rochester, NY", "Description": "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend" }, { "Degree": "Bachelor of Fine Arts &amp; Graphic Design", "Date": "2010 - 2014", "Institute": "Rochester Institute of Technology, Rochester, NY", "Description": "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila" }], "TrainerExperience": [{ "Title": "Senior graphic design specialist", "Date": "2019 - Present", "Address": "Experion, New York, NY", "Roles": ["Lead in the design, development, and implementation of the graphic, layout, and production communication materials", "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.", "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design", "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000"] }, { "Title": "Graphic design specialist", "Date": "2017 - 2018", "Address": "Stepping Stone Advertising, New York, NY", "Roles": ["Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).", "Managed up to 5 projects or tasks at a given time while under pressure", "Recommended and consulted with clients on the most appropriate graphic design", "Created 4+ design presentations and proposals a month for clients and account managers"] }], "id": "1" }

const ResumeSection = styled.section`
.resume-title {
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${props => props.theme.textColorDark};
}
.resume-item {
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid ${props => props.theme.lightAccentTransparent};
    position: relative;
}
.resume-item h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: ${props => props.theme.textColorDark};
    margin-bottom: 10px;
}
.resume-item h5 {
    font-size: 16px;
    background: ${props => props.theme.lightShades};
    padding: 5px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
}
.resume-item ul {
    padding-left: 20px;
}
.resume-item ul li {
    padding-bottom: 10px;
}
.resume-item:last-child {
    padding-bottom: 0;
}
.resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: ${props => props.theme.lightShades};
    border: 2px solid ${props => props.theme.lightAccentTransparent};
}
`

export default function Resume({ TrainerId, TrainerName }) {
    const experience = ResumeContent.TrainerExperience.map((experience, key) => {
        return <div key={key} className="resume-item">
            <h4>{experience.Title}</h4>
            <h5>{experience.Date}</h5>
            <p><em>{experience.Address}</em></p>
            <ul>
                {experience.Roles.map((role, index) => {
                    return <li key={index}>{role}</li>
                })}
            </ul>
        </div>
    })
    const education = ResumeContent.TrainerEducation.map((education, index) => {
        return <div key={index} className="resume-item">
            <h4>{education.Degree}</h4>
            <h5>{education.Date}</h5>
            <p><em>{education.Institute}</em></p>
            <p>{education.Description}</p>
        </div>
    })
    return <ResumeSection id="resume" className="section section-bg">
        <div className="container">

            <div className="header-section">
                <h2>Hoja de Vida</h2>
                <p>{ResumeContent.Resume}</p>
            </div>

            <div className="body-section row">
                <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                        <h4>{TrainerName}</h4>
                        <p><em>{ResumeContent.Bio}</em></p>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    {education}
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Professional Experience</h3>
                    {experience}
                </div>
            </div>

        </div>
    </ResumeSection>
}
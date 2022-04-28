import styled from 'styled-components';

const SkillsContent = {
    SkillsDescription: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.",
    Skills: [
        {
            "SkillName": "HTML",
            "SkillValue": "100"
        },
        {
            "SkillName": "CSS",
            "SkillValue": "90"
        },
        {
            "SkillName": "JavaScript",
            "SkillValue": "75"
        },
        {
            "SkillName": "PHP",
            "SkillValue": "80"
        },
        {
            "SkillName": "WordPress / CMS",
            "SkillValue": "90"
        },
        {
            "SkillName": "Photoshop",
            "SkillValue": "75"
        }
    ]
}
const Content = styled.div``
const Progress = styled.div``

const SkillsSection = styled.section`
    ${Progress} {
        height: 60px;
        display: block;
        background: none;
        border-radius: 0;
        &.skill {
            padding: 0;
            margin: 0 0 6px 0;
            text-transform: uppercase;
            display: block;
            font-weight: 600;
            font-family: "Poppins", sans-serif;
            color: ${props => props.theme.textColorDark};
            .val {
                float: right;
                font-style: normal;
            }
        }
        .progress-bar-wrap {
            background: ${props => props.theme.lightAccent};
            height: 10px;
        }
        .progress-bar {
            width: 1px;
            height: 10px;
            transition: 0.9s;
            background-color: ${props => props.theme.darkAccent};
        }
    }
`

function SkillsMap(skills) {
    const skillsContent = skills.map((skill, index) => {
        return <Progress>
            <span className="skill">{skill.SkillName} <i className="val">{skill.SkillValue}%</i></span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" data-role="progressbar" data-aria-valuenow={skill.SkillValue} data-aria-valuemin="0" data-aria-valuemax="100">
                </div>
            </div>
        </Progress>
    })
    return skillsContent
}

export default function Skills({ TrainerId }) {
    const finish = (SkillsContent.Skills.length / 2)
    const skillsLeft = SkillsContent.Skills.slice(0, finish)
    const skillsRight = SkillsContent.Skills.slice(finish, SkillsContent.Skills.length)
    const left = SkillsMap(skillsLeft)
    const right = SkillsMap(skillsRight)
    return <SkillsSection id="skills" className="section">
        <div className="container">
            <div className="header-section">
                <h2>Habilidades</h2>
                <p>{SkillsContent.SkillsDescription}</p>
            </div>

            <Content className="row body-section">
                <div className="col-lg-6" data-aos="fade-up">
                    {left}
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    {right}
                </div>
            </Content>
        </div>
    </SkillsSection>
}
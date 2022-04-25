import styled from 'styled-components';

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

export default function Skills() {
    return <SkillsSection id="skills" className="section">
        <div className="container">

            <div className="header-section">
                <h2>Skills</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <Content className="row body-section">

                <div className="col-lg-6" data-aos="fade-up">

                    <Progress>
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="100" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                    <Progress>
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="90" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                    <Progress>
                        <span className="skill">JavaScript <i className="val">75%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="75" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                    <Progress>
                        <span className="skill">PHP <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="80" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                    <Progress>
                        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="90" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                    <Progress>
                        <span className="skill">Photoshop <i className="val">55%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" data-role="progressbar" data-aria-valuenow="55" data-aria-valuemin="0" data-aria-valuemax="100">
                            </div>
                        </div>
                    </Progress>

                </div>

            </Content>

        </div>
    </SkillsSection>
}
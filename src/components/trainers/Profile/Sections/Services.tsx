import styled from "styled-components"

const Content = styled.div``
const ServicesSection = styled.section`
&.icon-box {
  margin-bottom: 20px;
}
${Content} {
    .icon {
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 54px;
        height: 54px;
        background: ${props => props.theme.mainBrand};
        border-radius: 50%;
        transition: 0.5s;
        border: 1px solid ${props => props.theme.lightShades};
        i {
            color: ${props => props.theme.textColor};
            font-size: 24px;
            line-height: 0;
        }
    }
    .title {
        margin-left: 80px;
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 18px;
        a {
            color: ${props => props.theme.textColorDark};
        }
        a:hover {
            color: ${props => props.theme.textColorDark};
        }
    }
    .description {
        margin-left: 80px;
        line-height: 24px;
        font-size: 14px;
    }
}
.icon-box:hover .icon {
    background: ${props => props.theme.mainBrandTransparent};
}
.icon-box:hover .icon i {
    color: ${props => props.theme.textColor};
}
`

export default function Services() {
    return <ServicesSection id="services" className="section">
        <div className="container">

            <div className="header-section">
                <h2>Services</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="body-section row">
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                    <div className="icon"><i className="bi bi-briefcase"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident</p>
                </Content>
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i className="bi bi-card-checklist"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat tarad limino ata</p>
                </Content>
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i className="bi bi-bar-chart"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pdata-ariatur</p>
                </Content>
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><i className="bi bi-binoculars"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum</p>
                </Content>
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><i className="bi bi-brightness-high"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Nemo Enim</a></h4>
                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque</p>
                </Content>
                <Content className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                    <div className="icon"><i className="bi bi-calendar4-week"></i></div>
                    <h4 className="title"><a href="https://www.google.com">Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                        soluta nobis est eligendi</p>
                </Content>
            </div>

        </div>
    </ServicesSection>
}
import styled from "styled-components"

const ServicesContent = {
    ServicesDescription: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.",
    Services: [
        {
            Title: "Lorem Ipsum",
            Description: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
            Icon: "bi-briefcase"
        },
        {
            Title: "Dolor Sitema",
            Description: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
            Icon: "bi-card-checklist"
        },
        {
            Title: "Sed ut perspiciatis",
            Description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pdata- ariatur",
            Icon: "bi-bar-chart"
        },
        {
            Title: "Magni Dolores",
            Description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            Icon: "bi-binoculars"
        },
        {
            Title: "Nemo Enim",
            Description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
            Icon: "bi-brightness-high"
        },
        {
            Title: "Eiusmod Tempor",
            Description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
            Icon: "bi-calendar4-week"
        }
    ]
}

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

export default function Services({ TrainerId }) {
    const services = ServicesContent.Services.map((service, index) => {
        return <Content key={index} className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className={`bi ${service.Icon}`}></i></div>
            <h4 className="title"><a href="https://www.google.com">{service.Title}</a></h4>
            <p className="description">{service.Description}</p>
        </Content>
    })
    return <ServicesSection id="services" className="section">
        <div className="container">

            <div className="header-section">
                <h2>Servicios</h2>
                <p>{ServicesContent.ServicesDescription}</p>
            </div>
            <div className="body-section row">
                {services}
            </div>
        </div>
    </ServicesSection>
}
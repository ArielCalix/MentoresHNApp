import styled from 'styled-components'

const UnorderedList = styled.ul`
border: 0;
`

const Header3 = styled.h3`
font-size: 26px;
font-weight: 600;
margin-bottom: 20px;
color: ${props => props.theme.textColorDark};
`

const Paragraph = styled.p`
color: ${props => props.theme.textColorDark};
&:last-child {
    margin-bottom: 0;
}
`

const Link = styled.a`
&.nav-link {
    border: 0;
    padding: 12px 15px 12px 0;
    transition: 0.3s;
    color: ${props => props.theme.textColorDark};
    border-radius: 0;
    border-right: 2px solid ${props => props.theme.lightAccent};
    font-weight: 600;
    font-size: 15px;
}
&.nav-link:hover {
    color: ${props => props.theme.textColorDark};
}
&.nav-link.active {
    color: ${props => props.theme.textColorDark};
    border-color: ${props => props.theme.mainBrand};
}
`

const Tab = styled.div`
&.tab-pane.active {
    -webkit-animation: fadeIn 0.5s ease-out;
    animation: fadeIn 0.5s ease-out;
}
`

export const TabPane = ({ isActive, tabId, Title, SubTitle, Description, ImageInfo }) => {
    const active = isActive ? "active" : "";
    return <Tab className={`tab-pane ${active}`} id={`tab-${tabId}`}>
        <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
                <Header3>{Title}</Header3>
                <Paragraph className="fst-italic">{SubTitle}</Paragraph>
                <Paragraph>{Description}</Paragraph>
            </div>
            <div className="col-lg-4 text-center order-1 order-lg-2">
                <img src={ImageInfo.Tab} alt={ImageInfo.Alt} className="img-fluid" />
            </div>
        </div>
    </Tab>
}

export const CourseDetailsTab = ({ Tabs, Panes }) => {
    const tabs = Tabs.map((tab, index) => {
        const active = index === 0 ? "active" : ""
        return <li className="nav-item">
            <Link className={`nav-link ${active}`} data-bs-toggle="tab" href={`#tab-${index + 1}`}>{tab}</Link>
        </li>
    })
    const panes = Panes.map((pane, index) => {
        return <TabPane isActive={index === 0 ? true : false} tabId={index + 1} Title={pane.Title} SubTitle={pane.SubTitle} Description={pane.Description} ImageInfo={pane.ImageInformation} />
    });
    return <div className="container" data-aos="fade-up">
        <div className="row">
            <div className="col-lg-3">
                <UnorderedList className="nav nav-tabs flex-column">
                    {tabs}
                </UnorderedList>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                    {panes}
                </div>
            </div>
        </div>
    </div>
}
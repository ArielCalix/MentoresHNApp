import styled from "styled-components";

const Header3 = styled.h3`
    font-size: 24px;
    margin: 30px 0 15px 0;
    font-weight: 700;
    position: relative;
    padding-bottom: 10px;
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        background: ${props => props.theme.lightAccent};
        bottom: 0;
        left: 0;
    }
    &:after{
        content: "";
        position: absolute;
        display: block;
        width: 60px;
        height: 1px;
        background: ${props => props.theme.mainBrand};
        bottom: 0;
        left: 0;
    }`
const Header5 = styled.h5`
font-weight: 400;
font-size: 16px;
margin: 0;
font-family: "Poppins", sans-serif;`
const Paragraph = styled.p`
margin: 0;
font-weight: 600;
`
const Link = styled.a`
color: ${props => props.theme.textColorDark};
`
const Container = styled.div`
background: ${props => props.theme.lightShades};
padding: 10px 15px;
margin-bottom: 15px;
`

export const CourseInfo = ({ CourseData }) => {
    return <div className="col-lg-4">
        <Container className="d-flex justify-content-between align-items-center">
            <Header5>Trainer</Header5>
            <Paragraph>
                <Link href={CourseData.Trainer.TrainerLink}>{CourseData.Trainer.TrainerName}</Link>
            </Paragraph>
        </Container>
        <Container className="d-flex justify-content-between align-items-center">
            <Header5>Course Fee</Header5>
            <Paragraph>{CourseData.CourseFee}</Paragraph>
        </Container>
        <Container className="d-flex justify-content-between align-items-center">
            <Header5>Available Seats</Header5>
            <Paragraph>{CourseData.AvailableSeats}</Paragraph>
        </Container>
        <Container className="d-flex justify-content-between align-items-center">
            <Header5>Schedule</Header5>
            <Paragraph>{CourseData.Schedule}</Paragraph>
        </Container>
    </div>
}

export const CourseDetails = ({ CourseTitle, CourseImage, CourseDescription }) => {
    return <div className="col-lg-8">
        <img src={CourseImage} className="img-fluid" alt="" />
        <Header3>{CourseTitle}</Header3>
        <p>{CourseDescription}</p>
    </div>
}
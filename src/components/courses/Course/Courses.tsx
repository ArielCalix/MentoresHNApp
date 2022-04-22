import styled from 'styled-components';

export const CourseContent = styled.div``;

const TitleCategory = styled.h4``;
const Price = styled.p``;

const CourseName = styled.h3``;
const CourseDescription = styled.p``;
const CourseLink = styled.a``;

export const CourseCategoryPrice = ({ className, Title, CoursePrice }) => {
    return <div className={className}>
        <TitleCategory>{Title}</TitleCategory>
        <Price>{CoursePrice}</Price>
    </div>
}

export const CourseTitleDescription = ({ To, Title, Description }) => {
    return <div>
        <CourseName><CourseLink href={To}>{Title}</CourseLink></CourseName>
        <CourseDescription>{Description}</CourseDescription>
    </div>
}

export const CourseContainer = styled.div`
border-radius: 5px;
border: 1px solid ${props => props.theme.lightAccent};
${CourseContent} {
    padding: 15px;
}
${TitleCategory} {
    font-size: 14px;
    background: ${props => props.theme.mainBrand};
    padding: 7px 14px;
    color: ${props => props.theme.textColor};
    margin: 0;
}
${Price} {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.theme.textColorDark};
}
${CourseName} {
    font-weight: 700;
    font-size: 20px;
    ${CourseLink} {
        color: ${props => props.theme.textColorDark};
        transition: 0.3s;
        text-decoration: none;
        &:hover {
            text-decoration: none;
            color: ${props => props.theme.textColorDark};
        }
    }
}
${CourseDescription} {
    font-size: 14px;
    color: ${props => props.theme.textColorDark};
}`
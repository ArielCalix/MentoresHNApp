import styled from 'styled-components';

export const MemberBioLink = styled.a``

export const MemberName = styled.h4``

export const MemberTitle = styled.span``

export const MemberBio = styled.p``

export const MemberContent = styled.div``

export const MemberPhoto = styled.img``

export const MemberContainer = styled.div`
text-align: center;
margin-bottom: 20px;
background: ${props => props.theme.lightShades} ;
border: 1px solid ${props => props.theme.lightAccent};
${MemberBioLink} {
    color: ${props => props.theme.textColorDark};
    text-decoration: none;
}
${MemberBioLink}:hover {
    color: ${props => props.theme.textColorDarkTransparent};
    text-decoration: none;
}
${MemberContent} {
    padding: 0 20px 30px 20px;
}
${MemberBio} {
    padding-top: 10px;
    font-size: 14px;
    font-style: italic;
    color: ${props => props.theme.textColorDark};
}
${MemberTitle} {
    font-style: italic;
    display: block;
    font-size: 13px;
}
${MemberName} { 
    font-weight: 700;
    margin-bottom: 2px;
    font-size: 18px;
}
${MemberPhoto} {
    margin: -1px -1px 30px -1px;
}
`
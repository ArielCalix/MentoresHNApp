import styled from 'styled-components';

const TrainerPhoto = styled.img``;
const TrainerName = styled.span``;
const Icon = styled.i``;

const Profile = ({ className = "", ImgSrc, Trainer }) => {
    return <div className={`d-flex justify-content-between align-items-center ${className}`}>
        <span>
            <TrainerPhoto src={ImgSrc} className={"img-fluid"} alt="" />
        </span>
        <span>
            <TrainerName>{Trainer}</TrainerName>
        </span>
    </div>
}

const Rank = ({ className = "", Users, Favs }) => {
    return <div className={`d-flex align-items-center ${className}`}>
        <Icon className="bx bx-user"></Icon>&nbsp;{Users}
        &nbsp;&nbsp;
        <Icon className="bx bx-heart"></Icon>&nbsp;{Favs}
    </div>
}

export const TrainerContainer = styled.div`
padding-top: 15px;
border-top: 1px solid ${props => props.theme.lightAccent};`;

export const TrainerProfile = styled(Profile)`
${TrainerPhoto} {
    max-width: 50px;
    border-radius: 50px;
}
${TrainerName} {
    padding-left: 10px;
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.textColorDark};    
}
`
export const TrainerRank = styled(Rank)`
font-size: 18px;
color: ${props => props.theme.textColorDark};
`
import styled from "styled-components"

const CommentsContent = {
    "ComentsDescription": "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.",
    "Coments": [
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        },
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        },
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        },
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        },
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        },
        {
            "UserName": "Saul Goodman",
            "CommentPost": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
            "UserPhoto": "http://placeimg.com/640/480/fashion",
            "UserClass": "Matematicas"
        }
    ]
}

const ComentsSection = styled.section`
.coments-slider{
    overflow: hidden;
}
.coments-item {
    box-sizing: content-box;
    text-align: center;
    min-height: 320px;
    .coments-img {
        width: 90px;
        border-radius: 50%;
        margin: 0 auto;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
        margin: 10px 0 5px 0;
        color: ${props => props.theme.textColorDark};
    }
    h4 {
        font-size: 14px;
        color: ${props => props.theme.textColorDark};
        margin: 0;
    }
    p {
        font-style: italic;
        margin: 0 15px 15px 15px;
        padding: 20px;
        background: ${props => props.theme.lightShades};
        position: relative;
        margin-bottom: 35px;
        border-radius: 6px;
        box-shadow: 0px 2px 15px ${props => props.theme.mainBrandTransparent};
        .quote-icon-left, .quote-icon-right {
            color: ${props => props.theme.textColorDark};
            font-size: 26px;
        }
        .quote-icon-left {
            display: inline-block;
            left: -5px;
            position: relative;
        }
        .quote-icon-right {
            display: inline-block;
            right: -5px;
            position: relative;
            top: 10px;
        }
        &::after {
            content: "";
            width: 0;
            height: 0;
            border-top: 20px solid ${props => props.theme.lightAccent};
            border-right: 20px solid transparent;
            border-left: 20px solid transparent;
            position: absolute;
            bottom: -20px;
            left: calc(50% - 20px);
        }
    }
}
.swiper-pagination {
    margin-top: 20px;
    position: relative;
    .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: ${props => props.theme.lightShades};
        opacity: 1;
        border: 1px solid ${props => props.theme.mainBrand};
    }
    .swiper-pagination-bullet-active {
        background-color: ${props => props.theme.mainBrand};
    }
}
`

export default function Coments() {

    const comments = CommentsContent.Coments.map((comment, index) => {
        return <div className="swiper-slide">
            <div className="coments-item" data-aos="fade-up">
                <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {comment.CommentPost}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={comment.UserPhoto} className="coments-img" alt="" />
                <h3>{comment.UserName}</h3>
                <h4>{comment.UserClass}</h4>
            </div>
        </div>
    })
    return <ComentsSection id="coments" className="section section-bg">
        <div className="container">

            <div className="header-section">
                <h2>Reseñas</h2>
                <p></p>
            </div>

            <div className="body-section coments-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">
                    {comments}
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    </ComentsSection>
}
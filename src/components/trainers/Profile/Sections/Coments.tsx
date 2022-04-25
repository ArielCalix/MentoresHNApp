import styled from "styled-components"
import picture from '../../../../assets/img/testimonials/testimonials-1.jpg';

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
    return <ComentsSection id="coments" className="section section-bg">
        <div className="container">

            <div className="header-section">
                <h2>Testimonials</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="body-section coments-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="coments-item" data-aos="fade-up">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                                quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={picture} className="coments-img" alt="" />
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="coments-item" data-aos="fade-up" data-aos-delay="100">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={picture} className="coments-img" alt="" />
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="coments-item" data-aos="fade-up" data-aos-delay="200">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim
                                tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={picture} className="coments-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="coments-item" data-aos="fade-up" data-aos-delay="300">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit
                                minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={picture} className="coments-img" alt="" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="coments-item" data-aos="fade-up" data-aos-delay="400">
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                                labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            <img src={picture} className="coments-img" alt="" />
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                        </div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    </ComentsSection>
}
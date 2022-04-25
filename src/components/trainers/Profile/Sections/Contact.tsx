import styled from "styled-components";
import { DefaultButton } from "../../../shared/buttons/Button";

const Section = styled.section`
padding-bottom: 130px;
`
const Info = styled.div`
    padding: 30px;
    background: ${props => props.theme.lightShades};
    width: 100%;
    box-shadow: 0 0 24px 0 ${props => props.theme.mainBrandTransparent};
    i {
        font-size: 20px;
        color: ${props => props.theme.textColor};
        float: left;
        width: 44px;
        height: 44px;
        background: ${props => props.theme.mainBrand};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        transition: all 0.3s ease-in-out;
    }
    h4 {
        padding: 0 0 0 60px;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
        color: ${props => props.theme.textColorDark};
    }
    p {
        padding: 0 0 10px 60px;
        margin-bottom: 20px;
        font-size: 14px;
        color: ${props => props.theme.textColorDark};
    }
    iframe {
        border:0; 
        width: 100%; 
        height: 290px;
    }
`

const Form = styled.form`
  width: 100%;
  padding: 30px;
  background: ${props => props.theme.lightShades};
  box-shadow: 0 0 24px 0 ${props => props.theme.mainBrandTransparent};
.form-group {
  padding-bottom: 8px;
}
.validate {
  display: none;
  color: ${props => props.theme.danger};
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}
.error-message {
  display: none;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.danger};
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.error-message br + br {
  margin-top: 25px;
}
.sent-message {
  display: none;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.success};
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.loading {
  display: none;
  background: ${props => props.theme.lightShades};
  text-align: center;
  padding: 15px;
  &:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid ${props => props.theme.success};
    border-top-color: ${props => props.theme.lightAccent};
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }
}
.form-group {
  margin-bottom: 15px;
}
label {
  padding-bottom: 8px;
}
input, textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}
input {
  height: 44px;
}
textarea {
  padding: 10px 15px;
}
`

export default function Contact() {
    return <Section id="contact" className="section">
        <div className="container">

            <div className="header-section">
                <h2>Contact</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                    in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="body-section row" data-aos="fade-in">

                <div className="col-lg-5 d-flex align-items-stretch">
                    <Info className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                        </div>

                        <iframe title="Google Map" key="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" />
                    </Info>

                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <Form action="forms/contact.php" method="post" data-role="form" className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label data-for="name">Your Name</label>
                                <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label data-for="name">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label data-for="name">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label data-for="name">Message</label>
                            <textarea className="form-control" name="message" data-rows="10" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center">
                            <DefaultButton type="submit">Send Message</DefaultButton>
                            {/* <button type="submit">Send Message</button> */}
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    </Section>
}
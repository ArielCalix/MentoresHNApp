import styled from "styled-components";
import { DefaultButton } from "../../../shared/buttons/Button";

const ContactameContent = {
  "Contactame": "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas."
}

const Section = styled.section`
padding-bottom: 130px;
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

export default function Contact({ TrainerId }) {
  return <Section id="contact" className="section">
    <div className="container">

      <div className="header-section">
        <h2>Contactame</h2>
        <p>{ContactameContent.Contactame}</p>
      </div>

      <div className="body-section row" data-aos="fade-in">

        <div className="mt-5 mt-lg-0 d-flex align-items-stretch">
          <Form action="forms/contact.php" method="post" data-role="form" className="php-email-form">
            <div className="row">
              <div className="form-group col-md-6">
                <label data-for="name">Nombre</label>
                <input type="text" name="name" className="form-control" id="name" required />
              </div>
              {/* <div className="form-group col-md-6">
                                <label data-for="name">Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" required />
                            </div> */}
            </div>
            <div className="form-group">
              <label data-for="name">Asunto</label>
              <input type="text" className="form-control" name="subject" id="subject" required />
            </div>
            <div className="form-group">
              <label data-for="name">Message</label>
              <textarea className="form-control" name="message" data-rows="10" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Cargando</div>
              <div className="error-message"></div>
              <div className="sent-message">¡Mensaje enviado, gracias por usar MentoresHn! </div>
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
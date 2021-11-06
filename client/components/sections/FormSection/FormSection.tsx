import {useRef} from "react";
import {Container} from "reactstrap";
import { motion } from "framer-motion";
import {useInView} from "react-intersection-observer";
import LeftRightVariants from "../../../variants/LeftRightVariants";


const FormSection = () => {

  // Variables
  const userForms = useRef<any>(null);

  const clickHandlerSU = () => {
    userForms.current.classList.remove('login-click');
    userForms.current.classList.add('signup-click');
  }
  const clickHandlerLogin = () => {
    userForms.current.classList.remove('signup-click');
    userForms.current.classList.add('login-click');
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const variants = new LeftRightVariants(0.7, 0.7);
  const fadeInBottom = variants.fadeInBottom;

  return (
    <section id={"FormSection"} ref={ref} className="FormSection">
      <Container>
        <motion.div
          className="formWrapper"
          variants={fadeInBottom}
          initial="hidden"
          animate={inView ? "visible" : ""}
        >
          <div className="user_options-container">
            <div className="user_options-text">
              <div className="user_options-unregistered">
                <h2 className="user_unregistered-title">Don't have an account?</h2>
                <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer
                  whatever street art fap.</p>
                <button onClick={() => clickHandlerSU()}  className="user_unregistered-signup formButton" id="signup-button">Sign up</button>
              </div>

              <div className="user_options-registered">
                <h2 className="user_registered-title">Have an account?</h2>
                <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer
                  whatever street art fap.</p>
                <button className="user_registered-login formButton" onClick={() => clickHandlerLogin()} id="login-button">Login</button>
              </div>
            </div>

            <div className="user_options-forms" ref={userForms} id="user_options-forms">
              <div className="user_forms-login">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input placeholder="Name" className="forms_field-input" required />
                    </div>
                    <div className="forms_field">
                      <input type="email" placeholder="Email" className="forms_field-input" required autoFocus/>
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <input type="submit" value="Send" className="forms_buttons-action" />
                  </div>
                </form>
              </div>
              <div className="user_forms-signup">
                <h2 className="forms_title">Sign Up</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input type="text" placeholder="Name" className="forms_field-input" required/>
                    </div>
                    <div className="forms_field">
                      <input type="email" placeholder="Email" className="forms_field-input" required/>
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <input type="submit" value="Send" className="forms_buttons-action" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
};

export default FormSection;
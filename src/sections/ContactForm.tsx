import React from 'react';

const ContactForm = () => {
    return(

    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Drop me a line through the form below and I will get back to you soon</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Apartment 308, Courtyard house, Dock road, Limerick</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:hello@sambhu.ie">hello@sambhu.ie</a>, <a href="mailto:hello@sambhu.ie">dayal2007@hotmail.com</a>
                  </p>
                </div>
              </div>
              <iframe  data-aos="fade-up" width="100%" data-aos-delay="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9680.042026188245!2d-8.644568126904405!3d52.65978780356722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b5c6245a706c9%3A0x1ddaa9b6d4d48a05!2sMountkennet%2C%20Limerick%2C%20V94%20A580!5e0!3m2!1sen!2sie!4v1721389244201!5m2!1sen!2sie" loading="lazy"></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200" id="contact_form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" />
                  <div className="error" id="error_name"></div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" />
                  <div className="error" id="error_email"></div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" />
                  <div className="error" id="error_subject"></div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" id="message-field"></textarea>
                  <div className="error" id="error_message"></div>
                </div>
                <div className="col-md-12">
                    <div className="g-recaptcha"
                    data-sitekey="6LcWuRUqAAAAAIUsBy-SlNlBQMHOwBssfoaYyGZN">
                    </div>
                </div>
                <div className="col-md-12">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                  <button type="submit">I want a customized website</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
}

export default ContactForm;
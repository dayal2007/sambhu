import React from 'react';

const AboutMe = () => {
    return(
        <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About me</h2>
          <p>
              13+ years of experience in requirement analysis, implementation, and developer testing of dynamic websites and web applications.<br />
      Proficient in PHP and well-versed in a spectrum of front-end technologies, including React, Angular, Vue, Node.js, and Bootstrap.<br />
      Hands-on experience in creating websites for domains such as e-commerce, GIS, CMS, ERP, educational software, online gaming and digital humanities.<br />
      Proven track record in designing relational databases (MySQL, PostgreSQL, MS SQL) and cache management using Redis.<br />
      Experience working in agile methodology and exposure to agile ceremonies, ensuring efficient team collaboration and delivery.
          <br />
      Authorized to work in Ireland (Stamp 4 Visa)
          </p>
        </div>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
  
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 text-center">
              <p className="text-center">
                  <img src="assets/img/my-profile-img.jpg" className="img-fluid rounded-circle border-circle" alt="" />
              </p>
              <p className="text-center">
                  <audio controls>
                  </audio>
              </p>
            </div>
            <div className="col-lg-8 content">
              <h2>UI/UX Designer &amp; Web Developer.</h2>
              <p className="fst-italic py-3">
                With a rich experience of over 13 years in Web Development, I've created interfaces that not only look great but also perform flawlessly.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.sambhu.ie</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Art:</strong> <span><a target = "_blank" href="https://www.artlimerick.com/sambhu-dayal">Artlimerick</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Limerick, Ireland</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Eircode:</strong> <span><a href="https://www.google.ie/maps/place/Mountkennet,+Limerick,+V94+A580/@52.6599689,-8.6347107"  target="_blank">V94 A580</a></span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Development:</strong> <span>End to end</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a href="mailto:hello@sambhu.ie">hello@sambhu.ie</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email (Alt):</strong> <span><a href="mailto:dayal2007@hotmail.com">dayal2007@hotmail.com</a></span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">I specialize in making user experiences seamless using technologies like: Angular, React, Nodejs, Vuejs, TypeScript, JavaScript, HTML5, CSS3.</p>
              <p>I can design and develop web applications using Microservices architecture (often shortened to microservices) refers to an architectural style for developing applications. Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility, the result is fast and efficient website performance  and user experience</p>
              <p>Databases: MS SQL Server, MySQL, PostgreSQL, Redis</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutMe;
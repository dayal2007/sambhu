import React from 'react';

const HomeIntro = () => {
    return (
        <section className="about">
            <div className="container section-title aos-init aos-animate" data-aos="fade-up">  
                    <p>Don't forget to follow me on <i className="bi bi-badge-sd"></i> <a target="_blank" href='https://www.linkedin.com/in/sambhudayalb/'>www.linkedin.com</a> for updates and more!<br></br>
                    Thank you for stopping by!</p>
                    <hr className='mb-5'></hr>
                    <h2>Professional Experience</h2>
                    <div className="content mt-5">
                        <h2><span>Web Development</span></h2>
                        <p className='pb-3'><strong>Requirement Analysis & Implementation</strong><br />Extensive experience in requirement analysis, implementation, and developer testing of dynamic websites and web applications.</p>
                        
                        <div className='row'>
                            <div className='col-6'>
                                <p><strong>Proficient Technologies</strong><br />Skilled in PHP and well-versed in a spectrum of front-end technologies, including:</p>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> TypeScript</li>
                                    <li><i className="bi bi-chevron-right"></i> React</li>
                                    <li><i className="bi bi-chevron-right"></i> Angular</li>
                                    <li><i className="bi bi-chevron-right"></i> Vue</li>
                                    <li><i className="bi bi-chevron-right"></i> Node.js</li>
                                    <li><i className="bi bi-chevron-right"></i> Bootstrap</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                            <p><strong>Domain Expertise</strong><br />Hands-on experience in creating websites for various domains, such as:</p>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> E-commerce</li>
                                    <li><i className="bi bi-chevron-right"></i> Geographic Information Systems (GIS)</li>
                                    <li><i className="bi bi-chevron-right"></i> Content Management Systems (CMS)</li>
                                    <li><i className="bi bi-chevron-right"></i> Enterprise Resource Planning (ERP)</li>
                                    <li><i className="bi bi-chevron-right"></i> Educational software</li>
                                    <li><i className="bi bi-chevron-right"></i> Online gaming</li>
                                    <li><i className="bi bi-chevron-right"></i> Digital humanities</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className='pt-4'><span>Frameworks & Methodologies</span></h2>
                        <div className='row'>
                            <div className='col-6'>
                                <p><strong>Back-End Frameworks</strong><br />Demonstrated proficiency in PHP back-end frameworks such as:</p>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> Laravel</li>
                                    <li><i className="bi bi-chevron-right"></i> CodeIgniter</li>
                                    <li><i className="bi bi-chevron-right"></i> WordPress</li>
                                    <li><i className="bi bi-chevron-right"></i> Joomla</li>
                                    <li><i className="bi bi-chevron-right"></i> OpenCart</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <p className='pb-3'><strong>Development Process</strong><br />Proven track record in end-to-end website development, including testing, hosting support, and maintenance.</p>
                                <p className='pb-3'><strong>Agile Methodology</strong><br />Skilled in agile methodology with exposure to agile ceremonies, ensuring efficient team collaboration and delivery.</p>
                            </div>
                        </div>
                        <h2 className='pt-4'><span>Artistic Endeavors</span></h2>
                        <p className='pb-3'><strong>Creative Skills</strong><br />A creative artist proficient in painting imaginative works on canvas using watercolors and acrylic paints.</p>
                        <p className='pb-3'><strong>Exhibitions</strong><br />Participant in art exhibitions conducted by the ArtLimerick community of artists.</p>
                        <p className='pb-3'><strong>Client Support</strong><br />Providing clients with end-to-end website development services and commissioned artworks.</p>
                        <h2 className='pt-4'><span>Additional Information</span></h2>
                        <p className='pb-3'><strong>Visa Status</strong><br />Stamp 4 Visa holder.</p>
                        <p><a href='/about'><button className='btn btn-success'>Read more <i className="bi bi-chevron-right"></i></button></a></p>
                    </div>
            </div> 
        </section>
    );
}

export default HomeIntro;
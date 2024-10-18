import React from 'react';

const Colab = () => {
    return(
        <>
        <section className="section pt-0 pb-0" id="home">
            <div className="page-title aos-init aos-animate" data-aos="fade">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0"><img src="assets/img/volleyball.png" className="img-colab" /> Let's Collaborate!</h1>
                    <nav className="breadcrumbs">
                        <ol>
                        <li><a href="/contact"><i className="bi bi-filetype-html"></i> Build Your Website with Me</a></li>
                        <li className="current"><a href="/contact"><i className="bi bi-code-square"></i> Learn Web Development</a></li>
                        <li className="current"><a href="/contact"><i className="bi bi-easel"></i> Learn Art</a></li>
                        <li className="current"><a href="/contact" className="btn btn-primary"><i className="bi bi-credit-card"></i> Payments</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        </>
    );
}

export default Colab;
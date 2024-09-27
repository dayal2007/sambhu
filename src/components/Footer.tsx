import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer position-relative">
            <div className="container">
            <div className="copyright text-center ">
                <p className='big'><i className ="bi bi-code-square"></i> This website is built using React combined with TypeScript</p>
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Sambhu.ie</strong> <span>All Rights Reserved</span></p>
            </div>
            <div className="credits">
            </div>
            </div>
            </footer>
        </>
    );
}

export default Footer;
import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer
            className="footer footer-center p-4 bg-gray-900 sm:sm-w-100 text-white">
            <div>
                <h4 className='text-xl font-bold mb-2 text-gray-500'>Subscribe now</h4>
                <h1 className="font-bold text-cyan-400 text-4xl">
                    Get Our Updates always fast
                </h1>
                <h4 className='uppercase text-xl mt-2 font-bold text-gray-500'>Your personal data will be always keep safe
                </h4>
                <div className="form-control mt-4 w-80">
                    <div className="relative">
                        <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <div>
                    <div className="grid text-base mt-4 grid-flow-col gap-4">
                        <a className="link link-hover">ABOUT US</a>
                        {/* <a className="link link-hover">PRESS RELEASE</a>
                    <a className="link link-hover">PARTNERS</a> */}
                        <a className="link link-hover">PRIVECY POLICY</a>
                        <a className="link link-hover">FAQ</a>
                        <a className="link link-hover">TERMS OF SERVICE</a>
                        <a className="link link-hover">CONTACT US</a>
                    </div>
                    <div className='mt-10'>
                        <p>Copyright © {year} - All right reserved by Al-Amin</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer
            class="footer footer-center p-4 bg-gray-900 sm:sm-w-100 text-white">
            <div>
                <h4 className='text-xl font-bold mb-8 text-gray-500'>Subscribe now</h4>
                <h1 class="font-bold text-cyan-400 text-4xl">
                    Get Our Updates always fast
                </h1>
                <h4 className='uppercase text-xl mt-4 font-bold text-gray-500'>Your personal data will be always keep safe
                </h4>
                <div class="form-control mt-8 w-80">
                    <div class="relative">
                        <input type="email" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
                <div>
                    <div class="grid text-base mt-7 grid-flow-col gap-4">
                        <a class="link link-hover">ABOUT US</a>
                        {/* <a class="link link-hover">PRESS RELEASE</a>
                    <a class="link link-hover">PARTNERS</a> */}
                        <a class="link link-hover">PRIVECY POLICY</a>
                        <a class="link link-hover">FAQ</a>
                        <a class="link link-hover">TERMS OF SERVICE</a>
                        <a class="link link-hover">CONTACT US</a>
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
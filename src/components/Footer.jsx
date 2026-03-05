import React from 'react';
import { FaFacebook, FaLinkedin, FaRegCopyright, FaSquareXTwitter } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-black text-[#A1A1AA] pt-10 md:pt-15 '>
            <footer className="footer w-11/12 mx-auto pb-12 sm:footer-horizontal flex flex-col md:flex-row gap-10 md:gap-28">
                <nav className='w-full md:w-2/5 gap-4'>
                    <p className='font-bold text-2xl text-white'>CS — Ticket System</p>
                    <p>CS-Ticket System is a simple React-based customer support ticket management platform where users can view, track, and resolve support tickets. Built with React, Tailwind CSS, and DaisyUI, it provides a responsive interface for managing ticket status efficiently.</p>
                </nav>
                <nav className='w-full md:w-1/5 gap-4'>
                    <h6 className="text-[20px] font-medium text-white">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav className='w-full md:w-1/5 gap-4'>
                    <h6 className="text-[20px] font-medium text-white">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Customer Stories</a>
                </nav>
                <nav className='w-full md:w-1/5 gap-4'>
                    <h6 className="text-[20px] font-medium text-white">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav className='w-full md:w-2/5 gap-4'>
                    <h6 className="text-[20px] font-medium text-white">Social Links</h6>
                    <div className='flex gap-2 items-center justify-center'>
                        <FaSquareXTwitter className='text-white h-5 w-5' />
                        <a className="link link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <FaLinkedin className='text-white h-5 w-5' />
                        <a className="link link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <FaFacebook className='text-white h-5 w-5' />
                        <a className="link link-hover">@CS — Ticket System</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <MdOutlineMail className='text-white h-5 w-5' />
                        <a className="link link-hover">@CS — Ticket System</a>
                    </div>
                </nav>
            </footer>
            <div className="border-t w-full md:w-11/12 mx-auto text-[#A1A1AA] opacity-40"></div>
            <div className='text-white flex items-center justify-center gap-2 py-7'>
                <FaRegCopyright />
                <p className='text-white text-center'>2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>

    );
};

export default Footer;
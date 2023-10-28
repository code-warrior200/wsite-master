import React from 'react';
// import {
//     FaFacebookSquare,
//     FaGithubSquare,
//     FaInstagram,
//     FaTwitterSquare } 
// from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="w-full bg-orange-600 mx-auto p-6 py-16 flex  flex-col md-flex-row justify-between">
        {/* <div className='flex md:w-{50%}my-6'>
             <FaFacebookSquare color='white' className="mx-3 hover:opacity-80 duration-150" size={30}/>
             <FaTwitterSquare color='white' className="mx-3 hover:opacity-80 duration-150" size={30}/>
             <FaGithubSquare color='white' className="mx-3 hover:opacity-80 duration-150" size={30}/>
             <FaInstagram color='white' className="mx-3 hover:opacity-80 duration-150" size={30}/>
        </div> */}
        <div className="flex -mx-6 text-white justify-center">
          <a href="/Privacy" className="mx-3 hover:opacity-100 duration-150">Privacy Policy</a>|
          <a href="/Terms" className="mx-3 hover:opacity-80 duration-150">Terms & Conditions</a>|
          <a href="/Contact" className="mx-3 hover:opacity-80 duration-150">Contact us</a>
        </div>
        <p className='text-center mt-2'>©&nbsp;Alright Reserved 2022</p>
    </div>
  )
}
export default Footer;

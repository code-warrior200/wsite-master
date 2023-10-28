import React from 'react';
import success from '../assets/phone.png';


const Features = () => {
  return (
    <div className='w-full py-16 text-black px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 '>
        <div className='lg:col-2 py-2'>
          <img className='w-[550px] mt-24 mx-auto my-4' src={success} alt="/"/>
        </div>
        <div className=' text-justify grid lg:grid-col'>
          <h2 className='text-3xl font-bold'>Introduction </h2>
          <p className=' text-2xl'>
            My name is <strong>Abdulrahman Sadiq</strong>,i am a fullstack web-developer and have years of experience in my field.<br></br>
            I have worked and colaborate with several teams of developers and have built a few project alone. 
          </p>
        </div>  
      </div>
    </div>
  )
}

export default Features;

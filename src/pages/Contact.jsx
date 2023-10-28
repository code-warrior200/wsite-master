import React from 'react'

const contact = () => {
  return (
    <div className='w-full   py-16 text-black px-4'>
      <h2 className='md:text-4xl text-gray-400 sm:text-3xl text-center text-2xl font-bold py-2'>Send us a Message</h2>
       <div className='max-w-[420px] mx-auto'>
        <div className='my-4 items-center w-full '>
            <div className='items-center justify-center w-full'>
                <input className='p-3 flex w-full bg-slate-50 rounded-md text-black ' type="email" placeholder='example@gmail.com'/>
                <textarea className='p-3 flex w-full mt-2 bg-slate-50 rounded-md text-black' type="message" placeholder='type your message here' name="message"/>
                <button className=' bg-blue-500 w-[150px] rounded-md font-medium my-6 ml-4 px-6 mx-auto py-3 text-white hover:scale-105 duration-300'>Submit</button>
            </div>
            <p className=' text-gray-500'>We care about the protection of your data. Read our <span><a href='/Privacy' className=' text-orange-500'>Privacy Policy.</a></span></p>
        </div>
       </div>
    </div>
  )
}

export default contact;
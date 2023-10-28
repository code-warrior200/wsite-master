import React from 'react';
import pay from '../assets/vector2.png'
import { PhoneVibrate,Tv,Lightbulb,Wifi} from 'react-bootstrap-icons';


const Features = () => {
  return (
    <div>
        <h1 className='md:text-4xl mb-10 text-center sm:text-3xl text-2xl font-bold'>
          Unlimited Features, Unlimited Fun
        </h1>
       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 '>
        <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
          <div className=' md:mx-auto justify-center py-2'>
              <PhoneVibrate size={70} className="mx-auto text-blue-600"/>
            <h4 className='md:text-2xl font-bold text-center'>
              {"Airtime Purchase"}
            </h4>
          </div>
          <div className='py-2'>
              <Tv size={70} className="mx-auto text-blue-600"/>
            <h4 className='md:text-2xl font-bold text-center'>
              {"Pay for Cable Tv"}
            </h4>
          </div>
          <div className='py-2'>
              <Lightbulb size={70} className="mx-auto text-blue-600"/>
            <h4 className='md:text-2xl font-bold text-center'>
              {"Pay Electricity Bill"}
            </h4>
          </div>
          <div className='py-2 justify-center'>
              <Wifi size={70} className="mx-auto text-blue-600"/>
            <h4 className='md:text-2xl font-bold text-center'>
              {"Purchase Internet Access"}
            </h4>
          </div>
        </div>
        <div className='lg:col-2 py-2'>
          <img className='w-[350px] mt-10 mx-auto my-4' src={pay} alt="/"/>
        </div>
    </div>
       </div>
  )
}

export default Features;

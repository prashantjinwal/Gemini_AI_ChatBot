import React from 'react'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <>
    <div className='main flex-1 relative min-h-[100vh] pb-[1em] px-4'>
        <div className='nav flex items-center  justify-between text-xl p-5'>
            <p className='font-medium'>Gemini</p>
            <img className='rounded-full w-[2em]' src={assets.user_icon} alt='profile' />
        </div>

        <div className='main-container max-w-[900px] m-auto'>
            <div className='greet mt-10 lg:text-6xl text-xl text-[#c7c4c5] font-medium py-8'>
                <p><span>Hello, prashant</span></p>
                <p>How can I help you today</p>
            </div>

            <div className='Cards'>
                <div className='Card'>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt='#'/>
                </div>
                <div className='Card'>
                    <p>Help me understand American football</p>
                    <img src={assets.bulb_icon} alt='#'/>
                </div>
                <div className='Card'>
                    <p>Evaluate and rank common camera categories</p>
                    <img src={assets.message_icon} alt='#'/>
                </div>
                <div className='Card'>
                    <p>Give me a walkthrough of The Byzantine Empire in seven bullet points or less</p>
                    <img src={assets.code_icon} alt='#'/>
                </div>
            </div>
        </div>

    </div>

      
    </>
  )
}

export default Main

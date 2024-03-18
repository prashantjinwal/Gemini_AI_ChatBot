import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData,setinput, input} = useContext(Context);


  return (
    <>
    <div className='main flex-1 relative min-h-[100vh] pb-[1em] px-2 lg:px-5'>
        <div className='nav flex items-center  justify-between text-xl p-5'>
            
            <p className='font-medium text-2xl'> Gemini <span className="text-sm text-[#ff5546]">'Dev by <span className="text-sm text-[#4b90ff]">prashant</span>'</span></p>
            <img className='rounded-full w-[2em]' src={assets.user_icon} alt='profile' />
        </div>

        

        <div className='main-container lg:max-w-[900px] m-auto '>

            {!showResult?
            <>
            <div className='greet lg:text-6xl text-4xl text-[#c7c4c5] font-medium py-10 px-4'>
                <p><span>Hello, prashant</span></p>
                <p>How can I help you today?</p>
            </div>
                
            <div className='Cards pt-5 pb-0 px-5 flex  overflow-auto  max-w-[21em] lg:max-w-[100%]  w-full gap-5   '>
                <div className='Card min-w-[12em]  '>
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt='#'/>
                </div>
                <div className='Card min-w-[12em] '>
                    <p>Help me understand American football</p>
                    <img src={assets.bulb_icon} alt='#'/>
                </div>
                <div className='Card min-w-[12em] '>
                    <p>Evaluate and rank common camera categories</p>
                    <img src={assets.message_icon} alt='#'/>
                </div>
                <div className='Card min-w-[12em]'>
                    <p>Give me a walkthrough of The Byzantine Empire in seven bullet points or less</p>
                    <img src={assets.code_icon} alt='#'/>
                </div>
            </div>
                
            </>
            :
            <div className="result py-0 px-[3%] lg:px-[5%] max-h-[70vh] overflow-y-scroll">
                <div className="result-title flex gap-4 items-center my-9 mx-0 ">
                    <img className="w-[2.3em] rounded-full" src={assets.user_icon} alt="#" />
                    <p className='text-lg'>{recentPrompt}</p>
                </div>
                <div className="result-data flex items-start gap-5">
                    <img className='animate-pulse w-[2em]' src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr className=' animate-pulse'/>
                        <hr className=' animate-pulse' />
                        <hr className=' animate-pulse' />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}} className='text-[17px] font-[300] leading-2 '></p>
                    }
                   
                    {/* dangerouslySetInnerHTML={{__html:resultData}} */}
                </div>

            </div>

}

            
        

            <div className='main-bottom  bottom-0 w-[99%] max-w-[900px] m-auto pt-0 pr-3 lg:pr-5 fixed '>

                    <div className='search-box flex items-center lg:gap-5 justify-between  bg-[#f0f7f9] rounded-[50px] py-3  px-5    '>
                        <textarea onChange={(e)=>setinput(e.target.value)}  value={input} className='lg:w-[75%] w-[75%] lg:py-2 lg:px-2 mx-6 resize-none mr-2 outline-0 py-3  bottom-0 bg-transparent text-[18px] bg-black'  placeholder="Enter a prompt here" />
                        <div className="flex  items-center lg:gap-4 gap-6 pr-4 ">
                    <div className='search-box flex items-center gap-5 justify-between  bg-[#f0f7f9] rounded-[50px] py-3  px-5    '>
                        <input onChange={(e)=>setinput(e.target.value)}  value={input} className='lg:w-[75%] w-full lg:py-2 lg:px-2 mx-3  py-5 outline-none bottom-0 bg-transparent text-[18px]' type='text' placeholder="Enter a prompt " />
                        <div className="flex items-center lg:gap-4 gap-6 pr-3 ">

                            <img src={assets.gallery_icon} alt="#" />
                            <img src={assets.mic_icon} alt="#" />
                           {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="#" />: null}
                        </div>
                    </div>
                    <p className='lg:text-sm text-[10px] font-normal text-center px-2 py-2'>Gemini may display inaccurate info, including about people, so double-check its responses. <span className='underline'> Your privacy and Gemini Apps</span></p>
            </div>

        </div>
    </div>

      
    </>
  )
}

export default Main

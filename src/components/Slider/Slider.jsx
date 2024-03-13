
import {assets} from "../../assets/assets"

function Slider() {
  return (
    <>
    <div className='Slider-bar min-h-[100vh] inline-flex flex-col justify-between bg-slate-300'>
        <div className='top'>
            <img className='w-[1.4em] cursor-pointer ml-4 block' src={assets.menu_icon} alt="menu" />
            <div className='new-chat inline-flex items-center gap-4 mt-5 py-5 px-3'>
                <img className='w-[1.4em]' src={assets.plus_icon} alt="new_icon" />
                <p>New Chat</p>
            </div>

            <div className='Recent'>
                <p className='recent-title' >Recent</p>
                    <div className='recent-entry'>
                        <img className='w-[1.4em]' src={assets.message_icon} alt="mess" /> 
                         <p>What is react...</p>
            </div>
        </div>

        </div>
        <div className='bottom'>
            <div className="bottom-item">
                <img className='w-[1.4em]' src={assets.question_icon} alt="Q" />
                <p>Help</p>
            </div>
            <div className="bottom-item">
                <img className='w-[1.4em]' src={assets.history_icon} alt="Q" />
                <p>Activity</p>
            </div>
            <div className="bottom-item">
                <img className='w-[1.4em]' src={assets.setting_icon} alt="Q" />
                <p>Setting</p>
            </div>
            

        </div>
    </div>
      
    </>
  )
}

export default Slider


import { useContext, useState } from "react"
import {assets} from "../../assets/assets"
import { Context } from "../../context/Context"

function Slider() {
    const [extended , setextended] = useState(false);
    const {onSent,prevPrompt,setrecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setrecentPrompt(prompt)
        onSent(prompt)
    }

  return (
    <>
    <div className='Slider-bar min-h-[100vh] py-[1.2em] pr-[1.3em]  pl-[1em] inline-flex flex-col justify-between bg-[#f0f7f9]'>
        <div className='top '> 
            <img onClick={()=>setextended(prev=>!prev)} className='w-[1.4em] mb-[3em] cursor-pointer ml-2 block' src={assets.menu_icon} alt="menu" />
            <div onClick={()=>newChat()} className='new-chat cursor-pointer   inline-flex items-center gap-4 py-2 px-3 rounded-full bg-[#e3e8ed] hover:bg-[#e9ecef]'>
                <img className='w-[1em]' src={assets.plus_icon} alt="new_icon" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='Recent flex flex-col'>
                <p className='recent-title my-5' >Recent</p>

                {prevPrompt.map((item, index)=>{
                    return(
                        <div onClick={()=>loadPrompt(item)} className='recent-entry flex items-start gap-4 py-3 pl-3 pr-2 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#ced4da]'>
                        <img className='w-[1.4em]' src={assets.message_icon} alt="mess" /> 
                         <p>{item.slice(0,10)}...</p>
                        </div>
                    )
                })}
                    
            
            </div>
            :null}

        </div>
        <div className='bottom flex flex-col gap-3 mb-[2em] '>
            <div className="bottom-item flex gap-2 py-2 pl-2 pr-2 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e9ecef]">
                <img className='w-[1.4em]' src={assets.question_icon} alt="Q" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item flex gap-2 py-2 pl-2 pr-2 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e9ecef]">
                <img className='w-[1.4em]' src={assets.history_icon} alt="Q" />
               {extended? <p>Activity</p>:null}
            </div>
            <div className="bottom-item flex gap-2 py-2 pl-2 pr-2 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e9ecef]">
                <img className='w-[1.4em]' src={assets.setting_icon} alt="Q" />
                {extended?<p>Setting</p>:null}
            </div>
            
               

        </div>
    </div>
      
    </>
  )
}

export default Slider

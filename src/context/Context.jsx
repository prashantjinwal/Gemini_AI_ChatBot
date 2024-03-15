import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();



    const ContextProvider = (props) => {
    
        const [input, setinput] = useState("");
        const [recentPrompt, setrecentPrompt] = useState("");
        const [prevPrompt, setprevPrompt] = useState([]);
        const [showResult, setshowResult] = useState(false);
        const [loading, setloading] = useState(false);
        const [resultData, setresultData] = useState("");

        const delayPara = (index,nextWord) => {
            setTimeout(function(){
                setresultData(prev=>prev+nextWord)
            },75*index)
        }

        const newChat = () => {
            setloading(false)
            setshowResult(false)
        }


        const onSent = async (prompt) =>{

            setresultData("")
            setloading(true)
            setshowResult(true)

            let response
            if(prompt != undefined){
                response =  await runChat(prompt)
                setrecentPrompt(prompt)
            }
            else{
                setprevPrompt(prev=>[...prev,input])
                setrecentPrompt(input)
                response =  await runChat(input)

            }

            // setrecentPrompt(input)
            // setprevPrompt(prev=>[...prev,input])
            
            let responseArray =  response.split("**");
            let newRespone="";
            for(let i = 0; i < responseArray.length; i++){
                if(i === 0 || i%2 !== 1){
                    newRespone += responseArray[i];
                }
                else{
                    newRespone += "<b>"+responseArray[i]+"</b>"
                }
            }
            let newRespone2 = newRespone.split("*").join("</br>");
            // setresultData(newRespone2);
            let newResponeArray = newRespone2.split(" ");
            for(let i = 0; i<newResponeArray.length; i++){
                const nextWord = newResponeArray[i];
                delayPara(i,nextWord+" ")
            }

            setloading(false)
            setinput("")
        }

        // onSent("What is react js")

        const contextValue = {
            prevPrompt,
            setprevPrompt,
            onSent,
            setrecentPrompt,
            recentPrompt,
            showResult,
            loading,
            resultData,
            input,
            setinput,
            newChat

        }

        return (
            <Context.Provider value={contextValue} >
                {props.children}
            </Context.Provider>
        )
}

export default ContextProvider
'use client'
import { useState } from 'react'
import {TbMessageChatbot} from 'react-icons/tb'



 export default function Chabot(){
    const[showChat,setShowChat]=useState(true)

    return(
        <>
        <TbMessageChatbot size={48} className='fixed right-6 bottom-[calc(1rem)] hover:cursor-pointer'/> 

        {/* if showChat ia true */}
        {showChat &&(
            <div>

                <div>
                    {/* CHAT HEADER */}

                </div>

            </div>



        )}
        
        </>
         
    )

 }
import React from 'react'
import './Chats.css'
import Chat from './Chat'
function Chats() {
  return (
    <div className='chats'>
        <Chat name="Jeff"
         message="Hey!"
          profilePic="https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg"
          timestamp="25 mins ago"
          />
      
    </div>
  )
}

export default Chats

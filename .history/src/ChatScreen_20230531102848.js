import React, { useState } from 'react'

function ChatScreen() {
    const [messages,setMessages]=useState([
        {name:'Ellen',
    image:'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg',
message:'Whats up !'},
{name:'Ellen',
    image:'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg',
message:'go up !'},
{name:'Ellen',
    image:'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg',
message:'hello bro!'},
{
    message:'I am fine how about you!'
}

    ])
  return (
    <div className='chatScreen'>
      <p>YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {messages.map(message=>(
        <div>
            <p>{message.message}</p>
        </div>

      ))}
    </div>
  )
}

export default ChatScreen

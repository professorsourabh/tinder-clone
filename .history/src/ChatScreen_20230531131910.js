import React, { useState } from 'react'
import './ChatScreen.css';
import { Avatar } from '@mui/material';
function ChatScreen() {
  const [input,setInput]=useState('');
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
  const  capitalizeLetter=(str)=> {
      return str.toUpperCase();
    }
    const handleSend = (e) => {
      e.preventDefault();
      setMessages([...messages,{message:input}]);
      setInput("");
    }
  return (
    <div className='chatScreen'>
      <p className='chatScreen_timestamp'>
        YOU MATCHED WITH {capitalizeLetter(messages[0].name)} ON 10/08/20
      </p>
      {messages.map(message=>(
        message.name?(<div className='chatScreen_message'>
        <Avatar className='chat_image' alt={message.name} src={message.image}/>
        <p className='chatScreen_text'>{message.message}</p>
 </div>):(<div className='chatScreen_message'>
       
        <p className='chatScreen_text_user'>{message.message}</p>
 </div>)
     

      ))}
      <div >
        <form className="chatScreen_input" action="">
          <input className="chatScreen_input_text" value={input}
          onChange={(e) => setInput(e.target.value)} type="text"placeholder='Type a message....'/>
          <button onClick={handleSend} className="chatScreen_input_button">SEND</button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen

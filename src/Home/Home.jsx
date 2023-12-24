import React, { useState } from 'react'
import "./Home.css"
import { useSearchParams } from 'react-router-dom'





const Home = () => {
  const [SearchParams] = useSearchParams([]);

  const GREETINGS = [
    "सरत्या वर्षाला निरोप देत नवी स्वप्न, नव्या आशा, नवी उमेद व नाविन्याची कास धरत नवीन वर्षाच स्वागत करू, आपली सर्व स्वप्न, आशा, आकांशा पूर्ण होवोतया प्रार्थनेसह, नवीन वर्षाच्या हार्दिक शुभेच्छा!",
    "🎈गेलं ते वर्ष आणि गेला तो काळ, आता नवीन आशा अपेक्षा घेवून आले 2024 साल, नवीन वर्षाच्या सर्वाना हार्दिक शुभेच्छा !!!🎈🎈",
    "चला या नवीन वर्षाचं.स्वागत करूया,जुन्या स्वप्नांना,नव्याने फुलुवुया🎈🎈नववर्षाभिनंदन🎈🎈",
    "🎈पुन्हा एक नविन वर्ष, पुन्हा एक नवी आशा, तुमच्या कर्तॄत्वाला पुन्हा एक नवी दिशा, नवी स्वप्ने, नवी क्षितीजे, सोबत माझ्या नव्या शुभेच्छा !🎈🎈",
  ]

  const [to, setTo] = useState(SearchParams.get('to'));
  const [from, setFrom] = useState(SearchParams.get('from'));
  const [greetingNumber, setGreetingNumber] = useState(SearchParams.get('g') >= GREETINGS.length ? 0 : SearchParams.get('g') || 0);
  const [themeNumber, setThemeNumber] = useState(SearchParams.get('t'))

  const url = "http://localhost:5173"

  return (
    <div className='input-containerr'>
      <div className={`shubhechha-class-container ${`theme-${themeNumber}`} `}>
        <h1> Dear {to}</h1>
        <p className='wishesh-text'>
          {GREETINGS[greetingNumber]}</p><br /><br />
        <span className='from-text'>आपला शुभेच्छुक {from}</span>
      </div>

      <p className='wish-create'>Do you want To Create Own New Year Wish Greetings ? Customize it here 👇</p>

     


      <div className='input-container'>
        <input
          type='text'
          value={to}
          className='input-box'
          placeholder='To'
          onChange={(e) => {
            setTo(e.target.value)
          }} />



        <input
          type='text'
          value={from}
          placeholder='From'
          className='input-box'
          onChange={(e) => {
            setFrom(e.target.value)
          }} />

        <select value={themeNumber} className='input-box' onChange={(e) => {
          setThemeNumber(e.target.value)
        }}>
          <option value={1}>Theme 1</option>
          <option value={2}>Theme 2</option>
          <option value={3}>Theme 3</option>
          <option value={4}>Theme 4</option>
        </select>

        <select value={greetingNumber} className='input-box' onChange={(e) => {
          setGreetingNumber(e.target.value)
        }}>
          <option value={0}>GREETING 1</option>
          <option value={1}>GREETING 2</option>
          <option value={2}>GREETING 3</option>
          <option value={3}>GREETING 4</option>
        </select>



      </div>
      <p className='url' onClick={()=>{

                 const urlcopy = `${url}?to=${to}&from=${from}&g=${greetingNumber}&t=${themeNumber}`;
                 navigator.clipboard.writeText(urlcopy);
                 alert('URL coppid Successfully');
      }}>
        {url}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}</p>
      


    </div>
  )
}

export default Home

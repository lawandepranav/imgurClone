import React from "react";

function App() {

const [time, setTime]=React.useState(0)
const[timerOn, setTimerOn]=React.useState(false)
React.useEffect(()=>{
let interval=null
if(timerOn){
  interval=setInterval(()=>{
    setTime(prevTime=> prevTime + 100)
  },100)
}else{
  clearInterval(interval)
}

return ()=>clearInterval(interval)
},[timerOn])

  return (
    <div style={{fontSize:"45px",display:"flex",margin:"auto",gap:"20px"}}>
      <div style={{margin:'auto'}}>{time}</div>
      <button style={{fontSize:"30px",width:"150px",margin:"30px"}} onClick={()=>setTimerOn(true)}>Start</button>
      <button style={{fontSize:"30px",width:"150px",margin:"30px"}} onClick={()=>setTimerOn(false)}>Stop</button>
      <button style={{fontSize:"30px",width:"150px",margin:"30px"}} onClick={()=>setTimerOn(true)}>Resume</button>
      <button style={{fontSize:"30px",width:"150px",margin:"30px"}} onClick={()=>setTime(0)}>Reset</button>

      <div>
        {data.map(element)={
        return(
          <div>{data.name}</div>
        )
        }}
      </div>
    </div>
  );
}

export default App;

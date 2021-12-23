import {useState, useRef, memo} from 'react'

// học useRef qua ví dụ count down number and stop
function ContentRef(){
    // const [count,setCount] = useState(60);
    // const timeId = useRef();
    // const handleStart = () =>{
    //     timeId.current = setInterval(() =>{
    //         setCount(prev => prev - 1);
    //     },1000);
    // }
    // const handleStop = () =>{
    //     clearInterval(timeId.current);
    // }
    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={handleStart}>Start</button>
    //         <button onClick={handleStop}>Stop</button>
    //     </div>
    // )
}

// Học memo qua ví dụ video 37
function Content(){
    console.log("re-render");
    return (
        <div>
            <h1>Hello memo</h1>
        </div>
    )
}

export default memo(Content);
import { useState } from 'react';
import Content from './Content';

function AppRef() {
    // const [show,setShow] = useState(false);
    // return (
    //     <div>
    //         <button
    //             onClick={() => setShow(!show)}
    //         >Toggle</button>
    //         {show && <Content/>}
    //     </div>
    // )
}
function App() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <Content/>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >Plus</button>
        </div>
    )
}

export default App;
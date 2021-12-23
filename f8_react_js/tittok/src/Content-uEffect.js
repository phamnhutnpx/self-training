import { useState, useEffect, useLayoutEffect } from 'react';
/**------kiến thức cần nắm trong useEffect------
 * 1. useEffect(callback)
 *  - Ông nội này cứ gọi callback khi component re-render
 *  - Gọi callback sau khi component thêm element vào DOM
 * 2. useEffect(callback,[])
 *  - Gọi callback 1 lần sau khi component mounted
 * 3. useEffect(callback,[deps])
 *  - Callback sẽ được gọi lại mỗi khi deps thay đổi
 */

//trường hợp 1: useEffect(callback)
function ContentTH1() {
    // const [title,setTitle] = useState('');
    // //phần này là side effect
    // useEffect(() =>{
    //     document.title = title;
    // })
    // //phần này gọi là clear effect(option)
    // return(
    //     <div>
    //         <h1>Hí ae! Tui đang học useEffect</h1>
    //         <input
    //             type="text"
    //             value={title}
    //             onChange={e => setTitle(e.target.value)}
    //         />
    //     </div>
    // )
}

//trường hợp 2: useEffect(callback,[])
function ContentTH2() {
    // const apiPost = 'https://jsonplaceholder.typicode.com/posts';
    // const [posts,setPosts] = useState([]);
    // const tabs = ['posts', '']
    // //phần này là side effect
    // useEffect(() =>{
    //     fetch(apiPost)
    //         .then(res => res.json())
    //         .then((posts) =>{
    //             setPosts(posts);
    //         })
    // },[])
    // //phần này gọi là clear effect(option)
    // return(
    //     <div>
    //         <h4>Hí ae! Tui đang học useEffect có []</h4>
    //         <ol>
    //             {posts.map((post)=>{
    //                 return <li>
    //                     <h4>{post.title}</h4>
    //                     <p>{post.body}</p>
    //                 </li>
    //             })}
    //         </ol>
    //     </div>
    // )
}
//trường hợp 3: useEffect(callback,[desp])
function ContentTH3() {
    // const tabs = ["posts", "comments", "albums"];
    // const [posts,setPosts] = useState([]);
    // const [type,setType] = useState('posts');
    
    // // console.log(type);nhìn lúc click tab
    // //phần này là side effect
    // useEffect(() =>{
    //     const apiPost = `https://jsonplaceholder.typicode.com/${type}`;
    //     fetch(apiPost)
    //         .then(res => res.json())
    //         .then((callback) =>{
    //             setPosts(callback);
    //         })
    // },[type])
    
    // return(
    //     <div>
    //         {tabs.map((tab)=>(
    //             <button 
    //                 key={tab}
    //                 style={type === tab ? {
    //                     color: '#fff',
    //                     background: '#333'
    //                 } : {} }
    //                 onClick={() => setType(tab)}
    //             >
    //                 {tab}
    //             </button>
    //             )
    //         )}
    //         <ol>
    //             {posts.map((post)=>{
    //                 return <li key={post.id}>
    //                     <h4>{post.title}</h4>
    //                     <p>{post.body}</p>
    //                 </li>
    //             })}
    //         </ol>
    //     </div>
    // )
}

//vận dụng useEffect kết hợp DOM event
function ContentDOM(){
//     const tabs = ["posts", "comments", "albums"];
//     const [types,setTypes] = useState([]);
//     const [option,setOption] = useState("posts");
//     const [showGoToTop,setShowGoToTop] = useState(false);
//     const [resize,setResize] = useState(window.innerWidth);
//     //effect này dùng để call api khi chuyển tabs
//     useEffect(() => {
//         const apiTabs = `https://jsonplaceholder.typicode.com/${option}`;
//         fetch(apiTabs)
//         .then(res => res.json())
//         .then(callback => {
//             setTypes(callback);
//         })},[option])
//     // effect này dùng để ẩn hiện cái nút cuộn trang web
//     useEffect(() => {
//         const handleScroll = () => {
//             if(window.scrollY >= 200){
//                 //show
//                 setShowGoToTop(true);
//             }else{
//                 //hide
//                 setShowGoToTop(false);
//             }
//         }
//         window.addEventListener("scroll", handleScroll);
//         // console.log("add scroll");
//         // clear up effect
//         return (() => {
//             window.removeEventListener("scroll", handleScroll);
//             // console.log("remove scroll");
//             })
//     },[])
//     // effect này dùng để resize chiều ngang trang web
//     useEffect(() => {
//         const handleResize = () => {
//             setResize(window.innerWidth)
//         }
//         window.addEventListener("resize", handleResize);
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         }
//     },[])
//    return(
//        <div>
//             {/* Các nút chuyển tab */}
//             {tabs.map((tab) => {
//                 return(
//                     <button 
//                         key={tab}
//                         onClick={() => setOption(tab)}
//                         >{tab}
//                     </button>
//                 )
//             })}
//             {/* Hiển thị thông số thay đổi chiều ngang trang web */}
//             <h1>{resize}</h1>
//             {/* Hiển thị nội dung gọi từ api lên */}
//            <ol>
//                 {types.map((type) => {
//                     return (
//                         <li key={type.id}>
//                             {type.title || type.body}
//                         </li>)
//                 })}
//            </ol>
//            {showGoToTop && 
//            (<button style={
//                {position:"fixed",
//                 right:"20px",
//                 bottom:"20px"}}>
//                ^^^
//            </button>)}
           
//        </div>
//    )
}

//vận dụng useEffect để làm cái timer countdown
function ContentCountDown() {
    // const [countDown,setCountDown] = useState(180);
    // useEffect(() => {
    //     const handleCountDown = setInterval(() =>{
    //         setCountDown(prev => prev -1)
    //     },1000)
    //     return () => clearInterval(handleCountDown)
    // },[])
    // return(
    //     <div>
    //         <h1>{countDown}</h1>
    //     </div>
    // )
}

// vận dụng useEffect làm cái đổi ảnh
function ContentAvt() {
    // const [avatar,setAvatar] = useState();
    // useEffect(() => {
    //     return () => (
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     )
    // },[avatar])
    // const handlePreviewAvt = (event) => {
    //     const file = event.target.files[0];
    //     file.preview = URL.createObjectURL(file)
    //     setAvatar(file)
    // }
    // return(
    //     <div>
    //         <input 
    //         type="file"
    //         onChange={handlePreviewAvt}
    //         />{avatar && (
    //             <img 
    //             multiple
    //             src={avatar.preview} 
    //             width="80%"/>
    //         )}
    //     </div>
    // )
}

// vận dụng useEffect hiểu hơn về cách thức cmt giữa các bài học
function ContentCMT() {
    // // cho một mảng mô phỏng việc chuyển trang khi cmt
    // const lessons = [
    //     {id: 1, name: 'Bài số 1 nè học đi!'},
    //     {id: 2, name: 'Bài số 2 nè học đi!'},
    //     {id: 3, name: 'Bài số 3 nè học đi!'},
    // ]
    // const [lessonId,setLessonId] = useState(1)
    // useEffect(() => {
    //     const handleComment = ({detail}) => {
    //         console.log(detail);
    //     }
    //     window.addEventListener(`lesson-${lessonId}`,handleComment);

    //     return() => {
    //         window.removeEventListener(`lesson-${lessonId}`,handleComment);
    //     }
    // },[lessonId])
    // return (
    //     <div>
    //         <ol>
    //             {lessons.map(lesson =>{
    //                 return <li 
    //                 key={lesson.id}
    //                 style={{ background: lessonId === lesson.id ? 
    //                 'red' : 'white'}}
    //                 onClick={() => setLessonId(lesson.id)}
    //                 >{lesson.name}</li>
    //             })}
    //         </ol>
    //     </div>
    // )
}

// học useLayoutEffect và khi nào cần sử dụng nó
// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback
// uselayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi uselayoutEffect callback (sync)
// 5. Render lại UI
function Content() {

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3){
            setCount(0)
        }
    },[count])
    const handleRun = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}
export default Content
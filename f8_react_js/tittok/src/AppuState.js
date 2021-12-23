import './App.css';
import {useState} from 'react'

//học hook useState
function AppVideo25() {
// const price = [100,200,300]
//   // const ranNumber = Math.random()

//   const [counter,setCounter] = useState(
//     {
//       name:"Nhut",
//       age:"18",
//     }
//   );
//     // () => {
//     // const total = price.reduce((acc, cur) => {
//     //   return acc + cur;
//     // })
//     // console.log(total)
//     // return total;}
//   function handleUpdate(){
//     // setCounter(ranNumber * 5)
//     //ta muon thay the obj cu
//     setCounter({
//       sdt:"0123"
//     })
//   }
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(counter)}</h1>
//       <button onClick={handleUpdate}>Update Count</button>
//     </div>
//   );
}

//ứng dụng hook useState làm random nhận quà
function AppRandomGift() {
  // const listGift = [
  //   "1 iphone 13 pro max",
  //   "1 macbook 2021",
  //   "1 cái nịt",
  //   "Chúc mừng, không trúng cái nịt"
  // ];
  // const [gift,setGift] = useState();
  // //hàm để xử lí random quà
  // function handleGiftRandom(){
  //    const index = Math.floor(Math.random() * listGift.length);
  //    setGift(listGift[index])
  // }
  // return (
  //   <div className="App">
  //     <h1>{gift || "Chưa nhận được món quà nào"}</h1>
  //     <button onClick={handleGiftRandom}>Click nhận quà</button>
  //   </div>
  // )
}

//one way binding
function AppOnewayBinding() {
  // const [name,setName] = useState('');
  // console.log(name)
  // return(
  //   <div className="App">
  //     <input type="text"
  //       onChange={ e => setName(e.target.value)}
  //     />
  //     <button onClick={ () => setName('ahihi Nhut dep trai')}>Click me</button>
  //   </div>
  // )
}
//two way binding (text box)
function AppTextBox() {
  // const [name,setName] = useState('');
  // const [email,setEmail] = useState('');
  // const handleSignUp = () => {

  //   console.log("Ten:",name,"\nEmail:",email)
  // }
  // return(
  //   <div className="App">
  //     <input type="text"
  //       value={name}
  //       onChange={ e => setName(e.target.value)}
  //     />
  //     <input type="text"
  //       value={email}
  //       onChange={ e => setEmail(e.target.value)}
  //     />
  //     <button onClick={handleSignUp}>Create account</button>
  //   </div>
  // )
}
//two way binding (radio)
function AppRadio() {
  // const courses = [
  //   {id:1,name: 'Khóa C++'},
  //   {id:2,name: 'Khóa Javascript'},
  //   {id:3,name: 'Khóa Ruby'},
  // ]
  // const [name,setName] = useState();
  // const handleSubmit = () => {
  //   console.log(name)
  // }
  // return(
  //   <div style={{padding: '30px'}}>
  //     {courses.map((course)=>{
  //       return (
  //         <div key={course.id}>
  //           <input
  //             type="radio"
  //             checked={name === course.id}
  //             onChange={()=>setName(course.id)}
  //           />
  //           {course.name}
  //         </div>
  //         )
  //       })
  //     }
  //     <button onClick={handleSubmit}>Submit</button>
  //   </div>
  // )
}
//two way binding (check box)
function AppCheckoBox() {
  // const courses = [
  //   {id:1,name: 'Khóa C++'},
  //   {id:2,name: 'Khóa Javascript'},
  //   {id:3,name: 'Khóa Ruby'},
  // ]
  // const [checked,setChecked] = useState([]);
  // const handleCheck = (id) => {
  //   setChecked(pre =>{
  //       const isChecked = checked.includes(id);
  //       if(isChecked){
  //         //unchecked nếu check lại id đã có trong checked
  //         return checked.filter(item => item !== id);
  //       }else{
  //         return [...pre,id]
  //       }
  //     }
  //   )
  // }
  // const handleSubmit = () => {
  //   const itemChecked = document.querySelector('.list-checked')
  //   console.log(checked,itemChecked); 
  // }
  // return(
  //   <div style={{padding: '30px'}}>
  //     {courses.map((course)=>{
  //       return (
  //         <div key={course.id}>
  //           <input
  //             type="checkbox"
  //             checked={checked.includes(course.id)}
  //             onChange={()=>handleCheck(course.id)}
  //           />
  //           {course.name}
  //         </div>
  //         )
  //       })
  //     }
  //     <button onClick={handleSubmit}>Submit</button>
  //     <ul className="list-checked">

  //     </ul>
  //   </div>
  // )
}
//todo list with useState
function App(){
  const [job,setJob] = useState();
  
  //save new job to array
  const [jobs,setJobs] = useState(() => {
    var getJsonJob = JSON.parse(localStorage.getItem('job'));
    return getJsonJob ?? [];
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJob = [...prev,job];

      //save new job in localStorage
      const setJsonJobs = JSON.stringify(newJob);
      localStorage.setItem("job", setJsonJobs)
      // console.log(newJob);
      return newJob;
    })
    setJob('')
  }
  const handleDelete = (idx) => {
    setJobs(() => {
      const data = jobs.filter((job, index) => {
        return index !== idx;
      });
      localStorage.setItem("job", JSON.stringify(data));
      return data;
    });
  }
  return (
    <div style={{padding: '20px'}}>
      <input
        required
        type="text"
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add work</button>

      <ol style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column'
        }}>
        {jobs.map((job,index) => (
        <li key={index}>
          {job}
          <button 
            onClick={() => handleDelete(index)}
            style={{float: 'right'}}
            >Delete</button>
        </li>
        ))}
      </ol>
    </div>
  )
}
export default App;

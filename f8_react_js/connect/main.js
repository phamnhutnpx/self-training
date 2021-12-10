// const h1 = document.createElement('h1')
// h1.innerText = 'hello ae'
// console.log(h1);

// //video 10 + 11 - bài 7 render ra giao diện HTML
// const postItem = React.createElement('div', {
//         className: 'post-item'
//     },
//     React.createElement('h2', {
//         title: "Học lập trình tại F8"
//     }, 'Học ReactJS'),
//     React.createElement('p', null, 'Học ReactJS từ cơ bản đến nâng cao')
// )
// const root = document.querySelector('#root');
// //render react ra giao diện HTML
// ReactDOM.render(postItem, root);

// video 11 - bài tập 5 + 6 render ra UI
//Bài 5
// const h1 = React.createElement('h1', {
//             title: 'Hello',
//             className: 'Heading'
//         },
//         'Hello guys!'
//     )
//     //bài 6
// const ul = React.createElement('ul', null,
//     React.createElement('li', null, 'Javascript'),
//     React.createElement('li', null, 'ReactJS')
// )
// const rootB5B6 = document.querySelector('#root');
// ReactDOM.render(ul, rootB5B6)

//sử dụng babel
// const root = document.querySelector('#root');
// const objCourses = [
//     {name:"Html css js"},
//     {name:"Js nâng cao"},
//     {name:"ReactJs cơ bản"},

// ];
// const h1 = 
// <ul>
//     {objCourses.map((nameCourses,index) => {
//      return   <li key={index}>{nameCourses.name}</li>
//     })}
// </ul>
// ReactDOM.render(h1, root);

//Bài tập video 13
//cách viết tách ra từng component
//hiển thị 3 thành phần 1 trang web header, content, footer
// function Header(){
//     return <div className="header">I am a header</div>
// }
// function Content(){
//     return <div className="content">I am a content</div>
// }
// //giả bộ cái này sử dụng bằng class thay function cho nó ngầu nhé
// class Footer extends React.Component{
//     render() {
//         return (<div className="footer">I am a footer</div>)
//     }
// }
// const app = (
//     <div className="wrapper">
//         <Header/>
//         <Content/>
//         <Footer/>
//     </div>
// )
// const root = document.querySelector('#root');
// ReactDOM.render(app,root)

//Bài tập video 14
// function PostItem(){
//     return (
//         <div className="container">
//             <img src="https://cdn.fullstack.edu.vn/f8-learning/courses/2.png" alt="img post"/>
//             <h2 className="post-title">C#,(.NET) - Tương tác với F8</h2>
//             <p className="description">Bạn có kiến thức nền hoặc không</p>
//             <p className="post-publish">5 ngày trước. Một 1 đọc</p>
//         </div>
//     )
// }
// const app = (
//     <div className="wrapper">
//         <PostItem/>
//         <PostItem/>
//         <PostItem/>
//     </div>
// )
// const root = document.querySelector('#root');
// ReactDOM.render(app, root);

//bài tập video 15 sử dụng mảng trực tiếp

// const apiCourses= [
//     {
//       "id": 2,
//       "title": "HTML, CSS từ Zero đến Hero",
//       "slug": "html-css",
//       "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
//       "thumbnail": "courses/2.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "R6plN3FvzFY",
//       "preview_path": null,
//       "language": "html",
//       "syntax_highligh": "language-html",
//       "level": "Trình độ cơ bản",
//       "priority": 10,
//       "students_count": 89525,
//       "deleted_at": null,
//       "created_at": "2020-04-10T14:23:13.000000Z",
//       "updated_at": "2021-12-09T02:09:39.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png"
//     },
//     {
//       "id": 1,
//       "title": "JavaScript Cơ Bản",
//       "slug": "javascript-co-ban",
//       "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
//       "thumbnail": "courses/1.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "0SJE9dYdpps",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-javascript",
//       "level": "Trình độ cơ bản",
//       "priority": 30,
//       "students_count": 55439,
//       "deleted_at": null,
//       "created_at": "2020-06-10T14:23:13.000000Z",
//       "updated_at": "2021-12-09T02:07:36.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png"
//     },
//     {
//       "id": 7,
//       "title": "Kiến Thức Nhập Môn",
//       "slug": "lessons-for-newbie",
//       "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
//       "thumbnail": "courses/7.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "M62l1xA5Eu8",
//       "preview_path": null,
//       "language": null,
//       "syntax_highligh": null,
//       "level": "Trình độ cơ bản",
//       "priority": 0,
//       "students_count": 42277,
//       "deleted_at": null,
//       "created_at": "2020-02-10T14:23:13.000000Z",
//       "updated_at": "2021-12-09T02:08:26.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png"
//     },
//     {
//       "id": 3,
//       "title": "Responsive Với Grid System",
//       "slug": "responsive-web-design",
//       "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
//       "thumbnail": "courses/3.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "uz5LIP85J5Y",
//       "preview_path": null,
//       "language": "html",
//       "syntax_highligh": "language-html",
//       "level": "Trình độ cơ bản",
//       "priority": 20,
//       "students_count": 16245,
//       "deleted_at": null,
//       "created_at": "2020-05-10T14:23:13.000000Z",
//       "updated_at": "2021-12-09T01:48:25.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png"
//     },
//     {
//       "id": 6,
//       "title": "Node & ExpressJS",
//       "slug": "nodejs",
//       "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
//       "thumbnail": "courses/6.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "z2f7RHgvddc",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-javascript",
//       "level": "Trình độ cơ bản",
//       "priority": 32,
//       "students_count": 14135,
//       "deleted_at": null,
//       "created_at": "2020-08-01T14:23:13.000000Z",
//       "updated_at": "2021-12-09T01:49:27.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png"
//     },
//     {
//       "id": 5,
//       "title": "HTML, CSS Tips & Tricks",
//       "slug": "html-css-tutorials",
//       "description": "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
//       "thumbnail": "courses/5.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "nB6cJh_bb1U",
//       "preview_path": null,
//       "language": "html",
//       "syntax_highligh": "language-html",
//       "level": "Trình độ cơ bản",
//       "priority": 40,
//       "students_count": 10705,
//       "deleted_at": null,
//       "created_at": "2020-03-10T14:23:13.000000Z",
//       "updated_at": "2021-12-09T02:02:32.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png"
//     },
//     {
//       "id": 13,
//       "title": "Xây Dựng Website với ReactJS",
//       "slug": "reactjs",
//       "description": "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
//       "thumbnail": "courses/13/13.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "x0fSBAgBrOQ",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-jsx",
//       "level": "Trình độ trung bình",
//       "priority": 0,
//       "students_count": 10087,
//       "deleted_at": null,
//       "created_at": null,
//       "updated_at": "2021-12-09T02:01:10.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png"
//     },
//     {
//       "id": 12,
//       "title": "JavaScript Nâng Cao",
//       "slug": "javascript-nang-cao",
//       "description": "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
//       "thumbnail": "courses/12.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "MGhw6XliFgo",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-javascript",
//       "level": "Trình độ nâng cao",
//       "priority": 31,
//       "students_count": 9060,
//       "deleted_at": null,
//       "created_at": "2021-04-03T14:23:13.000000Z",
//       "updated_at": "2021-12-09T02:08:38.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/12.png"
//     },
//     {
//       "id": 4,
//       "title": "App \"Đừng Chạm Tay Lên Mặt\"",
//       "slug": "tool-canh-bao-so-len-mat",
//       "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
//       "thumbnail": "courses/4/61a9e9e701506.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "r6GWbQL-qwA",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-javascript",
//       "level": "Trình độ cơ bản",
//       "priority": 50,
//       "students_count": 3831,
//       "deleted_at": null,
//       "created_at": "2020-01-10T14:23:13.000000Z",
//       "updated_at": "2021-12-08T17:31:43.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/4/61a9e9e701506.png"
//     },
//     {
//       "id": 14,
//       "title": "Làm việc với Terminal & Ubuntu",
//       "slug": "windows-terminal-wsl",
//       "description": "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
//       "thumbnail": "courses/14/61a89fb15f2fb.png",
//       "content": null,
//       "preview_origin": "youtube",
//       "preview_youtube_id": "7ppRSaGT1uw",
//       "preview_path": null,
//       "language": "javascript",
//       "syntax_highligh": "language-shell",
//       "level": "Trình độ trung bình",
//       "priority": 51,
//       "students_count": 397,
//       "deleted_at": null,
//       "created_at": "2021-12-01T12:08:12.000000Z",
//       "updated_at": "2021-12-09T01:58:47.000000Z",
//       "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/14/61a89fb15f2fb.png",
//       "frame_ytb":"https://www.youtube.com/embed/ypvjxw5qBK0"
//     }
//   ]
//get cái data từ api ra
// function getCourse(callback) { 
//     fetch(apiCoursesF8)
//     .then((response) => {
//         return response.json();
//     })
//     .then(callback)
// }
// function CoursesF8() { 
//     getCourse.map((course) =>{ 
//         return (
//             <div className="course-item">
//                 <image src={course.thumbnail_cdn}/>
//                 <h2>{course.title}</h2>
//                 <p>{course.description}</p>
//                 <p>{course.students_count}</p>
//             </div>
//         )
// })
// }
// const app = (
//     <div className="wrapper">
//         <CoursesF8/>
//     </div>
// )

// ReactDOM.render(app, document.querySelector('#root'))
// const CourseItem = props => (
//      <div className="course-item">
//         <h2>{props.title}</h2>
//         <img src={props.image}/>
//         <p>{props.description}</p>
//         <p>Số lượng học viên:{props.studentsCount}</p>
//     </div>
// )
// const App = () => (
//     <div className="wrapper">
//         {apiCourses.map(course =>(
//             <CourseItem
//                 key={course.id}
//                 title={course.title}
//                 image={course.thumbnail_cdn}
//                 description={course.description}
//                 studentsCount={course.students_count}
//             />
//         ))}
//     </div>
// )
// ReactDOM.render(<App/>, document.querySelector('#root'))

//Bài tập video 15 sử dụng api để gọi
const apiCourses = 'https://api-gateway.fullstack.edu.vn/api/courses/featured';
const getCourse = callback => {
    fetch(apiCourses)
    .then((response) => {
        return response.json();
    })
    .then(callback)
}

const CourseItem = props => (
     <div className="course-item">
        <h2>{props.title}</h2>
        <img src={props.image}/>
        <p>{props.description}</p>
        <p>Số lượng học viên:{props.studentsCount}</p>
        <iframe width="460" height="259" src="https://www.youtube.com/embed/`${props.frameYtb}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
)

const App = ({data}) => {
    const props = (
        <div className="wrapper">
        {data.map(course =>(
            <CourseItem
                key={course.id}
                title={course.title}
                image={course.thumbnail_cdn}
                description={course.description}
                studentsCount={course.students_count}
                frameYtb={course.preview_youtube_id}
            />
        ))}
    </div>
    )
    ReactDOM.render(props, document.querySelector('#root'))
}
getCourse(App)
///////////////////////////////
// const APICourses = "https://api-gateway.fullstack.edu.vn/api/courses/featured"

// function getCourses(callback) {
//     fetch(APICourses)
//         .then(response => response.json()) 
//         .then(callback)
// }
// function Course({ title, description, level, image }) {
//     return (
//         <div className="course">
//             <img src={image}/>
//             <h1 className="course-title">{title}</h1>
//             <p className="course-desc">{description}</p>
//             <p className="course-level">{level}</p>
//         </div>
//     )
// }
// function App({ data }) {
//     const list = (
//         <div className="courses-list">
//             {data.map(course => 
//                 <Course
//                     key={course.id}
//                     title={course.title}
//                     description={course.description}
//                     level={course.level}
//                     image={course.thumbnail_cdn}
//                 />
//             )}
//         </div>
//     )
//     ReactDOM.render(list, document.getElementById('root'))
// }

// getCourses(App)

//----------------------------DOM
//----------------------------DOM event
//----------------------------json
//----------------------------promise

/**
 * Lý thuyết
 * -Là một khái niệm sinh ra để xử lí bất đồng bộ (Asyn)
 * Trước khi có Promise thì ta dùng Callback lồng nhau để xử lí tuy nhiên nó sẽ sinh ra Callback hell nên làm cho code khó nhìn, khó sửa chữa, khó đọc, so deep
 * ==> sinh ra promise ở ES6 để giải quyết cái vấn đề này
 * 
 * - Để tạo ra Promise thì ta dùng từ khóa new giống như tạo một Object constructor --> lúc này bên trong nó ta sẽ thực thi code dạng hàm (hay được gọi là executor) và gồm 2 tham số được sử dụng như sau:
 *  T1: resolve : được thực thi khi thao tác xử lí logic của ta thành công
 *  T2: reject : được thực thi khi thao tác xử lí logic của ta thất bại
 * 
 * Khi sử dụng Promise thì đối tượng Promise được tạo ra chúng ta sẽ sử dụng qua những phương thức là .then() hoặc .catch(). then và catch đều nhận những callback function, nó sẽ thực thi vào .then khi Promise của chúng ta được resolve() và sẽ lọt vào .catch khi mà Promise của chúng ta được reject()
 * 
 * Có 3 trạng thái promise:
 * -Pending:chờ xử lí
 * -Fulfilled:hoàn thành
 * -Rejected:từ chối
 */

//tự viết demo promise
// var demoPromise = new Promise(
//     function(resolve, reject) {
//         resolve();
//     }
// );
// demoPromise
//     .then(function() {
//         console.log('Success!');
//     })
//     .catch(function() {
//         console.log('Fail!')
//     })
//     .finally(function() {
//         console.log('Done!')
//     })

//Promise chain
//Promise example
/**
 * Ý tưởng bài tập
 * Dùng promise để thông báo khi lấy data từ mảng trả về 
 * giao diện HTML
 * Cụ thể: Hiển thị tên người dùng và cmt của người đó
 * Ý tưởng thực hiện bài toán:
 * - So sánh 2 userId từ 2 mảng để lấy ra nội dung mong muốn
 * - Sử dụng forEach để duyệt mảng để lấy được data
 * - 
 */
// var UserList = [{
//         user_id: 1,
//         user_name: 'Nhut Pham',
//     },
//     {
//         user_id: 2,
//         user_name: 'Son Dang',
//     },
//     {
//         user_id: 3,
//         user_name: 'Van A',
//     },
// ]
// var CommentList = [{
//         cmt_id: 1,
//         user_id: 1,
//         cmt_content: 'Alo a chai khoe khong',
//     },
//     {
//         cmt_id: 2,
//         user_id: 2,
//         cmt_content: 'Khoe em. E sao',
//     },
//     {
//         cmt_id: 3,
//         user_id: 1,
//         cmt_content: 'Em khoe nhu voi lun',
//     },
//     {
//         cmt_id: 4,
//         user_id: 3,
//         cmt_content: 'khong biet noi gi',
//     },
// ]

//fake API để get data từ mảng ra

//Lọc ra user thông qua ID ở trong UserList
// function getUsersById(userIds) {
//     return new Promise((resolve) => {
//         var result = UserList.filter((userId) => {
//             return userIds.includes(userId.user_id)
//         })
//         resolve(result);
//         console.log(result)
//     })
// }
// // 


// function getComments() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(CommentList);
//         }, 1000)
//     })
// }


// getComments()
//     .then((CommentList) => {
//         //Lấy id user ở trong cmt ra so sánh
//         var userIds = CommentList.map((comment) => {
//             return comment.user_id;
//         })
//         return getUsersById(userIds)
//             .then((UserList) => {
//                 return {
//                     UserList: UserList,
//                     CommentList: CommentList,
//                 }
//             })
//     })
//     .then((data) => {
//         var commentBlock = document.getElementById('comment_block');
//         var htmls = '';

//         data.CommentList.forEach((comment) => {
//             var user = data.UserList.find((user) => {
//                 return user.user_id === comment.user_id;
//             })
//             htmls += `<li>${user.user_name}:${comment.cmt_content}</li>`;
//         });
//         commentBlock.innerHTML = htmls;
//     })



//////////////////////////////////////////
// const users = [{
//         id: 1,
//         name: "phan hieu",
//         from: "viet nam",
//     },
//     {
//         id: 2,
//         name: "banh bao",
//         from: "mỹ",
//     },
//     {
//         id: 3,
//         name: "dưa hấu",
//         from: "lào",
//     },
// ];
// const comment = [{
//         id: 1,
//         userId: 1,
//         content: "xin chào các bạn mình là hiếu đến từ việt nam",
//     },
//     {
//         id: 2,
//         userId: 2,
//         content: "xin chào bạn hiếu bạn có thế cho mình hỏi vài câu hỏi được không ",
//     },
//     {
//         id: 3,
//         userId: 1,
//         content: "được nha bạn cứ hỏi đi nếu mình biết mình có thể giúp bạn ",
//     },
//     {
//         id: 4,
//         userId: 2,
//         content: "bạn cho mình hỏi bài này có khó không ạ",
//     },
//     {
//         id: 5,
//         userId: 3,
//         content: "không"
//     },
// ];
// const ul = document.getElementById("comment_block");
// // sủ lý lấy comment
// function getComment() {
//     return new Promise((resolve) => {
//         setTimeout(resolve(comment), 1000);
//     });
// }

// getComment()
//     .then((comment) => {
//         const userId = comment.map((item) => {
//             return item.userId;
//         });

//         const user = users.filter((user) => {
//             return userId.includes(user.id);
//         });
//         return {
//             user: user,
//             comment: comment,
//         };
//     })
//     .then((data) => {
//         const html = data.comment
//             .map((comment) => {
//                 const human = data.user.find((user) => {
//                     return user.id === comment.userId;
//                 });
//                 return `<li>${human.name} from :<span style="color:red">${human.from}</span>: ${comment.content}</li>`;
//             })
//             .join("");

//         ul.innerHTML = html;
//     });

//////////////////////////////fetch
//demo lấy API thực tế về show lên cho đẹp
// var varUserApi = 'https://jsonplaceholder.typicode.com/users';
// var varCmtApi = 'https://jsonplaceholder.typicode.com/comments';

// const ul = document.getElementById("comment_block");

// fetch(varUserApi)
//     .then((response) => {
//         return response.json();
//     })
//     // .then((users) => {
//     //     console.table(users);
//     // })


// fetch(varCmtApi)
//     .then((response) => {
//         return response.json();
//     })
//     // .then((comments) => {
//     //     console.table(comments);

// // })

// .then((comment) => {
//         const userId = comment.map((item) => {
//             return item.userId;
//         });

//         const user = users.filter((user) => {
//             return userId.includes(user.id);
//         });
//         return {
//             user: user,
//             comment: comment,
//         };
//     })
//     .then((data) => {
//         const html = data.comment
//             .map((comment) => {
//                 const human = data.user.find((user) => {
//                     return user.id === comment.userId;
//                 });
//                 return `<li>${human.name} from :<span style="color:red">${human.from}</span>: ${comment.body}</li>`;
//             })
//             .join("");

//         ul.innerHTML = html;
//     });


//////////////////////////////////
// var postApi = "https://jsonplaceholder.typicode.com/posts";
// var usersApi = "https://jsonplaceholder.typicode.com/users";

// var fetchPosts = fetch(postApi).then(function(response) {
//     return response.json();
// });

// var fetchUsers = fetch(usersApi).then(function(response) {
//     return response.json();
// });

// Promise.all([fetchPosts, fetchUsers])
//     .then(function(result) {
//         var posts = result[0];
//         var users = result[1];
//         var htmls = posts.map(function(post) {
//             var user = users.find(function(user) {
//                 return user.id === post.userId;
//             });
//             return `<tr>
//             <th>${user.name} (${user.phone})</th>
//             <td>${post.title}</td>
//             <td>${post.body}</td>
//     </tr>`;
//         });
//         var html = htmls.join("");
//         return html;
//     })
//     .then(function(html) {
//         var postsBlockElement = document.getElementById("comment_block");
//         postsBlockElement.innerHTML = html;
//     });



/////////////////////json server
// var commentApi =
//     'http://localhost:3000/songs';
// fetch(commentApi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((song) => {
//         console.log(song[0].name);
//     })

// let headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.io)"
// }

// fetch("http://localhost:3000/posts", {
//     method: "GET",
//     headers: headersList
// }).then(function(response) {
//     return response.text();
// }).then(function(data) {
//     console.log(data);
// })


////////////////////////////////////////////////////////////////////////////
// Test API tỉnh thành, quận huyện, xã Việt Nam
// var citys = 'https://provinces.open-api.vn/api/'
// var districts = 'https://provinces.open-api.vn/api/d/'
// var wards = 'https://provinces.open-api.vn/api/w/'

// function startProvince() {
//     getCitysApi(renderCityApi)
//     getDistricts(renderDistrictsApi)
//     getWards(renderWardsApi)
// }

// startProvince()

// function getCitysApi(callBack) {
//     fetch(citys)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(callBack)
// }

// function getDistricts(callBack) {
//     fetch(districts)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(callBack)
// }

// function getWards(callBack) {
//     fetch(wards)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(callBack)
// }

// function renderCityApi(citys) {
//     var listCitys = document.querySelector('[name="city"]')
//     var opt = '<option selected="true" disabled="true" >Tỉnh thành...</option>'
//     var htmls = citys.map((citys) => {
//         return `
//             <option value="${citys.code}">${citys.name}</option>
//         `
//     })
//     htmls.join('')
//     opt += htmls
//     listCitys.innerHTML = opt

// }

// function renderDistrictsApi(districts) {
//     var onChange = document.querySelector('[name="city"]');
//     onChange.addEventListener('change', function(e) {
//         var listDistricts = document.querySelector('[name="district"]')
//         var result = districts.filter((districts) => {
//             return districts.province_code == e.target.value
//         })
//         var htmls = result.map((districts) => {
//             return `
//                 <option>${districts.name}</option>
//             `
//         })

//         listDistricts.innerHTML = htmls.join('')
//     })


// }
// //còn fail chưa xử lí render ra UI xã
// function renderWardsApi(wards) {
//     var onChange = document.querySelector('[name="district"]');

//     onChange.addEventListener('change', (e) => {
//         var listWards = document.querySelector('[name="wards"]')
//         var result = wards.filter((wards) => {
//             return wards.district_code == e.target.value
//         })
//         var htmls = result.map((wards) => {
//             return `
//         <option>${wards.name}</option>`
//         })

//         listWards.innerHTML = htmls.join('');
//     })

// }

////////////////////////////////////////////////////////////////////////
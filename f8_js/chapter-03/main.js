// 29. số và làm việc với số
// var ask = confirm('".$message."');

// function answer() {
//     if (ask == false) {
//         return false;
//     } else {
//         return true;
//     }
// }
// console.log("ask : ", ask);
// console.log("answer : ", answer());

//test change content class in HTML
// function changeContentClass() {
//test_class
// var change = document.getElementsById("test_class");
// var i;
// if (i = 0; i < change.length; i++) {

// change.style.color = "red";
// document.getElementsById("test_id").style.color = "#fff";
// }
// }

// var lang = [

// ]
// if (lang.length == 0) {
//     console.log(lang.push("Cat", "Mouse"));
//     console.log(lang.shift());
// } else {
//     if (lang.length == 3) {
//         console.log(lang)
//     }
// }

// console.log(lang.tostring()); //conver array to string
// console.log(lang.join("/")); //insert characters between element of array
// console.log(lang.pop()); //delete element end array && return this element
// console.log(lang.push("")); //insert element end array && return new lenght array
// console.log(lang.shift()); //delete element first array && return this element
// console.log(lang.unshift("Ruby")) //insert element first array && return new lenght array
// console.log(lang.sort());
// console.log(lang.toLocaleString().length);
// console.log(lang.splice());
// console.log(lang.slice(-2))

/**
 *     - toString: chuyển sang kiểu string

    - join: can thiệp vào giữa các phần tử trong mảng và chuyển sang kiểu string

    - pop: xóa phần tử cuối mảng,
           trả về phần tử đã xóa
    
    - shift: xóa phần tử đầu mảng,
             trả về phần tử đã xóa

    - push: thêm 1 hoặc nhiều phần tử vào cuối mảng,
            trả về đọ dài mới của mảng
    
    - unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng,
               trả về đọ dài mới của mảng

    - splice: xóa và chèn thêm phần tử vào mảng
        + splice(vị trí bắt đầu xóa, xóa bn phần tử từ vị trí bắt đầu, chèn phần tử vào vị trí bắt đầu)
    
    - concat: nối array
        + array1.concat(array2) 

    - slice: cắt 1 hoặc nhiều phàn tử của mảng
        + slice(vị trí bắt đầu cắt, vị trí dừng cắt) 

 */
// function run(animals) {

//     if (animals.length == 0) {
//         animals.push("Cat", "Mouse");
//     } else if (animals.length == 1) {
//         animals.unshift("Elephant");
//     } else if (animals.length > 2) {

//         animals.splice(2, "Monkey", "Tiger")
//     }
//     return animals;
// }

///////////////////////////////////
//vòng lặp for/in
// var language = [
//     eng1 = "Js",
//     eng2 = "PHP",
//     eng3 = "Html"
// ]
// for (var key in language) {
//     console.log(key);
// }

//tách giá trị của mảng
//vòng lặp for/of
// var language = [
//     eng1 = "Js",
//     eng2 = "PHP",
//     eng3 = "Html"
// ]

//tách chuỗi ra từng kí tự
// var language = "hel.lo chim be";
// var language = {
//         key1: "hihi",
//         key2: "ok"
//     }
// getLang = Object.keys(language);
// for (var value of getLang) {
//     console.log(language[value]);
// }

//vòng lặp while
// var i = 0;
// var lang = Object.keys(language);
// // console.log(lang)
// while (i < lang.length) {
//     console.log(lang[i]);
//     i++;
// }

//vòng lặp do-while
/**
 * Tôi muốn kiểm tra việc nhập pass. nhập lần đầu nếu thành công thi các lần sau false. còn lần đầu mà sai thì cho nhập 3 lần nữa
 */
// var i = 0;
// var login = true;
// do {
//     i++;
//     console.log('Lần nhập thứ ' + i);
//     if (true) {
//         login = false;
//         continue;
//     }
// } while (login && i < 4);

///////////////////////Làm việc với mảng phần 2///////////////
/**array method
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */
// var student = [{
//             id: 1,
//             code: "7960927912",
//             fullName: "NGUYỄN QUANG A",
//             phoneNumber: "1900123213"
//         },
//         {
//             id: 2,
//             code: "7960927913",
//             fullName: "NGUYỄN QUANG B",
//             phoneNumber: "1900123213"
//         },
//         {
//             id: "A",
//             code: "7960927914",
//             fullName: "NGUYỄN QUANG C",
//             phoneNumber: "1900123213"
//         },
//         {
//             id: 4,
//             code: "7960927915",
//             fullName: "NGUYỄN QUANG C",
//             phoneNumber: "1900123213"
//         }
//     ]
//duyệt qua các phần tử trong mảng
// student.forEach(function(Student, index) {
//     console.log(index, Student)
// })

//duyệt qua các phần tử trong mảng
//trả về kết quả true/false (giống phép &&)
// var checkPhoneNumber = student.every(function(Student, index) {
//     return Student.phoneNumber === "1900123213";
// })
// console.log(checkPhoneNumber);

//duyệt qua các phần tử trong mảng
//trả về kết quả true/false (giống phép ||)
// var checkTypeId = student.some(function(Student, index) {
//     return Student.id === "A";
// })
// console.log(checkTypeId);

//duyệt qua các phần tử trong mảng
//trả về giá trị tìm kiếm (nhưng trả có 1 nếu trùng)
// var findName = "NGUYỄN QUANG C";
// var findNameStudent = student.find(function(Student, index) {
//     return Student.fullName === findName;
// })
// console.log(findNameStudent);

//duyệt qua các phần tử trong mảng
//trả về giá trị tìm kiếm (có trùng cũng trả về hết)
// var findName = "NGUYỄN QUANG C";
// var findNameStudent = student.filter(function(Student, index) {
//     return Student.fullName === findName;
// })
// console.log(findNameStudent);


// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]
// var user = {};

// function getUser(val) {

//     user[val.field] = val.value;

//     console.table(user)
// }
// formValues.forEach(getUser)


// var date = new Date();
// document.getElementById('test_id') === date;
// setTimeout(date, 10);

// document.write(date);
//////////////////////////////////////tính tiền order nhờ map&&reduce
// var order = [{
//     tensp: "balo",
//     soluong: 2,
//     gia: 30
// }, {
//     tensp: "but",
//     soluong: 1,
//     gia: 20
// }, {
//     tensp: "vở",
//     soluong: 2,
//     gia: 10
// }]
// var totalOne = order.map(function(sumOne) {
//     var onePrice = sumOne.soluong * sumOne.gia;
//     document.write("Tổng tiền", sumOne.tensp, "là: ", onePrice, "$<br>")
//     return onePrice;
// })
// var totalOrder = totalOne.reduce(function(a, b) {

//     return a + b;
// })
// document.write("Tổng số tiền cần trả là: ", totalOrder, "$");

////////////////////////////////////////////////////////
// var orders = [
//     { name: 'A', quantity: 2, unitPrice: 100 },
//     { name: 'B', quantity: 6, unitPrice: 150 },
//     { name: 'C', quantity: 5, unitPrice: 20 },
//     { name: 'D', quantity: 1, unitPrice: 500 },
// ];

// var oneCart = orders.map(function(piece) {
//     var priceOfPiece = piece.quantity * piece.unitPrice;
//     console.log('Giá của món', piece.name, 'là:', priceOfPiece);
//     return priceOfPiece;
// });

// var allCart = oneCart.reduce(function(price_1, price_2) {
//     return price_1 + price_2;
// });

// console.log('Tổng giá tiền:', allCart);

///////////////////////////////////tự tạo hàm reduce 
// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0;
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     Leng = this.length;
//     for (; i < Leng; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result;
// }

// const sttNumber = [1, 2, 3, 4, 5];

// function callback(total, number, index, array) {
//     console.log(total, number, index, array);
//     return total + number;
// }
// var sumArr = sttNumber.reduce2(callback)
// console.log(sumArr)

///////////////////////////Tự định nghĩa ra filter
// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }

//     }
//     return output;

// }


// const order = [{
//     tensp: "balo",
//     soluong: 2,
//     gia: 30
// }, {
//     tensp: "but",
//     soluong: 1,
//     gia: 20
// }, {
//     tensp: "vở",
//     soluong: 2,
//     gia: 10
// }]
// var viewProduct = order.filter2(function(listProduct) {
//     return listProduct.gia > 15;
// })
// console.log(viewProduct);

///////còn lại tự định nghĩa : every, some, forEach
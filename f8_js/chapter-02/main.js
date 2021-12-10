// -------------Bài 11: các dạng built-in
// var fullName = 'Pham Nhut'
// alert(fullName)
// confirm(fullName);
// prompt(fullName);
// console.log(fullName)
// console.warn(fullName)
// console.error(fullName)
// setTimeout(function() {
//     alert(fullName)
// }, 1000)
// setInterval(function() {
//     console.log(Math.random())
// }, 1000)

// -------------Bài 12: Các toán tử
/*các dạng toán tử gán như sau:
-toán tử số học
-toán tử gán
-toán tử so sánh
-toán tử logic */

// toán tử số học
// var a = 3;
// var b = 4;
// c = a - b;
// console.log('kết quả trả về c là: ' + c);

// toán tử gán
// var a = b;
// var b = c;
// var c = a;

// toán tử so sánh
// var a = 1;
// var b = a;
// var c = 2;
// if (b > c) {
//     console.log('true')
// } else {
//     alert('ngu ngoc')
// }

// toán tử logic
// var a = 1;
// var b = 2;
// if (a < b && a != 0) {
//     alert('đúng')
// } else { alert('false') }

//nhận diện toán tử cộng (việc nó cộng với chuỗi thì nó ko phải là toán tử cộng)
// var a = 30 + '15' - 3;
// console.log(a)

// -------------Bài 15: toán tử số học

//test kiến thức toán tử ++ -- prefix(tiền tố) + postfix(hậu tố)
// var a = 1,
//     b = 2;
// var temp = a++ + --b * 2 + ++a + b++;
//1 + 1 * 2 + 3 + 1 = 7
// var t1 = --b * 2 + b++; //2+1
// var t2 = a++;
// var t3 = ++a; //1+3
// console.log(t1, t2, t3);

// -------------Bài 16: toán tử gán
// var a = 3;
// a += 1;
// var t = a++ + --a; //4 + 4
// console.log(t)

// -------------Bài 17: toán tử chuỗi
// var a = 2 + 1 + '3' + 1; //331
// console.log(a)

// -------------Bài 18: toán tử so sánh
// var a = 'abc..';
// var b = 'abc.';
// if (a > b) {
//     console.log('true');
// } else {
//     console.log('false')
// }

// -------------Bài 19: toán tử boolean
// var a = 5;
// var result;
// if (a < 1) {
//     result = false;
// } else {
//     result = true;
// }
// console.log(result);

// -------------Bài 20: toán tử điều kiện
/**
 * Có 6 loại giá trị tự động trả về false
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 */
// var a = 2;
// var b = 2;
// var i1 = 1 + a++;
// var i2 = 2 - ++b + --b; //2 - 3 + 2
// console.log(i1, i2)

// var iSuccess = --a + 2; //
// var i2 = a++ - a--;
// a++; //2
// console.log(iSuccess, i2)
// var kq = iSuccess + i2;
// if (iSuccess == a) {

//     console.log(kq + ' == ' + a);
// } else {
//     console.log(kq + ' != ' + a);
// }

// -------------Bài 21: toán tử logic
/**
 * &&
 * ||
 * !
 */
// var a = 2;
// var b = ++a;
// var c = --a;
// var d = ++a;
// console.log(b, c, d)

// phương trình bậc nhất
// var a = 0;
// var b = 0;
// var x = -b / a;
// if (a == 0) {
//     if (b == 0) {
//         console.log('Pt vo nghiem');
//     } else {
//         console.log('Nghiem pt la: ' + b)
//     }
// } else {
//     console.log('Nghiem pt la: ' + x);

// }

//-------------Bài 2x: cac thao tac voi chuoi 

var title = 'Học tại F8 Javascript';

function run(title) {
    var language = title.replace(title.slice(title.search('Javascript'), title.search('Javascript') + 10), 'design')
        // var language = title.slice((title.search('avascript') - 1), (title.search('avascript') - 1) + 10);
        // var rest = title.slice((title.search('avascript')) + 10);

    // return `Language is ${language} and rest is ${rest}`;
    return language
}
console.log(run(title))
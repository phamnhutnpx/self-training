var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourse(renderCourse);
    handleCreateCourse();

}
start();

//lấy dữ liệu từ api
function getCourse(callback) {
    fetch(coursesApi)
        .then((response) => response.json())
        .then(callback)
}
//render dữ liệu đã lấy
function renderCourse(courses) {
    const listCoursesBlock = document.querySelector('#list-courses');
    const htmls = courses.map((course) => {
        return `
        <li class="border border-primary mb-3 courses-item-${course.id} " >
        <h4 id="name-${course.id}">${course.name}</h4>
        <p id="description-${course.id}">${course.description}</p>
        
        <button onclick="updateCourse(${course.id})"  class="btn btn-warning">Update</button>
        <button onclick="deleteCourse(${course.id})" id="btn-delete" class="btn btn-danger">Delete</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = htmls.join('');
}
// hàm tạo dữ liệu khóa học
function createCourse(data, callback) {
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, options)
        .then((response) => response.json())
        .then(callback)
}


// hàm cập nhật khóa học
function updateCourse(id) {
    var name = document.getElementById('name-' + id).innerText;
    var description = document.getElementById('description-' + id).innerText;
    document.querySelector('input[name="name"]').value = name;
    document.querySelector('input[name="description"]').value = description;
    // console.log(name, description);
    // Đổi tên button Từ Create → Save
    document.querySelector('#btn-create').innerText = 'Save';
    // đổi id của Nút btn-create thành id của btn-save
    document.querySelector('#btn-create').setAttribute('id', 'btn-save');

    // xét sự kiện onclick cho nút Save sau khi đổi
    oke = document.querySelector('#btn-save').setAttribute('onclick', `fnSave(${id})`);
}

function fnSave(id) {
    {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var bodyReq = { name: `${name}`, description: `${description}` }

        var options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(bodyReq)
        };

        fetch(coursesApi + '/' + id, options)
            .then(function(response) {
                var checkName =
                    document.querySelector('input[name="name"]').value;
                var checkDes =
                    document.querySelector('input[name="description"]').value;
                if ((response.status === 200) && ((checkName && checkDes) !== '')) {

                    getCourse(renderCourse);
                    // Đổi tên button Từ Submit → Save
                    document.querySelector('#btn-save').innerText = 'Create';
                    // remove onclick của nút Save và đổi id của Nút Save thành id của Submit như cũ
                    document.querySelector('#btn-save').removeAttribute('onclick');
                    document.querySelector('#btn-save').setAttribute('id', 'btn-create');
                    handleCreateCourse();
                } else
                    alert('HTTP code: ' + response.status + '\n Vui lòng không để trống!');

            })
            .catch(function(err) {
                console.log(err);
            })
    }
}
// hàm xóa khóa học
function deleteCourse(id) {
    options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(coursesApi + '/' + id, options)
        .then((response) => response.json())
        .then(() => {
            const deleteCourseItem = document.querySelector('.courses-item-' + id);
            deleteCourseItem.remove();
        })
}

//hàm xử lí các sự kiện
function handleCreateCourse() {
    const btnCreateCourse = document.querySelector('#btn-create');

    //bắt xự kiện khi nhấn nút tạo mới dữ liệu
    btnCreateCourse.onclick = () => {
        const name =
            document.querySelector('input[name="name"]').value;
        const description =
            document.querySelector('input[name="description"]').value;
        if ((name && description) === '') {
            alert('Vui lòng không để trống!');

        } else {
            //obj để đẩy dữ liệu mới vào mảng
            formData = {
                name: name,
                description: description
            }
            createCourse(formData, () => getCourse(renderCourse));

        }
    }

}
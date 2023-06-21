var studentReports = {};

function addTask() {
    var taskInput = document.querySelector('#task-input');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var studentId = prompt('Enter the student ID:');
        if (studentId !== null && studentId.trim() !== '') {
            if (!studentReports[studentId]) {
                studentReports[studentId] = [];
            }
            studentReports[studentId].push(taskText);

            taskInput.value = '';
            displayStudentReports();
        }
    }
}

function displayStudentReports() {
    var studentList = document.querySelector('#student-list');
    studentList.innerHTML = '';

    for (var studentId in studentReports) {
        if (studentReports.hasOwnProperty(studentId)) {
            var studentDiv = document.createElement('div');
            studentDiv.classList.add('student');

            var studentHeader = document.createElement('h3');
            studentHeader.textContent = 'Student ID: ' + studentId;
            studentDiv.appendChild(studentHeader);

            var reportList = document.createElement('ul');
            var tasks = studentReports[studentId];

            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var listItem = document.createElement('li');
                listItem.textContent = task;
                reportList.appendChild(listItem);
            }

            studentDiv.appendChild(reportList);
            studentList.appendChild(studentDiv);
        }
    }
}



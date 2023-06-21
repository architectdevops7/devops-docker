<!DOCTYPE html>
<html>
<head>
    <title>Student Tasks Tracker</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Welcome to the Student Tasks Tracker App</h1>

    <form id="task-form">
        <label for="task-input">Task:</label>
        <input type="text" isd="task-input">
        <button type="button" onclick="addTask()">Add Task</button>
    </form>

    <div id="students-container">
        <h2>Students</h2>

        <div id="student-list"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>



$(document).ready(function() {
    let taskId = 1;
    function addTask(taskName) {
        const li = `<li id="task-${taskId}">${taskName}</li>`;
        $('#taskList').append(li);
        taskId++;
    }

    $('#taskForm').submit(function(event) {
        event.preventDefault();
        const taskName = $('#taskInput').val().trim();
        if (taskName !== '') {
            addTask(taskName);
            $('#taskInput').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

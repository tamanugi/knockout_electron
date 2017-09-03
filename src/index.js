const ko = require('knockout')

function Viewmodel() {
    let self = this

    self.todoList = ko.observableArray([
        {summary: "hogehoge", isDone: true},
        {summary: "hogehoge", isDone: true},
        {summary: "hogehoge3", isDone: true}
    ])

    self.toggleDone = (task) => {
        let updateTask = {
            summary: task.summary,
            isDone: !task.isDone
        }

        self.todoList.replace(task, updateTask)
    }

    self.taskSummary = ko.observable('')
    self.addTask = _ => {
        let newTask = {
            summary: self.taskSummary(),
            isDone: false
        }
        
        self.todoList.push(newTask)
        self.taskSummary('')
    }
}

window.onload = _ => {
    ko.applyBindings(new Viewmodel())
}

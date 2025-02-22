<<<<<<< HEAD
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const colorChange = document.getElementById("colorButton")
const taskTimeInput = document.getElementById("task-time");

function addTask() {
    const taskText = taskInput.value.trim().toUpperCase();
    const taskTime = taskTimeInput.value.trim()


    if(taskText !== "") {
        
        const li = document.createElement("li");
      
        
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        taskTextSpan.classList.add("task-text");

        const taskTimeSpan = document.createElement("span");
        taskTimeSpan.textContent = ` - Due: ${new Date(taskTime).toLocaleString()}`;
        taskTimeSpan.classList.add("task-time");


        const doneBtn = document.createElement("input");
        doneBtn.type = "checkbox";
        doneBtn.checked = false;
        doneBtn.classList.add("done-btn");
        doneBtn.onclick = function () {
            if(doneBtn.checked) {
                setTimeout(() => {
                    li.textContent = `${taskText} - Done`;
                    taskTimeSpan.style.display = "none"; // Hide due time
                    doneBtn.style.display = "none";
                    li.appendChild(deleteBtn);
                }, 200);
                
            }
           
        }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.onclick = function () {
        li.remove();
    };
    
     li.appendChild(doneBtn);
     li.appendChild(taskTextSpan);
     li.appendChild(taskTimeSpan);
     li.appendChild(deleteBtn);
     taskList.appendChild(li);

     taskInput.value = "";
     taskTimeInput.value = ""
} else {
    alert("Please enter a task.");
}
};

addBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        addTask();
    }
});

function changeColor() {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    
}


colorChange.addEventListener("click", changeColor);

const currentDate = new Date();
const taskTime = new Date(taskTimeInput.value); 
if(taskTime < currentDate) {
    console.log('Date needs to be higher than the current date');
=======
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const colorChange = document.getElementById("colorButton")
const taskTimeInput = document.getElementById("task-time");

function addTask() {
    const taskText = taskInput.value.trim().toUpperCase();
    const taskTime = taskTimeInput.value.trim()


    if(taskText !== "") {
        
        const li = document.createElement("li");
      
        
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        taskTextSpan.classList.add("task-text");

        const taskTimeSpan = document.createElement("span");
        taskTimeSpan.textContent = ` - Due: ${new Date(taskTime).toLocaleString()}`;
        taskTimeSpan.classList.add("task-time");


        const doneBtn = document.createElement("input");
        doneBtn.type = "checkbox";
        doneBtn.checked = false;
        doneBtn.classList.add("done-btn");
        doneBtn.onclick = function () {
            if(doneBtn.checked) {
                setTimeout(() => {
                    li.textContent = `${taskText} - Done`;
                    taskTimeSpan.style.display = "none"; // Hide due time
                    doneBtn.style.display = "none";
                    li.appendChild(deleteBtn);
                }, 200);
                
            }
           
        }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn"); 
    deleteBtn.onclick = function () {
        li.remove();
    };
    
     li.appendChild(doneBtn);
     li.appendChild(taskTextSpan);
     li.appendChild(taskTimeSpan);
     li.appendChild(deleteBtn);
     taskList.appendChild(li);

     taskInput.value = "";
     taskTimeInput.value = ""
} else {
    alert("Please enter a task.");
}
};

addBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        addTask();
    }
});

function changeColor() {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    
}


colorChange.addEventListener("click", changeColor);

const currentDate = new Date();
const taskTime = new Date(taskTimeInput.value); 
if(taskTime < currentDate) {
    console.log('Date needs to be higher than the current date');
>>>>>>> 7a2d9c3 (Initial commit)
}
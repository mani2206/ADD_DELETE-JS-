// JavaScript Code
document.cookie = "username=John Doe";

let add = document.getElementById("add")
add.addEventListener("click", (e) => {
    e.preventDefault();
    addFunction();
    storeValues();
});


let count = 0;
let rowArray = []

function addFunction() {
    // Input value declaration
    var taskValue = document.getElementById("task").value;
    var descriptionValue = document.getElementById("description").value;
    // If method
    if (taskValue != "" && descriptionValue != "") {
        // Table insert method
        var table = document.getElementById("dataTable");
        var rowAdd = table.insertRow();

        // Serial Number
        var serialNum = rowAdd.insertCell(0);
        count += 1;
        serialNum.innerHTML = count;

        // Input Value
        var taskText = rowAdd.insertCell(1);
        var descriptionText = rowAdd.insertCell(2);
        taskText.innerHTML = taskValue;
        descriptionText.innerHTML = descriptionValue;



        // Delete button
        var removeRow = rowAdd.insertCell(3);
        removeRow.innerHTML = "<button class='form-control btn btn-danger'>Delete</button>";
        // Remove functionsssdss
        removeRow.addEventListener("click", function () {
            var rowIndex = rowArray.indexOf(rowAdd);
            rowArray.splice(rowIndex, 1);
            table.deleteRow(rowIndex);
        });
    } else {
        alert("You must write something!");
    }

    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
}

let getValue = document.getElementsByClassName("localstorage")
function storeValues() {
    var taskVal = document.getElementById("task").value;
    var descriptionVal = document.getElementById("description").value;
    if (taskVal == "" && descriptionVal == "") {
        alert("Empty value");
        return false
    }
    //local storage
    localStorage.setItem("task", taskVal)
    localStorage.setItem("description", descriptionVal)
    const storeTask = localStorage.getItem("task")
    const stordDescription = localStorage.getItem("description")
    alert(`Task:${storeTask} \n Description:${stordDescription}`)

    //session storage
    // sessionStorage.setItem("task", taskVal)
    // sessionStorage.setItem("description", descriptionVal)
    // const storeTask = sessionStorage.getItem("task")
    // const stordDescription = sessionStorage.getItem("description")
    // alert(`Task:${storeTask} \n Description:${stordDescription}`)

    // cookies 
    document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";




    // const data= {
    //     task : taskVal,
    //     description:descriptionVal
    // }
    // localStorage.setItem("taskData",JSON.stringify(data))
    // alert("value Stored")

    // var objects = {};
    // for (var i = 0, len = localStorage.length; i < len; i++) {
    //     objects[localStorage.key(i)] = getItem(localStorage.key(i));
    // }
    // console.log(objects);
    // alert("value Stored")
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
}

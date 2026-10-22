
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        document.getElementById("result").innerHTML =
            "Please enter student name and roll number.";
    } else {
        document.getElementById("result").innerHTML =
            "Student Name: " + name + "<br>" +
            "Roll Number: " + roll;
    }
}

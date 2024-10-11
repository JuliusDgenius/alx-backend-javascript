var _a = [
    {
        firstName: "David",
        lastName: "Donald",
        age: 29,
        location: "Uyo"
    },
    {
        firstName: "Andrew",
        lastName: "Ushie",
        age: 35,
        location: "Calabar"
    }
], student1 = _a[0], student2 = _a[1];
var studentList = [student1, student2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var rowHead = thead.insertRow(0);
var firstCellHead = rowHead.insertCell(0);
var secondCellHead = rowHead.insertCell(1);
firstCellHead.innerHTML = "firstName";
secondCellHead.innerHTML = "location";
table.append(thead);
studentList.forEach(function (student) {
    var row = tbody.insertRow(0);
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    firstCell.innerHTML = student.firstName;
    secondCell.innerHTML = student.location;
});
table.append(tbody);
body.append(table);

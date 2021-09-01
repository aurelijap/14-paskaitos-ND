var add = document.getElementById('add');
var removeFirst = document.getElementById('removeFirst');
var removeLast = document.getElementById('removeLast');
var duomenys = document.getElementById('duomenys');

add.addEventListener('click', addDuomenys);
removeFirst.addEventListener('click', removeFirstDuomenys);
removeLast.addEventListener('click', removeLastDuomenys);

function addDuomenys() {
  if (!inputVardas.value || !inputPavarde.value) {
    alert('Įveskite vardą ir pavardę');
    return false;
  }
  if (!inputAmzius.value || parseInt(inputAmzius.value) < 1) {
    alert('Blogai įvestas amžius');
    return false;
  }
  var tbl = document.getElementById('table1');
  var tbody = tbl.getElementsByTagName('tbody')[0];
  var row = document.createElement('tr');
  var column1 = document.createElement('td');
  var column2 = document.createElement('td');
  var column3 = document.createElement('td');

  column1.innerText = inputVardas.value;
  column2.innerText = inputPavarde.value;
  column3.innerText = inputAmzius.value;

  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  tbody.appendChild(row);

  inputVardas.value = '';
  inputPavarde.value = '';
  inputAmzius.value = '';
}

function removeFirstDuomenys() {
  var tbl = document.getElementById('table1');
  var tbody = tbl.getElementsByTagName('tbody')[0];
  var rows = tbody.getElementsByTagName('tr');
  if (rows.length == 0) {
    alert('Nėra ką trinti.');
  } else {
    rows[0].remove();
  }
}

function removeLastDuomenys() {
  var tbl = document.getElementById('table1');
  var tbody = tbl.getElementsByTagName('tbody')[0];
  var rows = tbody.getElementsByTagName('tr');
  if (rows.length == 0) {
    alert('Nėra ką trinti.');
  } else {
    rows[rows.length - 1].remove();
  }
}

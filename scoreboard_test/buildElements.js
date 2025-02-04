let catMap = new Categories();

catMap.upperCategories.forEach((element, key) => {
  console.log(key, element)
});

catMap.lowerCategories.forEach((element, key) => {
  console.log(key, element)
});


// start of div to hold tables
let tableDiv = document.createElement('div')
tableDiv.className = "scoreboard-container"

// main upper table
let upperTable = document.createElement('table');

// upper header table rows
let upperTableHeaderRow = document.createElement('tr');
const uppperHeaders = ["Upper","Score"];

uppperHeaders.forEach((element)=>{
  let headerRow = document.createElement('th');
  headerRow.textContent = element;
  upperTableHeaderRow.appendChild(headerRow);
})

// add to table
upperTable.appendChild(upperTableHeaderRow);

// build upper categories table 
catMap.upperCategories.forEach((element, fieldName) => {
  let tableCategoryRow = document.createElement('tr');
  
  let tableCategoryRowName = document.createElement('td');
  tableCategoryRowName.innerText = fieldName;
  
  let tableCategoryRowData = document.createElement('td');
  tableCategoryRowData.id = fieldName;
  tableCategoryRowData.innerText = 0;

  tableCategoryRow.appendChild(tableCategoryRowName);
  tableCategoryRow.appendChild(tableCategoryRowData);
  upperTable.appendChild(tableCategoryRow);
})


let lowerTable = document.createElement('table');

// upper header table rows
let lowerTableHeaderRow = document.createElement('tr');
const lowerHeaders = ["Lower","Score"];

lowerHeaders.forEach((element)=>{
  let headerRow = document.createElement('th');
  headerRow.textContent = element;
  lowerTableHeaderRow.appendChild(headerRow);
})

// add to table
lowerTable.appendChild(lowerTableHeaderRow);

// build upper categories table 
catMap.lowerCategories.forEach((element, fieldName) => {
  let tableCategoryRow = document.createElement('tr');
  
  let tableCategoryRowName = document.createElement('td');
  tableCategoryRowName.innerText = fieldName;
  
  let tableCategoryRowData = document.createElement('td');
  tableCategoryRowData.id = fieldName;
  tableCategoryRowData.innerText = 0;

  tableCategoryRow.appendChild(tableCategoryRowName);
  tableCategoryRow.appendChild(tableCategoryRowData);
  lowerTable.appendChild(tableCategoryRow);
})

tableDiv.appendChild(upperTable);
tableDiv.appendChild(lowerTable);
document.body.appendChild(tableDiv);

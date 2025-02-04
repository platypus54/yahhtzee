let catMap = new Categories();

catMap.upperCategories.forEach((element, key) => {
  console.log(key, element)
});

catMap.lowerCategories.forEach((element, key) => {
  console.log(key, element)
});



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



catMap.upperCategories.forEach((element, fieldName) => {
  let tableCategoryRow = document.createElement('tr');
  
  let tableCategoryRowName = document.createElement('td');
  tableCategoryRowName.innerText = fieldName;
  
  let tableCategoryRowData = document.createElement('td');
  tableCategoryRowData.id = fieldName;
  tableCategoryRowData.innerText = fieldName;

  tableCategoryRow.appendChild(tableCategoryRowName);
  tableCategoryRow.appendChild(tableCategoryRowData);
  upperTable.appendChild(tableCategoryRow);
})

tableDiv.appendChild(upperTable);

document.body.appendChild(tableDiv);








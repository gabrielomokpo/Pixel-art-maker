/**
* @description Clears the current grid
* @param {event} uses the browser submit event
* @returns {null} 
*/

function makeGrid(event) {
	event.preventDefault();   // prevents form submission which is the default action of the form submit buttom
    const myParent=document.getElementById('pixelCanvas');
		if(myParent.hasChildNodes()){
			loader(myParent);
		}
	const inputHeight = document.getElementById('inputHeight').value;
	const inputWeight = document.getElementById('inputWeight').value;
	let myChild=document.createElement('tr');
	let rowCount = 0;
			while(rowCount<inputHeight){
					let myTableRowId = "myTableRow"+rowCount;
					let myTableRow= document.createElement('tr');
					myTableRow.setAttribute('id',myTableRowId);
					myParent.appendChild(myTableRow);		
						for( let count=0;count<inputWeight;count++ ){
							let myTableColumnId= "myTableColumn"+count;
							let myTableColumn = document.createElement('td');
								myTableColumn.setAttribute('height','20px');
								myTableColumn.setAttribute('width','20px');
								myTableColumn.setAttribute('id',myTableRowId+myTableColumnId);
								myTableRow.appendChild(myTableColumn);
								myTableColumn.addEventListener("click",function(){
								document.getElementById(myTableRowId+myTableColumnId).style.backgroundColor=pickerColor();
								});
						}	
				rowCount++;
			}
}

/**
* @description Clears the current grid
* @param {HTMLObject} dn
* @returns {null} replace the grid content with an empty string
*/
function loader(dn){
		dn.innerHTML='';
}

/**
* @description Clears the current grid
* @param has an empyt parameter
* @returns {string} the current color of the color picker
*/
function pickerColor(){
	return document.getElementById('colorPicker').value;
}
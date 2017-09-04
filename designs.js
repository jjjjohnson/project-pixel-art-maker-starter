// Select color input

let colorPicker = document.getElementById("colorPicker");  
// Select size input
let inputHeight = document.getElementById("input_height");  
let inputWidth = document.getElementById("input_width");  
let canvas = document.getElementById("pixel_canvas");
let sizePicker = document.getElementById("sizePicker");


// When size is submitted by the user, call makeGrid()

sizePicker.onsubmit = function makeGrid(event) {
	// console.log('input_width', inputWidth.value);
	// console.log('color', colorPicker.value);
	event.preventDefault();
	// start with table with 0 rows
	while(canvas.rows.length > 0) {
	  canvas.deleteRow(0);
	}
  for ( let i=0; i < inputHeight.value; i++){
  	let row = canvas.insertRow(0);	  
  	for ( let j=0; j < inputWidth.value; j++){
  		let cell = row.insertCell(0);
  		cell.addEventListener("click",function(){
			    // alert(colorPicker.value);
			    this.bgColor = colorPicker.value;
			});
  	}
  }
};


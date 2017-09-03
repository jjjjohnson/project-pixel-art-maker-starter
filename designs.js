// Select color input
let colorPicker = $('#colorPicker');
// // Select size input
let inputHeight = $( "input:first" );
let inputWidth = $( "input:first" ).next();

let canvas = $('#pixel_canvas');
// console.log('input_width', input_width);

// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function makeGrid(event) {
  // let input_height = $('#input_height').val();
  input_height = inputHeight.val();
  input_width = inputWidth.val();
  // console.log('input_height:',input_height);
  // console.log('input_width:',input_width);
  // console.log(colorPicker.val());

  $("#pixel_canvas tr").remove(); 

	// canvas.attr('bgcolor', colorPicker.val());
  for ( let i=0; i < inputHeight.val(); i++){
  	canvas.append('<tr></tr>');
  	for ( let j=0; j < inputWidth.val(); j++){
  		$('tr:last-of-type').append('<td> </td>');
  	}
  }
  event.preventDefault();

});

$("#pixel_canvas").on("click", "td", function() {
	$(this).attr("bgcolor", colorPicker.val());
});

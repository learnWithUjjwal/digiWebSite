var one = document.getElementById('one');
// console.log(one);
console.log(one)
one.style.color = "red";


//JQUERY Begin

$(document).ready(function(){
	$('#btn').click(function(){
		console.log("clicked");
	var num1 = parseInt($('#num1').val());
	var num2 = parseInt($('#num3').val());
	var num3 = num1+num2;
	console.log(num1);
	console.log(num2);
	console.log(num3);
	$('#num2').val(num3);
	})
	
$('#a').click(function(e){
	// e.preventDefault();
	console.log("clicked");
	setTimeout(function() {window.location.href = "https://www.gmail.com";}, 1000)
	
})

setInterval(()=>{
	
	var d = new Date();
var h = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();

$('#h').html(h);
$('#m').html(min);
$('#s').html(sec);
	

}, 1000);
})




// console.log(`${h}:${min}`);
// console.log(h + ":" + min);
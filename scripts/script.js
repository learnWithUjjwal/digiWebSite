document.getElementById('course-menu').onmouseover = () => {
	document.getElementById('course-menu-submenu').style.display = "block";
}

document.getElementById('course-menu').onmouseleave = () => {
	document.getElementById('course-menu-submenu').style.display = "none";
}

document.getElementById('course-menu-submenu').onmouseover = () => {
	document.getElementById('course-menu-submenu').style.display = "block";
}

document.getElementById('course-menu-submenu').onmouseleave = () => {
	document.getElementById('course-menu-submenu').style.display = "none";
}

var showMe = () => {
	console.log("clicked");
	document.getElementById('mob-submenu').style.display = "block";
	document.getElementById('mob').style.display = "none";
	document.getElementById('mob1').style.display = "inline";
}

var hideMe = () => {
	console.log("clicked");
	document.getElementById('mob-submenu').style.display = "none";
	document.getElementById('mob').style.display = "inline";
	document.getElementById('mob1').style.display = "none";
}

var showMenu = () => {
	document.getElementById('nav-mob').style.display = "block";
	document.getElementById('menu-mob1').style.display = "inline";
	document.getElementById('menu-mob').style.display = "none";
}

var hideMenu = () => {
	document.getElementById('nav-mob').style.display = "none";
	document.getElementById('menu-mob1').style.display = "none";
	document.getElementById('menu-mob').style.display = "inline";
}

document.getElementById('form1').onclick = function(e){
	// e.preventDefault();
	var name = document.getElementById('name').value;
	console.log(name);
	if(/^\s*$/.test(name)){
		console.log("hello" + name);
		e.preventDefault();
		document.getElementById('name').classList.add('error');
		document.getElementById('name').focus();
	}else{
		document.getElementById('name').classList.remove('error');
	}

	}

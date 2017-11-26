var adress = 'http://86.86.5.197/';
var currentadress = window.location.href;

var selected = ' id="currentItem"';
var m1 = '';
var m2 = '';
var m3 = '';
var m4 = '';

switch(currentadress){
	case adress:
		m1 = selected;
		break;
	case (adress + 'projects/'):
		m2 = selected;
		break;
	case (adress + 'about/'):
		m3 = selected;
		break;
	case (adress + 'comments/'):
		m4 = selected;
		break;
}

document.write('\
	<div class="menuContainer">\
		<a href="' + adress + '" class="menuItem"' + m1 + '>Home</a><!--\
	 --><a href="' + adress + 'projects" class="menuItem"' + m2 + '>Projects</a><!--\
	 --><a href="' + adress + 'about" class="menuItem"' + m3 + '>About</a><!--\
	 --><a href="' + adress + 'comments" class="menuItem"' + m4 + '>Discussion</a>\
	</div>\
');
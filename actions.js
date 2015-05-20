addLink = function () {
	var link = document.createElement('a')
	link.innerHTML = 'click here'
	link.setAttribute('href', '#')
	link.setAttribute('id', 'link')
	document.getElementsByTagName('p')[0].appendChild(link)
}

click = function (id) {
	document.getElementById(id).style.display = 'block'
}

clear = function (id) {
	document.getElementById(id).style.display = 'none'	
}
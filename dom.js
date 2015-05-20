window.onload = function() {
	addLink()
	document.getElementById('link').onclick = function() {
		click('message')	
	}

	document.getElementById('button').onclick = function() {
		clear('message')
	}
}
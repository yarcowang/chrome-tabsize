/**
 * @file main.js
 * core file
 *
 * @author Yarco <yarco.wang@gmail.com>
 * @since 2013/01/09
 * @copyright BSD
 */
// vim: set tabstop=2 shiftwidth=2 softtabstop=2 noexpandtab ai si: 

(function() {
	var nl = document.querySelectorAll('form[xmethod]');
	var xmethod, action;

	var change = function() {
		if (this.readyState == 4) {
			if (this.status === 200 || this.status === 201) {
				document.documentElement.textContent = this.responseText;
			} 
		}
	}

	var request = function(method, url, data) {
		console.log(data);
		var xhr = new XMLHttpRequest;
		xhr.onreadystatechange = change;
		xhr.open(method, url);
		if (method !== 'get') {
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		xhr.send(data);
	}

	var setup = function(fm, xmethod, action) {
		fm.onsubmit = function(e) {
			e.preventDefault();
			var items = fm.elements;
			var t = [];
			for(var i = 0; i < items.length; i++) {
				if (typeof items[i]['name'] !== 'undefined' && items[i].name != '') {
					t.push(items[i].name + '=' + encodeURIComponent(items[i].value));
				}
			}
			request(xmethod, action, t.join('&'));
		}
	}

	for(var i = 0; i < nl.length; i++) {
		xmethod = nl[i].getAttribute('xmethod').toLowerCase();
		action = nl[i].action;
		setup(nl[i], xmethod, action);
	}
})();


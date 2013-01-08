var storage = chrome.storage.local;

var btsave = document.getElementById('save');

loadSaved();

chrome.extension.onMessage.addListener(changeRadio);
btsave.addEventListener('click', save);

function changeRadio(req, sender, res)
{
	var el = document.getElementById('tabsize' + req.tabsize);
	el.checked = true;
}

function loadSaved()
{
	storage.get({'tabsize':8, 'github_only': false}, function(items) {
		var el = document.getElementById('tabsize' + items.tabsize);
		el.checked = true;

		el = document.getElementById('github_only');
		el.checked = items.github_only ? true : false;
	});
}

function save()
{
	var v = document.getElementById('tabsize2').checked ? 2 : (
		document.getElementById('tabsize4').checked ? 4 : 8 );
	var w = document.getElementById('github_only').checked ? true : false;

	storage.set({'tabsize': v, 'github_only': w}, function() {
		var msg = document.getElementById('msg');
		msg.innerText = 'Saved...';

		chrome.extension.sendMessage({'tabsize': v, 'github_only': w});

		setTimeout(function() {
			msg.innerText = '';
		}, 1000);
	});
}

/* vim: set tabstop=2 shiftwidth=2 ai si noet: */

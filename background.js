var storage = chrome.storage.local;

loadSaved();

chrome.extension.onMessage.addListener(changeIcon);
chrome.browserAction.onClicked.addListener(change);

function changeIcon(req, sender, res)
{
	chrome.browserAction.setIcon({
		path: 'tabsize' + req.tabsize + '.png'
	});
}

function loadSaved()
{
	storage.get({'tabsize': 8, 'github_only': false}, function(items) {
		chrome.extension.sendMessage({'tabsize': items.tabsize, 'github_only': items.github_only});
	});
}

function change()
{
	storage.get({'tabsize': 8, 'github_only': false}, function(items) {
		var size = (items.tabsize == 8) ? 2 : ((items.tabsize == 2) ? 4 : 8);

		storage.set({'tabsize': size}, function() {
			chrome.extension.sendMessage({'tabsize': size, 'github_only': items.github_only});

			chrome.tabs.getSelected(null, function(tab) {
				chrome.tabs.sendMessage(tab.id, {'tabsize': size, 'github_only': items.github_only});
			});
		});
	});
}

/* vim: set tabstop=2 shiftwidth=2 ai si noet: */

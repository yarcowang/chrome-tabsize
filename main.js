var storage = chrome.storage.local;

changeTabsizeDefault();

chrome.extension.onMessage.addListener(changeTabsizeOnFly);

function changeTabsize(size)
{
	document.body.style.tabSize = size;
}

function changeTabsizeDefault()
{
	storage.get({'tabsize': 8, 'github_only': false}, function(items) {
		if (items.github_only && !/github\.com/.test(location.href)) {
			// no need
			return;
		}

		changeTabsize(items.tabsize);
	});
}

function changeTabsizeOnFly(req, sender, res)
{
	if (req.github_only && !/github\.com/.test(location.href)) {
		// no need
		return;
	}

	changeTabsize(req.tabsize);
}

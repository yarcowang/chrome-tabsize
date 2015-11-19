Extensions
===========
**Updated: 2015-11-19  
This repos is deprecated. I direct publish extensions into google store. So no github repos.  
You can choose [Customize Tabsize](https://chrome.google.com/webstore/detail/customize-tabsize/idgdldceinafnbjkfmdphkogjfafpjhp) instead.  
But for github supports spaces now, the extension does nothing to github codes. Pelease choose another extension.  
_This extension is affecting `tab`size only._**

----

This project is original for chrome browser (so the name is chrome tabsize). Then i have this idea:

* we may also extend it to support firefox, safari etc.  
It deals with setting tabsize in browser.

Then i feel i'm lazy, cause i'm using chrome quite often now, lacking of power on doing others.
So the repos may also includes:

* other chrome extensions i created.

I dont want to create one repos for each extension if there will be more. So i hold everything here, if you feel it is not good, just delete others and leave what you want.

**For chrome extensions**: Cause google app store need $5 for developer to register, it is really hard for me. (I mean it does't accpet paypal, and register only for app store seems useless). And this extension is also for free using. If you want to use, you need to install it by hand and by source. It is really simple, no more than 3 steps.

Here we list the extensions current valid:

* **[browser]-tabsize** -- deal with tabsize under browser environment (just like set ts=4 in vim)
* **[browser]-xmethod** -- add a `xmethod` attribute to force form supporting `put` and `delete` methods. Which might be useful to those who do backend and require a frontend prototype page for testing for the REST api

**This project's Code is under BSD/GPL**.

Chrome-Tabsize
--------------
### How to install

1. download directly from github either use git clone or download zipped file. And unzip it to somewhere, for example: /somewhere/chrome-tabsize
2. go to chrome://chrome/extensions/ (or choose from menu Window -> Extenions), check on _Developer mode_, then you'll see extra buttons named _Load unpacked extension…_. So you just click and load it from /somewhere/chrome-tabsize
3. done. config it as normal extension. 

### How to use

* you could set tabsize in _Options_
	
	![options]
	
	
* you could also click the button in the navigator bar. default should be a small button like this.

	![tabsize8]

	click to change.

	![click2view]

Chrome-XMethod
--------------
### Intro
If you are a man like me doing backend script. For example, you did a REST api which accept a POST, and another api which accept a PUT. You may want to do tests.

If frontend is not ready, you'd like to create a simple html page to do a prototype app which could explain what you did at backend.

But the problem is **form in html doest support PUT/DELETE method**, that is really not a good news for you. Certainly you can include jQuery to do so, but that makes your testing boring…NO! I just want to test backend. You'd like to keep things simple.

That is it. A extension to make a form support **PUT/DELETE** which acts like a normal POST.

### How to install
same as _chrome-tabsize_.

### How to use
```
<form action="/somewhere" xmethod="put">
<input type="text" name="aaa" value="bbb" />
<input type="submit" value="Submit" />
</form>
```
So you only need to set an attribute `xmethod="put" or xmethod="delete"` of the form.

### Notice
It doest support things like `type="file"`.

Suggestion
-----------
You could contact <yarco.wang@gmail.com> for this extension.
Or for programming related things, whatever.

This guy currently works in Wiredcraft.com. So you could also get him by <yarco@wiredcraft.com>

All rights reserved by human.

[options]:https://raw.github.com/yarcowang/chrome-tabsize/master/chrome-tabsize/options.png "options"
[tabsize8]:https://raw.github.com/yarcowang/chrome-tabsize/master/chrome-tabsize/tabsize8.png "set tabsize=8"
[click2view]:https://raw.github.com/yarcowang/chrome-tabsize/master/chrome-tabsize/click2view.png "click to change"

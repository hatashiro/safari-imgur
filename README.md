`safari-imgur`
==============

DIY Safari Extension to upload images to Imgur

How to Use
----------

As there's limit on the number of images uploaded to Imgur for one client id, I made this extension DIY.

Just create and install a extension as mentioned [here](https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/UsingExtensionBuilder/UsingExtensionBuilder.html), set `global.html` as `Global Page File`, add `scripts/imgur-injected.js` to `Start Scripts`. `Access Level` should be set to `All`, with `Include Secure Pages` checked.

Finally, get your own client id from Imgur and save the id as content of the plain file `clientid` in the extension directory.

And that's it. Now if you right-click a image on websites, you can find the `Upload to Imgur` contextual menu item.

License
-------

MIT

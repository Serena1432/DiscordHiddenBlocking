# Discord Hidden Blocking
A plugin made by Meir#0011 for hiding messages sent from anyone that you hate without being noticed.

## Features
This plugin just simply hides all messages sent from IDs that you have added into the "blacklist" without anyone knows. I called it "hidden blocking".

## How to use?
### Configuration
First, you need to download the repository and extract it first. Then you should open the `HiddenBlocking.normal.js` if you're going to use HiddenBlocking using the normal way (opening Developer Tools) or `HiddenBlocking.plugin.js` if you're going to use it using BetterDiscord, then you need to add User's ID that you want to hidden their messages into the `blocked_users` array. For example:

```js
var blocked_users = [
	"693107293516070944",
	"674612637799022619"
];
```

### Using the normal way
* Press the `F12` key or `Ctrl+Shift+I` key combination on Discord to open the Developer Tools.
* Go to the `Console` tab and copy the script in the `HiddenBlocking.normal.js` that was edited from the Configuration section to the Console box and run it.
* Done! Messages sent from the "blacklisted" users have been successfully hidden!

You need to do this each time you start or refresh Discord.

### Using BetterDiscord
* Open Settings on your Discord app, go to the Plugins section and click `Open Plugins Folder`.
* Copy the file from your downloaded HiddenBlocking folder and copy the `HiddenBlocking.plugin.js` that was edited from the Configuration section to the Plugins folder.
* Enable it in the Plugins section and done! Messages sent from the "blacklisted" users have been successfully hidden!

---------

Plugins made by Meir#0011.
Discord and the Discord logo are trademarks from Discord, Inc.
I don't own anything, and I'm not affiliated with Discord.
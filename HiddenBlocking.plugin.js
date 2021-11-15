/**
	* @name HiddenBlocking
	* @version 1.0
	* @description Hide messages sent from anyone that you hate without being noticed.
	* @author Meir
*/

module.exports = class HiddenBlocking {
	constructor() {
		this.initialized = false;
	}
	
	getName() { return "HiddenBlocking"; }
	getDescription() { return "Hide messages sent from anyone that you hate without being noticed."; }
	getVersion() { return "1.0.0"; }
	getAuthor() { return "Meir"; }
	
	start() {
		// Define the blocked users using an Array
		var blocked_users = [
			""
		], block = [];
		
		for (var i = 0; i < blocked_users.length; i++) block[blocked_users[i]] = true;

		// Trigger each 500 miliseconds
		setInterval(function() {
			var messages = document.getElementsByClassName("messageListItem-1-jvGY"), startBlocking = false;
			for (var i = 0; i < messages.length; i++) {
				var message = messages[i], avatar = message.getElementsByClassName("avatar-1BDn8e");
				if (avatar.length) {
					if (block[avatar[0].src.substr(avatar[0].src.indexOf("/avatars/") + 9, 18)]) {
						message.style.display = "none";
						startBlocking = true;
					}
					else startBlocking = false;
				}
				else if (startBlocking) message.style.display = "none";
			}
		}, 500);
	}
	
	stop() {
		PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has stopped.");
	};

	// Initialize
	initialize() {
		this.initialized = true;
		PluginUtilities.showToast(this.getName() + " " + this.getVersion() + " has started.");
	}
}
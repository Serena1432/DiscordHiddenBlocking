/**
	* @name HiddenBlocking
	* @version 1.1
	* @description Hide messages sent from anyone that you hate without being noticed.
	* @author Meir
*/

module.exports = class HiddenBlocking {
	constructor() {
		this.initialized = false;
	}
	
	getName() { return "HiddenBlocking"; }
	getDescription() { return "Hide messages sent from anyone that you hate without being noticed."; }
	getVersion() { return "1.1.0"; }
	getAuthor() { return "Meir"; }
	
	start() {
		// Define the blocked users using an Array
		var blocked_users = [
			""
		], block = [];
		
		for (var i = 0; i < blocked_users.length; i++) block[blocked_users[i]] = true;

		// Trigger each 500 miliseconds
		setInterval(function() {
			var messages = document.getElementsByClassName("messageListItem-ZZ7v6g"), startBlocking = false;
			for (var i = 0; i < messages.length; i++) {
				var message = messages[i], avatar = message.getElementsByClassName("avatar-2e8lTP");
				if (avatar.length) {
					var src = !avatar[0].src.includes("guilds") ? avatar[0].src.substr(avatar[0].src.indexOf("/avatars/") + 9, 18) : avatar[0].src.substr(avatar[0].src.indexOf("/users/") + 7, 18);
					if (block[src]) {
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
		
	};

	// Initialize
	initialize() {
		this.initialized = true;
	}
}

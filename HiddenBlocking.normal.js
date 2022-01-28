// Define the blocked users using an Array
var blocked_users = [
	""
], block = [];

// Initialize
for (var i = 0; i < blocked_users.length; i++) block[blocked_users[i]] = true;

// Begin blocking
function hiddenBlock() {
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
}

// Trigger each 500 miliseconds
setInterval(hiddenBlock, 500);

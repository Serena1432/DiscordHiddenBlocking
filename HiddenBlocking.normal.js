// Define the blocked users using an Array
var blocked_users = [
	""
], block = [];

// Initialize
for (var i = 0; i < blocked_users.length; i++) block[blocked_users[i]] = true;

// Begin blocking
function hiddenBlock() {
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
}

// Trigger each 500 miliseconds
setInterval(hiddenBlock, 500);
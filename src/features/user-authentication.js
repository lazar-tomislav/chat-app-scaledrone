const LS_USERNAME_KEY = "username";

export const UserAuthentication = {

	/**
	 * @returns {boolean} has username?
	 * */
	hasUsername() {
		//check if "username" is in local storage
		const username = localStorage.getItem(LS_USERNAME_KEY)
		console.log('username:', username);
		return !!(username && username.length > 0);
	},
	/**
	 * @param {string} usernameString
	 * @returns {string} username
	 * */
	setUsername(usernameString) {
		//set "username" in local storage
		localStorage.setItem(LS_USERNAME_KEY, usernameString);
		return usernameString;
	},

	/**
	 * @returns {string} username
	 */
	signOut() {
		this.setUsername('');
	},
	getUsername() {
		let username = localStorage.getItem(LS_USERNAME_KEY);
		if(!username){
			username = UserAuthentication.promptUserToEnterName()
		}
		return username;
	},

	/*** @returns {string} username */
	promptUserToEnterName() {
		const name = prompt("Please enter your name:");
		if (name) {
			UserAuthentication.setUsername(name);
			return name;
		} else {
			alert("Please enter a name to proceed.");
			this.promptUserToEnterName();
		}
	}
}

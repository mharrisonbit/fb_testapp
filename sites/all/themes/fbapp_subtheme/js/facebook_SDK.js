(function($) {
	window.fbAsyncInit = function() {
			FB.init({
			appId      : '957403187706107',
			xfbml      : true,
			version    : 'v2.6',
			status     : true,
			oauth      : true
		});

	// ADD ADDITIONAL FACEBOOK CODE HERE
	function button_clicked(){
		// FB.login(function(){
		// 	FB.api('/me/feed', 'post', {message: 'Hello, world!'});
		// }, 
		// {scope: 'publish_actions'});
		console.log("hello");
	}
	
		FB.getLoginStatus(function(response) {
			// Check login status on load, and if the user is
			// already logged in, go directly to the welcome message.
			if (response.status == 'connected') {
				onLogin(response);
			} else {
			// Otherwise, show Login dialog first.
				FB.login(function(response) {
					onLogin(response);
				}, {scope: 'user_friends, email'});
			}
		});
		
		function myFacebookLogin() {
			FB.login(function(){}, {scope: 'publish_actions'});
		}

	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	function onLogin(response) {
		if (response.status == 'connected') {
				FB.api('/me?fields=first_name', function(data) {
				var welcomeBlock = document.getElementById('fb-welcome');
				welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
				
				console.log(FB.api);
			});
			FB.login(function(){
				FB.api('/me/feed', 'post', {message: 'Hello, world!'});
			}, 
			{scope: 'publish_actions'});
		}
	}

	
	
	
})(jQuery);
app.factory('User', function($http){
	
	var factory = {
		find : function () {
			$http.get('users.json');
		}
	}
	return factory;
});
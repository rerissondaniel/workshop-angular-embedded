angular.module("cadastroCapacitacao").service("SessionService", function(){
	var self = this;
	
	self.createSession = function(data){
		self.id = data.token;
		self.user = {};
		self.user.id = data.user.id;
		self.user.role = data.user.role;
	}

	self.destroy = function(){
		delete self.id;
		delete self.user;
	}
});
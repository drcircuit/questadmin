let app = angular.module("questadmin",[]);
app.factory("api", ["$http", function($http){
    return {
        rooms: function(cb,error){
            $http.get("/api/rooms")
            .then(function(res){
                cb(res.body);
            })
            .catch(function(err){
                error(err);
            });
        }
    }
}])
.controller("main",  ["$scope","api",function(scope, api){
    api.rooms(function(data){
        console.log(data);
        scope.roomName = data.room
    }, function(error){
        console.log(error);
    });
}]);
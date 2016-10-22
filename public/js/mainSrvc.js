angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats

    return $http({
      method: 'GET',
      url: '/api/chats'

    });
  };

  this.addChats = function(chat){
    //TODO Call server to add to chats
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: chat
    });
  };

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
   return  $http({
      method: 'DELETE',
      url: 'api/chats'
    });
  };
});

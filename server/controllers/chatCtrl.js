var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.send(chats);
  },
  postChats:function(req,res){
    // TODO write postChats
    chats.push(req.body);
    res.send(chats);
  },
  deleteChats:function(req,res){
    // TODO write deleteChats
    chats = [];
    res.send(chats);
  }
};

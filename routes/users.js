var express = require('express');
var router = express.Router();
var users = require('../users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/', function (req, res, next) {
  console.log(req.body);
  var riseId = req.body.id;
  var bossId;

  for(var user in users){
    if(users[user].id == riseId){
      if(users[user].isRise == false){
        for(var boss in users){
          if(users[boss].id == users[user].parentId){
            bossId = users[boss].id;
            var position = users[boss].position;
            users[boss].position = users[user].position;
            users[user].position = position;
            users[user].parentId = users[boss].parentId;
            users[boss].parentId = users[user].id;
            users[user].level -=1;
            users[boss].level +=1;
            for( var subordinates in users){
              if(users[subordinates].parentId == users[boss].id){
                users[subordinates].parentId = users[user].id;
              }

              if((users[boss].level - 1) < 3 ){
                if(users[subordinates].level > 3){
                  if(users[subordinates].parentId == users[user].id){
                    users[subordinates].parentId = users[boss].id;
                  }
                }
              }
            }
          }
        }
      }
      users[user].isRise = true;
    }
  }

  res.send(users);
});

module.exports = router;

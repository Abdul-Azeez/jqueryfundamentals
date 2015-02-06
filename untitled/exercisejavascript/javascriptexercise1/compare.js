function user(name, age)
{
  this.name = name;
  this.age = age;
}
var user1 = new user("gbenga", 27)
var user2 = new user("segun", 33)

user.prototype.compare = function(username){

  if (user1.age > user2.age)
    alert(user1.name +"is older than"+user2.name)
  else if(user1.age == user2.age)
    alert(user1.name +" is the same age as"+ user2.name)
  else
    alert(user2.name+" is older than "+ user1.name) 

}
user1.compare(user2)
var users = [{username:"sara",password:"123"}];
function signup()
{
    var user_name = document.getElementById('username').value;
    var pass_word = document.getElementById('password').value;
    var agee = document.getElementById('age').value;
    var phone = document.getElementById('phonenum').value;
    var regexpattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{5,12}$/;
       
      for(var i = 0 ; i < users.length ; i ++)
        {
            if(users[i].username == user_name)
            {
                alert('this user ia alree');
            }
        } 
         if(user_name == "" || pass_word == "" || agee == "" || phone == "")
        {
            alert('please enter your data');
        }
        else if(user_name.length < 5 || user_name.length > 10)
        {
            alert('the username must be from 5 to 10 char');
        }
        else if(agee < 18 || agee > 60)
        {
            alert('the age must be from 18 to 60');
        }
        else if(phone.length < 11 || phone.length > 11)
        {
            alert('the phone number must be 11');
        }
        else if(!pass_word.match(regexpattern))
        {
            alert('your password must be strong');
        }
        else
        {
            var obj = {username : user_name , password : pass_word};
            console.log(obj);
            users.push(obj);
            alert('signup successfully!');
            window.location.href = "review.html";
        }
  

}
function signin()
{
    var user_ = document.getElementById('user').value;
    var pass_ = document.getElementById('pass').value;

   for(let i = 0;i < users.length; i++)
   {
        if(user_ == "" || pass_ == "")
        {
            alert('please enter your data');
        }
        else if(user_.value == users[i].username && pass_.value == users[i].password)
        {
            alert('signin successfully')
            window.location.href = "review.html";
        }
        else{
            alert('please enter the valid data');
        }
   }
    
}
//function update()
//{
 //   var user_n = document.getElementById('user_').value;
 //   var new_p = document.getElementById('new_pass').value;

 //   for(let s = 0; s < users.length; s++)
 //   {
  //      if(user_n == "" || new_p == "")
  //      {
      //      alert('please enter your data');
//        }
  //      else if(user_n == users[i].username && new_p !== "")
   //     {
  //          var obj = {password:new_p};
 //           console.log(obj);
  //          users.push(obj);
   //         alert('password updated successfully');
   //     }
   //     else
   //     {
      //      alert('please enter the valid username');
    //    }
   // }
    
//}
function update()
{
    let user_n = document.getElementById('user_').value;
    let newpass = document.getElementById('new_pass').value;
    for(let i = 0;i < users.length;i++)
    {
        if(user_n == users[i].username)
        {
            users[i].password = newpass;
            alert('password changed successfully');
            console.log        }
        else 
        {
            alert('please enter your data or check your user name');
        }
       
    }    
}

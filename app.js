var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["COMMENTER"] = 1] = "COMMENTER";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
//default values is 0,1,2 and so..on
//enum Role { ADMIN=5, COMMENTER, AUTHOR };
// the next 2 will have consecutive number
//enum Role { ADMIN= 'ADMIN', COMMENTER=300, AUTHOR=700 };
//u can also have mixed type of values 
var user = {
    name: 'Karna',
    age: 26,
    hobbies: ['movies', 'volleyball'],
    role: Role.ADMIN
};
if (user.role == Role.ADMIN) {
    console.log(user.name);
}

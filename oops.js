// const user = {
//     username:"kamal",
//     id:"156165",
//     getUserDetails:function(){
      /***  return username;***/ 
      // In this case username haven't accesss to username as it has access to local and script level memory variable.;
       // so here it have access to variable user(object),userx.
       // So,instead of using user.username here we have an special key called "this" key.
      // which helps properties or methods  of users nested inside of user object to have access to all it's key-value pair
      // here this works little bit samme as user.
      // this has more complex things to do but as a tip of iceberg it is the definition.
      // or you can say that any  property of user trying to access its companion property in this example it is getUserDetails
      // you can't directle use it like username you can access it through this keyword which give you access to all the 
      // properties of object.Only to property names of users for accessing username.
  //    return this.username;
      // or return user.username;
//     }
// }
// const userx = user.username;
// console.log(user.username)
// console.log(user.getUserDetails())


              /************Another example************/
//  const user = {
//     username:"kamal",
//     id:"156165",
//     getUserDetails:function(){
//       console.log(`username:${this.username}`)
//     },
//   Boss:{
//         username:"Bipin Joshi",
//      id:"156165",
//      getUserDetails:function(){
//       console.log(`BOSS:${this.username}`)
//     },
//   }
// }

// console.log(user.getUserDetails())
// console.log(user.Boss.getUserDetails())
// From here we can conclude that "this" gives access to the all the properties of current object 
// to its each any every property.


/*******************************Heading towards new keyword */
// new: Whenever a new keyword is invoked an empty objeect is created
//      due to which a constructor function is called
// due to "this" keyword all the properties got injected in that empty object.
// basically this is an empty object.

class students {
    constructor(name){
        this.name = name;
    }
    getDetails(){
      console.log(`The Client is ${this.name} and ${this.caste} `)  
    }
}

class Student1 extends students {
    constructor(name,id){
        super(name)
        this.name = name;
        this.id = id;
    }
}

const newStudent1 = new Student1("kamal");
console.log(newStudent1);


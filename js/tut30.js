console.log("this is tutorial 30");
  //Prototype inheritence

  const proto = {
    slogan: function(){
        return `this company is the best`
    },
 changeName:function(newName){
    this.name = newName
 }
  }


//  console.log(proto);
//this creates biplab object
//  let biplab = Object.create(proto);
//    biplab.name = "biplab";
//    biplab.role = "programmer";
//    biplab.changeName("biplab2");
//  console.log(biplab);



//This also biplab object
 let biplab = Object.create(proto,{
    name:{value:"biplab", writable:true},
    role:{value:"javascript"}
 });
 biplab.changeName("biplab2")

  console.log(biplab);


  //employ conscructor
  function Employee(name,salary,experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience
  }
 
   Employee.prototype.slogan = function() {
      return `this company is the best. Regards ${this.name}`
   }
  let biplabObj = new Employee("biplab",50000,70);
  console.log(biplabObj);


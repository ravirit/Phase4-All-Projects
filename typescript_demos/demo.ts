

class Demo{

    name:string ;
    amount:number ;



        constructor(name,amount){

                this.name = name;
                this.amount = amount;

        }



       

     
          f1(){   // method

                    let x = 5;
                    var city = 'hyd';

                    console.log(this.name);
                    console.log(this.amount);

            }

           
        



}

var d = new Demo('rahul',80000);
d.f1();
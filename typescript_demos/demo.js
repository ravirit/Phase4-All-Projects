var Demo = /** @class */ (function () {
    function Demo(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Demo.prototype.f1 = function () {
        var x = 5;
        var city = 'hyd';
        console.log(this.name);
        console.log(this.amount);
    };
    return Demo;
}());
var d = new Demo('rahul', 80000);
d.f1();

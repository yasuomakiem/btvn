var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var listStd = [];
var listEmploy = [];
var human = /** @class */ (function () {
    function human(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    human.prototype.showInfo = function () {
        var table = document.querySelector("#table");
        var myElm = document.createElement("tr");
        table.appendChild(myElm);
        myElm.innerHTML = " <td> ".concat(this.name, "</td>\n        <td> ").concat(this.age, "</td>\n        <td>").concat(this.checkGender(), "</td>\n        <td> ").concat(this.address, "</td>");
    };
    human.prototype.checkGender = function () {
        if (this.gender == 0)
            return "bede";
        else if (this.gender == 1)
            return "nam";
        else if (this.gender == 2)
            return "nu";
    };
    return human;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, gender, address, codeStd, maths, physics, chemistry) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.Average = function () {
            return (_this.maths + _this.chemistry + _this.physics) / 3;
        };
        _this.CheckAverage = function () {
            var average = _this.Average();
            if (average < 5) {
                var innerRating = "Yếu";
            }
            else if (average < 8) {
                var innerRating = "Khá";
            }
            else
                var innerRating = "Giỏi";
            return innerRating;
        };
        _this.codeStd = codeStd;
        _this.maths = maths;
        _this.physics = physics;
        _this.chemistry = chemistry;
        return _this;
    }
    student.prototype.ShowInfoStd = function () {
        var table = document.querySelector("#table2");
        var myElm = document.createElement("tr");
        if (listStd.length > 0) {
            for (var i = 0; i < listStd.length; i++) {
                if (listStd[i].codeStd == this.codeStd) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
                    table.appendChild(myElm);
                    myElm.innerHTML = "\n                      <td> ".concat(this.codeStd, "</td>\n                      <td> ").concat(this.name, "</td>\n                      <td> ").concat(this.age, "</td>\n                      <td>").concat(this.checkGender(), "</td>\n                      <td> ").concat(this.address, "</td>\n                      <td> ").concat(this.Average(), "</td>\n                      <td> ").concat(this.CheckAverage(), "</td>");
                }
            }
        }
        else {
            table.appendChild(myElm);
            myElm.innerHTML = "\n                      <td> ".concat(this.codeStd, "</td>   \n                      <td> ").concat(this.name, "</td>\n                      <td> ").concat(this.age, "</td>\n                      <td>").concat(this.checkGender(), "</td>\n                      <td> ").concat(this.address, "</td>\n                      <td> ").concat(this.Average(), "</td>\n                      <td> ").concat(this.CheckAverage(), "</td>");
        }
        listStd.push(this);
    };
    return student;
}(human));
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, age, gender, address, codeEmploy, wage, dayWork) {
        var _this = _super.call(this, name, age, gender, address) || this;
        _this.CheckSalary = function () {
            var average = _this.calcSalary();
            if (average < 1000) {
                var innerRating = "Yếu";
            }
            else if (average < 1500) {
                var innerRating = "Khá";
            }
            else
                var innerRating = "Giỏi";
            return innerRating;
        };
        _this.codeEmploy = codeEmploy;
        _this.wage = wage;
        _this.dayWork = dayWork;
        return _this;
    }
    employee.prototype.calcSalary = function () {
        return this.dayWork * this.wage;
    };
    employee.prototype.showInfoEmploy = function () {
        var table = document.querySelector("#table3");
        var myElm = document.createElement("tr");
        if (listEmploy.length > 0) {
            for (var i = 0; i < listEmploy.length; i++) {
                if (listEmploy[i].codeEmploy == this.codeEmploy) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
                    table.appendChild(myElm);
                    myElm.innerHTML = "\n                      <td>".concat(this.codeEmploy, "</td>\n                      <td> ").concat(this.name, "</td>\n                      <td> ").concat(this.age, "</td>\n                      <td>").concat(this.checkGender(), "</td>\n                      <td> ").concat(this.address, "</td>\n                      <td> ").concat(this.calcSalary(), " $</td>\n                      <td> ").concat(this.CheckSalary(), "</td>");
                }
            }
        }
        else {
            table.appendChild(myElm);
            myElm.innerHTML = "\n                      <td>".concat(this.codeEmploy, "</td>   \n                      <td> ").concat(this.name, "</td>\n                      <td> ").concat(this.age, "</td>\n                      <td>").concat(this.checkGender(), "</td>\n                      <td> ").concat(this.address, "</td>\n                      <td> ").concat(this.calcSalary(), " $</td>\n                      <td> ").concat(this.CheckSalary(), "</td>");
        }
        listEmploy.push(this);
    };
    return employee;
}(human));
var son = new human("Son1", 18, 1, "Hà Nội");
var son1 = new human("Son2", 17, 1, "Sài Gòn");
var son2 = new human("Son3", 19, 1, "Nhà");
son.showInfo();
son1.showInfo();
son2.showInfo();
var student1 = new student("Son", 18, 1, "Nhà", "B1", 9, 9, 9);
student1.ShowInfoStd();
var student2 = new student("Son1", 18, 1, "Nhà", "B2", 10, 10, 10);
student2.ShowInfoStd();
var student3 = new student("Son2", 18, 1, "Nhà", "B3", 8, 8, 8);
student3.ShowInfoStd();
var employee1 = new employee("Son", 20, 1, "Hà Nội", "B1", 200, 10);
employee1.showInfoEmploy();
var employee2 = new employee("Son", 20, 1, "Hà Nội", "B2", 150, 10);
employee2.showInfoEmploy();
var employee3 = new employee("Son", 21, 1, "Hà Nội", "B3", 100, 10);
employee3.showInfoEmploy();

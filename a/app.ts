var listStd = [];
var listEmploy = [];

class human {
  name: string;
  age: number;
  gender: number;
  address: string;

  constructor(name: string, age: number, gender: number, address: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }
  showInfo() {
    var table = document.querySelector("#table");
    let myElm = document.createElement("tr");
    table.appendChild(myElm);
    myElm.innerHTML = ` <td> ${this.name}</td>
        <td> ${this.age}</td>
        <td>${this.checkGender()}</td>
        <td> ${this.address}</td>`;
  }

  checkGender(): string {
    if (this.gender == 0) return "bede";
    else if (this.gender == 1) return "nam";
    else if (this.gender == 2) return "nu";
  }
}

class student extends human {
  codeStd: string;
  maths: number;
  physics: number;
  chemistry: number;
  constructor(
    name: string,
    age: number,
    gender: number,
    address: string,
    codeStd: string,
    maths: number,
    physics: number,
    chemistry: number
  ) {
    super(name, age, gender, address);
    this.codeStd = codeStd;
    this.maths = maths;
    this.physics = physics;
    this.chemistry = chemistry;
  }

  Average = (): number => {
    return (this.maths + this.chemistry + this.physics) / 3;
  };

  CheckAverage = (): string => {
    let average = this.Average();
    if (average < 5) {
      var innerRating = "Yếu";
    } else if (average < 8) {
      var innerRating = "Khá";
    } else var innerRating = "Giỏi";
    return innerRating;
  };

  ShowInfoStd(): void {
    var table = document.querySelector("#table2");
    let myElm = document.createElement("tr");
    if (listStd.length > 0) {
      for (let i = 0; i < listStd.length; i++) {
        if (listStd[i].codeStd == this.codeStd) {
          myElm.innerHTML = "";
          alert("duplicate code");
        } else {
          table.appendChild(myElm);
          myElm.innerHTML = `
                      <td> ${this.codeStd}</td>
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.Average()}</td>
                      <td> ${this.CheckAverage()}</td>`;
        }
      }
    } else {
      table.appendChild(myElm);
      myElm.innerHTML = `
                      <td> ${this.codeStd}</td>   
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.Average()}</td>
                      <td> ${this.CheckAverage()}</td>`;
    }
    listStd.push(this);
  }
}

class employee extends human {
  codeEmploy: string;
  wage: number;
  dayWork: number;
  constructor(
    name: string,
    age: number,
    gender: number,
    address: string,
    codeEmploy: string,
    wage: number,
    dayWork: number
  ) {
    super(name, age, gender, address);
    this.codeEmploy = codeEmploy;
    this.wage = wage;
    this.dayWork = dayWork;
  }

  calcSalary() {
    return this.dayWork * this.wage;
  }
  CheckSalary = (): string => {
    let average = this.calcSalary();
    if (average < 1000) {
      var innerRating = "Yếu";
    } else if (average < 1500) {
      var innerRating = "Khá";
    } else var innerRating = "Giỏi";
    return innerRating;
  };
  showInfoEmploy() {
    var table = document.querySelector("#table3");
    let myElm = document.createElement("tr");
    if (listEmploy.length > 0) {
      for (let i = 0; i < listEmploy.length; i++) {
        if (listEmploy[i].codeEmploy == this.codeEmploy) {
          myElm.innerHTML = "";
          alert("duplicate code");
        } else {
          table.appendChild(myElm);
          myElm.innerHTML = `
                      <td>${this.codeEmploy}</td>
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.calcSalary()} $</td>
                      <td> ${this.CheckSalary()}</td>`;
        }
      }
    } else {
      table.appendChild(myElm);
      myElm.innerHTML = `
                      <td>${this.codeEmploy}</td>   
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.calcSalary()} $</td>
                      <td> ${this.CheckSalary()}</td>`;
    }
    listEmploy.push(this);
  }
}

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
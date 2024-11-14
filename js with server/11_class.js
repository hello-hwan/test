// 11_class.js

//생성자 함수
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.getInfo = ()=>{
        return `${this.name}, ${this.age}, ${this.city}`;
    }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong.getInfo());

let kim = new User("Kim", 25 , "Jeju");
console.log(kim.getInfo());

// class 

class Emp{
    constructor(id, name, dept){ // 생성자 함수안에 필드등록
        //해당 클래스가 가지는 필드 등록
        this._id= id; //_로 시작되는 애들은 private라고 인식하면됨, 접근할수는 있지만 직접 접근은 안함
        this._name =name;
        this._dept = dept;
    }
    
    get id(){ //접근 제어자 - 접근할수있는 권한 : 읽어올수있는 권한만 줌
        return this._id;
    }

    set name(name){ // 얘도 필드로 취급됨 - 접근해서 값을 수정할수있는 권한을 줌
        this._name = name;
    }

    get name(){ // get이랑 name 사이에 띄어쓰기가 있어서 메소드로 취급안함, 필드로 취급
        return this._name;
    }

    setDept(dept){ // setter 방식, 메소드로 취급, 위에 set dept(){}랑 동일한 기능
        this._dept = dept;
    }

    getDept(){ // getter 방식, 메소드로 취급, 위에 get dept(){}이거랑 동일한 기능
        return this._dept;
    }
}

let kang = new Emp(100, "Kang", "Sales");
kang.id = 200; // 필드로 접근, 근데 값이 안바뀜 왜냐면 - set이 없기때문에.
kang._id = 200; // 필드로 접근, 값이 바뀜
kang.name = "KKang";
kang.setDept("Marketing"); // 메소드로 접근
console.log(kang);
export class Employee {
    id: number;
    tc: number;
    name: string;
    unvan: string;
    password: number;
    img:string;

    constructor(id:number,tc: number,name: string,unvan: string, password: number,img:string){
        this.id=id;
        this.tc=tc;
        this.name=name;
        this.unvan=unvan;
        this.password=password;
        this.img = img;
    }
}


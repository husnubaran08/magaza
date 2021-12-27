export class Employee {
    id: number;
    tc: string;
    name: string;
    unvan: string;
    password: string;
    sayim: number;

    constructor(id:number,tc: string,name: string,unvan: string, password: string,sayim:number){
        this.id=id;
        this.tc=tc;
        this.name=name;
        this.unvan=unvan;
        this.password=password;
        this.sayim = sayim;
    }
}


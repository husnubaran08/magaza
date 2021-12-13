export class Product {
    barkod: number;
    stockCode: number;
    koli: number;
    name: string;
    reyon: string;
    price: number;

    constructor(barkod: number,stockCode: number, koli: number,name: string,reyon: string,price: number){
        this.barkod=barkod;
        this.stockCode=stockCode;
        this.koli=koli;
        this.name=name;
        this.reyon=reyon;
        this.price=price;
        
    }
}

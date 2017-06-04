import { Injectable } from '@angular/core';
//import {Product} from "./table.component";

export class Product {
    id: number;
    name : string;
    price : number;
    category: string;
}

@Injectable()
export class DataSource {
    private products: Array<Product> =
           [{ id: 1,        name : 'product 1',     price : 100,    category: '1'},
            { id: 2,        name : 'product 2',     price : 200,    category: '1' },
            { id: 3,        name : 'product 3',     price : 300,    category: '1' },
            { id: 4,        name : 'product 4',     price : 400,    category: '1' },
            { id: 5,        name : 'product 5',     price : 500,    category: '1' },
            { id: 6,        name : 'product 6',     price : 600,    category: '2' },
            { id: 7,        name : 'product 7',     price : 700,    category: '2' },
            { id: 8,        name : 'product 8',     price : 800,    category: '2' },
            { id: 9,        name : 'product 9',     price : 900,    category: '2' },
            { id: 10,       name : 'product 10',    price : 1000,   category: '3' }];

    getData (numberOfLines: number, filter: (p: Product) => boolean): Array<Product> {
        let out: Array<Product> = [];
        console.info('getData: ' + numberOfLines + '  ' + out);
        for (let i = 0; this.products.length; i++) {
            if ((i + 1) > numberOfLines) break;
            if (filter(this.products[i])) out.push(this.products[i]);
        }
        return out;
    }

    putData (product: Product): void {
        this.products.push(product);
    }

    deleteData (product: Product): Array<Product> {
        let idx: number = this.products.indexOf(product);
        return this.products.splice(idx, 1);
    }

}
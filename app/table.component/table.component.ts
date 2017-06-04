// импорт декоратора Component из модуля @angular/core
import { Component, ViewEncapsulation, EventEmitter, DoCheck } from '@angular/core';
import { DataSource, Product} from './table.service';

//enum Category {cat1=1, cat2=2, cat3=3};

let data = {
    getData: function (numberOfLines: number, filter: (p: Product) => boolean): Array<Product> {
                let out: Array<Product> = [];
                console.info('getData from data: ' + numberOfLines + '  ' + out);
                for (let i = 0; i < numberOfLines; i++) {
                    out.push(new Product);
                }
                return out;
            },

    putData: function (product: Product): void {
                this.products.push(product);
            },

    deleteData: function (product: Product): Array<Product> {
                    let idx: number = this.products.indexOf(product);
                    return this.products.splice(idx, 1);
                }
}

@Component({
    selector: 'my-table',
    moduleId: module.id,
    inputs: ['numberOfRows'],
    outputs: ['deleteRow'],
    templateUrl: 'table.component.html', 
    styleUrls: ['table-component.css']
    //,
    //providers: [{provide: DataSource, useValue: data}]
   // encapsulation: ViewEncapsulation.Emulate,
   // providers: [DataSource]
})
export class Table implements DoCheck {
    public category: string = '1';
    public rows: Array<Product>;
    public numberOfRows: number;
    public deleteRow: EventEmitter<Product> = new EventEmitter();

    constructor (private dataSource: DataSource) {};

    ngDoCheck () {
        this.rows = this.dataSource.getData(this.numberOfRows, () => true);
    }

    get totalPrice (): number {
        let sum: number = 0;
        this.rows.forEach(prod => sum += prod.price);
        return sum;
    }

    public clickDelete(row: Product): void {
        this.deleteRow.emit(row);
    }


}
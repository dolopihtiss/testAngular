// импорт декоратора Component из модуля @angular/core
import { Component, EventEmitter} from '@angular/core';
import {Product} from './index'

@Component({
    selector: 'insert-table',
    moduleId: module.id,
    inputs: ['product'],
    outputs: ['insertRow'],
    templateUrl: 'insert.component.html',
    styleUrls: []
})
export class Insert {
    public row: Product = new Product;

    insertRow: EventEmitter<Product> = new EventEmitter();

    onClick (): void {
        this.row.id = +this.row.id;
        this.row.price = +this.row.price;
        this.insertRow.emit(this.row);
    }
}
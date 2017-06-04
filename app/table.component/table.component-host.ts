/**
 * Created by Сергей on 01.06.2017.
 */
// импорт декоратора Component из модуля @angular/core
import { Component, ViewChild } from '@angular/core';
import { Table } from './index';
import { DataSource, Product} from './table.service'

@Component({
    selector: 'my-table-host',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    moduleId: module.id,
    templateUrl: 'table.component-host.html',
    styleUrls: ['table-component-host.css']
   // providers: [DataSource]
})
export class TableHost {
    @ViewChild(Table) // Для получения доступа к дочернему компоненту
    table: Table;

    constructor (private dataSource: DataSource) {}

    deleteRow(row: Product) : void {
        console.info('deleteRow: ' + row);
        this.dataSource.deleteData(row);
    }
    insertRow(row: Product) : void {
        console.info('insertRow: ' + row);
        let newRow: Product = new Product;
        for (let nameProperty in row) {
            newRow[nameProperty] = row[nameProperty];
        }
        this.dataSource.putData(newRow);
    }
}

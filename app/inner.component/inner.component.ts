/**
 * Created by Сергей on 30.05.2017.
 */
// импорт декоратора Component из модуля @angular/core
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-app-inner',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    moduleId: module.id,
    //template: '<span>{{name}}:{{family}}</span>', // HTML разметка определяющая представление текущего компонента
    templateUrl: 'inner.component.html' //'./app/inner.component/inner.component1.html'
})
export class InnerComponent {
    @Input() name : string;
    @Input() interval : number;
    @Output() tickEmitter : EventEmitter<any> = new EventEmitter();
    family : string;

    constructor () {
        this.family = 'F';
        this.name = 'N';
        setInterval(() => this.tick(), 10000);//this.interval);
    }

    private tick(): void {
        this.tickEmitter.emit(null);
    }
}
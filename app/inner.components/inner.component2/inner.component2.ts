/**
 * Created by Сергей on 30.05.2017.
 */
// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

@Component({
    selector: 'my-app-inner2',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    moduleId: module.id,
    //template: '<span>{{name}}:{{family}}</span>', // HTML разметка определяющая представление текущего компонента
    templateUrl: 'inner.component2.html' //'./app/inner.component/inner.component1.html'
})
export class InnerComponent2 {
    public list: Array<string> = [
            'One',
            'Two',
            'Three',
            'Four'
    ]
}
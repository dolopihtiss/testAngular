/**
 * Created by Сергей on 30.05.2017.
 */
// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

@Component({
    selector: 'my-app-inner1',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    moduleId: module.id,
    //template: '<span>{{name}}:{{family}}</span>', // HTML разметка определяющая представление текущего компонента
    templateUrl: 'inner.component1.html', //'./app/inner.component/inner.component2.html'
    styleUrls: ['inner.component1.css']
})
export class InnerComponent1 {
    public list: Array<string> = [
            'Один',
            'Два',
            'Три',
            'Четыре'
    ]
    public over(): void {
        alert('over!');
    }
}
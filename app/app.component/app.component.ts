/**
 * Created by Сергей on 30.05.2017.
 */
// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
//import { Component, NgModule } from '@angular/core';

import { Component } from '@angular/core';
//import {InnerComponent} from './inner.component'

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    //directives: [InnerComponent],
    //template: ` `, // HTML разметка определяющая представление текущего компонента
    templateUrl: './app/app.component/app.component.html'
})
export class AppComponent {
    counter: number;
    hideMe: boolean;

    constructor(){
        this.counter = 0;
    }

    onTick(): void {
        this.counter++;
        this.hideMe = !this.hideMe;
    }

} // Класс определяющий поведение компонента   [hidden]="hideMe"


/**
 * Created by Сергей on 30.05.2017.
 */
// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
//import { Component, NgModule } from '@angular/core';

import { Component, ViewEncapsulation } from '@angular/core';

//import {analyzeAndValidateNgModules} from "@angular/compiler";
//import {InnerComponent} from './inner.component'

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    selector: 'my-app', // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    moduleId: module.id,
    //directives: [InnerComponent],
    //template: ` `, // HTML разметка определяющая представление текущего компонента
    templateUrl: 'app.component.html', //'./app/app.component/app.component.html'
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.Emulate
})
export class AppComponent {}


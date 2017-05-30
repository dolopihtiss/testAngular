/**
 * Created by Сергей on 30.05.2017.
 */
// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
//import { Component, NgModule } from '@angular/core';

import {
    Component, Pipe, Directive,
    NgModule,
    Input, Output,
    ViewEncapsulation,
    EventEmitter,
    PipeTransform,
    OnInit,
    HostListener
} from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
    selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
    template: `
        <div>
            <h1>My First Angular App</h1>
            <h2>{{counter  | number:2.0}}</h2>
            <my-app-inner [name]="'N!'" [interval]="2000" (tickEmitter)="onTick()"></my-app-inner>
        </div>
        ` // HTML разметка определяющая представление текущего компонента
})
export class AppComponent {
    counter: number;

    constructor(){
        this.counter = 0;
    }

    onTick(): void {
        this.counter++;
    }

} // Класс определяющий поведение компонента


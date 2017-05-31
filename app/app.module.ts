/**
 * Created by Сергей on 30.05.2017.
 */
// Класс AppModule - точка входа в данное приложение
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component/app.component';

import { InnerComponent } from './inner.component/inner.component';
//import { InnerComponent } from './inner.component/inner.component';
//import { InnerComponent2 } from './inner.component2/inner.component2';
import { InnerComponent1, InnerComponent2 } from './inner.components/index';

import { RouterModule } from "@angular/router"; // модуль для маршрутизации

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения,
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
    imports:      [ BrowserModule,
                    RouterModule.forRoot([ // настройка маршрутов
                        { path: "inner1", component: InnerComponent1 }, // при переходе по адресу localhost:3000/component1 должен активироваться компонент List1Component
                        { path: "inner2", component: InnerComponent2 },
                        { path: "", redirectTo: "inner1", pathMatch: "full" }
                        ])
                    ],
    declarations: [ AppComponent, InnerComponent, InnerComponent1, InnerComponent2 ], // корневой компонент данного приложения
    bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { }


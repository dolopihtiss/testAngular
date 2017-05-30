/**
 * Created by Сергей on 30.05.2017.
 */
// Класс AppModule - точка входа в данное приложение
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {InnerComponent} from './inner.component';


import {
    Component, Pipe, Directive,
    Input, Output,
    ViewEncapsulation,
    EventEmitter,
    PipeTransform,
    OnInit,
    HostListener
} from '@angular/core';

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения,
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, InnerComponent ], // корневой компонент данного приложения
    bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { }


import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ["./styles/app.component.css"]
})
export class AppComponent {
    public title = "Tour of Heros";
}
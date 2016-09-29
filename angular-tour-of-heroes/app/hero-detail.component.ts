import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template:   `
                <div *ngIf="selectedHero">
                    <h2>{{hero.name}} details!</h2>
                    <div><label>id: </label>{{hero.id}}</div>
                    
                    <div>
                        <label>name: </label>
                        <!--Remember the FormsModule is needed to two-way bind this input-->
                        <input [(ngModel)]="hero.name" placeholder="name">
                    </div>
                </div>
                `
})

export class HeroDetailComponent {
    // add the hero property that references the hero class
    hero: Hero;
}
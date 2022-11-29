import { Component } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from '../hero.service';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes:Hero[]=[];//英雄列表
  selectedHero?: Hero;//当前选择的英雄
  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
  constructor(private  heroService:HeroService,private messageService:MessageService){

  }
  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
  ngOnInit():void{
    //初始化逻辑
   this.getHeroes()
  }
}

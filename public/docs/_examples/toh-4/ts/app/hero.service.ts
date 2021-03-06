// #docplaster
// #docregion
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
  //#docregion get-heroes
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  //#enddocregion get-heroes

  // See the "Take it slow" appendix
  //#docregion get-heroes-slowly
  getHeroesSlowly() {
    return new Promise(resolve =>
      setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
  //#enddocregion get-heroes-slowly
}
// #enddocregion
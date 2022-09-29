import { Injectable } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

import {Animal} from '../Animal';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}

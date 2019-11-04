import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getRandomPictureUrl(): string{
    return `/assets/random/pic${PictureService.getRandomNumber(1, 5)}.jpg`;
  }

  private static getRandomNumber(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

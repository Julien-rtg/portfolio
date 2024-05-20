import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public title: string = 'Welcome to my Portfolio.';
  public titleToShow: string = '';

  public phrases: Array<{ word: string; delay: number, last?: boolean }> = [
    { word: 'Welcome', delay: 120 },
    { word: 'to', delay: 150 },
    { word: 'my', delay: 150 },
    { word: 'Portfolio.', delay: 250, last: true },
  ];
  public phrasesToShow: Array<string> = [''];

  public constructor() {
    this.titleAnimation();
  }

  public async wordAnimation(
    word: string,
    index: number,
    delay: number
  ): Promise<boolean> {
    const countWord = word.length;
    let ended: boolean = false;
    for (const i of Array(countWord).keys()) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      if (!this.phrasesToShow[index]) {
        this.phrasesToShow.push('')
      }
      this.phrasesToShow[index] += word[i];
      if (i === countWord - 1) {
        ended = true;
      }
    }

    return ended;
  }

  public async titleAnimation(): Promise<void> {
    for (const [index, word] of this.phrases.entries()) {
      await this.wordAnimation(word.word, index, word.delay);
      if(word.last) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.phrasesToShow = [''];
        this.titleAnimation();
      }
    }
  }
}

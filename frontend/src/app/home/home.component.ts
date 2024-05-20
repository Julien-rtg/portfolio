import { Component, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faAnglesDown = faAnglesDown;
  @ViewChildren('underscore') public underscore: any;
  public phrases: Array<{ word: string; delay: number, last?: boolean }> = [
    { word: 'Welcome', delay: 120 },
    { word: 'to my', delay: 150 },
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
  ): Promise<void> {
    const countWord = word.length;
    for (const i of Array(countWord).keys()) {
      if(word[i] !== ' ') {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
      if (!this.phrasesToShow[index]) {
        this.phrasesToShow.push('')
      }
      this.phrasesToShow[index] += word[i];
    }
  }

  public async titleAnimation(): Promise<void> {
    for (const [index, word] of this.phrases.entries()) {
      await this.wordAnimation(word.word, index, word.delay);
      // wait 200ms before next word
      await new Promise((resolve) => setTimeout(resolve, 200));
      this.underscore.toArray()[index].nativeElement.classList.add('hidden');
      if(word.last) {
        const id = setInterval(() => {
          this.underscore.toArray()[index].nativeElement.classList.toggle('hidden');
        }, 500);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        clearInterval(id);
        this.phrasesToShow = [''];
        this.titleAnimation();
      }
    }
  }
}

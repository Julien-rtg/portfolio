import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public title: string = 'WELCOME TO MY PORTFOLIO.';
  public titleToShow: string = '';

  public constructor() { 
    this.titleAnimation();
  }

  public async titleAnimation(): Promise<void> {
    const countTitle = this.title.length;
    for (const i of Array(countTitle).keys()) {
      setTimeout(() => {
        // Remove the last character if it is an underscore
        this.titleToShow.charAt(i) === '_' ? this.titleToShow = this.titleToShow.slice(0, -1) : null;
        this.titleToShow += this.title[i];
        if (i === countTitle - 1) {
          setTimeout(() => {
            this.titleToShow = '';
            this.titleAnimation();
          }, 3000);
        }
      }, 200 * i);
    }
  }

}

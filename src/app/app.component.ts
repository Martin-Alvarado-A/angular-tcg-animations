import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted  => normal', animate(800)),
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          backgroundColor: 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(0px) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted  => normal', animate(800)),
      transition('shrunken  <=> *', [
        style({
          backgroundColor: 'orange',
        }),
        animate(
          500,
          style({
            borderRadius: '50px',
          })
        ),
        animate(500),
      ]),
    ]),
    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300),
        style({
          transform: 'translateX(100px)',
          opacity: 0,
        }),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list: string[] = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState === 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
    // this.wildState = this.state === 'normal' ? 'highlighted' : 'normal';
  }
}

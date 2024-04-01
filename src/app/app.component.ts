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
      transition('normal => highlighted', animate(300)),
      transition('highlighted  => normal', animate(800)),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  list: string[] = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {}

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlighted' : 'normal';
  }
}

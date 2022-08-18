import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];

  obj = { a: 1, b: { c: 2 } };

  inputValue = '';

  // img =
  //   'https://res.cloudinary.com/teepublic/image/private/s--1Ve8LYRO--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_484849,e_outline:48/co_484849,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1530117471/production/designs/2832573_0.jpg';

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeot is over');
    //   this.img =
    //     'https://gitlab.com/uploads/-/system/group/avatar/2608526/C2Sg2H8WgAAsW40.jpg';
    // }, 5000);
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('Click!');
  }
}

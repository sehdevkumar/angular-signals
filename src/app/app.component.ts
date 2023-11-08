import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  count = signal('')


  onUpdateValues() {
     this.count.update((num) => {

      const generator =  this.generator().next();
      return num + generator.value
     })
  }



  *generator() {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
  }



  onResetValues() {
     this.count.set('')
  }


}

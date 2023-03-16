import { Component } from '@angular/core';
declare var ConfettiGenerator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Maagd';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(){
    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    this.temp();
  }

  temp() {
   // To set two dates to two variables
   var date1 = new Date("08/11/2000");
   var date2 = new Date();
     
   // To calculate the time difference of two dates
   var Difference_In_Time = date2.getTime() - date1.getTime();
     
   // To calculate the no. of days between two dates
   this.days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
     
  }

  play() {
    const random = Math.floor(Math.random() * 20)
    console.log(random)
    var audio = new Audio(`assets/audio${random}.mp3`);
    audio.play();
  }
}

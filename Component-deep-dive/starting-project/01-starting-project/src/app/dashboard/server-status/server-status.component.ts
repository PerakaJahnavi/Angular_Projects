import { Component, DestroyRef, OnDestroy, OnInit, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'unknown';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: NodeJS.Timeout;
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus())
    });
  }
  // constructor() {
  //   setInterval(() => {
  //     const rnd = Math.random(); // 0 - 0.99999999999

  //     if(rnd < 0.5){
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9){
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  // ngOnInit() {
  //   console.log('ON INIT');
  //   this.interval = setInterval(() => {
  //     const rnd = Math.random(); // 0 - 0.99999999999

  //     if(rnd < 0.5){
  //       this.currentStatus = 'online';
  //     } else if (rnd < 0.9){
  //       this.currentStatus = 'offline';
  //     } else {
  //       this.currentStatus = 'unknown';
  //     }
  //   }, 5000);
  // }

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999

      if(rnd < 0.5){
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9){
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

}

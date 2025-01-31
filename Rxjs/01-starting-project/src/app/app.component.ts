import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  // interval = signal(0);
  interval$ = interval(1000);
  // intervalSignal = toSignal(this.interval$);
  intervalSignal = toSignal(this.interval$, {initialValue: 0});;
  // doubleInterval = computed(() => this.interval() * 2);
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      if(timesExecuted > 3){
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value....');
      subscriber.next({message: 'New value'});
      timesExecuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times.`)
    // })
    // toObservable(this.clickCount);
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.interval.update(prevIntervalNum => prevIntervalNum + 1);
    // }, 1000);

  //   const subscrption = interval(1000).pipe(
  //     map((val) => val * 2)
  //   )
  //   .subscribe({
  //     next: (val) => console.log(val)    
  //   });
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED')
    });
    const subscrption = this.clickCount$.subscribe({
      next: (val) => console.log(`Clicked button ${this.clickCount()} times.`)
    });

    this.destroyRef.onDestroy(() => {
      subscrption.unsubscribe();
    })
    
  }

  onClick() {
    this.clickCount.update(preCount => preCount + 1);
  }

}

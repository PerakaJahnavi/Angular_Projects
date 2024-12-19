import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "../log.directive";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    // queryParam = input('myapp');
    queryParam = input('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor() {
        console.log('SafeLinkDirective is active!');
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');

        if(wantsToLeave){
            // const address = (event.target as HTMLAnchorElement).href;
            const address = this.hostElementRef.nativeElement.href;
            // (event.target as HTMLAnchorElement).href = address + '?form=myapp';
            // (event.target as HTMLAnchorElement).href = address + '?form' + this.queryParam();
            this.hostElementRef.nativeElement.href = address + '?form' + this.queryParam();
            return;
        }

        event.preventDefault();
    }

}
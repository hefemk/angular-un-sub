import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'parent-component',
    templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit, OnDestroy {

    @ViewChild(ChildComponent, {static: true}) child: ChildComponent;

    private sub: Subscription;

    /** override */
    ngOnInit(): void {
        console.log('ParentComponent.ngOnInit');

        this.sub = this.child.newMessage.subscribe(this.onMessage);
    }

    /** override */
    ngOnDestroy(): void {
        console.log('ParentComponent.ngOnDestroy');

        // this.sub?.unsubscribe();
    }

    onMessage(message: string): void {
        alert(`[Parent] ${message}`);
    }
}

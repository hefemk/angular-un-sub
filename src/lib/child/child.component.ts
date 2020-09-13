import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ComponentHolderService } from '../componen-holder.service';

@Component({
    selector: 'child-component',
    template: `
        <h2>Child</h2>
        <button type="button" (click)="sendMessage()">Send message to Parent component</button>
    `
})
export class ChildComponent implements OnInit, OnDestroy {
    @Output() newMessage: EventEmitter<string> = new EventEmitter();

    constructor(private holder: ComponentHolderService) {}

    /** override */
    ngOnInit(): void {
        this.holder.childComps.push(this);
        console.log('ChildComponent.ngOnInit');
    }

    /** override */
    ngOnDestroy(): void {
        console.log('ChildComponent.ngOnDestroy');
    }

    sendMessage(): void {
        this.newMessage.next('A new message from ChildComponent.');
    }

}

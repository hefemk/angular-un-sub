import { Injectable } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Injectable()
export class ComponentHolderService {
    childComps: ChildComponent[] = [];
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ResourceService {

    private resource: Subject<string> = new Subject();

    resource$: Observable<string> = this.resource.asObservable();

    updateResource(value: string): void {
        this.resource.next(value);
    }

}

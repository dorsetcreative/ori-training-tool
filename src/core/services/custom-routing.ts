import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'}) export class CustomRoutingService {
  public customRouteChange: Subject<void> = new Subject<void>();
  public customRouteChange$: Observable<void> = this.customRouteChange.asObservable();
}

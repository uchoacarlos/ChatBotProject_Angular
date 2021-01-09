import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminGuard implements CanActivateChild {
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log(route);
        console.log(state);

        if (state.url.includes('edit')) {
            alert('Usuario sem acesso');
            return false;
        }
        return true;
    }

}
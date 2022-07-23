/**
 * This file handles navigation for the core application. The URLs defined here are the parent directories for the entire SPA. It enables navigation from one view to the next
 * as users perform application tasks. A change in the browser URL indicates an instruction to change the view to the corresponding component.
 *
 * {@link https://angular.io/guide/router | Angular Router Guide}
 *
 * @remarks The order of routes is important because the Angular Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above
 *          less specific routes. To render the routed view corresponding to a browser URL, use the router outlet HTML like so:
 * ```html
 * <router-outlet></router-outlet>
 * ```
 */

import { ExtraOptions, NoPreloading, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundGuard } from '@core/guards/not-found/not-found.guard';

import { RouteResolverService } from '@core/services/route-resolver/route-resolver.service';

import { NotFoundComponent } from '@core/components/not-found/not-found.component';

const EXTRA_OPTIONS : ExtraOptions = {
  enableTracing : false,
  useHash : undefined,
  anchorScrolling : 'enabled',
  canceledNavigationResolution : 'replace',
  initialNavigation : 'enabledNonBlocking',
  onSameUrlNavigation : 'reload',
  paramsInheritanceStrategy : 'emptyOnly',
  preloadingStrategy : NoPreloading,
  relativeLinkResolution : 'corrected',
  scrollPositionRestoration : 'enabled',
  urlUpdateStrategy : 'eager'
};

enum AppRoute {
  Home = '',
  Contributors = 'contributors',
  Login = 'login',
  Users = 'users',
  NotFound = '404'
}

const APP_ROUTES : Routes = [
  {
    path : AppRoute.Home,
    pathMatch : 'full',
    redirectTo : AppRoute.Contributors
  },
  {
    path : AppRoute.Contributors,
    loadChildren : async() => (await import(/* webpackChunkName: "ContributorsModule" */ '@contributors/contributors.module')).ContributorsModule,
    title : AppRoute.Contributors.charAt(0).toUpperCase() + AppRoute.Contributors.slice(1)
  },
  {
    path : AppRoute.Login,
    loadChildren : async() => (await import(/* webpackChunkName: "LoginModule" */ '@login/login.module')).LoginModule,
    title : AppRoute.Login.charAt(0).toUpperCase() + AppRoute.Login.slice(1)
  },
  {
    path : AppRoute.NotFound,
    component : NotFoundComponent,
    resolve : { intendedRouteGuesses : RouteResolverService }, // NotFoundComponent Is Fed Intended Route Guesses
    title : AppRoute.NotFound.charAt(0).toUpperCase() + AppRoute.NotFound.slice(1)
  },
  {
    path : '**',
    canActivate : [NotFoundGuard],
    component : NotFoundComponent,
    title : AppRoute.NotFound.charAt(0).toUpperCase() + AppRoute.NotFound.slice(1)
  }
];

@NgModule({
  exports : [RouterModule],
  imports : [RouterModule.forRoot(APP_ROUTES, EXTRA_OPTIONS)]
})
class AppRoutingModule { }

export {
  AppRoute,
  AppRoutingModule,
  APP_ROUTES
};

import 'zone.js/dist/zone-testing';

/******************************************************************************************************************************************************************************
 * This file defines the environment under which we test the application via Karma.
 *
 * {@link https://angular.io/guide/testing | Angular Testing Guide}
 *
 * @remarks Zone.js imports must be at the top of this file.
 *****************************************************************************************************************************************************************************/

/*  eslint-disable @typescript-eslint/naming-convention */

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { getTestBed } from '@angular/core/testing';

declare const require : { context(path : string, deep ?: boolean, filter ?: RegExp) : { keys() : string[]; <T>(id : string) : T; }; };

// Initialize The Angular Testing Environment
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), { teardown : { destroyAfterEach : true, rethrowErrors : true } });

// Find All Tests In The Project
const context : { <T>(id : string) : T; keys() : string[]; } = require.context('./', true, /\.spec\.ts$/);

// Load Their Modules
context.keys().map(context);

// Load Material Icons From The Internet For Tests As Well
const materialIcons : HTMLLinkElement = document.createElement('link');
materialIcons.href = 'https://fonts.googleapis.com/css2?family=Material+Icons';
materialIcons.rel = 'stylesheet';

document.head.appendChild(materialIcons);

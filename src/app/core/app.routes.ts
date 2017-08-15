import { Routes } from '@angular/router'

//  Components
import { AppComponent } from './app.component';
import { HomeComponent } from '../modules/home/home.component';


export const rootRouterConfig: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	// Book Routes
	{ path: '**', redirectTo: 'home' }
	];
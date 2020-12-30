import { PlaygroundComponent } from './components/playground/playground.component';
import { ReadMeComponent } from './components/readme/readme.component';
import { Routes, RouterModule } from '@angular/router';

const arr: Routes = [
 {path: '', redirectTo: '/home', pathMatch: 'full'},
 {path: 'home', component: PlaygroundComponent}
];

 export const routing = RouterModule.forRoot(arr);
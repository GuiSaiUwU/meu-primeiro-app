import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { Adm } from './adm/adm';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'user', component: User},
    {path: 'adm', component: Adm}
];

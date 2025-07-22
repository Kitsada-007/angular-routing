import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Memder } from './pages/memder/memder';
import { List } from './pages/memder/list/list';
import { Profile } from './pages/memder/profile/profile';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { Test } from './pages/memder/test/test';

export const routes: Routes = [
    {path: '', component: Main},
    {path:'member', component: Memder,
        children: [
            {path: 'list', component: List},
            {path: 'profile', component: Profile},
            {path: 'test/:id', component: Test},
            {path: 'test', component: Test}
        ]
    },
    //Wild Card Route for 404 request
     { path: '**', component: Pagenotfound },
];

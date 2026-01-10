import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { About } from './pages/about/about';
import { MovieList } from './Components/movie-list/movie-list';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'contact',
        component: Contact,
    },
    {
        path:'about',
        component: About
    },
    {
        path: 'movies/:id',
        component: MovieDetails
    },
    {
        path:'movies',
        component: MovieList
    },
    
];

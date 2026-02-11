import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductAdd } from './components/product-add/product-add';

export const routes: Routes = [
    { path: '', component: ProductList },
    { path: 'add', component: ProductAdd },
    { path: '**', redirectTo: '' }
];
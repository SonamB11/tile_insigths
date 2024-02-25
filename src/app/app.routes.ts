import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'tile-app', loadChildren: () => import('./tile-app/tile-app.module').then(m => m.TileAppModule)}

];

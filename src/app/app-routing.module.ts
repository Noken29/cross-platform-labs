import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./pages/graph/graph.module').then(m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./pages/file/file.module').then(m => m.FilePageModule)
  },
  {
    path: 'abstract-class',
    loadChildren: () => import('./pages/abstract-class/abstract-class.module').then(m => m.AbstractClassPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

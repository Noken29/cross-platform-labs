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
  },
  {
    path: 'interfacepage',
    loadChildren: () => import('./pages/interfacepage/interfacepage.module').then(m => m.InterfacepagePageModule)
  },
  {
    path: 'servicepage',
    loadChildren: () => import('./pages/servicepage/service-page.module').then(m => m.ServicePageModule)
  },
  {
    path: 'reactive-form',
    loadChildren: () => import('./pages/reactive-form/reactive-form.module').then(m => m.ReactiveFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

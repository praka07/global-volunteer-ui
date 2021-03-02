import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [{
  path: 'home', component: HomePageComponent
}, {
  path: 'login', component: LoginPageComponent
},
{
  path: 'systemadmindashboard', loadChildren: () => import('./components/system-administrator-dashboard/system-administrator-dashboard.module').then(mod => mod.SystemAdministratorDashboardModule),



},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

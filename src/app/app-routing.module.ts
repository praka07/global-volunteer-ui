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

{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'systemadministrator', loadChildren: () => import('./components/system-administrator/system-administrator.module').then(m => m.SystemAdministratorModule) },
{ path: 'activitymanager', loadChildren: () => import('./components/activity-manager/activity-manager.module').then(m => m.ActivityManagerModule) },
  { path: 'volunteer', loadChildren: () => import('./components/volunteer/volunteer.module').then(m => m.VolunteerModule) },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

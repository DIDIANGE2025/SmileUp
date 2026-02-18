import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { ActivityDetail } from './pages/activity-detail/activity-detail';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'admin-dashboard', component: AdminDashboard },
  { path: 'activity/:id', component: ActivityDetail },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
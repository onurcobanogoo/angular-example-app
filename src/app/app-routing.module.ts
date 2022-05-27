import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {PostListComponent} from "./routes/post-list/post-list.component";
import {UserListComponent} from "./routes/user-list/user-list.component";
import {AuthGuard} from "./guards/auth.guard";
import {PostDetailComponent} from "./routes/post-detail/post-detail.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostListComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: PostDetailComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

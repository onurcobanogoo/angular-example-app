import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./routes/home/home.component";
import {PostListComponent} from "./routes/post-list/post-list.component";
import {UserListComponent} from "./routes/user-list/user-list.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'users', component: UserListComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

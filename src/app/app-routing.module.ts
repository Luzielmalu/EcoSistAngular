import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './components/pages/agendar/agendar.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegistrarComponent } from './components/pages/registrar/registrar.component';
import { SobreComponent } from './components/pages/sobre/sobre.component';
const routes: Routes = [

  {path: '', component: HomeComponent, children:  [
    {
      path:'dashboard',
      component: DashboardComponent
    }
  ]
},

  {path: 'sobre', component: SobreComponent},
  {path:'cadastrar', component: CadastroComponent},
  {path:'contato',component: ContatoComponent},
  {path: 'login', component: LoginComponent},
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {path: 'registrar', component: RegistrarComponent},
  {path: 'agendar', component: AgendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent  {

  readonly BASE_PATH ='/'
  

  constructor(
    private authService: AuthService,
    private router: Router
    
  ) {
    // Inicializando o formulário com validações
    
  }
logout(){
  this.authService.logout();
  this.router.navigate(['/login']);
}
  
  // Carrega as pessoas
  

  // Carrega as atividades
 

  // Atribuir atividade a uma pessoa
  
}

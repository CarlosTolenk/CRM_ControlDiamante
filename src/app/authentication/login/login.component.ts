import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [ToastrService, AuthService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform = true;
  recoverform = false;
  email = '';
  name: string = '';
  password: string = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(
    public authService: AuthService, 
    private router: Router,
    private toastr: ToastrService, 
    )
   {}

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  onLogin(){    
    console.log(
      `Usuario: ${this.email} Contraseña: ${this.password}`
    )

    this.authService.loginWithEmail(this.email, this.password)
    .then(() =>{
      console.log("Login Completo");
      this.toastr.success('Ha iniciado sección correctamente', 'Completada!');  
      this.router.navigate(['dashboard/dashboard']);
    })
    .catch(_error => {
      this.error = _error
      console.log(this.error);
      this.toastr.error('Ha iniciado sección correctamente, el correo ó la contraseña son incorrectas', 'Ha ocurrido un error!');   
    })
  }
}

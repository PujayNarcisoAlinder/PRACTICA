import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //usuarios
  usuarios: {nombre:string, contraseña: string}[]=[];
  //datos
  nuevousuario={
    nombre:'',
    contraseña:''
  };

  //registrar
  registrar(){
    if(this.nuevousuario.nombre.trim() && this.nuevousuario.contraseña.trim()){
      this.usuarios.push({...this.nuevousuario});
      this.nuevousuario={nombre:'', contraseña:''}//limpiar formulario
    }
  }

}
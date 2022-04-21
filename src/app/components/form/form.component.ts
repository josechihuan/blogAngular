import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;
  constructor(private postsService: PostsService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.formulario = new FormGroup({
      //validamos
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      texto: new FormControl('', []),
      autor: new FormControl('', []),
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
      categoria: new FormControl('', []),

    }, [])
  }

  ngOnInit(): void {}
    // cuando cargue el formulario si hay ruta activa estamos actualizando si no estamos trabajando con el formulario de registro, que ya funciona. capturamos la ruta activa
         
        
    recogerDatos() {
    //tengo que enviar los datos a la API pasando por el serivcio injectamos servicio, cuando envie los datos tengo que lanzar un mensaje de usuario registrado e inmediatamente redireccionar a las lista de usuarios
    //console.log
   
      const response = this.postsService.create(this.formulario.value)
      console.log(response)
      if (response) {
        this.router.navigate(['/home'])
        
      }
     
    }
       
  
  checkControl(controlName: string, errorName: string): boolean {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true
    } else {
      return false
    }
  }
}


  
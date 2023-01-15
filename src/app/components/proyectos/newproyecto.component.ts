import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP:string;
  descripcionP:string;
  urlP:string;

  constructor(private proyectoS:ProyectosService, private router:Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const proyecto = new Proyectos(this.nombreP, this.descripcionP, this.urlP);
    this.proyectoS.save(proyecto).subscribe(data =>{
      alert("Proyecto anadido de forma correcta");
      this.router.navigate(['']);
    },err =>{
      alert("Fallo ");
      this.router.navigate(['']);
    }
    )
  }

}

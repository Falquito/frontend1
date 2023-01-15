import { Component, OnInit} from '@angular/core';
import { Personita } from 'src/app/model/Personita.model';
import { PersonitaService } from 'src/app/service/personita.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  personita:Personita = new Personita("","","")

  constructor(public personitaService:PersonitaService){}
  ngOnInit(): void {
    this.personitaService.getPersona().subscribe(data => {
      this.personita = data
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/httpservice.client'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	//	Ejemplo de interpolaciones
	private interpolacion1 = 'interpolacion 1'
	public interpolacion2 = 'interpolacion2'
	interpolacion3 = 'interpolacion3'


	constructor(private service: HttpService) { }

	ngOnInit() {
	}
	testService() {
		this.service.alertar();
	}

}

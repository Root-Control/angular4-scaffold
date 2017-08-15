import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
     alertar() {
         alert('Test de servicio llamado');
     }
}

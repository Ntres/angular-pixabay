import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css'],
})
export class BuscarImagenComponent implements OnInit {
  nombreImagen: string;

  constructor(private _imageService: ImagenService) {
    this.nombreImagen = '';
  }

  ngOnInit(): void {}

  buscarImagenes = () => {
    if (this.nombreImagen == '') {
      this._imageService.setError('Agrega un texto de busqueda');
      return;
    }

    this._imageService.enviarTerminoBusqueda(this.nombreImagen);
  };
}

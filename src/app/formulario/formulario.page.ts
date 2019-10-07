import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

   async enviarDados() {
    const alert = await this.alertController.create({
      header: 'Pronto!',
      message: 'Dados cadastrados!',
      buttons: ['OK']
    });

     await alert.present();
}
}

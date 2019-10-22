import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  dadosPessoa = {
    nome:'',
    email:'',
    idade:''
  }

  constructor(public alertController: AlertController, private apiService : ApiService) { }

  ngOnInit() {
  }

   async enviarDados() {

    // const retorno = await this.apiService.postData(this.dadosPessoa);

    const alert = await this.alertController.create({
      header: 'Pronto!',
      message: this.dadosPessoa.nome,
      buttons: ['OK']
    });

     await alert.present();

     this.apiService
      .sendPostRequest(this.dadosPessoa)
      .subscribe((data)=>{
        console.log(data);
        }, error => {
          console.log(error);
        });

      }

}


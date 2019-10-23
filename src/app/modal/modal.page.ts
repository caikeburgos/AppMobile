import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

	@Input() modalController: ModalController;
	@Input() fisrtName: string;
	@Input() lastName: string;

  constructor() { }

  ngOnInit() {
  }

  dismissModal(){
  	this.modalController.dismiss({
  		'dismissed': true
  	});
  }

}

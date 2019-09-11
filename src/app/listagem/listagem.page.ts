import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

	public itens: Array<{ titulo: string; descricao: string }> = [];
  public posts;

  constructor(private apiService : ApiService) { 

    this.apiService.getPosts().subscribe((data)=>{
      console.log(data);
      this.posts = data;
    });

  	// for (let i = 0; i < 5; i++) {
   //    this.itens.push(
   //    {
   //      titulo: 'Elemento ' + (i+1),
   //      descricao: 'This is item #' + (i+1)
   //    }
   //    );

  //}
}

  ngOnInit() {
  }

}

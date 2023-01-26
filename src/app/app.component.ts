import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  events: any[] = [];

  ngOnInit() {
    this.events = [
      { content: 'Pedido', date: '25/01/2023 10:30', status: 'R' },
      { content: 'Produzido', date: '26/01/2023 14:00', status: 'R' },
      { content: 'Saiu para a Entrega'  },
      { content: 'Entregue'  },
    ]
  }

}

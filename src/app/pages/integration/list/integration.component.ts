import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  listOfData;

  constructor() {
    this.listOfData = new NzDemoTableBasicComponent().listOfData;
  }

  ngOnInit(): void {
  }


}

export class NzDemoTableBasicComponent {
  listOfData: any[] = [
    {
      key: '1',
      client: 'John Brown',
      type: '../../../assets/img/conta_azul.svg',
      createdAt: '15/10/2022 12:33',
      updatedAt: '15/10/2022 12:33',
    },
    {
      key: '2',
      client: 'Jim Green',
      type: '../../../assets/img/logo_omie.png',
      createdAt: '15/10/2022 12:33',
      updatedAt: '15/10/2022 12:33',
    },
    {
      key: '3',
      client: 'Joe Black',
      type: '../../../assets/img/conta_azul.svg',
      createdAt: '15/10/2022 12:33',
      updatedAt: '15/10/2022 12:33',
    }
  ];
}
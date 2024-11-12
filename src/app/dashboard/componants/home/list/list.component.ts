import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  stationName: string = 'STATION NAME DUMMY';
  totalSales: number = 62721;
  totalValue: number = 550;
  compressionState: string = 'Compression';
  totalTransactionCount: number = 5161;
  maxTransactionPerHour: number = 20;
  maxTransactionDateTime: string = '8-1-2021 | 10:16 PM';
data: any[] = [
  {
    stationName :'STATION NAME DUMMY',
    totalSales : 62721,
    totalValue :550,
    compressionState :'Compression',
    totalTransactionCount :5161,
    maxTransactionPerHour :20,
    maxTransactionDateTime :'8-1-2021 | 10:16 PM'
  },
  {
    stationName: 'STATION NAME DUMMY',
    totalSales: 62721,
    totalValue: 550,
    compressionState: 'Compression',
    totalTransactionCount: 5161,
    maxTransactionPerHour: 20,
    maxTransactionDateTime: '8-1-2021 | 10:16 PM'
  }

]
 
}

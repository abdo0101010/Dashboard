import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'] 
})
export class CardsComponent {

  data: any[] = [
    {
      title: '71,028',
      Details: 'Total Value',
      arrow: '2%',
    },
    {
      id:1,
      title: '20,000',
      Details: 'Total Sales',
      arrow: '50',
    },
    {
      title: '20,000',
      Details: 'Avg Sales',
      arrow: '50',
    },
    {
      id: 1,
      title: '1,567',
      Details: 'Total Transaction Count',
      arrow: '20',
    },
  ];
  bg(card: any): { [key: string]: string } {
    return {
      'background-color': card.id=== '71,028' ? 'var(--cards-color)' : 'var(--secondary-color)',
    };
    
  }
  arrow(card: any): { [key: string]: string } {
    let arrowColor = 'var(--primary-color)';
    let arrowDirection = '↑';
    let numberColor = 'var(--primary-color)';

    if (card.id === 1) {
      arrowColor = '#00CBC0';
      arrowDirection = '↑';
      numberColor = '#00CBC0';
    }
    else {
      arrowColor = 'orange';
      arrowDirection = '↓';
      numberColor = 'orange';
    }

    return {
      'color': numberColor,
      'transform': arrowDirection === '↓' ? 'rotate(180deg)' : 'none',
      'arrowColor': arrowColor,
    };
  }



}


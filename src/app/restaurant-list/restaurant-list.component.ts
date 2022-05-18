import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  allRestaurants: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.allRestaurants = [
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
            {
              id: '#194356',
              name: "McDonald's Pazzallo",
              catchPhrase: "I'm Lovin'it",
              address: 'Via la Sguancia 9, 6912 Lugano',
              price: '$149',
            },
            {
              id: '#323323',
              name: 'Burger King',
              catchPhrase: 'Home of the Whopper',
              address: 'Piazza Alessandro Manzoni 1, 6900 Lugano',
              price: '$129',
            },
        ];
  }

}

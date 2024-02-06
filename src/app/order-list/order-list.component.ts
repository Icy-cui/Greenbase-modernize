import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'order-list',
  styleUrls: ['order-list.component.scss'],
  templateUrl: 'order-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
  ],
})
export class orderList implements AfterViewInit {
  displayedColumns: string[] = [
    'order',
    'date',
    'customer',
    'weight',
    'payment',
    'status',
    'total',
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  order: string;
  date: string;
  weight: number;
  payment: number;
  status: number;
  customer: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 0,
    weight: 1.0079,
    customer: 'Tom Anderson',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 0,
    weight: 4.0026,
    customer: 'Jayden Walker',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 1,
    weight: 6.941,
    customer: 'Inez Kim',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 0,
    weight: 9.0122,
    customer: 'Francisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 0,
    weight: 10.811,
    customer: 'Violet Phillips',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:20 PM',
    status: 1,
    weight: 12.0107,
    customer: 'Rosetta Becker',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:20 PM',
    status: 2,
    weight: 14.0067,
    customer: 'Dean Love',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:20 PM',
    status: 0,
    weight: 15.9994,
    customer: 'Nettie Tyler',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:20 PM',
    status: 1,
    weight: 18.9984,
    customer: 'Lora Weaver',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 1,
    weight: 20.1797,
    customer: 'Vincent Cannon',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 2,
    weight: 22.9897,
    customer: 'Nettie Palmer',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 2,
    weight: 24.305,
    customer: 'Miguel Harris',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:12 PM',
    status: 2,
    weight: 26.9815,
    customer: 'Angel Conner',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:12 PM',
    status: 1,
    weight: 28.0855,
    customer: 'Rosalie Singleton',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:12 PM',
    status: 0,
    weight: 30.9738,
    customer: 'Francisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'May 5, 4:12 PM',
    status: 0,
    weight: 32.065,
    customer: 'Srancisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 0,
    weight: 35.453,
    customer: 'Srancisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 1,
    weight: 39.948,
    customer: 'Srancisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 1,
    date: 'Potassium',
    status: 1,
    weight: 39.0983,
    customer: 'Srancisco Henry',
    total: 49.2,
  },
  {
    order: '#12512B',
    payment: 0,
    date: 'May 5, 4:12 PM',
    status: 2,
    weight: 40.078,
    customer: 'Casino Henry',
    total: 49.2,
  },
];

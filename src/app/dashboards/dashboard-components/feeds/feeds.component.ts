import { Component } from '@angular/core';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent {
  constructor() {}

  feeds: Object[] = [  
    {
      bg: 'bg-light-success',
      icon: 'ti-user',
      msg: 'Nuevo cliente registrado.',
      time: 'Hace 5 horas'
    },
    {
      bg: 'bg-light-warning',
      icon: 'ti-shopping-cart',
      msg: 'Nueva orden registrada.',
      time: '2 Hours ago'
    },
    {
      bg: 'bg-light-success',
      icon: 'ti-user',
      msg: 'Nuevo cliente registrado.',
      time: '31 May'
    },
    {
      bg: 'bg-light-inverse',
      icon: 'fa fa-envelope',
      msg: 'Mensajes enviados.',
      time: 'Hace 6 horas'
    },
    {
      bg: 'bg-light-info',
      icon: 'fa fa-book',
      msg: 'Nuevo plan registrado',
      time: 'Hace 10 minutos'
    },
    {
      bg: 'bg-light-info',
      icon: 'fa fa-book',
      msg: 'Nuevo plan registrado',
      time: 'Hace 12 minutos'
    },
    {
      bg: 'bg-light-inverse',
      icon: 'fa fa-envelope',
      msg: 'Mensajes enviados.',
      time: '17 Julio'
    },
    {
      bg: 'bg-light-success',
      icon: 'ti-user',
      msg: 'Nuevo cliente registrado.',
      time: '31 May'
    }
  ];
}

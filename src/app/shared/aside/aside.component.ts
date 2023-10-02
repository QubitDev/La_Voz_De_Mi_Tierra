import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  constructor(private router: Router) {}
  menuOptions = [
    { icon: 'fas fa-home', text: 'Inicio', route: '/inicio' },
    { icon: 'fas fa-search', text: 'Buscar', route: '/buscar' },
    { icon: 'fas fa-star', text: 'Ranking', route: '/ranking' },
    { icon: 'fas fa-heart', text: 'Favoritos', route: '/favoritos' },
    { icon: 'fa-solid fa-plus', text: 'Registrar Audio', route: '/registerAudio' },
    { icon: 'fas fa-question-circle', text: 'Soporte', route: '/soporte' }
  ];

  //logica para manejar el evento de click del menu
  handleClick(option: any) {
    const route = option.route;
    if (route) {
      this.router.navigate([route]);
    }
  }

  ngOnInit(): void {

  }
}

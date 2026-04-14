import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  navegarParaInicio() {
    this.router.navigate(['/']);
  }

  navegarParaHome() {
    this.router.navigate(['/home']);
  }

  navegarParaAdm() {
    this.router.navigate(['/adm']);
  }

  navegarParaUser() {
    this.router.navigate(['/user']);
  }
}

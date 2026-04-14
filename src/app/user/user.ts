import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  nome = signal('Guilherme');
  idade: number = 20;

  incrementarIdade() {
    this.idade++;
  }

  desativarBotao() {
    return this.idade >= 35;
  }

}

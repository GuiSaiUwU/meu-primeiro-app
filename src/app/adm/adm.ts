import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-adm',
  imports: [FormsModule],
  templateUrl: './adm.html',
  styleUrl: './adm.css',
})
export class Adm {
  tarefa: string = '';
  tarefas: string[] = [];

  adicionarTarefas() {
    if (this.tarefa.trim() != '') {
      this.tarefas.push(this.tarefa);
      this.tarefa = '';
    }
  }
}

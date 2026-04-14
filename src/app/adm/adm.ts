import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


interface Tarefa {
  id: number,
  descricao: string
}

@Component({
  selector: 'app-adm',
  imports: [FormsModule],
  templateUrl: './adm.html',
  styleUrl: './adm.css',
})
export class Adm {
  tarefa: string = '';
  tarefas: Tarefa[] = [];
  disabledButton: boolean = false;
  geradorId: number = 0;
  
  adicionarTarefas() {
    if (this.tarefa.trim() != '') {
      this.tarefas.push(
        {id: this.geradorId, descricao: this.tarefa}
      );
      this.geradorId++;
      this.tarefa = '';
    }

    if (this.tarefas.length > 4) {
      this.disabledButton = true;
    }
  }
}

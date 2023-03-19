import { Component } from '@angular/core';

@Component({
  selector: 'app-list-collaborators',
  templateUrl: './list-collaborators.component.html',
  styleUrls: ['./list-collaborators.component.scss'],
})
export class ListCollaboratorsComponent {
  title: string ;
  collaborators: ICollaborators[] = [];
  delay: number;
  constructor() {
    this.title = "Colaboradores";
    this.delay = 0.6;
    this.collaborators = [
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
      { id: 7, nome: 'Nathan Carlos', salario: 4500, cargo: 'Dev Pl' },
    ];
  }
}

interface ICollaborators {
  id: number;
  nome: string;
  salario: number;
  cargo: string;
}

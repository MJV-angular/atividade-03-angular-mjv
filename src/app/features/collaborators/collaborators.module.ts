import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCollaboratorsComponent } from './list-collaborators/list-collaborators.component';

@NgModule({
  declarations: [
    ListCollaboratorsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListCollaboratorsComponent
  ]
})
export class CollaboratorsModule { }

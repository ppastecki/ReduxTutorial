import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JediListComponent } from './jedi-list/jedi-list.component';

@NgModule({
  declarations: [JediListComponent],
  imports: [CommonModule, FormsModule],
  exports: [JediListComponent]
})
export class JediModule { }

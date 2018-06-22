import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotesService} from '../../shared/services/notes.service';
import {IAuthResponse} from '../../shared/interfaces/auth.interface';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  noteForm: FormGroup;

  @Output() updateNotes = new EventEmitter();
  @Input() authUser: IAuthResponse;

  constructor(private fb: FormBuilder, private noteService: NotesService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      user_id: [this.authUser.id]
    });
  }

  create() {
    if (this.noteForm.valid) {
      this.noteService.createNote(this.noteForm.getRawValue()).subscribe(() => {
        this.updateNotes.emit('actualizar!');
        this.noteForm.reset({user_id: this.authUser.id});
        console.log(this.noteForm.getRawValue());
      });
    }
  }
}

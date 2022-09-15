import { Component, OnInit } from '@angular/core';
import { MatDialog, _closeDialogVia } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private matDialog: MatDialog, private route: Router) {}

  ngOnInit(): void {}

  closeDialog() {
    this.matDialog.closeAll()
  }
}

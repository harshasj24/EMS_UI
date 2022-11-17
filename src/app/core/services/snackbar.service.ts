import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SanckBarService {
  constructor(private snackbar: MatSnackBar) {}

  success(message: string) {
    this.snackbar.open(message, 'X', {
      panelClass: 'success',
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
    });
  }
  error(message: string) {
    this.snackbar.open(message, 'X', {
      panelClass: 'error',
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
    });
  }
}

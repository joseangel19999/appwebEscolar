import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _matdialogRef:MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario:string,
    private _snackBar:MatSnackBar,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  loginUsuario():void{
    //this._matdialogRef.close();
    this._snackBar.open('click','Ok',{
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'right'
    });
    this._router.navigate(['/escolar']);
    this._matdialogRef.close();
  }
  cerrarDialog():void{
    this._matdialogRef.close();
  }
}

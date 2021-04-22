import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-registrar',
  templateUrl: './menu-registrar.component.html',
  styleUrls: ['./menu-registrar.component.css']
})
export class MenuRegistrarComponent implements OnInit {

  //para emitir un evento al componente padre
  @Output()
  propagar = new EventEmitter<string>();//va emitir unn evento de tipo string
  txtButton: string ="";
  constructor() { }

  textItem:string="";

  ngOnInit(): void {
  }
  nuevoRegistro(){
    this.propagar.emit('Registrar');
  }  

  asigarText(text:string):void{
    this.textItem=text;
  }
  

}

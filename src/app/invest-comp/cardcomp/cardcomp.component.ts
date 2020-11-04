import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../view.card.model';

@Component({
  selector: 'app-cardcomp',
  templateUrl: './cardcomp.component.html',
  styleUrls: ['./cardcomp.component.css']
})
export class CardcompComponent implements OnInit {
  @Input() item:Card
  @Input() i:number
  margin:string='17px'
  colorBackGrounf='#0F237D';
  fontColorLeft='#1E1E1E';
  fontColorRight='#0F237D';
  constructor() { }

  ngOnInit(): void {

    switch (this.item.type) {
      case 'companies':
        this.colorBackGrounf='#F5F5F5';
        this.fontColorLeft='#1E1E1E';
        this.fontColorRight='#0F237D';
         break;
      case 'funds':
        this.colorBackGrounf='#0F237D';
        this.fontColorLeft='#FFFFFF';
        this.fontColorRight='#FFFFFF';
         break;
      case 'index':
        this.colorBackGrounf='#1857FA';
        this.fontColorLeft='#FFFFFF';
        this.fontColorRight='#FFFFFF';
        break;
      default:
        this.colorBackGrounf='white';
        this.fontColorLeft='#1E1E1E';
        this.fontColorRight='#0F237D';
        break;
     }
  }
  getMargin(){
    switch (this.i) {
      case 0:this.i=770; this.margin='77px';break;
      case 1:this.i=470;this.margin='47px';break;
      case 2:this.i=170;this.margin='17px';break;

      default:this.margin='17px'
        break;
    }
    console.log(this.margin)
    return this.margin
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: string[] = [];
  outProducts: string[] = [];
  pOut: any = '';
  btnLive: boolean = true;
  menuType: string = '';
  colorType: string = '';

  constructor() {
    this.products = [
      'name',
      'font',
      'price'
    ]
  }

  getOut() {
    if (this.products.length >= 1) {
      this.pOut = this.products.pop();
      this.outProducts.push(this.pOut);
    } else if (this.products.length == 0) {
      this.btnLive = false;
    }
  }


  changeUserType(userType: string) {
    if (userType == 'user') {
      this.menuType = 'user';
    } else if (userType == 'admin') {
      this.menuType = 'admin';
    } else if (userType == 'superUser') {
      this.menuType = 'superUser';
    }
  }

  changeColor(){
    if(this.colorType === 'red'){
      this.colorType = 'blue';
    }else{
      this.colorType = 'red';
    }
  }

}

import { Renderer2, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-of-ean',
  templateUrl: './list-of-ean.component.html',
  styleUrls: ['./list-of-ean.component.scss']
})
export class ListOfEanComponent implements OnInit {

  articels = [];
  item = {
    ean: null as string,
    quantity: 0 as number
  };
  currentItem: number;
  iE;
  iEreadonly = false;
  iQreadonly = false;
  oboChecked = false;

  constructor(private renderer: Renderer2) {
    this.currentItem = this.articels.length;
   }

  ngOnInit() {
  }

  defaultWorkspace() {
    // applying default state of workspace:
    // this.renderer.removeAttribute(this.iE, 'readonly');
    this.iEreadonly = false;
    this.iE.focus();
    this.item = {
      ean: null,
      quantity: 0
    };
  }

  addItem() {
    let existingArticle = false;
    this.iE = this.renderer.selectRootElement('#inputEAN');
    this.articels.forEach((element, index) => {
      if (element.ean === this.item.ean) {
        if (this.iEreadonly === true) {
          element.quantity = this.item.quantity;
        } else {
          element.quantity += this.item.quantity;
        }
        existingArticle = true;
      }
    });
    if (existingArticle === false) {
      this.articels[this.currentItem] = this.item;
    }
    this.currentItem = this.articels.length;
    this.defaultWorkspace(); // applying default state of workspace
  }

  removeItem(i) {
    this.articels.splice(i, 1);
    this.currentItem = this.articels.length;
    this.defaultWorkspace(); // applying default state of workspace
  }

  editItem(i) {
    this.currentItem = i;
    this.item.ean = this.articels[i].ean;
    // this.renderer.setAttribute(this.iE, 'readonly', 'true');
    this.iEreadonly = true;
    this.item.quantity = this.articels[i].quantity;
  }

}

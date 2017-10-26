import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NguiPopupComponent, NguiMessagePopupComponent } from '@ngui/popup';

@Component({
  selector: 'app-dform',
  templateUrl: './dform.component.html',
  styleUrls: ['./dform.component.css']
})
export class DformComponent implements OnInit {

  @ViewChild(NguiPopupComponent) popup: NguiPopupComponent;
  message: string;

  myForm: FormGroup;
  productList: Array<ProductInterface>;
  minLenghtSku: number = 3;

  constructor(fb: FormBuilder) {
    this.productList = new Array<ProductInterface>();

    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, Validators.minLength(this.minLenghtSku)])],
      'name': ['']

    });


    this.myForm.controls['sku'].valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    )
  }

  ngOnInit() {
  }


  onSubmit(value: ProductInterface): void {
    console.log('you submitted product: ', value);
    this.productList.push(value);
    this.myForm.reset();
  }



  deleteProduct(product: ProductInterface): void {
    console.log('you deleted product: ', product);

    this.popup.open(NguiMessagePopupComponent, {
      title: 'Delete product',
      message: `Are you sure that you want to delete the product with sku ${product.sku}?`,
      buttons: {
        OK: () => {
          this.message = "Ok button is pressed";
          var index = this.productList.indexOf(product);
          this.productList.splice(index, 1);
          this.popup.close();
        },
        CANCEL: () => {
          "Cancel button is pressed";
          this.popup.close();
        }
      }

    });
  };
}


export interface ProductInterface {
  sku: string;
  name: string;
}

export class Product implements ProductInterface {
  sku: string;
  name: string;

  constructor(sku?: string, name?: string) {
    this.sku = sku;
    this.name = name;
  }

  private setSku(sku: string) {
    this.sku = sku;
  }

  private setname(name: string) {
    this.name = name;
  }
  private getSku() {
    return this.sku;
  }

  private getName() {
    return this.name;
  }


  public toString() {
    return `Name: ${this.name},  Sku: ${this.sku}`;
  }
}
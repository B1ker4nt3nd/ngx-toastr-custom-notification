import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: '[pink-toast-component]',
  styleUrls: ['./custom-toastr.component.scss'],
  templateUrl: './custom-toastr.component.html',
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({
          opacity: 1
        }),
        animate('1s cubic-bezier(0.3, 1, 0.32, 1)')
      ]),
      transition('* => void', [
        animate('0.8s cubic-bezier(0.3, 1, 0.32, 1)', style({
          opacity: 0
        }))
      ])
    ]),
  ],
  preserveWhitespaces: false,
  // encapsulation: ViewEncapsulation.None
})
export class CustomToastrComponent extends Toast {
  warning = false;

  // constructor is only necessary when not using AoT
  constructor(
    protected toastrService: ToastrService,
    public toastPackage: ToastPackage,
  ) {
    super(toastrService, toastPackage);
    if (this.toastPackage.toastType === "toast-warning") {
      this.warning = true;
    }
  }

  action(event: Event) {
    event.stopPropagation();
    this.toastPackage.triggerAction();
    return false;
  }
}
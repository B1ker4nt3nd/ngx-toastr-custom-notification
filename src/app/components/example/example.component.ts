import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  public customSuccessNotify() {
    this.toastr.success('Hello world!', 'Toastr fun!');    
  }
  public customWarningNotify() {
    this.toastr.warning('Hello world!', 'Toastr fun!');    
  }
}

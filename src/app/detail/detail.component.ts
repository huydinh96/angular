import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public _id: number;
  public subscription: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // params cho phép chúng ta get params từ url của đối tượng activatedRouter nó trả về 1 Observable nên dùng subscribe
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this._id = params['id'];
    });
    // sau khi Init or get xog chúng tay lấy dc id. chúng get thêm 1 GetSingle để trả về đối tượng any service nữa
  }
  ngOnDestroy() {
    // dùng phương thức unsubscribe để hủy subscription
    this.subscription.unsubscribe();
  }

}

import {Component} from '@angular/core';
import {PeppaPigService} from '../services/peppapig.services';

@Component({
  selector: 'peppapig-component',
  template: `
              <div class="row">
              <div  class="col s12" [style.backgroundColor] = "isdisabled ? 'gray' : 'blue'">
                <h2>{{welcome}}</h2>
                <input type="text" >
              <a (mouseover) = "CleanFriends()"  class="waves-effect waves-light btn" [class.disabled] = "isdisabled" >
                  Clean Friends</a>
             <a (click)="GetFriends()" class="waves-effect waves-light btn">Get Friends</a>
                </div>
                  <ul class="collection" >
                      <li *ngFor="let f of friends">
                        <a  class="collection-item">{{f}}</a> 
                      </li>
                  </ul>

              </div>`,
  providers: [PeppaPigService]
})
export class PeppaPigComponent {
  friends: string[];
  isdisabled: Boolean = true;
  bigicon: Boolean = true;
  welcome: string = "Angular2 y Peppa Pig";
  age: string = "22";
  address: string = "ave catluyna";

  constructor(private _peppapigService: PeppaPigService) {
      
  }

  CleanFriends(event: any) {
    console.log(event);
    this.friends = [];
  }
  //metodo que se llamara al realizar click en get friend  
  GetFriends() {
    this.friends = this._peppapigService.getPeppaFriends();
    console.log(this.friends);
  }
}

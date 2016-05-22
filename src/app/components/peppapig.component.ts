import {Component} from 'angular2/core';
import {PeppaPigService} from '../services/peppapig.services';

@Component({
    selector: 'peppapig-component',
    template: `
              <div class="row">
              
              <div class="col s12" [style.backgroundColor] = "isdisabled ? 'gray' : 'blue'">
                <h2>{{welcome}}</h2>
                <input type="text" >
              <a class="waves-effect waves-light btn" [class.disabled] = "isdisabled" >
              
             class binding </a>
             <a class="waves-effect waves-light btn">style binding</a>
                </div>
              </div>`,
    providers: [PeppaPigService]
})
export class PeppaPigComponent {

    friends: string[];
    isdisabled: Boolean = true;
    bigicon: Boolean = true;
    welcome: string = "Angular2 y Peppa Pig"
    age: string

    constructor(private _peppapigService: PeppaPigService) {

        this.friends = this._peppapigService.getPeppaFriends();
        console.log(this.friends);
    }
}
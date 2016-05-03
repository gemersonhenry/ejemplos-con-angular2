import {Component} from 'angular2/core';
import {PeppaPigService} from '../services/peppapig.services';

@Component({
    selector: 'peppapig-component',
    template: `
              <div class="row">
              
              <div class="col s12">
                <h2>{{welcome}}</h2>
              <a class="waves-effect waves-light btn" [class.disabled] = "isdisabled" 
              
             >button</a>
                </div>
              </div>`,
    providers: [PeppaPigService]
})
export class PeppaPigComponent {

    friends: string[];
    isdisabled: Boolean = false;
    bigicon: Boolean = true;
    welcome: string = "interpolation"

    constructor(private _peppapigService: PeppaPigService) {

        this.friends = this._peppapigService.getPeppaFriends();
        console.log(this.friends);
    }
}
import {Component} from 'angular2/core';
import {PeppaPigService} from '../services/peppapig.services';

@Component({
    selector:'peppapig-component',
    template:`
              <div class="row">
              <div class="col s12">
                <h2>{{welcome}}</h2>
                <h2 [textContent]="welcome"></h2>
                <h2 bind-textContent="welcome"></h2>
                </div>
              </div>`,
    providers: [PeppaPigService]
})
export class PeppaPigComponent{
    
    friends: string[];
    welcome: string = "Peppa Pig Friends"
    
    constructor(private _peppapigService: PeppaPigService){
       
        this.friends = this._peppapigService.getPeppaFriends();
        console.log(this.friends);
    }
}
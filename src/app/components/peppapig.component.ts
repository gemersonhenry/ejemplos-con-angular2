import {Component} from 'angular2/core';
import {PeppaPigService} from '../services/peppapig.services';

@Component({
    selector:'peppapig-component',
    template:'<h1> Soy La peppa pig</h1>',
    providers: [PeppaPigService]
})
export class PeppaPigComponent{
    
    friends: string[];
    constructor(private _peppapigService: PeppaPigService){
        
        this.friends = this._peppapigService.getPeppaFriends();
        console.log(this.friends);
    }
}
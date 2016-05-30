import {Component, OnInit} from '@angular/core';
import {FriendComponent} from '../friend/friend.component';
import {PeppaPigService} from '../../services/peppapig.services';
import {Friend} from '../../models/friend';

@Component({
    selector: 'friend-list',
    templateUrl: './app/components/friend-list/friend-list.component.html',
    directives: [FriendComponent],
    providers: [PeppaPigService]
})
export class FriendListComponent implements OnInit { 

    peppafriends: Friend[];
    
    constructor(private _peppaPigService: PeppaPigService) { 

    }  
    getFriends() { 
        this.peppafriends = this._peppaPigService.getPeppaFriends();
        
    }
    
     ngOnInit() {
         this.getFriends();

         console.log(this.peppafriends[0].name);
         
     }
}
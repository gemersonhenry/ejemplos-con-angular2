import {FRIENDS} from '../mocks/mocks.peppafriends.ts';
import {Friend} from '../models/friend'
export class PeppaPigService {
    
    getPeppaFriends(): Friend[] {
        return FRIENDS
    }
}
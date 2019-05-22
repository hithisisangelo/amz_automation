import {Selector as s, t} from 'testcafe';
import amz_pom from '../pages/amz_pom.js';

export default class searchResults extends amz_pom {
    constructor(){
        super();
        //validation of link on page
       this.pageResults = s('a-size-medium a-color-base a-text-normal').withExactText('I Learned the Hard Way (Amazon Exclusive Version)');
    }
}
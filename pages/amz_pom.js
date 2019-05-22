import {Selector as s, t} from 'testcafe';
//this is for Amazon Homepage

export default class amz_pom {
    constructor(){
        this.url = 'https://www.amazon.com/';
        this.search = s('#twotabsearchtextbox');
        this.logo = s('.nav-logo-link')
        this.submitButton = s('#nav-search-submit-text');;
       
    }
    async searchForArtist(artist){
        await t
        .typeText(this.search, artist , {speed: 0.1})
        .click(this.search, {speed: 0.1});
    }
}

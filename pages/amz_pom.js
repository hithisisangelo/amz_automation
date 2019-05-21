import {Selector as s, t} from 'testcafe';

//This Page is only for Amazon Page

export default class amz_pom{
    constructor(){
        this.url = 'https://www.amazon.com/';
        this.search = s('#twotabsearchtextbox');
        this.submitButton = s('#nav-search-submit-text');
    }
    async searchForArtist (artist){
        await t
        .typeText(this.search, artist)
        .click(this.submitButton);
    }
    
}

class searchResults {
    constructor(){

    }
    async albumResults (album){
    
    }
}

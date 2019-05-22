import {Selector as s, t} from 'testcafe';
import amz_pom from './amz_pom.js';

export default class albumResults extends amz_pom {
    constructor(){
        super();
        //buttons for ids
        this.streamingPrice = s('#a-autoid-0-announce');
        this.mp3Price = s('#a-autoid-1-announce');
        this.cdPrice = s('#a-autoid-2-announce');
        this.vinyl = s('#a-autoid-3-announce');
        //finding prices of different ids
        this.price = s('.a-color-secondary');
        this.cdPrice =s('#a-autoid-2-announce').find('span').nth(1);
        //below is constructors for ratings
        this.ratings =s('#acrPopover');
        //below is constructor for heading
        this.rec =s('h2').withText('Customers Also Bought These Albums');
        //below is a brute force way to check the first album bought
        //this is not the intended way. 
        this.custBought =s('span').withText('Miss Sharon Jones! (Original M...');
    }

    async checkPrices(type){
        if (type == 'streamingPrice'){
            //console.log(this.streamingPrice);
            await t
            .expect(type).eql('cd');
        }
        else if(type =='mp3Price'){
            //console.log(this.mp3Price);
            await t
            .expect(type).eql('cd');
        }
        else if(type =='cdPrice'){
            await t
            //there is a better way to handle this
            .expect(this.price.withText('$').exists).ok();
            console.log(await this.cdPrice.innerText);
            //.click(this.cdPrice);
        }  
        else

        await t
        .expect(type).eql('cd');
    }

    async checkReviews(){
        await t
        .expect(this.ratings.innerText).contains('stars');
         console.log(await this.ratings.innerText);
    }

    async whoBought(){
        await 
        console.log(await this.rec.innerText);
       //.expect(this.rec.innerText).contains('Customers Also Bought These Albums');
        //console.log(await this.rec.innerText);
    }

    async assertTitle(){
        await t 
        .expect(this.custBought.exists).ok();
        //.click(this.custBought);
        await
        console.log(await this.custBought.innerText);
    }
}

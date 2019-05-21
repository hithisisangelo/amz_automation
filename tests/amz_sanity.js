import {Selector} from 'testcafe';
import amz_pom from '../pages/amz_pom.js';
import searchResults from '../pages/searchResults.js';
import albumResults from '../pages/albumResults.js';

const page = new amz_pom();
const results = new albumResults();

fixture `Amazon Sanity Test`.page `${page.url}`;

test('Sharon Jones Search on Amazon',async t=>{
    await t
        //page.albumResults();
        .expect(page.url).eql('https://www.amazon.com/')
        .expect(page.search).ok();
    await   
        page.searchForArtist('Sharon Jones');

})

fixture `Check Prices`.page `https://www.amazon.com/Learned-Hard-Amazon-Exclusive-Version/dp/B003COH6MQ/ref=sr_1_10?keywords=Sharon+Jones&qid=1558405189&s=gateway&sr=8-10`;

test('Checking prices',async t=>{
    await 
        results.checkPrices('cdPrice');
})
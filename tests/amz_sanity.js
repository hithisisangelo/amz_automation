import {Selector} from 'testcafe';
import amz_pom from '../pages/amz_pom.js';
import searchResults from '../pages/searchResults.js';
import albumResults from '../pages/albumResults.js';

const page = new amz_pom();
const results = new albumResults();
const srchResults = new searchResults();


fixture `Amazon Sanity Test`.page `${page.url}`;

test('Sharon Jones Search on Amazon',async t=>{
    await t
        .expect(page.url).eql('https://www.amazon.com/')
        .expect(page.search).ok();
    await   
        page.searchForArtist('Sharon Jones');
})

test('Validate Page number', async t=>{
    await t
        .expect(srchResults.pageResults).ok();
        //added this console.log because if we do not find 
        //element in this page, it would be a failed test case
        //we don't want to iterate through all the pages...
        //that would be taxing
        console.log('Page 1');
})

fixture `Validating Results`.page `https://www.amazon.com/Learned-Hard-Amazon-Exclusive-Version/dp/B003COH6MQ/ref=sr_1_10?keywords=Sharon+Jones&qid=1558405189&s=gateway&sr=8-10`;

test('Checking prices',async t=>{
    await t
        .expect(results.price).ok()
        .expect(results.cdPrice).ok();
    await  
        results.checkPrices('cdPrice');
})

test('Checking Reviews',async t=>{
    await 
        t 
        .expect(results.ratings).ok();
    await  
        results.checkReviews();
})

test('What did other people recommend?',async t=>{
    await 
        t
        .expect(results.rec).ok()
        .expect(results.rec.innerText).eql('Customers Also Bought These Albums');
    await  
        results.whoBought();
    await  
        t
        .expect(results.custBought).ok();
    await   
        results.assertTitle();
})

test('Wrong input of prices',async t=>{
    await t
        .expect(results.price).ok()
        .expect(results.cdPrice).ok();
    await  
        results.checkPrices('streamingPrice');
})
import {Selector} from 'testcafe';
import amz_pom from '../pages/amz_pom.js';

const page = new amz_pom();

fixture `Amazon Sanity Test`.page `${page.url}`;

test('Sharon Jones Search on Amazon',async s=>{
    await page
        .searchForArtist('Sharon Jones');
})


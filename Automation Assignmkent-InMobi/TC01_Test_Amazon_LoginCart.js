var AmazonTest = require('\.MainPage.js');

var ItemName = "Lancer Mens Formal Shoes";
var number ='1';
describe('To Add Show In Amazon Card Page', function() {

    it('Test User can successfully add Shoe in Cart',function(){

AmazonTest.OpenPage(strURL);
AmazonTest.SearchBox(ItemName,number);


    });

    });
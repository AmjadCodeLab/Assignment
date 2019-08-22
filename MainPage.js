var AmazonPage = function(){
global.strURL = 'http://www.amazon.in';
global.width = 1260; 
global.height = 800;
global.tempObject =  	{};
global.protractor = protractor;

global.SearchBtn = element(by.id('nav-search-submit-text'));
global.AddToCart = element(by.id('submit.add-to-cart'));

var numberMap = {
                "0": "00", "1": "01", "2": "02", "3": "03", "4": "04", "5": "05", "6": "06", "7": "07", "8": "08", "9": "09", "10": "10", 
                "11": "11", "12": "12", "13": "13", "14": "14", "15": "15", "16": "16", "17": "17", "18": "18", "19": "19", "20": "20", 
                "21": "21", "22": "22", "23": "23", "24": "24", "25": "25", "26": "26", "27": "27", "28": "28", "29": "29", "30": "30", 
                "31": "31", "32": "32", "33": "33", "34": "34", "35": "35", "36": "36", "37": "37", "38": "38", "39": "39", "40": "40", 
                "41": "41", "42": "42", "43": "43", "44": "44", "45": "45", "46": "46", "47": "47", "48": "48", "49": "49", "50": "50", 
                "51": "51", "52": "52", "53": "53", "54": "54", "55": "55", "56": "56", "57": "57", "58": "58", "59": "59", "60": "60", 
};
var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours()
//   Function for TimeStamp 
global.totalDateString = (currentDate.getYear()+1900) + numberMap[currentDate.getMonth() + 1] + numberMap[currentDate.getDate()] + numberMap[currentHoursIn24Hour] + numberMap[currentDate.getMinutes()] + numberMap[currentDate.getSeconds()] ;

// Function or Method to Open URL
this.OpenPage = function(){
browser.get(strURL);
browser.sleep(2000);
};

// Function or method to Search Specified Item in search Box
this.SearchBox = function(ItemName,number){
    // Enter the item to search
   var SearchTxt = element(by.id('twotabsearchtextbox'));
   SearchTxt.sendKeys(ItemName);
   browser.sleep(1000);
   
   // Click on Search Button
   SearchBtn.click();
   browser.sleep(1000);

   // Verify the Shoe page by url
   expect(browser.getCurrentUrl()).toContain('https://www.amazon.in/s?k=lancer+shoes');
   
   // Click on any Item ( Shoe )
   var selectItem = element.all(by.css('[class="s-image"]')).get(number);
  selectItem.click();
  browser.sleep(1000);

  // Verify the Page
  windowhandle(1);
  browser.sleep(1000);
  expect(browser.getCurrentUrl()).toContain('https://www.amazon.in/Lancer');
  browser.sleep(1000);

  // Click on add to cart
  AddToCart.click();
  browser.sleep(1000);

  // Verify the page
  expect(browser.getCurrentUrl()).toContain('https://www.amazon.in/gp/');

  // Verify the Cart Page
  var cartoption = element(by.cssContainingText('[class="a-button-text a-text-center"]','Proceed to Buy (1 item)'));
  cartoption.isPresent().then(function(bln){
   if(bln==true){
       cartoption.click();
       browser.sleep(1000);
   }
   else{
       throw "Exception - Item not added";
   }
  });

  //return to main window
  windowhandle(0);
  browser.sleep(1000);
  
};
// Window Handle Function
function windowhandle(n)
		{
		browser.getAllWindowHandles().then(function(handles) {
    browser.switchTo().window(handles[n]);
    browser.sleep(2000); 
	});
		}                                              
}
                
module.exports = new AmazonPage();

		 

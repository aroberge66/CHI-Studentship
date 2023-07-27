// https://www.numbeo.com/cost-of-living/in/New-York

const clean = function (input) {
  return parseFloat(input.innerHTML.replace(/[$,]/g, ""), 10)
	
}

const apartment1 = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(56) > td.priceValue > span"))

const apartment3 = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(58) > td.priceValue > span"))


const basicU = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(40) > td.priceValue > span")) 

const mobile = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(41) > td.priceValue.tr_highlighted > span")) 

const internet = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(42) > td.priceValue > span"))

const utilities = basicU + mobile + internet
	  
	  
const expensiveMeal = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.priceValue.tr_highlighted > span"))
const singlePerson = clean(document.querySelector("body > div.innerWidth > div.seeding-call.limit_size_ad_right.padding_lower.other_highlight_color > ul > li:nth-child(2) > span"))
const family = clean(document.querySelector("body > div.innerWidth > div.seeding-call.limit_size_ad_right.padding_lower.other_highlight_color > ul > li:nth-child(1) > span"))

const cappuccino=clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(7) > td.priceValue.tr_highlighted > span"))

const gas=clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(36) > td.priceValue.tr_highlighted > span"))

const monthlyPass= clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(32) > td.priceValue.tr_highlighted > span"))

const city= document.querySelector("body > div:nth-child(4) > nav.breadcrumb > span:nth-child(6) > a > span")

const bread = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(12) > td.priceValue.tr_highlighted > span"))

const kinder = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(48) > td.priceValue > span"))

const salaryM = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(64) > td.priceValue > span"))

const movie = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(46) > td.priceValue > span"))


copy({
  	city,
  	singlePerson,
  	family,
  	apartment1,
	apartment3,
  	utilities,
	basicU,
	internet,
	mobile,
  	monthlyPass,
  	expensiveMeal,
	cappuccino,
	gas,
	bread,
	kinder,
	salaryM,
	movie
})




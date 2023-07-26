// https://www.numbeo.com/cost-of-living/in/New-York

const clean = function (input) {
  return parseFloat(input.innerHTML.replace(/[$,]/g, ""), 10)
}

const apartment = clean(document.querySelector("body > div.innerWidth > table > tbody > tr:nth-child(56) > td.priceValue"))
const utilities = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(40) > td.priceValue > span"))
const expensiveMeal = clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(3) > td.priceValue.tr_highlighted > span"))

const singlePerson = clean(document.querySelector("body > div.innerWidth > div.seeding-call.limit_size_ad_right.padding_lower.other_highlight_color > ul > li:nth-child(2) > span"))
const family = clean(document.querySelector("body > div.innerWidth > div.seeding-call.limit_size_ad_right.padding_lower.other_highlight_color > ul > li:nth-child(1) > span"))


const cappuccino=clean(document.querySelector("body > div:nth-child(4) > table > tbody > tr:nth-child(7) > td.priceValue.tr_highlighted > span"))


copy({
  city,
  singlePerson,
  family,
  apartment,
  utilities,
  monthlyPass,
  expensiveMeal,
	cappuccino
})
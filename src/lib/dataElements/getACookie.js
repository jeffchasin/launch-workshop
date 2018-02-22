'use strict';

var cookie = require('@adobe/reactor-cookie');
console.log(cookie.get('cookieName'));

module.exports = function(settings) {
   try{
	   return cookie.get('cookieName');
   }catch(e){
	   return null;
   }	
};
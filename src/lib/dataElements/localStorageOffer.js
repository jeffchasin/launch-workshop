'use strict';

module.exports = function(settings) {
   try{
	   return localStorage.getItem('offerResponsiveness');
   }catch(e){
	   return null;
   }	
};

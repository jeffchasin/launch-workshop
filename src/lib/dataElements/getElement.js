'use strict';

// assumes <meta name="whatever" id="ourTag" content="exciting content" />

module.exports = function(settings) {
   try{
     var veryMeta = document.getElementById('ourTag');
     return veryMeta.getAttribute('content');
   }catch(e){
	   return null;
   }	
};
'use strict';

/* App Module */

var moonitorApp = angular.module('moonitorApp', []);

 moonitorApp.config(['$logProvider',
    function($logProvider) {
      $logProvider.debugEnabled(true);
    }]);

 moonitorApp.config(['$httpProvider', function($httpProvider) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);


 $('#tabAll').click(function(){
  $('#tabAll').addClass('active');  
  $('.tab-pane').each(function(i,t){
    $('#myTabs li').removeClass('active'); 
    $(this).addClass('active');  
  });
});
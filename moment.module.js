/*VISjs wrapper*/
angular.module('MomentJS',[]).factory('moment', [
    '$window',
    function ($window) {
        var moment = $window.moment;
        return moment;
    }
]);

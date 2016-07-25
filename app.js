(function(){
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function(){
        this.product = gem;
    });
    
    var gem = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'This rock has 2000 years and it was found in rear 1900. Nowadays, you may buy it for yourself.',
        canPurchase: true,
    }
})();

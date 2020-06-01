(function(scope){

scope.loadFeedFromGraphApi = function(opts) {
  var route = '/instagram/graph/feed.json';

  opts = opts === undefined ? {} : opts;

  // console.log('GETing route: ', route);

  jQuery.get(route, {}, function(resp){
    // console.log('response:', resp);
    // {
    //   data: [{id: "1234567788..."}],
    //   paging: {
    //     cursors: {after: "...", before: "..."},
    //     next: "https://graph.instagram.com/v1/usdid/media?access_token...&limit=25&after=..."
    //   }
    // }


    var items = [];
    resp.data.forEach(function(item, idx){
      if (idx > 2) return;

      var itemurl = '/instagram/graph/item.json';
      var params = {id: item.id};
      // console.log('GET-ing ', itemurl, 'with', params);
      
      jQuery.get(itemurl, params, function(response){
        // console.log('item response:',response);
        items.push(response);
        if (opts.itemCallback) opts.itemCallback(response);
      });
    });

    if (opts.itemsCallback) opts.itemsCallback(items);
  });
};

})(window);

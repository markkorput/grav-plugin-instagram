(function(scope){
  
  var container = jQuery('.graphFeedContainer');

  jQuery(document).ready(function(){
    scope.loadFeedFromGraphApi({ itemCallback: function(item) {
      // console.log('IG item: ', item);

      var itemContainer = document.createElement('li');
      itemContainer.className = "instagramItem";
      
      var img = document.createElement('img');
      img.src = item.media_url;
      itemContainer.appendChild(img);
      
      var span = document.createElement('span');
      span.append(item.caption);
      itemContainer.appendChild(span);

      container.append(itemContainer);
    }});
  });

})(window);

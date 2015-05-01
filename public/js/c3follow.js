(function() {
  $.getJSON( '/follow')
    .done(function( data ) {
      var yCounts = data.users.map(function(item){
        return item.counts.media;
      });
      
      yCounts.unshift('Media Count');

      var chart = c3.generate({
        bindto: '#chart1',
        data: {
        columns: [
            yCounts
        ],
        type: 'scatter'
    }
      });
      console.log(chart);
    });
})();

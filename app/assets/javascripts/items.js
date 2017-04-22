$(document).ready(function(){
  $( "#sortable" ).sortable({
    placeholder: "ui-state-highlight"
  });
  $( "#sortable" ).sortable({
    update: function( update, ui ) {
      var $sortableList = $("#sortable");
      var listElements = $sortableList.children();

      var listValues = [];

      listElements.each(function(element){
          listValues.push($( this ).attr('id'));
      });

      // $.ajax({
      //   url: '/items',
      //   type: 'PUT',
      //   data: listValues,
      //   text: listValues,
      //   success: function(result) {
      //     alert('All good!')
      //   }
      // });
      $.post("items/sorting", { "items": listValues } );

      console.log(listValues);
      // alert(listElements);
    }
  });

  $( "#sortable" ).disableSelection();

});
    //   var order = $('#sortable').sortable('serialize');
    //   alert(order);
    // }

$(document).ready(function(){
  $( "#sortable" ).sortable({
    placeholder: "ui-state-highlight"
  });
  $( "#sortable" ).disableSelection();

  $( "#sortable" ).sortable({
      // update: function( update, ui ) {
      //   // alert('dsf');
      //   $.ajax({
      //     type: "PATCH",
      //     url: "/products",
      //     data: { product: { name: "Filip", description: "whatever" } },
      //     success:(data) ->
      //       alert data.id
      //       return false
      //     error:(data) ->
      //       return false
      //   });
      // }
    });

});

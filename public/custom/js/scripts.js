/**
INITIALIZE DATATABLES
**/
$(document).ready( function () {
    var table = $('#table').DataTable({
        "order": [[ 1, "category" ]],
		"oLanguage": {
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ items."
		}
    });
    $("#table tfoot tr .filter").each( function ( i ) {
        console.log('????', i)
		if ($(this).text() !== '') {
	        var isStatusColumn = (($(this).text() == 'status') ? true : false);
			var select = $('<select><option value=""></option></select>')
	            .appendTo( $(this).empty() )
	            .on( 'change', function () {
	                var val = $(this).val();

	                table.column( i )
	                    .search( val ? '^'+$(this).val()+'$' : val, true, false )
	                    .draw();
	            } );

			// Get the Status values a specific way since the status is a anchor/image
			if (isStatusColumn) {
				var statusItems = [];

                /* ### IS THERE A BETTER/SIMPLER WAY TO GET A UNIQUE ARRAY OF <TD> data-filter ATTRIBUTES? ### */
				table.column( i ).nodes().to$().each( function(d, j){
					var thisStatus = $(j).attr("data-filter");
					if($.inArray(thisStatus, statusItems) === -1) statusItems.push(thisStatus);
				} );

				statusItems.sort();

				$.each( statusItems, function(i, item){
				    select.append( '<option value="'+item+'">'+item+'</option>' );
				});

			}
            // All other non-Status columns (like the example)
			else {
				table.column( i ).data().unique().sort().each( function ( d, j ) {
					select.append( '<option value="'+d+'">'+d+'</option>' );
		        } );
			}

		}
    } );
})

/**
SELECT2 FUNCTION
**/
$(document).ready(function() {
    $('#id_book').select2()
})
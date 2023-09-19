
        /*$(document).ready(function() {
          // Reference to the table body
          var tableBody = $('tab_logic tbody');
      
          // Handle click event on the "Add Row" button
          $('#add_row').click(function() {
            // Create a new row and append it to the table
            var newRow = $('<tr>');
            newRow.append('<td>'+ <input type="text" name='Timing1'  placeholder='Enter Timing' class="form-control"/> +'</td>');
            newRow.append('<td>'+ <input type="text" name='Activity1'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            newRow.append('<td>'+ <input type="text" name='Activity2'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            newRow.append('<td>'+ <input type="text" name='Activity3'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            newRow.append('<td>'+ <input type="text" name='Activity4'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            newRow.append('<td>'+ <input type="text" name='Activity5'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            newRow.append('<td>'+ <input type="text" name='Activity6'  placeholder='Enter Activity' class="form-control"/> + '</td>');
            // Add more <td> elements as needed
      
            tableBody.append(newRow);
          });
        });*/

        $(document).ready(function() {
          // Reference to the table body
          var tableBody = $('#table_logic tbody'); // Corrected the selector with '#' to match the table ID
        
          // Handle click event on the "Add Row" button
          $('#add_row').click(function() {
            // Create a new row and append it to the table
            var newRow = $('<tr>');
            newRow.append('<td><input type="text" name="Timing"  placeholder="Enter Timing" class="form-control"/></td>');
            newRow.append('<td><input type="text"   placeholder="Enter Activity" class="form-control"/></td>');
            newRow.append('<td><input type="text"  placeholder="Enter Activity" class="form-control"/></td>');
            newRow.append('<td><input type="text"   placeholder="Enter Activity" class="form-control"/></td>');
            newRow.append('<td><input type="text"   placeholder="Enter Activity" class="form-control"/></td>');
            newRow.append('<td><input type="text"  placeholder="Enter Activity" class="form-control"/></td>');
            newRow.append('<td><input type="text"  placeholder="Enter Activity" class="form-control"/></td>');
            // Add more <td> elements as needed
        
            tableBody.append(newRow);
          });
        });
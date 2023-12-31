$(document).ready(function () {
  
    // Denotes total number of rows
    var rowIdx = 0;

    // jQuery button click event to add a row
    $('#addBtn').on('click', function () {

        let colIdx =0;

      // Adding a row inside the tbody.
      $('#tbody').append(`<tr id="R${++rowIdx}">
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Time" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="row-index text-center">
              <input type="text" placeholder="Enter Activity" class="form-control " id = "R${rowIdx}${++colIdx}"/>
          </td>
          <td class="text-center">
              <button class="btn btn-outline-danger remove sm"
                type="button">Delete</button>
              </td>
            </tr>`);
    });



    //TO DELETE ROWS

    // jQuery button click event to remove a row.
    $('#tbody').on('click', '.remove', function () {

      // Getting all the rows next to the row
      // containing the clicked button
      var child = $(this).closest('tr').nextAll();

      // Iterating across all the rows 
      // obtained to change the index
      child.each(function () {

          // Getting <tr> id.
          var id = $(this).attr('id');

          // Getting the <p> inside the .row-index class.
          var idx = $(this).children('.row-index').children('p');

          // Gets the row number from <tr> id.
          var dig = parseInt(id.substring(1));

          // Modifying row index.
          idx.html(`Row ${dig - 1}`);

          // Modifying row id.
          $(this).attr('id', `R${dig - 1}`);
      });

      // Removing the current row.
      $(this).closest('tr').remove();

      // Decreasing total number of rows by 1.
      rowIdx--;
      });



      /*//BOLD BUTTON

      $('.boldBtn').on('click', function () {
        // Check if the bold button is toggled on or off
        var isBold = $(this).hasClass('active');
    
        // Get all the input fields with class "activity-input"
        var activityInputs = $('input[id = "R12"]');
    
        // Toggle the font-weight style for the input fields
        activityInputs.css('font-weight', isBold ? 'normal' : 'bold');
    
        // Toggle the "active" class to indicate the button state
        $(this).toggleClass('active', !isBold);
      });



      //ITALIC BUTTON
    
      $('.italicBtn').on('click', function () {
        // Check if the italic button is toggled on or off
        var isItalic = $(this).hasClass('active');
    
        // Get all the input fields with class "activity-input"
        var activityInputs = $('input[id = "R12"]');
    
        // Toggle the font-style style for the input fields
        activityInputs.css('font-style', isItalic ? 'normal' : 'italic');
    
        // Toggle the "active" class to indicate the button state
        $(this).toggleClass('active', !isItalic);
      });



      //UNDERLINE BUTTON

      $('.underlineBtn').on('click', function () {
        // Check if the underline button is toggled on or off
        var isUnderline = $(this).hasClass('active');
    
        // Get all the input fields with class "activity-input"
        var activityInputs = $('input[id = "R12"]');
    
        // Toggle the text-decoration style for the input fields
        activityInputs.css('text-decoration', isUnderline ? 'none' : 'underline');
    
        // Toggle the "active" class to indicate the button state
        $(this).toggleClass('active', !isUnderline);
      });*/

      /*//COLOR BUTTON FOR ALL

      $('.colorBtn').spectrum({
        preferredFormat: "rgb",
        showPalette: true,
        palette: [
          ["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Background color palette
          //["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Text color palette
        ],
        change: function (color) {
          var selectedColor = color.toHexString();
          
          // Set background color and text color for all input fields
          $('input[type="text"]').css({
            "background-color": selectedColor,
            //"color": selectedColor === "#000" ? "#fff" : "#000", // Set text color based on background color
          });
        },
      });*/




    // Event delegation to detect the selected input field
    $('#tbody').on('click', 'input[type="text"]', function () {
        selectedInput = this;
    });

    // BOLD BUTTON
    $('.boldBtn').on('click', function () {
        if (selectedInput) {
            // Check if the bold button is toggled on or off
            var isBold = $(this).hasClass('active');

            // Toggle the font-weight style for the selected input field
            $(selectedInput).css('font-weight', isBold ? 'normal' : 'bold');

            // Toggle the "active" class to indicate the button state
            $(this).toggleClass('active', !isBold);
        }
    });

    // ITALIC BUTTON
    $('.italicBtn').on('click', function () {
        if (selectedInput) {
            // Check if the italic button is toggled on or off
            var isItalic = $(this).hasClass('active');

            // Toggle the font-style style for the selected input field
            $(selectedInput).css('font-style', isItalic ? 'normal' : 'italic');

            // Toggle the "active" class to indicate the button state
            $(this).toggleClass('active', !isItalic);
        }
    });

    // UNDERLINE BUTTON
    $('.underlineBtn').on('click', function () {
        if (selectedInput) {
            // Check if the underline button is toggled on or off
            var isUnderline = $(this).hasClass('active');

            // Toggle the text-decoration style for the selected input field
            $(selectedInput).css('text-decoration', isUnderline ? 'none' : 'underline');

            // Toggle the "active" class to indicate the button state
            $(this).toggleClass('active', !isUnderline);
        }
    });

    $('.colorBtn').spectrum({
        preferredFormat: "rgb",
        showPalette: true,
        palette: [
          ["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Background color palette
          //["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Text color palette
        ],
        change: function (color) {
          var selectedColor = color.toHexString();
          
          // Set background color and text color for all input fields
          $(selectedInput).css({
            "background-color": selectedColor,
            //"color": selectedColor === "#000" ? "#fff" : "#000", // Set text color based on background color
          });
        },
      });




      /*//COLOR BUTTON FOR SELECTED

      $('.colorBtn').spectrum({
        preferredFormat: "rgb",
        showPalette: true,
        palette: [
          ["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Background color palette
          //["#000", "#fff", "#ff0000", "#00ff00", "#0000ff"], // Text color palette
        ],
        change: function (color) {
          var selectedColor = color.toHexString();
          
          // Set background color and text color for all input fields
          $('input[id = "R12"]').css({
            "background-color": selectedColor,
            //"color": selectedColor === "#000" ? "#fff" : "#000", // Set text color based on background color
          });
        },
      });*/


      //SAVE BUTTON

      $('.downloadBtn').on('click',function(){
        $('#content').printThis();

      });



      //RESET BUTTON

      $('#resetButton').on('click', function () {
        // Get all input fields with class "activity-input"
        var activityInputs = $('input[type="text"]');

        // Clear the values of all input fields
        activityInputs.val('');

        // Clear the styles (bold, italic, underline)
        activityInputs.css({
            'font-weight': 'normal',
            'font-style': 'normal',
            'text-decoration': 'none',
            'background-color': 'white'
        });

        // Remove the "active" class from the style buttons
        $('.boldBtn, .italicBtn, .underlineBtn').removeClass('active');
    });



    


  });
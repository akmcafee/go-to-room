// Serve the HTML form when the web app URL is accessed
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Form.html');
}

// Function to search for the ID in the Google Sheet and return the associated value
function getAssociatedValueById(idNumber) {
  var sheet = SpreadsheetApp.openById('1ktmRa6ZzQemtCeCSt-gJyQcAt-Vjt83wcqIH-KBh3rU').getSheetByName('ID');
  var data = sheet.getDataRange().getValues();

  for (var i = 0; i < data.length; i++) {
    if (data[i][0] == idNumber) {
      return data[i][1]; // Assuming the second column has the associated value
    }
  }
  return 'ID not found'; // Return a message if the ID is not found
}

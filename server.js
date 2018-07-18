const express = require('express');
const app = express();
const path = require('path');
const {google} = require('googleapis');

app.use(express.static(__dirname+'/dist/DataScienceChallengePhase1'));

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}/`);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/dist/DataScienceChallengePhase1/index.html"));
});

app.get('/spreadsheet', function(req, res){
});

var sheets = google.sheets('v4');

authorize(function(authClient) {
    var request = {
      // The ID of the spreadsheet to retrieve data from.
      spreadsheetId: '1lq6AcmAbkOWidxiN_9gb1LdGAczeOKjbU_r3QpArbu8',  // TODO: Update placeholder value.
  
      // The A1 notation of the values to retrieve.
      range: 'Form Responses 1',  // TODO: Update placeholder value.
  
      // How values should be represented in the output.
      // The default render option is ValueRenderOption.FORMATTED_VALUE.
      valueRenderOption: '',  // TODO: Update placeholder value.
  
      // How dates, times, and durations should be represented in the output.
      // This is ignored if value_render_option is
      // FORMATTED_VALUE.
      // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
      dateTimeRenderOption: '',  // TODO: Update placeholder value.
  
      auth: "AIzaSyDBKRDMfrBz9L4S0V-AIKDlCWhK7mIEHV0",
    };
  
    sheets.spreadsheets.values.get(request, function(err, response) {
      if (err) {
        console.error(err);
        return;
      }
  
      // TODO: Change code below to process the `response` object:
      console.log(JSON.stringify(response, null, 2));
    });
  });
  
  function authorize(callback) {
    // TODO: Change placeholder below to generate authentication credentials. See
    // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
    //
    // Authorize using one of the following scopes:
    //   'https://www.googleapis.com/auth/drive'
    //   'https://www.googleapis.com/auth/drive.file'
    //   'https://www.googleapis.com/auth/drive.readonly'
    //   'https://www.googleapis.com/auth/spreadsheets'
    //   'https://www.googleapis.com/auth/spreadsheets.readonly'
    var authClient = 'AIzaSyDBKRDMfrBz9L4S0V-AIKDlCWhK7mIEHV0';
  
    if (authClient == null) {
      console.log('authentication failed');
      return;
    }
    callback(authClient);
  }

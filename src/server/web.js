export function doGet() {
  return HtmlService.createHtmlOutputFromFile('demo-bootstrap');
}

export function doPost() {
  return HtmlService.createHtmlOutputFromFile('demo-bootstrap');
}

export function getServerUrl() {
  return ScriptApp.getService().getUrl();
}

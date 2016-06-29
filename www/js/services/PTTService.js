app.service('PTTService', ['$soap', function($soap){

  var webServiceURL = "http://www.pttplc.com/webservice/pttinfo.asmx";

  return {
    call: function(){
      return $soap.post(webServiceURL,'CurrentOilPrice',{ Langauge: "en" });
    }
  }

}])

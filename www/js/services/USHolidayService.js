app.service('USHolidayService', ['$soap', function($soap){

  // var webServiceURL = "http://www.pttplc.com/webservice/pttinfo.asmx";
  var webServiceURL = "http://www.holidaywebservice.com//HolidayService_v2/HolidayService2.asmx";

  return {
    // currentOilPrice: function(){
    //   return $soap.post(webServiceURL,'CurrentOilPrice',{ Langauge: "en" });
    // }
    call:function(){
      return $soap.post(webServiceURL,'GetHolidaysAvailable',{countryCode:'UnitedStates'});
    }
  }

}])

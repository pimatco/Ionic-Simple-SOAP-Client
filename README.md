# Ionic Simple SOAP Client
A simple implemented SOAP client built by Ionic Framework

## Reference

- I use [Angular SOAP Client](https://github.com/andrewmcgivery/angular-soap) by Andrew Mcgivery. But some modification applied to make it work
- I use [this method](http://blog.getpostman.com/2014/08/22/making-soap-requests-using-postman/) to test target Web service with POST Man

### Instruction to test Holiday Web Service

1. Select `POST` method
2. Use this as URL: `http://www.holidaywebservice.com//HolidayService_v2/HolidayService2.asmx`
3. Go to tab 'Body'
4. Select 'raw'
5. Choose type: 'XML (text/xml)'
6. Then put these into body:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
 <soapenv:Body>
 <GetHolidaysAvailable xmlns="http://www.holidaywebservice.com/HolidayService_v2/">
     <countryCode xmlns="http://www.holidaywebservice.com/HolidayService_v2/">UnitedStates</countryCode>
 </GetHolidaysAvailable>
 </soapenv:Body>
</soapenv:Envelope>
```

7. Click 'Send' button
8. OK, if everything's ok. We should see list of holiday in XML format show into bottom.

### PTT Web Service Information

- URL: `http://www.pttplc.com/webservice/pttinfo.asmx`
- WSDL URL: `http://www.pttplc.com/webservice/pttinfo.asmx?wsdl`
- Request Body

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
 <soapenv:Body>
 <CurrentOilPrice xmlns="http://www.pttplc.com/ptt_webservice/">
     <Language xmlns="http://www.pttplc.com/ptt_webservice/">en</Language>
 </CurrentOilPrice>
 </soapenv:Body>
</soapenv:Envelope>
```

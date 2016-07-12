app.service('KascoService', ['$soap', function($soap){
	

	
	return {
		send: function(){
			var url = "http://192.168.1.59/WS_Service/Business_Layer.asmx";
			var objSession = { 
				objsession: { 
					ConnectionStr:'Data Source=192.168.1.59\\MSSQL2008r2;Initial Catalog=WMS_Site_Dumex_RM;User ID=sa;PWD=K@sc0db;max pool size=100000;'
				}
			};

			return $soap.post(url,'CheckStock_By_SKU', objSession);
		}
	};


}])
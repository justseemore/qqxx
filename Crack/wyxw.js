/*
Unlocks by Cuttlefish 公众号：墨鱼手记
*/
var obj = JSON.parse($response.body);
if(obj.data && obj.data.vipInfo){
	obj.data.vipInfo.expireDateStr = "2099/05/29";
	obj.data.vipInfo.remainderDays = 9999;
	obj.data.vipInfo.vipStatus = 1;	
}
$done({body: JSON.stringify(obj)});

//

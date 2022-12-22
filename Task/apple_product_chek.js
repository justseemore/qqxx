var request = {
    url: "https://www.apple.com.cn/shop/buyability-message?parts.0=FU0Q2CH%2FA",
    method: 'GET',
    headers: {
        'User-Agent': "",
        'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
        'activityCode': 'checkin'
    })
};

$task.fetch(request).then(resp=>{
	var obj = JSON.parse(response.body);
	if (obj.body.content.buyabilityMessage.sth['FU0Q2CH/A'] == true){
		$notify("有货拉");
	}else{
		$notify("没货啊");
	}
})
export default async (url = '', data = {}, type = '', method = '') => {
	var url = '',
		type = type.toUpperCase();
	if (type == 'GET') {
		var lasturl = '';
		Object.keys(data).forEach((item, index) => {
            lasturl+=itrm+"="+data[item]+"&"
        });
        if(lasturl==""){
            lasturl=lasturl.toSubstr(0,lastIndexOf("&"))
            url=url+"?"+lasturl
        }
	}
};

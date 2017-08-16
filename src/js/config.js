require.config({
   	// baseUrl : "js",//

   	// 配置别名
   	// 使用短文件名
    paths : {
    	// 这里的路径也是基于baseURl
		"jquery": "../lib/jquery-3.2.1",
		'validate':'../lib/jquery-validate/jquery.validate',
    'cookie':'../lib/jquery.cookie'
    },
    shim:{
    	'validate':['jquery'],
      'cookie':['jquery']
    }

});
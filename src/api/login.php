<?php
	// 引入其他php文件
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// md5加密
	$password = md5($password);

	$sql = "select * from reg where mobile='".$username."' and password='".$password."'";
	
	// 获取查询结果
	if($username !== ''){
		$res = $conn->query($sql);
		//使用查询结果
		$row = $res->fetch_all(MYSQLI_ASSOC);
		
		if($row){

			echo "ok";
		}else{
			echo "Error";
		}
	}else{
		echo "null";
	}
	
	
		
	//关闭连接
	$conn->close();
?>
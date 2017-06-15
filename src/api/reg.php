<?php
	// 引入其他php文件
	include 'connect.php';

	$mobile = isset($_GET['mobile']) ? $_GET['mobile'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';
	$regMessage = isset($_GET['regMessage']) ? $_GET['regMessage'] : '';

	// md5加密
	$password = md5($password);

	$sql = "select * from reg where mobile =".$mobile;
	if($mobile !== ''){
		$result = $conn -> query($sql);
		$row = $result -> fetch_all(MYSQLI_ASSOC);
		if($row){
			echo 'same';
		}else{
			$sql = "insert into reg(mobile,password,regMessage) values('$mobile','$password','$regMessage')";

			// 获取查询结果
			$res = $conn->query($sql);

			if($res){
				echo "ok";
			}else{
				echo "Error: " . $sql . "<br>" . $conn->error;
			}
		}
	}else{
		echo "null";
	}
	

	
	


	

	//关闭连接
	$conn->close();
?>
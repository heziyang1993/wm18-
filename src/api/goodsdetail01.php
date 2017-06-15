<?php
	include 'connect.php';
	$id = isset($_GET['id'])?$_GET['id']:'';


	// SQL语句
	$sql = "select * from goods where id =".$id;
	if($id !== ''){
		// 获取查询结果
		$res = $conn->query($sql);

		// 使用查询结果集
		$rows = $res->fetch_all(MYSQLI_ASSOC);

		// 格式化数据
	    $result = array(
	    	'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
	    	'data'=>$rows,
	    );

		echo json_encode($result,JSON_UNESCAPED_UNICODE);
	}
	


	//关闭连接
	$conn->close();
?>
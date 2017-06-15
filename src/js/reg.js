require(['config'],function(){
	require(['jquery','validate'],function($){
		$('#btn_reg').on('click',function(){
			

			$mobile = $('#mobile').val();
			$password = $('#password').val();
			$regMessage = $('#regMessage').val();
			$code = $('.code').val();
			
			if(!/^1\d{10}$/.test($mobile)){
				
				alert('用户名是手机号')
				return false;
			}
			else if(!/^[a-z0-9_-]{6,18}$/.test($password)){
				alert('密码必须是6到18位以上数字字母下划线-')
				return false;
			}
			else if($code !== $password){
				alert('两次输入密码不正确')
				return false;
			}else{
				$.ajax({
					url:"../api/reg.php",
					data:{'mobile':$('#mobile').val(),
						'password':$('#password').val(),
						'regMessage':$('#regMessage').val()	
					},
					success:function(res){
						console.log(res)
						if(res==='ok'){

							alert('恭喜你注册成功');

							location.href = '../index.html'

						}else if(res === 'same'){
							alert('已被注册')
						}
					}
					
			
				})

			}
		})
	})
})
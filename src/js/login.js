require(['config'],function(){
	require(['jquery'],function($){
		$('#btn-login').on('click',function(){

			$username = $('#username').val();
				$password = $('#password').val();
				$verifyCode = $('#verifyCode').val();

				if(!/^1\d+$/.test($username)){
					
					alert('用户名是手机号')
					return false;
				}
				else if(!/^[a-z0-9_-]{6,18}$/.test($password)){
					alert('密码必须是6到18位以上数字字母下划线-')
					return false;
				}
				else if($verifyCode !== $('.verifyCode').text()){
					alert('验证码不正确')
					return false;
				}else{

					$.ajax({
						url:"../api/login.php",
						data:{'username':$('#username').val(),
							'password':$('#password').val(),
							'verifyCode':$('#verifyCode').val(),
						},
						success:function(res){
							console.log(res)
							if(res==='ok'){
								
								location.href = '../index.html'

							}else if(res === 'Error'){
								alert('账户或密码不正确')
							}
						}
						
				
					})

				}









		})
/******************验证码************************/	
		function verifyCode(){
			var randomNo = parseInt(Math.random()*10000);
			$('.verifyCode').text(randomNo);
			if($('.verifyCode').text().length<4){
				$('.verifyCode').text('0' + randomNo);
			}

		}
		verifyCode();
		$('.verifyCode').on('click',function(){
			verifyCode();
			return false;
		})
	})
})
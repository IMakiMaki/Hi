
		jQuery.validator.addMethod("isPhone", function(value, element) {
			var tel = /0?(13|14|15|18)[0-9]{9}/;
			return this.optional(element) || (tel.test(value));
		}, "请正确填写正确手机号");
		jQuery.validator.addMethod("isPwd", function(value, element) {
			var tel = /\w{6,20}$/;
			return this.optional(element) || (tel.test(value));
		}, "6-20数字字母下划线");
		 $("#frm").validate({
			submitHandler: function(form) {
				form.submit();
			},
			rules: {
				tel: {
					required: true,
					minlength: 6,
					maxlength: 16,
					isPhone: true
				},
				pwd: {
					required: true,
					isPwd: true
				}
			},
			errorPlacement: function(error, element) {
				$(element).parent().find("div").html(error);
			},
			errorElement: "div",
			messages: {
				tel: {
					required: "请入手机号",
					minlength: "不能少于 6个字符",
					maxlength: "密码长度只能在6-16位字符之间",

				},
				pwd: {
					required: "6-20数字字母下划线",
					minlength: "密码长度只能在6-20位之间",
					maxlength: "密码长度只能在6-20位之间"
				}
			},

		});
		

	/*function submitBtn() {
		if(JqValidate()) {
			$('#frm').submit();
		}
	}*/

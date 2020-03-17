$(function(){
    //输入框
    var $user = $('#user')
    var $number= $('#number')
    var $pwd = $('#pwd')
    //按钮
    var $bt = $('#bt')
    //警告
    var $uc = $('#userc')
    var $nc = $('#numberc')
    var $wc = $('#pwdc')
    var $cc = $('#codec')
    //用户名校验
    $user.blur(function () { 
        var user = $user.val();
        var user1 = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_-]){1,7}$/
        var user2 = /^.*[^\d].*$/
        if(user == ''){
            $uc.html('不能为空')
        }else if(user1.test(user) && user2.test(user)){
            $uc.html('')
        }else{
            $uc.html('用户名仅支持中英文、数字和下划线且不能为纯数字')
        }
    })
    //手机号校验
    $number.blur(function () {
        var number = $number.val();
        var tel_reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/
        if(number == ''){
            $nc.html('不能为空')
        }else if(tel_reg.test(number)){
            $nc.html('')
        }else{
            $nc.html('手机号码格式不正确');
        }       
    })
    //密码校验
    $pwd.blur(function () { 
        var pwd = $pwd.val()
        var pwd_reg = /(?!^(\d+|[a-zA-Z]+|[_\+\-&=!@#$%^*()]+)$)^[\w\+\-&=!@#$%\^*()]{8,14}$/
        if(pwd == ''){
            $wc.html('不能为空')
        }else if(pwd_reg.test(pwd)){
            $wc.html('')
        }else{
            $wc.html('密码设置不符合要求')
        }
    })
    //发送验证码
    $bt.click(function(){      
        var timer,a = 5,bt = document.getElementById("bt");
        bt.setAttribute("disabled", "disabled")
        timer = setInterval(function(){
            a--;
            if(a==0){
                clearInterval(timer)
                $bt.html('获取验证码')
                bt.removeAttribute("disabled", "disabled")
                $cc.html('请求超时,请稍后重试')       
            }else{
                $bt.html(a)
            }
        },1000)
    })
})

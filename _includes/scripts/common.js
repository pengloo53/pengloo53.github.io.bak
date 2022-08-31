(function () {
  var $root = document.getElementsByClassName('root')[0];
  if (window.hasEvent('touchstart')) {
    $root.dataset.isTouch = true;
    document.addEventListener('touchstart', function(){}, false);
  }

  // 切换主题
  function changeSkin(skin){
    var _head = document.getElementsByTagName('head')[0];
    var _link = document.createElement('link');
    _link.setAttribute('rel', 'stylesheet')
    _link.setAttribute('id', skin)
    if (skin == 'dark'){
      _link.setAttribute('href', "/assets/css/main-dark.css")
      localStorage.setItem('skin', 'dark')
    }else if(skin == 'default'){
      _link.setAttribute('href', "/assets/css/main.css")
      localStorage.setItem('skin', 'default')
    }
    _head.appendChild(_link);
    need_remove = skin=='dark'?'default':'dark';
    if (document.getElementById(need_remove)){
      _head.removeChild(document.getElementById(need_remove));
    }
  }

  
  // var _skin_css = document.getElementById('skin_css');
  // var _link = document.createElement('link');
  // _link.setAttribute('rel', 'stylesheet');
  // _link.setAttribute('id', 'skin_css');

  var skin_ = localStorage.getItem('skin');
  
  if (skin_ == 'dark'){
    changeSkin('dark');
  }else if(skin_ == 'defalut'){
    changeSkin('default')
  }

  // if (matchMedia('(prefers-color-scheme: dark)').matches){
  //     _skin_css.setAttribute('href', "/assets/css/main-dark.css");
  // }else{
  //     _skin_css.setAttribute('href', "/assets/css/main.css");
  // }

  // var head = document.getElementsByTagName('head')[0];
  // head.appendChild(_link);

  var _logo = document.getElementById('logo');
  _logo.onclick = function(){
      if (localStorage.getItem('skin') == null || localStorage.getItem('skin') == '' ||  localStorage.getItem('skin') == 'default'){
        changeSkin('dark');
      }else if(localStorage.getItem('skin') == 'dark'){
        changeSkin('default');
      }
      
      // if (skin == 'default' || skin == null || skin == ''){
      //     _skin_css.setAttribute('href', '/assets/css/main-dark.css');
      //     localStorage.setItem('skin', 'dark');
      // }else if(skin == 'dark'){
      //     _skin_css.setAttribute('href', '/assets/css/main.css');
      //     localStorage.setItem('skin', 'default');
      // }
  }
})();

// 切换主题
function changeSkin(skin){
  var _head = document.getElementsByTagName('head')[0];
  var _link = document.createElement('link');
  _link.setAttribute('rel', 'stylesheet')
  _link.setAttribute('id', skin)
  if (skin == 'dark'){
    _link.setAttribute('href', "/assets/css/main-dark.css")
  }else if(skin == 'default'){
    _link.setAttribute('href', "/assets/css/main.css")
  }
  _head.appendChild(_link);
  need_remove = skin=='dark'?'default':'dark';
  if (document.getElementById(need_remove)){
    _head.removeChild(document.getElementById(need_remove));
  }
}
// 监听系统暗黑模式切换
var themeMedia = window.matchMedia("(prefers-color-scheme: light)");
themeMedia.addEventListener('change', e => {
    if (e.matches) {
      changeSkin('default');
    } else {
      changeSkin('dark');
    }
});
// 加载页面，如果是夜间模式
if (matchMedia('(prefers-color-scheme: dark)').matches){
  changeSkin('dark');
}

(function () {
  var $root = document.getElementsByClassName('root')[0];
  if (window.hasEvent('touchstart')) {
    $root.dataset.isTouch = true;
    document.addEventListener('touchstart', function(){}, false);
  }

 
  // var _skin_css = document.getElementById('skin_css');
  // var _link = document.createElement('link');
  // _link.setAttribute('rel', 'stylesheet');
  // _link.setAttribute('id', 'skin_css');

  // var skin_ = localStorage.getItem('skin');
  
  // if (skin_ == 'dark'){
  //   changeSkin('dark');
  // }else if(skin_ == 'default'){
  //   changeSkin('default')
  // }else{

  // }



  // var head = document.getElementsByTagName('head')[0];
  // head.appendChild(_link);

  // var _logo = document.getElementById('logo');
  // _logo.onclick = function(){
  //     if (localStorage.getItem('skin') == 'default'){
  //       changeSkin('dark');
  //       localStorage.setItem('skin', 'dark')
  //     }else if(localStorage.getItem('skin') == 'dark'){
  //       changeSkin('default');
  //       localStorage.setItem('skin', 'default')
  //     }else{
  //       if
  //     }
      

  // }
})();


// let lightMedia = window.matchMedia('(prefers-color-scheme: light)');
// let darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
// let callback = (skin) => {
//   // let prefersDarkMode = e.matches;
//   if (skin == 'dark') {
//     console.log('dark')
//   }else if(skin == 'default'){
//     console.log('light')
//   }
// };
// if (typeof darkMedia.addEventListener === 'function' || typeof lightMedia.addEventListener === 'function') {
//   lightMedia.addEventListener('change', callback('default'));
//   darkMedia.addEventListener('change', callback('dark'));
// }
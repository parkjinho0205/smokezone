document.addEventListener('DOMContentLoaded', function(){
  var targets = document.querySelectorAll('[data-include]');
  Promise.all([].map.call(targets, function(el){
    return fetch(el.dataset.include)
      .then(function(r){ return r.text(); })
      .then(function(html){ el.outerHTML = html; });   // 자리표시 div를 파일 내용으로 교체
  })).then(function(){
    document.dispatchEvent(new Event('includes:loaded'));  // 모두 불러온 뒤 알림
  });
});
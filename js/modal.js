// Modal을 가져옵니다.
var modals = document.getElementsByClassName("modal_main");
// Modal을 띄우는 클래스 이름을 가져옵니다.
var btns = document.getElementsByClassName("view_more");
// Modal을 닫는 close 클래스를 가져옵니다.
var spanes = document.getElementsByClassName("close");
var funcs = [];

// body 요소를 가져옵니다.
var body = document.body;

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function() {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick = function() {
      modals[num].style.display = "block";
      // body 스크롤 방지
      body.style.overflow = "hidden";
      console.log(num);
    };

    // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.
    spanes[num].onclick = function() {
      modals[num].style.display = "none";
      // body 스크롤 허용
      body.style.overflow = "auto";
    };

    // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
    window.onclick = function(event) {
      if (event.target.className == "modal_main") {
        event.target.style.display = "none";
        // body 스크롤 허용
        body.style.overflow = "auto";
      }
    };
  };
}

// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}
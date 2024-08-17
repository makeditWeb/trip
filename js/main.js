// sign up tab

$(document).ready(function() {
    function validateTab1() {
        var isValid = true;

        if ($('#name').val() === '' || $('#password').val() === '' || $('#confirm_password').val() === '' || $('#email').val() === '' || !$('#check01').is(':checked') || !$('#check02').is(':checked')) {
            isValid = false;
        }

        if (isValid) {
            $('#next_btn_1').css('background', 'var(--main-color)').prop('disabled', false);
        } else {
            $('#next_btn_1').css('background', 'var(--main-gray)').prop('disabled', true);
        }

        return isValid;
    }

    function validateTab2() {
        var isValid = true;
        if ($('#current_living').val() === '' || $('#passport_country').val() === '' || $('#birth_year').val() === '') {
            isValid = false;
        }
        if (isValid) {
            $('#next_btn_2').css('background', 'var(--main-color)').prop('disabled', false);
        } else {
            $('#next_btn_2').css('background', 'var(--main-gray)').prop('disabled', true);
        }
        return isValid;
    }

    function updateButtonState() {
        validateTab1();
        validateTab2();
    }

    $('input, select').on('change keyup', function() {
        updateButtonState();
    });

    $('#email_submit').click(function() {
        $('#email_check').show();
    });

    $('#next_btn_1').click(function() {
        if (validateTab1()) {
            if ($('#password').val() !== $('#confirm_password').val()) {
                alert('Password and Confirm Password do not match.');
            } else {
                $('ul.tabs li[data-tab="tab-2"]').click();
            }
        } else {
            alert('Please complete all required fields and agree to the terms.');
        }
    });

    $('#next_btn_2').click(function() {
        if (validateTab2()) {
            $('ul.tabs li[data-tab="tab-3"]').click();
        } else {
            alert('Please complete all required fields.');
        }
    });

    $('#prev_btn_2').click(function() {
        $('ul.tabs li[data-tab="tab-1"]').click();
    });

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        if ((tab_id === 'tab-1') || (tab_id === 'tab-2' && validateTab1()) || (tab_id === 'tab-3' && validateTab2())) {
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        }
    });

    updateButtonState();
});



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


document.addEventListener("DOMContentLoaded", function () {
    var heartIcon = document.getElementById("heartImage");

    if (heartIcon) { // 요소가 존재하는지 확인
        console.log('Heart icon element found.');
        
        heartIcon.addEventListener("click", function () {
            console.log('Image clicked');
            
            if (heartIcon.getAttribute("src") === "./image/heart.svg") {
                console.log('Switching to filled heart');
                heartIcon.setAttribute("src", "./image/heart-fill.svg");
            } else {
                console.log('Switching to empty heart');
                heartIcon.setAttribute("src", "./image/heart.svg");
                heartIcon.style.filter = ""; // 필터 제거
            }
        });
    } else {
        console.error('Heart icon element not found.');
    }
});



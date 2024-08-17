function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(37.5665, 126.9780), // 이 부분에 원하는 위도, 경도를 입력합니다.
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

$(document).ready(function() {
    initMap();
});
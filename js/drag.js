$(document).ready(function() {

    // 일행초대
    var withCount = 1;
    $('#invite_btn').click(function(){
        withCount++;
        var clonedWith = $('#source').clone();
        clonedWith.find('.num').text(withCount);
        clonedWith.find('.name').text('여행자 ' + withCount);
        clonedWith.attr('id', 'card_' + withCount);
        $('.schedule_with').append(clonedWith);
    });

    // drag & drop
    $("#sortable").sortable({
        placeholder: "ui-state-highlight",
        handle: ".card_box"
    });
    $("#sortable").disableSelection();

});





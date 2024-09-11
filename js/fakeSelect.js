window.onload = function(){
    fakeSelect();       // fakeSelect
};

function fakeSelect() {
    const btnSelect = document.querySelectorAll('.btn_select'); // select 버튼
    btnSelect.forEach((btnClick) => {
        btnClick.addEventListener('click', () => {
            let optionBox = btnClick.nextElementSibling;
            let optionList = optionBox.querySelectorAll('.select_option li');
            clickLabel(btnClick, optionList);
        });
    });
    const clickLabel = (btnClick, optionList) => {
        if(btnClick.parentNode.classList.contains('active')) {
            btnClick.parentNode.classList.remove('active');
            optionList.forEach((opt) => {
                opt.removeEventListener('click', () => {
                    handleSelect(btnClick, opt)
                });
            });
        } else {
            btnClick.parentNode.classList.add('active');
            optionList.forEach((opt) => {
                opt.addEventListener('click', () => {
                    handleSelect(btnClick, opt)
                });
            });
        }
    }
    const handleSelect = (label, item) => {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');
    }
}
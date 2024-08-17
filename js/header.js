// header

    document.addEventListener('DOMContentLoaded', (event) => {
        const mypageName = document.getElementById('mypageName');
        const dropdownQuick = document.getElementById('dropdownQuick');

        mypageName.addEventListener('click', () => {
            if (dropdownQuick.style.display === "none" || dropdownQuick.style.display === "") {
                dropdownQuick.style.display = "flex";
            } else {
                dropdownQuick.style.display = "none";
            }
        });

        // Click outside to close the dropdown
        document.addEventListener('click', (event) => {
            if (!mypageName.contains(event.target) && !dropdownQuick.contains(event.target)) {
                dropdownQuick.style.display = "none";
            }
        });
    });


    $(document).ready(function() {
        $('.select_language').select2({
            minimumResultsForSearch: Infinity
        });
        $('.select_money').select2({
            minimumResultsForSearch: Infinity
        });

        $('.countrySelect').select2({
            minimumResultsForSearch: Infinity
        });

        $('.citySelect').select2({
            minimumResultsForSearch: Infinity
        });

        
        $('.filterSelect').select2({
            minimumResultsForSearch: Infinity
        });
    });
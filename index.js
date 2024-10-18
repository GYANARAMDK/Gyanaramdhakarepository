document.querySelectorAll('input[name="bundle"]').forEach(radio => {
    radio.addEventListener('change', function () {
       
        document.querySelectorAll('.bundle-contant').forEach(content => {
            content.classList.remove('show');
            content.parentElement.style.height = "15vh"; 
            
        });

        if (this.checked) {
            const bundleContent = this.closest('.bundle-option').querySelector('.bundle-contant');
            bundleContent.classList.add('show');
            this.closest('.bundle-option').style.height = "auto"; 
        }
    });
});



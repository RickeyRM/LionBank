function check(element) {
    const isChecked = element.classList.contains('form__product--bg');
    console.log(isChecked);
    
    isChecked ? element.classList.remove('form__product--bg') : element.classList.add('form__product--bg')
    }
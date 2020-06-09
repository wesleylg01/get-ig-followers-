//*escravo
let contador = 0;
let arr = document.querySelectorAll('.L3NKy');
arr.forEach((v, i) => {
    setTimeout(()=>{
        if(!v.classList.contains('_8A5w5')){
            v.click();
            contador++;
            console.log('escravo já seguiu'+contador+'pessoas');
        } else {
            console.log('você já segue este usuário.');
                }
    }, i * 10000 )
});
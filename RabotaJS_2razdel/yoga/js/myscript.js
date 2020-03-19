window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoTab = document.querySelector('.info-tab'),
        descr = document.querySelectorAll('.info-descr');
    
    function hideDescr(a){
        for (let i = a; i < descr.length; i++){
            descr[i].classList.remove('show');
            descr[i].classList.add('hide');
        }
    }    

    hideDescr(1);

    function showDescr(b){
        if (descr[b].classList.contains('hide')){
            descr[b].classList.remove('hide');
            descr[b].classList.add('show');
        }
    }

    infoTab.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < infoHeaderTab.length; i++){
                if(target == infoHeaderTab[i]){
                    hideDescr(0);
                    showDescr(i);
                    break;
                }
            }
        }
    });


});
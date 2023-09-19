function additem(){
    let item=document.getElementById("do");
    let listitems=document.getElementById("todoitems");
if(item.value!=""){
    let make_li=document.createElement("li");
    make_li.appendChild(document.createTextNode(item.value));
    listitems.appendChild(make_li);
    //item.value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAZlBMVEX///8AAADW1tb5+fm9vb2Tk5OGhoZJSUnh4eHFxcXy8vLu7u5DQ0OwsLD8/PyioqKMjIzo6OiqqqoKCgpqamrNzc1lZWV3d3cwMDBUVFQREREWFhYbGxu3t7eAgIA4ODglJSVdXV2FiV5ZAAAEcklEQVRoge2b63KqUAyFAaUCKopWBUHR93/Jk13LtJJok8WmnTPj+kmBjyJk5bIJgpf+N0WxrOhX6PMqfKRqPj5+Uj7Eh2E5GZ2/cpiZJHdhq9H5izBs57mkeRuGi9H5T/5Jd2te/Bffh/IoFbUjxjmdSkrP9LedfFiUm+jJoXkSZRA1h0SP33iG37TR4uNR8GEY6/BTt+8hTR4peqyHx6QHd9Kpir+lPXfae6WWe3C3mh3dvz+GjayUN4DeossI+CC4hOGbYjdKL95H4b9TgqLYjQx2PQp/rbPnF//P+cpAZVSs5lerOH7zqzheVWr+aNLwZyPyZwp+1B7regR2XR9bdYXmOZULrZZy8s4/mfm2lO2ZcjPfmXDhjV+E2tyjk8sW/JXzUWjNaJKjzxyI/pujIf0lFY31F3smepoa26+ZXXwmYfQ2XzLbIa1nfms8pPXpgrGdTy5w9sY/6yL/d+19ZqGUee6Nh1C9cvXGv1I9ZTyEkqWSBeDiND3dbcyo7L57sHPag71peWlP6TaSAThXuOvwRf0wOZEivQv/6uL3G4rxpyo+i/R2+wmClI5hIQPkZ7QxNfKdAbGQDfITs/0IZx7AF8/1g5KtcM0gn+7l1mZ/9KqRAS098ZdkP9ZkJlsIBgTyyX4WRvsLJjPBgEA+2c/MOhjIK8GAQD7ZT2VOZvdCzAb5B7v9fHgWM0CQL53qR9FFV/0fDeNPKrv93ar1/kOL8TOoo0Avbdkfp2H8eSmEkh9FrMYTv7FWP06SAWF8xH5uR/nj22vJuWBaGN/tZB/MzoUzYfwpxM8anrRh/I29+nJnEgwQ4zv7s8+lnQH22+UY/w2wPzLAPXcNjO9OBPRyDrxdj/ElJ1fo/Md8Z0C92wbxcymTUsg1DXqvDcTPwFbG0i108MB3yyLs9nczwIRtsvMTyP7EqgXiI9WPU8FtE+LvwFaqULVCfLGSVshV7b3nBuIvpU6CRrxrAfFdJwXBB0cWNyA+xbEjxG9Z3IT4Z3RV1JW14CD+Fam+nLgBQnyo+nF6Y11biN/qxv5cZEC1B36NdtKX7MGF+EfMfj742/vAhfCzLcpPWQWE8BMexpXixoXwUfuT6kaELzZSVSq2/bYxwj/RU4RNMvO6b0AIn+ynBie5rAIE+Q2GD8q+ASJ8sr8S5M/6kRvhH+yzr05sBobwgdlXJ3bpCJ/dRL3W/UcH4Tf4ciaWuSF8nkWqxRaBgHx0kM8yd4CPzL46scoF4AtVlFrs7AAftz8ywLp37wA+/YY1Zn907/qN62gdr++8pKANd79QThvuLsi10dGFPOIMzChk9tVp4mEpYgw1Hz/lYREGsPTiS1c8dncatI "
    make_li.onclick=function(){this.parentNode.removeChild(this);}
}else{alert("please add any to do item.")}
}
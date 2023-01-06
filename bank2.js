//deposite amount
document.getElementById("dipo-btn").addEventListener('click',function(){
    const dipoField=document.getElementById("dipo-input");
     newDipositeAmount=dipoField.value;
    
    //clear input field
    dipoField.value="";

    

    //deposite amount show in deposite section.
    const dipositeShow=document.getElementById("dipo-show");
    const previousDeposite=dipositeShow.innerText;
    const depositeTotal=parseFloat(previousDeposite)  + parseFloat(newDipositeAmount) ;
    dipositeShow.innerText=depositeTotal;

    // deposite amount show in blance section
     
    const blanceshow=document.getElementById("total-show");
    const previousBlance=blanceshow.innerText;
    const blanceTotal=parseFloat(previousBlance) + parseFloat(newDipositeAmount);
    blanceshow.innerText=blanceTotal;

})

// withdraw Amount

document.getElementById("withdraw-btn").addEventListener('click',function(){
    const withdrawField=document.getElementById("withdraw-input");
    const NewWithdrawAmount=withdrawField.value;
    // clear input section
    withdrawField.value="";
     
    //total withdraw show in withdraw section
    const withdrawShow=document.getElementById("withdraw-show");
    const previousWithdraw=withdrawShow.innerText;
    const totalWithdraw=parseFloat(previousWithdraw) + parseFloat(NewWithdrawAmount);
    withdrawShow.innerText=totalWithdraw;

    // reduce blance when withdrW DONE

    const blanceshow=document.getElementById("total-show");
    const previousBlance=blanceshow.innerText;
    const blanceTotal=parseFloat(previousBlance) - parseFloat(NewWithdrawAmount);
    blanceshow.innerText=blanceTotal;

})
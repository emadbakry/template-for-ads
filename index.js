// Timer
//  You can see it life here: emadbakry.github.io/template-for-ads/


//  The coupon 'end day'
let countDownDate = new Date("Dec 26, 2024 20:40:50").getTime()

let counter = setInterval(() => {
    
    try {

        let dateNow = (new Date).getTime();
        
        // diff between Now and end day
        let dateDiff = countDownDate - dateNow;
        
        if (dateDiff > 0) {
            // time units
            let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
            let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60) )
            let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000) )
            
            document.getElementById('daysNum').textContent = days < 10 ? `0${days}`: days;
            document.getElementById('hoursNum').textContent = hours < 10 ? `0${hours}`: hours;
            document.getElementById("minutesNum").textContent = minutes < 10 ? `0${minutes}` : minutes;
            document.getElementById('secondsNum').textContent = seconds < 10 ? `0${seconds}` :seconds;
        } else {
            console.log(`time passed! please re-new the offer date
            انتهى العرض
            `);
            offerEnd();
        }
    } catch(e) {
        console.log(`error accr
        reason:
        ${e}`)
        clearInterval(counter);
    }
}, 1000);





try {

    // close btn
    let offerDiv = document.querySelector(".main-ad");
    var closeOffer = () => {
        // console.log(offerDiv)
        let wisePopRoot = document.getElementById("wisepops-root");
        wisePopRoot.classList.add('closeOfferAll');
        setTimeout(() => {
            offerDiv.classList.add("closedByBtn");
            wisePopRoot.style.display = 'none';
            offerDiv.style.display = 'none';
        }, 500);
    };
    
} catch (e) {
    console.log(`Error with closing the offer
    reason: 
    ${e}`)
}



    // copy couponto device clipboard
let copyCoupon = () => {
   
    try {

        let myCoupon = document.getElementById('coupon').textContent;
        navigator.clipboard.writeText(myCoupon);
        console.log(`coupon copied`)
        document.getElementById('cw').textContent = 'تم النسخ بنجاح';
    } catch (e) {
        console.log(`faild to copy the coupon !!
        reson:
        ${e}`)
    }
}

// if offer ends while visitors browsing the store
try {
  let title = document.querySelector(".up .title h2");
  let allTimer = document.querySelectorAll(".time .num span");
  let copyBtn = document.querySelector(".copyCoupon");
  var offerEnd = () => {
      clearInterval(counter);
      title.textContent = "انتهى العرض";
      allTimer.forEach((el) => el.classList.add('stoped'))
      copyBtn.classList.add('offerEnds');
    }
} catch (e) {
  console.log(`Error with selector
    reason:
    ${e}`);
}
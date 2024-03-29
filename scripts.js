let object = new Object();
//changing theme to dark and light
let theme = false;
function func_changetheme() {
    if (theme == false) {
        document.querySelector("#theme-icon").classList.remove("fas", "fa-moon");
        document.querySelector("#theme-icon").classList.add("fa-regular", "fa-sun");
        document.querySelector(".main-header").classList.add("dark-theme");
        document.querySelector("body").classList.add("dark-theme");
        theme = true;
    }
    else {
        document.querySelector("#theme-icon").classList.remove("fa-regular", "fa-sun");
        document.querySelector("#theme-icon").classList.add("fas", "fa-moon");
        document.querySelector(".main-header").classList.remove("dark-theme");
        document.querySelector("body").classList.remove("dark-theme");

        theme = false;
    }
}

///////////////////start of Log in and register///////////////////////////////
let btn_profile = false;
function func_logRegister() {
    if (btn_profile == false) {
        document.querySelector("#login-register").style.display = "flex";
        document.getElementById("profile-mobilenumber").focus();
        btn_profile = true;
    }
    else {
        document.querySelector("#login-register").style.display = "none";
        btn_profile = false;
    }
}
//phone number
function func_mobilenumber(e) {
    if (!(e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4"
        || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9")) {
        e.preventDefault();
    }
    if (document.querySelector("#profile-mobilenumber").value.length > 10) {
        e.preventDefault();
    }
}
//password
function func_password(e) {
    if (document.querySelector("#profile-password").value.length > 6) {
        e.preventDefault();
    }
}

/////////////////// End of Log in and register///////////////////////////////////////

/////////////////// tooltip scripts /////////////////////////////////////////////////
function func_rule() {
    let rule_container = document.createElement("div");
    let rule_text = document.createTextNode("قوانین به صورت زیر است داداش گلم...");
    rule_container.appendChild(rule_text);
    document.getElementById("menu").appendChild(rule_container);
    rule_container.classList.add("tooltip-contaienr");

}
function funcout_rule() {
    document.getElementById("menu").removeChild(menu.lastChild)
}
/////////////////// end of tooltip scripts ///////////////////////////////////////////
/////////////////// strat of Timer scripts ///////////////////////////////////////////


function clock_update() {

    setInterval(clock_update, 1000); //updates the time every 1s
    let date = new Date();
    let date_second = date.getSeconds();
    let date_minute = date.getMinutes();
    let date_hours = date.getHours();
    document.querySelector("#timer").innerHTML = date_hours + ":" + date_minute + ":" + date_second + ": ساعت";

}
/////////////////// End of Timer scripts ///////////////////////////////////////////

/////////////////// start of login and logout scripts  ///////////////////////////////

let btn_log = document.querySelector("#btn_login");
btn_log.addEventListener('click', func_login);
let btn_register = document.querySelector("#btn_login").parentNode.childNodes[3];
let left_header_user = document.querySelector("#left-header").childNodes[1].
    childNodes[1];
let btn_login_click = false;
function func_login() {
    // for  login mobile number should be 11 numbers 
    if (btn_login_click == false && document.querySelector("#profile-mobilenumber").value.length > 10) {
        left_header_user.classList.remove('fa-regular', 'fa-user');
        left_header_user.classList.add('fa-solid', 'fa-user-check');
        document.querySelector("#login-register").style.display = "none";

        // changin btn login innerHTML خروچ
        document.querySelector("#btn_login").innerHTML = "خروج";
        document.querySelector("#btn_login")
        document.querySelector("#btn_register").style.display="none";
        alert("خوش آمدید به دیجی شاپ");
        btn_login_click = true;
    }
    else {
        left_header_user.classList.add('fa-regular', 'fa-user');
        left_header_user.classList.remove('fa-solid', 'fa-user-check');
        // changin btn login innerHTML ورود
        document.querySelector("#btn_login").innerHTML = "ورود";
        document.querySelector("#btn_register").style.display="block";
        btn_login_click = false;
    }
}
/////////////////// End of login and logout scripts  ///////////////////////////////

/////////////////// start of showing parent-Basket or alarm to join first   ///////////////////////////////
let btn_showBasket = document.querySelector("#btn-shopingBasket");
btn_showBasket.addEventListener('click', func_showBasket);
let btn_showBasket_click = false;

// showing img_empty and text for empty shoping basket:
let Empty_img_basket = document.createElement('img');
Empty_img_basket.classList.add("empty_img_basket");
let Empty_text_basket = document.createElement('p');
Empty_text_basket.classList.add("empty_text_basket");
Empty_text_basket.textContent = "ُسبد خرید خالی است برادر :/";
document.querySelector('.parent-basket').append(Empty_img_basket, Empty_text_basket);
Empty_img_basket.src = "/photo/Empty-Basket.png";

function func_showBasket() {

    // check the user log in and click to show basket
    if (btn_showBasket_click == false && btn_login_click == true) {
        document.querySelector('.parent-basket').style.display = "block";
        btn_showBasket_click = true;
    }
    else {
        document.querySelector('.parent-basket').style.display = "none";
        if (btn_login_click == false) {
            alert("لطفا ابتدا وارد حساب کاربری خود شوید");
        }
        btn_showBasket_click = false;
    }


}

/////////////////// End of showing parent-Basket or alarm to join first   ///////////////////////////////

// button of card ---->

/////////////////// strat of "btn-buy" click and showing plus-minus buttons  ///////////////////////////////
//  plus and minus functions are Nested Functions in btn_buy function
let btn_buy_click = false;

function func_buy(t) {
    // Stop showing img_empty and text for empty shoping basket if any products added to Basket
    if (document.querySelector('#shoping-basket').childNodes.length >= 2) {
        document.querySelector('.parent-basket').childNodes[0].style.display = "none";
        document.querySelector('.parent-basket').childNodes[1].style.display = "none";
        document.querySelector(".fa-shopping-cart").setAttribute("style", "color:green;")
    }
    // creating plus_minus and instead of btn_buystyle
    let plus_minus = document.createElement("div");
    plus_minus.classList.add('plus_minus');
    // creating and appending childs for plus_minus div

    // plus
    let plus = document.createElement("i");
    plus.classList.add('fa-regular', 'fa-plus', 'plus_minus_icons');

    // counter
    let counter = document.createElement("span");
    counter.classList.add('plus_minus_counter');
    counter.textContent = 1;

    // minus
    let minus = document.createElement("i");
    minus.classList.add("fa-solid", "fa-trash", "plus_minus_icons");

    //buy price && total price
    let buy_price = parseFloat(t.parentNode.childNodes[7].childNodes[3].textContent);
    let total_price = buy_price * parseFloat(counter.textContent);

    plus_minus.append(plus, counter, minus);
    // make btn_buy display: none and append plus_minus on the card
    t.style.display = "none";
    t.parentNode.appendChild(plus_minus);

    // plus button scripts +++++++++++++++++++
    plus.addEventListener('click', func_plus);

    function func_plus() {
        //++ the counter
        counter.textContent++;

        // ++ the counter in plus_minus_clone in card_holder_plus_minus
        card_holder_PlusMinus.firstChild.childNodes[1].textContent++;
        if (counter.textContent >= 2) {
            // total price buy pressing Plus
            total_price = buy_price * parseInt(counter.textContent);
            t.parentNode.childNodes[7].childNodes[3].textContent = total_price + " تومان";
            card_holder_totalprice.textContent = total_price + " تومان";
            // adding minus icon to trash, in minus of plus_minus
            minus.classList.add("fa-minus");
            minus.classList.remove("fa-trash");
            // adding minus icon to trash of card_holder_PlusMinus
            plus_minus_clone.lastChild.classList.add("fa-minus");
            plus_minus_clone.lastChild.classList.remove("fa-trash");
        }
    }
    // minus button scripts ---------------
    minus.addEventListener('click', func_minus);
    function func_minus() {
        // total price buy pressing Minus
        total_price = total_price - buy_price;
        t.parentNode.childNodes[7].childNodes[3].textContent = total_price + " تومان";
        card_holder_totalprice.textContent = total_price + " تومان";
        if (counter.textContent > 0) {
            // -- the counter in plus_minus_clone in card_holder_PlusMinus
            card_holder_PlusMinus.firstChild.childNodes[1].textContent--;
            counter.textContent--;

        }
        if (counter.textContent < 2) {
            // adding trash icon to minus, in minus of plus_minus
            minus.classList.remove("fa-minus");
            minus.classList.add("fa-trash");
            // adding trash icon to minus of card_holder_PlusMinus
            plus_minus_clone.lastChild.classList.remove("fa-minus");
            plus_minus_clone.lastChild.classList.add("fa-trash");
            //  when counter is 1 , the buy_price return to default
            t.parentNode.childNodes[7].childNodes[3].textContent = buy_price + ' تومان';
            card_holder_totalprice.textContent = buy_price + " تومان";

        }


    }
    // trash button scripts  if the counter goes to 0 ---------------
    let btn_trash = document.querySelector(".fa-trash");
    btn_trash.addEventListener('click', func_trash);

    function func_trash() {
        if (counter.textContent == 0) {
            total_price = t.parentNode.childNodes[7].childNodes[3].textContent;
            t.style.display = "flex";
            t.parentNode.removeChild(plus_minus);
            // removing product from basket parent
            basket_parent.removeChild(card_holder);

            // Bring back showing img_empty and text for empty shoping basket if any products deleted from Basket
            if (document.querySelector('#shoping-basket').childNodes.length == 2) {
                document.querySelector('.parent-basket').childNodes[0].removeAttribute("style");
                document.querySelector('.parent-basket').childNodes[1].removeAttribute("style");
                document.querySelector(".fa-shopping-cart").setAttribute("style", "color:black;");
            }

        }

    }


    // adding product card to shoping-basket when clicking on btn_buy.......

    let basket_parent = document.querySelector('#shoping-basket');

    // card_holder
    let card_holder = document.createElement('div');
    card_holder.classList.add('card_holder_style');

    // card_holder_img
    let card_holder_img = document.createElement('img');
    card_holder_img.src = t.parentNode.parentNode.childNodes[7].src

    // card_holder_carddetails
    let card_holder_carddetails = document.createElement('div');
    card_holder_carddetails.classList.add('card_holder_carddetails_style');
    let card_holder_productName = document.createElement("p");
    card_holder_productName.textContent = t.parentNode.parentNode.childNodes[3].textContent;
    let card_holder_PlusMinus = document.createElement("div");
    card_holder_PlusMinus.classList.add('card_holder_PlusMinus');
    // here i added plus_minus button to card_holder_plusminus by CloneNode :
    let plus_minus_clone = plus_minus.cloneNode(true);
    card_holder_PlusMinus.appendChild(plus_minus_clone);

    // adding function plus to plus_minus_clone First child (+)
    plus_minus_clone.firstChild.addEventListener('click', func_plus);
    // adding function minus to plus_minus_clone Last child (-)
    plus_minus_clone.lastChild.addEventListener('click', func_minus);
    //adding  function trash to plus_minus_clone child[2] (trash icon)
    plus_minus_clone.childNodes[2].addEventListener('click', func_trash);


    let card_holder_totalprice = document.createElement("p");
    card_holder_totalprice.textContent = t.parentNode.childNodes[7].childNodes[3].textContent;
    // adding name and plus_minus and price to card_holder_carddetails
    card_holder_carddetails.append(card_holder_productName, card_holder_PlusMinus
        , card_holder_totalprice);

    card_holder.appendChild(card_holder_img);
    card_holder.appendChild(card_holder_carddetails);

    basket_parent.appendChild(card_holder);


}
/////////////////// End  of "btn-buy" click and showing plus-minus buttons  ///////////////////////////////

/////////////////// start of Jquery codes for go to top ///////////////////////////////
let btn_go_up= document.querySelector("#btn-goUp");

$(document).ready(function() {
    $(window).scroll(function(){ 
       if(window.scrollY>500){
       btn_go_up.classList.add("sticky");
       } 
       else if((window.scrollY<500)){
        btn_go_up.classList.remove("sticky");
       }
    });
});




























function slider() {
    const e = document.querySelector(".smal-bt-plat"),
        t = document.querySelector(".plats-slide .btns .left"),
        n = document.querySelector(".plats-slide .btns .right"),
        i = document.querySelector(".big-plat");
    let s = 0,
        o = 1;
    t.addEventListener("click", function() {
        s < 4 ? s++ : s = 0, i.innerHTML = `<img loading="lazy" class="displayed scallAnimation" src="./assets/top_slider/${s}.webp" alt="">`, o < 4 ? o++ : o = 0, e.innerHTML = `<img class="fromRightAnimation" src="./assets/top_slider/${o}.webp" alt="">`
    }), n.addEventListener("click", function() {
        s > 0 ? s-- : s = 4, i.innerHTML = `<img loading="lazy" class="displayed scallAnimation" src="./assets/top_slider/${s}.webp" alt="">`, o > 0 ? o-- : o = 4, e.innerHTML = `<img class="fromRightAnimation" src="./assets/top_slider/${o}.webp" alt="">`
    })
}

function hoverLine() {
    const e = document.querySelector(".list ul"),
        [...t] = e.children;
    t.forEach((e, t, n) => {
        e.addEventListener("mouseenter", function() {
            for (let e = 0; e < n.length; e++) n[e].classList.remove("activeLink");
            this.classList.add("activeLink")
        })
    })
}

function bars() {
    const e = document.querySelector("#nav .icons .bars"),
        t = document.querySelector("#nav .list");
    let n = !0;
    e.addEventListener("click", function() {
        1 == n ? (t.style.height = "auto", n = !1) : (t.style.height = "0", n = !0)
    }), window.onresize = function(e) {
        window.innerWidth > 600 && (t.style.height = "auto")
    }
}

function slider2() {
    const e = document.querySelector(".slider");
    let t = [...e.children];
    setInterval(function() {
        e.innerHTML = "";
        let n = t[0];
        t.shift(), t.push(n),
            function(n, i) {
                for (let i = 0; i < t.length; i++) t[i].classList.remove(...arguments), t[i].classList.add(n), e.appendChild(t[i])
            }("toLeft", "toRight")
    }, 1e4)
}

function post() {
    const e = document.querySelector("#section3 .bottom");
    for (let t = 0; t < 12; t++) {
        let n = `\n        <article itemid="${t}">\n        <div class="l">\n            <img loading="lazy" src="./assets/plats/${t}.webp" alt="">\n        </div>\n        <div class="r">\n            <div> \n                <h3>Demo Meal Name</h3>\n                <p>Mushroom / Garlix / Veggies</p>\n            </div>\n            <div class="line">\n                <h2>- - - - - - - </h2>\n                <i class="fa-solid fa-circle"></i>\n            </div>\n            <button class="addToCard" onclick="addToBasket(this)">\n                $25 \n                <i class="fa-regular fa-cart-plus"></i>\n            </button> \n        </div>\n    </article>\n        `;
        e.innerHTML += n
    }
}

function platsSlider() {
    const e = document.querySelector(".slider-1");
    let t = [...e.children];
    let n = "";

    function i() {
        e.innerHTML = "";
        let s = t[t.length - 1];
        t.pop(), t.unshift(s),
            function(n, i) {
                for (let i = 0; i < t.length; i++) t[i].classList.remove(...arguments), t[i].classList.add(n), e.appendChild(t[i])
            }("fromTop", "fromBottom"), clearInterval(n), n = setInterval(i, 4e3)
    }
    n = setInterval(i, 4e3)
}

function descSlider() {
    const e = document.querySelector(".slider-2"),
        t = document.querySelector(".share");
    let n = [...e.children];
    let i = setInterval(s, 4e3);

    function s() {
        e.innerHTML = "";
        let o = n[n.length - 1];
        n.pop(), n.unshift(o),
            function(t, i) {
                for (let i = 0; i < n.length; i++) n[i].classList.remove(...arguments), n[i].classList.add(t), e.appendChild(n[i])
            }("fromBottom", "fromTop"), t.classList.remove("zoom"), setTimeout(() => {
                t.classList.add("zoom")
            }, 100), clearInterval(i), i = setInterval(s, 4e3)
    }
}
slider(), hoverLine(), bars(), slider2(), post(), platsSlider(), descSlider();
const parent = document.querySelector("#section3 .bottom");

function post2(e) {
    parent.style.background = `linear-gradient(to bottom, #ffffff 0%,#ffffffdd 100%) , url(..//assets/${e}/bg.webp)`, parent.style.backgroundRepeat = "no-repeat", parent.style.backgroundPosition = "center", parent.style.backgroundSize = "contain";
    let t = "slideFromLeft";
    for (let n = 0; n < 12; n++) {
        n % 2 == 0 && (t = "slideFromLeft"), n % 2 != 0 && (t = "slideFromRight");
        let i = `\n    <article class="${t} itemid="${n}">\n        <div class="l">\n            <img loading="lazy" src="./assets/${e}/${n}.webp" alt="">\n        </div>\n        <div class="r">\n            <div>\n                <h3>Demo Meal Name</h3>\n                <p>Mushroom / Garlix / Veggies</p>\n            </div>\n            <div class="line">\n                <h2>- - - - - - - </h2>\n                <i class="fa-solid fa-circle"></i>\n            </div>\n            <button class="addToCard" onclick="addToBasket(this)">\n                $25 \n                <i class="fa-regular fa-cart-plus"></i>\n            </button> \n        </div>\n    </article>\n        `;
        parent.innerHTML += i
    }
}

function saladBtn() {
    const e = document.querySelector(".dessertBtn"),
        t = document.querySelector(".drinksBtn"),
        n = document.querySelector(".platBtn"),
        i = document.querySelector(".pizzaBtn"),
        s = document.querySelector(".saladBtn"),
        o = document.querySelector(".bottom");
    e.addEventListener("click", function() {
        o.innerHTML = "", post2("dessert")
    }), t.addEventListener("click", function() {
        o.innerHTML = "", post2("drinks")
    }), n.addEventListener("click", function() {
        o.innerHTML = "", post2("plats")
    }), i.addEventListener("click", function() {
        o.innerHTML = "", post2("pizza")
    }), s.addEventListener("click", function() {
        o.innerHTML = "", post2("salad")
    })
}

function animate() {
    function e(e) {
        for (var t = []; e;) t.unshift(e), e = e.parentNode;
        for (let e = 0; e < t.length; e++)
            if ("topPageWrp" === t[e].className || "section4" === t[e].id) return !0
    }

    function t(e, t) {
        e.getBoundingClientRect().top <= window.innerHeight && (e.classList.add(t), "P" == e.tagName && setTimeout(() => {
            e.style.visibility = "visible"
        }, 1e3)), e.getBoundingClientRect().top >= window.innerHeight && ("P" == e.tagName && (e.style.visibility = "hidden"), e.classList.remove(t))
    }
    const [...n] = document.querySelectorAll("*");
    window.addEventListener("scroll", function() {
        for (let i = 0; i < n.length; ++i)
            if (!e(n[i])) {
                if ("P" === n[i].tagName) {
                    t(n[i], "animateAll");
                    continue
                }
                if ("H1" === n[i].tagName || "H2" === n[i].tagName || "H3" === n[i].tagName) {
                    t(n[i], "animateH1");
                    continue
                }
                if ("IMG" === n[i].tagName) {
                    t(n[i], "animateIMG");
                    continue
                }
            }
    })
}

function close() {
    const [...e] = document.querySelectorAll(".closeThis");
    e.forEach(e => {
        e.addEventListener("click", function() {
            console.log(this.parentNode), this.parentNode.style.display = "none"
        })
    })
}

function searchOpen() {
    const e = document.querySelector(".search-open"),
        t = document.querySelector(".search-section");
    e.addEventListener("click", function() {
        t.style.display = "flex"
    })
}

function basketOpen() {
    const e = document.querySelector(".basket-open"),
        t = document.querySelector(".basket-section");
    e.addEventListener("click", function() {
        t.style.display = "flex", t.style.overflow = "scroll"
    })
}

function goToMenuBtn() {
    document.querySelector(".basket-section a").addEventListener("click", function() {
        this.parentNode.parentNode.style.display = "none"
    })
}

function stickyNav() {
    const e = document.querySelector("#nav");
    window.addEventListener("scroll", function() {
        this.scrollY > 10 ? (e.style.position = "fixed", e.style.top = 0, e.style.left = 0, e.style.width = "100%", e.style.background = "#fffffff8") : e.style.position = "relative"
    })
}
saladBtn(), animate(), close(), searchOpen(), basketOpen(), goToMenuBtn(), stickyNav();
let selectedMenu = [];

function addToBasket(e) {
    const t = document.querySelector(".confirmBTN");
    e.style.background = "lightgreen", e.innerHTML = '<i class="fa-regular fa-check-double" style="font-size="25px"></i>';
    const n = document.querySelector(".newItems");
    document.querySelector(".noItesmInBasket").style.display = "none";
    let i = e.parentNode.parentNode.innerHTML.slice(0, -311) + "</div>";
    t.style.display = "block", n.innerHTML += "<article class='basketItem'>" + i + "<div class=\"\"></div><input type='number' value='1' min='1' max='500'></article>"
}
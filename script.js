var tl=gsap.timeline()
tl.from("#page1 svg",{
    y:-40,
    opacity:0,
    delay:1,
    duration:1
})
tl.from("#page1 img",{
    scale:0.4,
    ease:Power4.easeOut,
    duration:1.3,
    delay:-0.1,
    borderRadius:"10px",
    
})
.from("#nav",{
    opacity:0,
    y:-50,
    duration:1,
})
var h2data=document.querySelectorAll("#page2 h2")

h2data.forEach(function(elem){
    var textdata=elem.textContent
    var spilted=textdata.split("")
    var clutter=""
    spilted.forEach(function(e){
        clutter+=`<span>${e}</span>`
    })
    // console.log(clutter)
    // document.querySelector("#page2 h2").innerHTML=clutter
    elem.innerHTML = clutter;
})
gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h2 span",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 0%",
        scrub:3
    }

})
gsap.to("#page2 #svg2,#page2 #svg1",{
    left:"-50vw",
    stagger:0.5,
    duration:4,
    scrollTrigger:{
                scroll:"body",
                trigger:"#page2 #svg2",
                // markers:true,
                start:"top 80%",
                end:"top 0%",
                scrub:5
            }
})
// var tl2=gsap.timeline()
gsap.from("#page3 #bottom-part1 p, #bottom-part2 #image img",{
    opacity:0,
    y:50,
    // stagger:0.3,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1 p",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:1
    }
})
var h1data=document.querySelectorAll("#text-page3 h1")
h1data.forEach(function(elem){
    var h1text=elem.textContent
    var splited_h1=h1text.split("")
    var clutter_h1=""
    splited_h1.forEach(function(e){
        clutter_h1+=`<span>${e}</span>`
    })
    // document.querySelector("#text-page3 h1").textContent=clutter_h1
    elem.innerHTML=clutter_h1
    // console.log(elem)
})
gsap.to("#text-page3 h1 span",{
    color:"#434B34",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page3 h1 span",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:3
    }
})
gsap.from("#bottom-part1-explore",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1-explore",
        // markers:true,
        start:"top 85%",
        end:"top 80%",
        scrub:1
    }

})
gsap.from("#page3 #bottom-part1-img",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #bottom-part1-img",
        // markers:true,
        start:"top 82%",
        end:"top 70%",
        scrub:1
    }
})
gsap.from("#page3 #image2",{
    opacity:0,
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page3 #image2",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:1
    }
})
const navbarJs = ()=>{
    const navbarHoverFun = (hover,appearPage)=>{

        hover.addEventListener("mouseover",()=>{
            appearPage.style.display = "block";
            appearPage.style.width = "170px";
            
        })
        hover.addEventListener("mouseleave",()=>{
            appearPage.style.display = "none"
        })
        appearPage.addEventListener("mouseover",()=>{
            appearPage.style.display = "block"
        })
        appearPage.addEventListener("mouseleave",()=>{
            appearPage.style.display = "none"
        })
    }
    
    navbarHoverFun(document.getElementById("navbar0"),document.getElementById("navbar00"))
    navbarHoverFun(document.getElementById("navbar1"),document.getElementById("navbar11"))
    navbarHoverFun(document.getElementById("navbar2"),document.getElementById("navbar22"))
    navbarHoverFun(document.getElementById("navbar3"),document.getElementById("navbar33"))
    navbarHoverFun(document.getElementById("navbar4"),document.getElementById("navbar44"))
    navbarHoverFun(document.getElementById("navbar5"),document.getElementById("navbar55"))
    navbarHoverFun(document.getElementById("navbar6"),document.getElementById("navbar66"))
    navbarHoverFun(document.getElementById("navbar7"),document.getElementById("navbar77"))
    navbarHoverFun(document.getElementById("navbar9"),document.getElementById("navbar99"))
}

export {navbarJs}


const counts = document.querySelectorAll('.num')
        const speed = 97
        counts.forEach((counter) =>{
            function upData(){
                const target = Number(counter.getAttribute('data-target'))
                const count = Number(counter.innerText)
                const inc = target / speed
                if(count < target){
                    counter.innerText = Math.floor(inc + count) 
                    setTimeout(upData, 1)
                }else{
                    counter.innerText = target + "+"
                }
            }
            upData()
        })

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960:{
        items: 3
    }
}


//owl carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin:10,
    autoplayTimeOut: 3000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive
    });
    
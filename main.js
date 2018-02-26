var allButtons = $('#buttons>div>li') //获取所有按钮
for (let i = 0; i < allButtons.length; i++) {
    allButtons.eq(i).on('click', function(x) {
        let index = $(x.currentTarget).index()
        let p = index * -900
        $('#image').css({
            transform: `translateX(${p}px)`
        })
        n = index
        addAmdReoveClass(allButtons.eq(n))
    })
}

var n = 0

addAmdReoveClass(allButtons.eq(n % 3).trigger('click'))

var timerId = setTimer(allButtons)

$('#wrapper').on('mouseenter', function() {
    window.clearInterval(timerId)
})

$('#wrapper').on('mouseleave', function() {
    timerId = setTimer(allButtons)
})

function setTimer(allButtons) {
    return setInterval(() => {
        n += 1
        allButtons.eq(n % 3).trigger('click')
    }, 2000)
}

function addAmdReoveClass(buttons) {
    buttons
        .addClass('active')
        .siblings('.active')
        .removeClass('active')
}

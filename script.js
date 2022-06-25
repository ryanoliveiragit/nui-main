console.log("javascript iniciado com sucesso")
console.log('Dev babu#2163 e Rael couldnt#1316')
function ele() {
    $(".itemsall").hide()
    $(".itemsall2").show()
    $(".conteudo2").show()
    $(".conteudo3").hide()
    $(".itemsall3").hide()
    $(".itemsall4").hide()
    $(".conteudo4").hide()
    $(".conteudo5").hide()
    $(".itemsall5").hide()
}

function todos() {
    $(".itemsall").show()
    $(".itemsall2").hide()
    $(".conteudo2").hide()
    $(".conteudo3").hide()
    $(".itemsall3").hide()
    $(".itemsall4").hide()
    $(".conteudo4").hide()
    $(".conteudo5").hide()
    $(".itemsall5").hide()
}

function roupa() {
    $(".itemsall3").show()
    $(".itemsall2").hide()
    $(".itemsall").hide()
    $(".conteudo2").hide()
    $(".conteudo3").show()
    $(".itemsall4").hide()
    $(".conteudo4").hide()
    $(".conteudo5").hide()
    $(".itemsall5").hide()
}

function bebida() {
    $(".itemsall4").show()
    $(".conteudo4").show()
    $(".itemsall3").hide()
    $(".itemsall2").hide()
    $(".itemsall").hide()
    $(".conteudo2").hide()
    $(".conteudo3").hide()
    $(".conteudo5").hide()
    $(".itemsall5").hide()
}

function ut() {
    $(".conteudo5").show()
    $(".itemsall5").show()
    $(".itemsall4").hide()
    $(".conteudo4").hide()
    $(".itemsall3").hide()
    $(".itemsall2").hide()
    $(".itemsall").hide()
    $(".conteudo2").hide()
    $(".conteudo3").hide()
}

$('input[type="text"]').on("keyup",(param) => {
    const input = $($(param.target)[0]).val().toLowerCase()
    const elemento = $('.items')


    for (let i = 0; i < elemento.length; i++) {
        if (!elemento[i].innerHTML.toLowerCase().includes(input)) {
            console.log('isso msm')
           $(elemento[i]).hide()
        } else {
            $(elemento[i]).show()
        }
        
    }
})
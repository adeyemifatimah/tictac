$(document).ready(function () {
    $(".playerX").click(function () {
        $(".select-box").hide()
        $(".play-board").show()
        $("#no1").addClass("change")


    })
    $(".playerO").click(function () {
        $(".select-box").hide()
        $(".play-board").show()
        $("#no2").addClass("change")
    })
    $("#no1").click(function () {
        $("#no1").addClass("change")
        $("#no2").removeClass("change")
    })
    $("#no2").click(function () {
        $("#no2").addClass("change")
        $("#no1").removeClass("change")
    })


    const boxDom = $(".box");
    const box = [];
    boxDom.each(function (b) {
        box.push(b)
    })
    // const playerDisplay

})
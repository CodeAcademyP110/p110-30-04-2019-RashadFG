"use strict";

$(document).ready(function () {

    $(".expand").on("click", function () {
        $(".container").removeClass("d-none");
        $(this).removeClass("d-flex").addClass("d-none")
    })

    $("#message").on("keydown", function (e) {
        if (e.keyCode == 13) {
            message()
            trash()
        }
    })

    $(".click").on("click", function () {
        message()
        trash()
    })

    $(".close").on("click", function () {
        $(".container").addClass("d-none")
        $(".expand").removeClass("d-none").addClass("d-flex")
        $(".body-chat").text("")
    })

})

function trash() {
    $(".body-chat").children().each(function (i, div) {
        $(div).on("click", function () {
            $(this).addClass("active")
            $(".trash").removeClass("d-none")
            $(".trash").on("click", function () {
                $(".active").remove()
                $(".trash").addClass("d-none")
            })
        })
    })
}

function message() {
    if ($("#message").val()[0] == $("#message").val()[0].toUpperCase()) {
        let Div = $("<div>").addClass("div-left")
        let image = $("<img>").attr("src", "images/operator.jpg").addClass("header-chat-img")
        let span = $("<span>").text($("#message").val())
        let ChatArea = $(".body-chat")
        image.appendTo(Div)
        span.appendTo(Div)
        Div.appendTo(ChatArea)
    }
    else {
        let Div = $("<div>").addClass("div-right")
        let image = $("<img>").attr("src", "images/salah.jpg").addClass("header-chat-img")
        let span = $("<span>").text($("#message").val())
        let ChatArea = $(".body-chat")
        span.appendTo(Div)
        image.appendTo(Div)
        Div.appendTo(ChatArea)
    }
    $("#message").val("")
}



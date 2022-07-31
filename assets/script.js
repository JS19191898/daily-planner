$(document).ready(function(){

// all of our code happens in here...

$(".saveBtn").on("click", function(){
    let textValue = $(this).siblings(".description").val();
    console.log("textValue", textValue);
    let timeBlock = $(this).parent().attr("id")
    console.log("timeBlock", timeBlock)

    localStorage.setItem(timeBlock, textValue);
})

function keepinTime(){
    const currentHour = moment().hours()
    console.log("currentHour", currentHour)

    $(".time-block").each(function(){
        const timeBlock = parseInt($(this).attr("id"))
        console.log("timeblock forEach", timeBlock)

        if(timeBlock < currentHour){
            $(this).addClass("past")
        } else if( timeBlock === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}

keepinTime()


for(var i = 9; i < 18; i++){
    $(`#${i} .description`).val(localStorage.getItem(i))
}


})

//building a div with vanilla JS
//   const div = document.createElement("div");
// setting a class to div with vanilla JS
//   div.setAttribute("class", "divClass");

//building a div with jQuery
//   const div = $("<div class='divClass'>");
//   const div = $("<div>").addClass("divClass");

// referencing saveBtn with vanilla JS
//   const saveBtn = document.getElementsByClassName("saveBtn")

// referencing saveBtn with jQuery
//   $(".saveBtn")
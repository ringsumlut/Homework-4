function addModalListener() {
    $(".bg-click").click(function (e) {
        // $(".modal").css("display", "none");
        gsap.to($(".modal"), { scale: 0, duration: 0, onComplete: showAlert });
        // $('.modal').remove();
    })
}
function initListeners() {

    $(".cancelbtn").click(function (e) {
        e.preventDefault();

        let text = $("#callout-text").val();
        gsap.to($(".modal"), { scale: 0, duration: 0, onComplete: showAlert, onCompleteParams: [text], });
    })
    $("#showModal").click(function (e) {


        //     $("body").append(`  <div class="modal">
        //     <div class="bg-click"></div>
        //     <div class="callout"></div>
        // </div>`);
        // $(".modal").css("display", "flex");

        gsap.to($(".modal"), { ease: "bounce.out", scale: 1, duration: 1 });

        addModalListener();
    });

    $(".submitbtn").click(function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Successfully login!',
            showConfirmButton: true,
            // timer: 1500
        })
        gsap.to($(".modal"), { scale: 0, duration: 0, onComplete: showAlert });
    })
}




function showAlert(info) {
    console.log("Hi " + info)
    $("#callout-text").val("");
}


$(document).ready(function () {
    gsap.set($(".modal"), { scale: 0 });
    initListeners();
});
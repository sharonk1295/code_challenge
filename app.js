$(() => {
    // ==== VARIABLES ==== //
    const $learnBtn = $('#learn-btn')
    const $video = $('.video')

    // ==== FUNCTIONS & EVENT HANDLERS ==== //
    const playVideo = () => {
        // console.log("it works!")
        $video.css('display', 'block')
    }

    // ==== EVENT LISTENERS ==== //
    $learnBtn.on('click', playVideo);
})
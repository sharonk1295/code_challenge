$(() => {
    // ==== VARIABLES ==== //
    const $learnBtn = $('#learn-btn')
    const $video = $('.video')
    const $closeBtn = $('#close-btn')


    // ==== FUNCTIONS & EVENT HANDLERS ==== //
    const playVideo = () => {
        // console.log("it works!")
        $video.show();
    }
    
    const hideVideo = () => {
        $video.hide();
    }

    // ==== EVENT LISTENERS ==== //
    $learnBtn.on('click', playVideo);
    $closeBtn.on('click', hideVideo);
})
$(document).ready(function() {
    const $content = $('section');
    const $down = $('footer img');
    let page_no = 0;
    let flag = false;
    
    function re_footer() {
        $('footer').removeClass('show');
        void $('footer')[0].offsetWidth;
        $('footer').addClass('show');
    }

    function show_page(down) {
        if(page_no === 1) $('html').addClass('backc-f4f8fd');
        else $('html').removeClass('backc-f4f8fd');

        if(down) {
            $(`.show1-${page_no-1}`).removeClass('show');
            $(`.show2-${page_no-1}`).removeClass('show');
        }
        else {
            $(`.show1-${page_no+1}`).removeClass('show');
            $(`.show2-${page_no+1}`).removeClass('show');
        }

        $content.removeClass('active');
        $content.eq(page_no).addClass('active');
        re_footer();

        $(`.show1-${page_no}`).addClass('show');
        $(`.show2-${page_no}`).addClass('show');
    }

    $(window).on("wheel", (e) => {
        if(flag) return;
        flag = true;

        let delta = e.originalEvent.deltaY;
        let down = true;

        if(delta > 0 && page_no < $content.length-1) {
            page_no++;
            down = true;
  
            show_page(down);
        }
        else if(delta < 0 && page_no > 0) {
            page_no--;
            down = false;
            
            show_page(down);
        }

        setTimeout(()=> flag = false, 300);
    });

    $down.on('click', () => {
        if(flag) return;
        flag = true;

        if(page_no < $content.length-1) {
            page_no++;
            show_page(true);
        }

        setTimeout(()=> flag = false, 300);
    });

    show_page(true);
});
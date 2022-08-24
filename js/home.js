// 헤더 클릭이벤트
$('header ul li').on('click',pageMove);

function pageMove() {
    event.preventDefault();
    let idx = $(this).index();

    let conTop = $('.content').eq(idx).offset().top;
    $('html').animate({ scrollTop: conTop-200 }, 600);

    update(idx);
}

function update(n){
    $('header ul li a').removeClass('active');
    $(`header ul li a:eq(${n})`).addClass('active');
}

// 한페이지씩 스크롤
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false})
var $html = $("html");
var page = 1;
var lastPage = $(".content").length;
$html.animate({scrollTop:0},10);
let Isloader = document.querySelector('.loading_wrap');
$(window).on("wheel", function(e){
	if($html.is(":animated")) return;
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
		page--;
	}
	var posTop = (page-1) * $(window).height();
	$html.animate({scrollTop : posTop});
});

function Isloading(){
    setTimeout(function(){
        Isloader.classList.add('active');
    },2000);
}
Isloading();

// visual 타이핑효과
var typing_Tag = document.querySelector('.typing');
var typing_Letter = document.querySelector('.typing').innerHTML;

function typing(tag, letter){
    tag.innerHTML = '';
    for(let i=0; i < letter.length; i++){
        setTimeout(function(){
            if(letter[i] == '#' && i){
                tag.innerHTML += '<br>';
            }
            tag.innerHTML += letter[i]
        }, (i+1)*80)
    }
}

// function typing(tag, letter){
//     tag.innerHTML = '';
//     for(let i=0; i < letter.length; i++){
//         setTimeout(function(){
//             tag.innerHTML += letter[i]
//         }, (i+1)*100)
//     }
// }
window.onload = typing(typing_Tag,typing_Letter);

// 스킬 섹션 
$(function(){
    $('.skills_list li').eq(0).children("a").addClass("on")
    $(".skills_txt").hide();
    $(".skills_txt").eq(0).fadeIn();

    var doms = '';
    var $m = $('.progress');
    var $data = $m.find('span');
    var data = $('.skills_list li').eq(0).children("a").data('percent');
    var com = Math.round(data / 100 * 360);

    var getVendorPrefix = function() {
        var body = document.body || document.documentElement,
            style = body.style,
            transition = "Transition",
            vendor = ["Moz", "Webkit", "ms"],
            lastGage,
            i = 0;
        while (i < vendor.length) {
            if (typeof style[vendor[i] + transition] === "string") {
                return vendor[i];
            }
            i++;
        }
        return false;
    };
    var prefix = getVendorPrefix();
    var transform = prefix + 'Transform';


    for(var i=0; i <= com; i++){
        doms = '<div class="gage-bar"></div>';
        $m.append(doms);
        $('.gage-bar:last').css(transform, 'rotate(' + i + 'deg)');
    }

    $m.find('div').each(function(index, item){
        $(item).stop().delay(index * 5).fadeIn(50);
    });

    //Span number
    $data.text(data);

    $(".skills_list li a").click(function(){
        data = 0;
        com = 0;

        $(".skills_txt").hide();
        $(".gage-bar").remove();
        $('.skills_list li a').removeClass("on");

        var no = $(this).parent("li").index();
        $(".skills_txt").eq(no).show();
        $('.skills_list li').eq(no).children("a").addClass("on");

        var doms = '';
        var $m = $('.progress');
        var $data = $m.find('span');
        var data = $('.skills_list li').eq(no).children("a").data('percent');
        var com = Math.round(data / 100 * 360);
    
        var getVendorPrefix = function() {
            var body = document.body || document.documentElement,
                style = body.style,
                transition = "Transition",
                vendor = ["Moz", "Webkit", "ms"],
                lastGage,
                i = 0;
            while (i < vendor.length) {
                if (typeof style[vendor[i] + transition] === "string") {
                    return vendor[i];
                }
                i++;
            }
            return false;
        };
        var prefix = getVendorPrefix();
        var transform = prefix + 'Transform';
    
    
        for(var i=0; i <= com; i++){
            doms = '<div class="gage-bar"></div>';
            $m.append(doms);
            $('.gage-bar:last').css(transform, 'rotate(' + i + 'deg)');
        }
    
        $m.find('div').each(function(index, item){
            $(item).stop().delay(index * 5).fadeIn(50);
        });
    
        //Span number
        $data.text(data);
                
});
});

// top 버튼
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.btn_gotop').show();
	} else{
		$('.btn_gotop').hide();
	}
});
$('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});

$(function(){
    $('.publishing_contents').slick({
        slide: 'div',        //슬라이드 되어야 할 태그
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 1000,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow : "<button type='button' class='slick-next'>Next</button>",
        draggable : true,     //드래그 가능 여부 
    });
});

//스크롤시 나타남
$(document).ready(function() {
    $(window).scroll( function(){
			
        $(".about_img").each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1500);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
			
        $(".about_txt").each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1500);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
			
        $(".con").each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window+300 > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-bottom':'0px'},1500);
            }
            
        }); 
    });
});

$(function() {
  // 1. 변수 선언
  const body = "body";
  const hd = "#lush-header";
  const ft = "#lush-footer";
  let bodyHeight = $(body).height();
  let viewportW = window.innerWidth;
  let viewportH = window.innerHeight;
  let scTop = $(window).scrollTop(); //화면이 스크롤 되는 양
  let hdHeight = $(hd).height();
  let ftHeight = $(ft).height();
  let ftTop = $(ft).offset().top; //top부터 떨어진 거리
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  let speed = 500;
  const btnSitemap = ".btn-sitemap";
  const sitemap = ".mo-gnb-sitemap";
  const btnClose = ".btn-close";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2";
  const blankAnchor = "a[href='#']";

  // 반응형 구현
  rwd();
  $(window).resize(function() {
    rwd();
    bodyHeight = $(body).height();
    hdHeight = $(hd).height();
    ftHeight = $(ft).height();
  });
  $(window).scroll(function() {
    scTop = $(window).scrollTop(); //스크롤 되는 양 업데이트
    if(scTop > hdHeight) { //화면에서 헤더가 보이지 않을 정도로 문서가 스크롤되면
      $(hd).addClass("fixed");
    } else {
      $(hd).removeClass("fixed");
    }
    // // 푸터가 화면에 다 보일 때 쯤 헤더 감추기
    // if(scTop > bodyHeight - viewportH - 100) {
    //   $(hd).fadeOut(speed);
    // } else {
    //   $(hd).fadeIn(speed);
    // }
  });

  // 2. 실행될 스크립트 작성
  // 타겟 - 이벤트 - 함수
  // GNB 
  $(mainMenu).mouseenter(function() {
    $(this).find(subMenu).stop().slideDown(speed);
  });
  $(mainMenu).mouseleave(function() {
    $(this).find(subMenu).stop().slideUp(speed);
  });

  // 모바일 GNB 사이트맵
  $(btnSitemap).click(function() {
    $(body).addClass("fixed");
    $(sitemap).stop().addClass("on");
  });
  $(btnClose).click(function() {
    $(body).removeClass("fixed");
    $(sitemap).stop().removeClass("on");
  });

  //모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function(e) {
    if($(body).hasClass("mo")) {
      e.preventDefault();
      $(this).parent().siblings().find(smSubMenu).slideUp(speed);
      $(this).next().slideToggle(speed);
    }
    // if(!$(body).hasClass("pc")) {
    //   $(this).parent().siblings().find(smSubMenu).slideUp(300);
    //   $(this).parent().find(smSubMenu).slideToggle(300);
    // }
  });

  // 임시링크 실행 막기
  $(blankAnchor).click(function(e) {
    e.preventDefault();
  });


  // 3. 사용자 함수
  function rwd() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    // console.log(viewportW, viewportH);
    if(viewportW < 768) {
      $(body).removeClass("tb pc").addClass("mo");
    } else if(viewportW >= 768 && viewportW < 1280) {
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(smSubMenu).attr("style", "");
  }

  // 부드러운 스크롤
  const lenis = new Lenis();
  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
 
});
$(function() {
  // 1. 변수 선언
  const body = "body";
    let viewportW, viewportH;
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
 
});
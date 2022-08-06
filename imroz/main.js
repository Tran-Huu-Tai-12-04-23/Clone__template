window.addEventListener('load' , function() {

  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)
  
  const listContactHeader = [
    {
      title : 'UX Research.' ,
      des : 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.' ,
      backGroundImage : 'http://rainbowit.net/themes/imroz/wp-content/uploads/2021/05/dp-big-portfolio-03.jpg' 
    } ,
    {
      title : 'Marketing' ,
      des : 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.' ,
      backGroundImage : 'http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/bg-image-23.jpg' 
    } ,
    {
      title : 'Development' ,
      des : 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.' ,
      backGroundImage : 'http://rainbowit.net/themes/imroz/wp-content/uploads/2021/09/bg-image-24.jpg' 
    } ,
  ]
  
  //lay nut btn arrown
  const btnArrownleft = $('.btn_left')
  const btnArrownRight = $('.btn_right')
  var isIndexPage = 0
  aniMa()
  btnArrownleft.onclick = function() {
    if(isIndexPage === 0 ) {
      isIndexPage = 2 
    }
    else{
      isIndexPage--
    }
    aniMa()
  }
  btnArrownRight.onclick = function() {
    if(isIndexPage === listContactHeader.length -1  ) {
      isIndexPage = 0 
    }
    else{
      isIndexPage ++ 
    }
    aniMa()
  }
  function aniMa() {
    $('.header_content-contact-header').innerHTML = listContactHeader[isIndexPage].title 
    $('.header').style.backgroundImage = 'url('+listContactHeader[isIndexPage].backGroundImage+')'
    // reload()
    if( $('.header_content-contact').classList.contains('animation')) {
      $('.header_content-contact').classList.remove('animation')
    }
    $('.header_content-contact').classList.add('animation')
  }
  
  const btnMenu = $('.menu_header')
  const headerInfoList = $('.header_info-list')
  const closeMenu = $('.icon_close-menu')
  const mainWeb = $('#main')
 
  mainWeb.onclick = function() {
    if(headerInfoList.classList.contains('active_flex')) {
      headerInfoList.classList.remove('active_flex')
    }
  }
  headerInfoList.onclick = function(e) {
    e.stopPropagation()
  }
  
  btnMenu.onclick = function(e) {
    headerInfoList.classList.add('active_flex')
    e.stopPropagation()
    $('.header_info-list-items').classList.add('active')
  }
  closeMenu.onclick = function() {
    headerInfoList.classList.toggle('active_flex')
    $('.header_info-list-items').classList.toggle('active')
  }
  const headerInfoListSubs = document.getElementsByClassName('header_info-list-items').childNodes
  console.log(headerInfoListSubs)
  // for(const item of headerInfoListSubs  ) {
  //   item.onclick = function() {
  //     console.log(this)
  //   }
  // }
  
  
  
})
//xu ly phan header 
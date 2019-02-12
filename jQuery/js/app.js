$(function(){
// ボタンのサイズ変更
$('#js-click-btn').on('click', function(){
  $(this).addClass('large-btn');
});
// 今回の場合このthisはjs-click-btn自体を指す

// $('#js-click-btn').click(function(){
//   $(this).addClass('large-btn');
// });



// ボタンの透明度変更
$('#js-hover-btn').mouseover(function(){
  $(this).addClass('opacity');
}).mouseleave(function(){
  $(this).removeClass('opacity');
});
// 今回の場合thisはjs-hover-btnを指す



// 要素の表示、非表示切り替え
// 要素の表示
$('#js-show-btn').on('click', function(){
  $('.box').fadeIn(1000);
});

// 非表示切り替え
$('#js-hide-btn').on('click', function(){
  $('.box').fadeOut(1000);
  // $("#js-target-elemnt").fadeOut(1000);
  // $(this).addClass('box-wrapper');
});



// 要素の追加
// 要素の前後に追加（中に）
$('#js-add-btn').on('click',function(){
  $(this).before('<li class="btn">ボタンの前に追加</li>');
  $(this).after('<li class="btn">ボタンの後ろに追加</li>');

})

// 要素の前後に追加（中に）
$('#js-add-btn2').on('click',function(){
  $(this).prepend('<li>前に追加</li>');
  $(this).append('<li>後ろに追加</li>');


})

//toggle メニュー作るよ
$('.js-toggle').on('click',function(){
  $(this).toggleClass('on');
  $(this).siblings().slideToggle();
});
// siblings:兄弟要素
//スライドしてでてこいや


// $('.toggle-menu dt').click(function(){

//   // クリックしたら行う動作
//   $('.toggle-menu dd').slideToggle();
// });



//ハンバーガーメニュー

// クリックしたら動く
// $('.hamburger').on('click', function(){
//   $(this).toggleClass('on');

// });


// $('.hamburger').on('mouseover mouseout',function(){
//   $(this).toggleClass('on');
// });


$('.hamburger').mouseover(function(){
  $(this).addClass('on');
}).mouseleave(function(){
  $(this).removeClass('on');
});


// スムーズスクローる

$('.js-scroll').on('click', function(){
  $('body,html').animate({scrollTop:0},500);
})
// ↑htmlのbodyのボディの０（座標）の位置に飛ばす


// モーダルウィンドウ表示
$('.js-modal').on('click', function(){
  $('.modal-content').fadeIn('slow');
  $('#modal-bg').fadeIn('slow');
});
$('.js-modal-close').on('click',function(){
  $('.modal-content').fadeOut(1000);
  $('#modal-bg').fadeOut(1000);
});
// slowは６００msだよ


// タブメニュー作る
$('.tab-nav a').on('click',function(){
  // もし.activeがついていたら処理中止
  if($(this).hasClass('active')){
    return false;
  }

  // console.log(this.hash);
  $('.tab-nav a').removeClass('active');
  $(this).addClass('active');

  $('.tab-content > div').removeClass('active');
  $('.tab-content > div').filter(this.hash).addClass('active');//filterは（this.#）に当たるののを（content>div）から引っ張ってくる
 return false;
  

  
});


// スライダー
let slideWidth =$('.slide').outerWidth();
let slideNum =$('.slide').length;
let slideWrapperWidth=slideWidth*slideNum;
let currentSlide=0;




















});

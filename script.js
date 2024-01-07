$(function() {
  // ウィンドウのロード完了時に実行
  $(window).on('load', function() {
    // ローダー要素を1.5秒後に0.8秒かけてフェードアウト
    $('.loader').delay(1500).fadeOut(800);
    // ローダー背景要素を1秒後に0.7秒かけてフェードアウト
    $('.loader-bg').delay(1000).fadeOut(700);
  });

  // 5秒後にローダー背景要素を0.5秒かけてフェードアウト
  setTimeout(function() {
    $('.loader-bg').fadeOut(500);
  }, 5000);
});

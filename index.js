$(document).ready(function () {
  $(window).on('resize', function (e) {
    checkScreenSize();
  });
  checkScreenSize();
  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    //phone screen
    if (newWindowWidth < 600) {
      $('.right_panel nav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');

        if (content === './figure.html') {
          $('#resArticle ').show();
          $('#article').hide();
          $('#nav').hide();
          $('#logo').hide();

          $('#resArticle ').load(content);
        } else if (content === './reference.html') {
          $('#resArticle ').show();
          $('#article').hide();
          $('#article').css({ 'border-bottom': '2px solid red' });
          $('#nav').hide();
          $('#logo').hide();

          $('#resArticle ').load(content);
        } else if (content === './related.html') {
          $('#resArticle ').show();
          $('#article').hide();
          $('#nav').hide();
          $('#logo').hide();

          $('#resArticle ').load(content);
        } else {
          $('#resArticle ').show();
          $('#article').hide();
          $('#nav').hide();
          $('#logo').hide();

          $('#resArticle ').load(content);
        }
      });
    } else {
      $('#figure ').load('./figure.html');
      $('.right_panel nav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        if (content === 'c') {
          $('#figure ').load(content);
        } else if (content === './reference.html') {
          $('#figure ').load(content);
        } else if (content === './related.html') {
          $('#figure').load(content);
        } else {
          $('#figure').load(content);
        }
      });
    }
  }
});

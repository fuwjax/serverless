$(function() {
  $("script[type='text/x-jsrender']").each(function() {
    $.templates(this.id, this);
  });
  $.fn.extend({
    render: function(obj, context) {
      $.link[this.attr('data-template')](this, obj, context);
    }
  })
});

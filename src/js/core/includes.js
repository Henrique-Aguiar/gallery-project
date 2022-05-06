import $, { param } from 'jquery'

function loadIncloudes(parent) {
  if(!parent) parent = 'body'
  $(parent).find('[wm-include]').each(function(i, e) {
    const url = $(e).attr('wm-include')
    $.ajax({
      url,
      success(data) {
        $(e).html(data)
        $(e).removeAttr('wm-include')
        
        loadIncloudes(e)
      }
    })
  })
}

loadIncloudes()
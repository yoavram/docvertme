function convert(from, to, content) {
	var encoded = encodeURIComponent(content);
	var url = '/convert/' + from + '/' + to + '/' + encoded;
	window.open(url, '_newtab');
}

function convert_btn_click() {
	var to = $(this).attr('id').substring(3).toLowerCase();
	var from = 'markdown';
	var content = $('#editor-input').val();
	convert(from, to, content);
}
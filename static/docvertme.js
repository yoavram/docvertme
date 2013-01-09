function convert(from, to, content) {
	var encoded = url_encode(content);
	var url = '/convert/' + from + '/' + to + '/' + encoded;
	window.open(url, '_newtab');
}

function convert_btn_click() {
	var to = $(this).attr('id').substring(3).toLowerCase();
	var from = 'markdown';
	var content = get_content();
	convert(from, to, content);
}

function share_btn_click() {
	var content = url_encode(get_content());
	var url = document.location.protocol + '//' + document.location.host+ '/edit/' + content;
	$('#share-url').val(url);
	$('#share-url').show();
}

function url_encode(string) {
	return encodeURIComponent(string);
}

function get_content() {
	return $('#editor-input').val();
}
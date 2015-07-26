javascript: (function() {
    var dquo = String.fromCharCode(34);
    var ret = {};

    var a = $('.copy_to_clipboard');
    a.each(function() {
        var b = $(this);
        var result = b.attr('onclick').replace('window.prompt('+dquo+'Copy to clipboard: Ctrl+C, Enter'+dquo+', '+dquo, '').replace(dquo+');', '');
        ret[result] = 1;
    });
    $('body').html('');
    var taco = $('<textarea COLS=80 ROWS=15 id=output></textarea>');
    $('body').append(taco);
    var tmp = '';
    for (addr in ret) {
        tmp += addr + '\n\n';
    }
    tmp = tmp.replace(/\\n/g, '\n');
    $('#output').val(tmp);
})();

$(function () {
    $(document).bind('DOMNodeInserted', nodeInsertHandler);

    function nodeInsertHandler (e) {
        if ($('#user-sidebar-calendar')) {
            $(document).unbind('DOMNodeInserted', nodeInsertHandler);
            addBookmarkCounts();
        }
    }

    function addBookmarkCounts (cal) {
        var days = $('a.tanaka-inner-link').each(
            function(){
                var day = this;
                var m = this.getAttribute('href').match(/\/(.+)\/(.+)/);
                var count = $.get(
                    'http://b.hatena.ne.jp/' + m[1] + '/atomfeed',
                    { date: m[2] },
                    function (data) {
                        var count = data.getElementsByTagName('entry').length;
                        //$(day).after('(' + count + ')');
                        $(day).after('<span class="hatebu-calendar-bookmarks">(' + count + ')</span>');
                    }
                );
            });
    }
  });






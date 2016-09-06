// ==UserScript==
// @name           Crunchyroll Quick Pop
// @description    Easy access to popout videos.
// @author         Nathaniel Charles
// @include        http://www.crunchyroll.com/home/queue
// @version        1.0.1
// @downloadURL    https://raw.githubusercontent.com/oepn/crunchyroll-quick-pop/master/crunchyroll.js
// ==/UserScript==

(function() {
    Array.prototype.slice.call(document.getElementById('main_content').querySelectorAll('.queue-item'))
        .forEach(function(queueItem) {
            var path = queueItem.querySelector('a.episode').pathname;
            var popupLink = document.createElement('a');
            var videoId = path.slice(path.lastIndexOf('-') + 1);

            popupLink.href = '/popout?video_format=106&video_encode_quality=61&media_id=' + videoId;
            popupLink.target = '_blank';
            popupLink.innerText = ' [+]';

            queueItem.querySelector('span.series-title').appendChild(popupLink);
        });
})();

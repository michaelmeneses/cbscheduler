(function () {

    var cbSchedulerLoaded = false;

    ee.addListener('cbscheduler.live_support', function(params){
        $('#id_Question').val(params.fields.Question);
        $('#form-start-chat').prepend('<input type="hidden" value="on" name="ignoreBot" />');
        $('#ChatSendButtonContainer').remove();
        $('#form-start-chat').submit();
    });

    ee.addListener('cbscheduler.init', function (params) {

        setTimeout( function() {
            if (document.querySelector(".modal-backdrop") === null) {
                // Build HTML
                var bodyPrepend = document.getElementById("widget-layout");
                var parent = document.createElement("div");
                parent.id = "cbscheduler-modal";
                parent.innerHTML = "<div class=\"fade modal-backdrop show\"></div><div role=\"dialog\" id=\"dialog-content\" style=\"overflow: auto\" aria-modal=\"true\" class=\"fade modal show d-block\" tabindex=\"-1\">\n" +
                    "    <div class=\"modal-dialog modal-dialog-scrollable modal-lg\">\n" +
                    "        <div class=\"modal-content\">\n" +
                    "            <div class=\"modal-body\" id=\"CBScheduler\">...\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";

                bodyPrepend.prepend(parent);
                parent.style.minHeight = '400px';

                var loadcbSchedule = function() {

                    var department = null;
                    if (typeof confLH.chat_init !== 'undefined' && typeof confLH.chat_init['dep_id'] !== 'undefined') {
                        department = confLH.chat_init['dep_id'];
                    }

                    var username = null;
                    if (typeof confLH.chat_init !== 'undefined' && typeof confLH.chat_init['username'] !== 'undefined') {
                        username = confLH.chat_init['username'];
                    }

                    var vid = null;
                    if (typeof confLH.chat_init !== 'undefined' && typeof confLH.chat_init['vid'] !== 'undefined') {
                        vid = confLH.chat_init['vid'];
                    }

                    var params = {
                        'path' : WWW_DIR_LHC_WEBPACK_ADMIN.replace('/design/defaulttheme/js/admin/dist/','') + '/extension/cbscheduler/design/cbschedulertheme/js/scheduler/dist/',
                        'chat_id': lhinst.chat_id,
                        'hash': lhinst.hash,
                        'dep_id': department,
                        'theme': lhinst.theme,
                        'vid':  vid,
                        'username': username,
                        'mode': 'widget',
                        'widget':'old'
                    };

                    ee.emitEvent('loadCheduler',[params])
                }

                if (cbSchedulerLoaded === false) {

                    cbSchedulerLoaded = true;

                    var th = document.getElementsByTagName('head')[0];

                    // Insert CSS
                    var srcCSS = WWW_DIR_LHC_WEBPACK_ADMIN.replace('/design/defaulttheme/js/admin/dist/','') + '/extension/cbscheduler/design/cbschedulertheme/css/cbscheduler.css?v=1';

                    var styleSheet = document.createElement("link");
                    styleSheet.setAttribute('rel',"stylesheet");
                    styleSheet.setAttribute('type',"text/css");
                    styleSheet.setAttribute('href',srcCSS);
                    th.appendChild(styleSheet);

                    // Insert JS
                    var src = WWW_DIR_LHC_WEBPACK_ADMIN.replace('/design/defaulttheme/js/admin/dist/','') + '/extension/cbscheduler/design/cbschedulertheme/js/scheduler/dist/react.cbscheduler.app.js?v=1';

                    var s = document.createElement('script');
                    s.setAttribute('type','text/javascript');
                    s.setAttribute('src',src);
                    th.appendChild(s);
                    s.onreadystatechange = s.onload = function() {
                        loadcbSchedule();
                    };

                } else {
                    loadcbSchedule();
                }
            }
        }, (typeof params['delay'] != 'undefined' ? parseInt(params['delay']) * 1000 : 0))
    });

})();

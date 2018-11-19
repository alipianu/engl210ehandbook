$(document).ready(function() {
    (function(){
        let script = $('#header');
        if (script.length == 1) {
            let dataLoc = script.data('loc');
            let title = script.data('title') || 'A mathematics student exclusive';
            script.after(`
            <div class="grid-container">
                <hr class="double-line">
                <div class="row">
                    <div class="col-2 border-right align-left">
                    <table>
                        <tr>
                        <th class="align-bottom">
                            <div>2018</div>
                            <div>Vol. 01 - No. 01</div>
                        </th>
                        </tr>
                    </table>
                    </div>
                    <div class="col-8 border-left border-right align-center">
                    <h1>UW Handbook</h1>
                    <h4 class="accent">${title}</h4>
                    </div>
                    <div class="col-2 border-left align-right">
                    <table>
                        <tr>
                        <th class="align-bottom">
                            <img class="logo-img" src="${dataLoc == null ? '' : dataLoc}assets/img/note_sm.png" />
                            <div class="logo-text-dark">
                            <p>Orange</p>
                            <p>Draft</p>
                            </div>
                        </th>
                        </tr>
                    </table>
                    </div>
                </div>
                <hr>
            </div>`);
        }
    }());
});
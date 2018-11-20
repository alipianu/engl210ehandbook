$(document).ready(function() {
    (function(){
        let script = $('#footer');
        if (script.length == 1) {
            script.after(`
            <footer>
                <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Privacy & Terms</a>
                </li>
                <div>
                    <span class="logo-text-light">
                    <p>Orange</p>
                    <p>Draft</p>
                    </span>
                    <span> @ 2018</span>
                </ul>
            </footer>`);
        }
    }());
});
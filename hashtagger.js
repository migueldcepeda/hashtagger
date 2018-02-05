var your_text = document.querySelector('#your_text');
var hashtag_text = document.querySelector('#hashtag_text');
var buttons = document.querySelector('.buttons');
var tweet_btn = document.querySelector('.tweet_it');
var copy_btn = document.querySelector('.copy_it');

your_text.addEventListener('input', function(e){
    setTimeout(function() {
        var spaceORenter = /^(\w)| (\w)|\n+(\w)/g;
        hashtag_text.value = your_text.value.replace(spaceORenter, function(str, p1, p2, p3){
            if (p1) return '#' + p1.toUpperCase();
            if (p2) return p2.toUpperCase();
            if (p3) return ' #' + p3.toUpperCase();
        });
    }, 100);
});

hashtag_text.addEventListener('click', function(){
    if (hashtag_text.value.length > 0) {
        buttons.classList.add('show_buttons');
    }
    this.select();
});

copy_btn.addEventListener('click', function(){
    var textField = document.createElement('textarea');
    textField.textContent = hashtag_text.value;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    // this.select();
    buttons.classList.remove('show_buttons');
});

tweet_btn.addEventListener('click', function(){
    console.log('Tweeting...');
    var hashtag = /#(\w+)(\s*)/g;
    url_encoded_text = hashtag_text.value.replace(hashtag, '%23$1%20');
    tweet_btn.setAttribute('href', 'https://twitter.com/share?text=' + url_encoded_text);
});

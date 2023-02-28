var url = 'https://type.fit/api/quotes';
var qIndex = 0;
var oIndex = 0;

postQuote();

function postQuote() {
    $.getJSON(url, function(data) {
        var quoteData = data[getRandomNumber(data.length)];

        writeQuote(quoteData.text);

        setTimeout(function () {
            writeOwner(quoteData.author);    
        }, (quoteData.text.length * 100));
    });
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function writeQuote(quote){
    qIndex = 0;
    write(quote, 'quote', qIndex);
}

function writeOwner(owner) {
    if (owner == null) {
        owner = 'Anonymous';
    }
    oIndex = 0;
    write(owner, 'owner', oIndex);
}

function write(text, elementId, index) {
  var element = document.getElementById('' + elementId);  
  element.textContent = element.textContent + text.charAt(index);
  index++;
  
  if(index < text.length){
      setTimeout(function () {
          write(text, elementId, index);
      }, 100);
  } 
}

function changeMode() {    
    var element = document.body;
    element.classList.toggle("dark-mode");

    if ($('button').text().includes('Dark')) {
        $('button').text('Light Mode');
    }
    else {
        $('button').text('Dark Mode');
    }
}

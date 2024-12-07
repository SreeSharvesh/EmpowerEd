// Initialize SpeechRecognition instances
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition1 = new SpeechRecognition();
var recognition2 = new SpeechRecognition();
var recognition3 = new SpeechRecognition();

// Get input fields by their IDs
var nameInput = $('#name_story');
var challengeInput = $('#challenge');
var solutionInput = $('#solution');

// Initialize content variables for each input field
var content1 = '';
var content2 = '';
var content3 = '';

// Set continuous mode for speech recognition
recognition1.continuous = true;
recognition2.continuous = true;
recognition3.continuous = true;

// Handle speech recognition results for the name input field
recognition1.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content1 += transcript;
    nameInput.val(content1);
}

// Start speech recognition for the name input field on microphone icon click
$('.input1-story i').mousedown(function(event){
    if(content1.length){
        content1 += ' ';
    }
    recognition1.start();
});

// Stop speech recognition when the mouse button is released
$( ".input1-story i" ).mouseup(function(){
    recognition1.stop();
});

// Handle speech recognition results for the challenge input field
recognition2.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content2 += transcript;
    challengeInput.val(content2);
}

// Start speech recognition for the challenge input field on microphone icon click
$('.input2-challenge i').mousedown(function(event){
    if(content2.length){
        content2 += ' ';
    }
    recognition2.start();
});

// Stop speech recognition when the mouse button is released
$( ".input2-challenge i" ).mouseup(function(){
    recognition2.stop();
});

// Handle speech recognition results for the solution input field
recognition3.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content3 += transcript;
    solutionInput.val(content3);
}

// Start speech recognition for the solution input field on microphone icon click
$('.input3-solution i').mousedown(function(event){
    if(content3.length){
        content3 += ' ';
    }
    recognition3.start();
});

// Stop speech recognition when the mouse button is released
$( ".input3-solution i" ).mouseup(function(){
    recognition3.stop();
});

// Update content variables when input fields are manually edited
nameInput.on('input',function(){
    content1 = $(this).val();
});

challengeInput.on('input',function(){
    content2 = $(this).val();
});

solutionInput.on('input',function(){
    content3 = $(this).val();
});

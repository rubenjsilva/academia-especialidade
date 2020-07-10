var $fileInput = $('.file-input');
var $droparea = $('.file-drop-area');


// change inner text
$fileInput.on('change', function() {
  var filesCount = $(this)[0].files.length;
  var $textContainer = $(this).prev();

  if (filesCount >= 1) {
    // if single file is selected, show file name
    var fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
    $droparea.addClass('is-active');
  } else {
    // otherwise show number of files
    $textContainer.text(filesCount + ' ficheiros seleccionados');
    $droparea.removeClass('is-active');
  }
});
<?php
$uploaddir = "/geog4997/photoupload/";
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "Success.\n";
} else {
    echo "Failure.\n";
}

echo 'Here is some more debugging info:';
print_r($_FILES);
print "</pre>";
?>

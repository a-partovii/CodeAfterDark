<?php
$n = intval(trim(fgets(STDIN)));
$total = 0;

for ($i = 0; $i < $n; $i++) {
    // Reading one line and separating two numbers
    $line = trim(fgets(STDIN));
    $parts = explode(" ", $line);

    $s = intval($parts[0]); // Participants count
    $c = intval($parts[1]); // Cost per each
    $total = $total + ($c * $s);
}
echo $total;
?>
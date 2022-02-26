<?php

// ドライバ呼び出しを使用して MySQL データベースに接続します
$dsn = 'mysql:dbname=quizy;host=mysql';
$user = 'shun';
$password = 'secret';

try {
    $dbh = new PDO($dsn, $user, $password);
    // echo "接続成功\n";
} catch (PDOException $e) {
    echo "接続失敗: " . $e->getMessage() . "\n";
    exit();
}

?>
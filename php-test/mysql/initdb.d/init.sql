-- 初期設定を記述するファイル
-- ここでデータベースやテーブルを作成しないでmysqlコンテナ上でやるとcompose up downするたびにリセットされちゃう
CREATE DATABASE quizy;
USE quizy;

CREATE TABLE big_questions(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

INSERT INTO big_questions 
VALUE (1,'東京の難読地名クイズ'), (2,'広島県の難読地名クイズ');
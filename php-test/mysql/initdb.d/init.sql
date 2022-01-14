-- 初期設定を記述するファイル
-- ここでデータベースやテーブルを作成しないでmysqlコンテナ上でやるとcompose up downするたびにリセットされちゃう
DROP DATABASE IF EXISTS `quizy`;
CREATE DATABASE quizy;
USE quizy;

DROP TABLE IF EXISTS big_questions;
CREATE TABLE big_questions(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL COMMENT 'クイズの題名'
) COMMENT='東京の問題か広島の問題かを判別するテーブル'; 

INSERT INTO big_questions 
VALUE (1,'東京の難読地名クイズ'), (2,'広島県の難読地名クイズ');

DROP TABLE IF EXISTS questions;
CREATE TABLE questions(
    id INT NOT NULL PRIMARY KEY,
    big_questions_id INT NOT NULL COMMENT 'big_questionsテーブルのidカラムとの外部キー',
    image VARCHAR(255) NOT NULL COMMENT '問題に使われている画像一覧'
) COMMENT='問題の一覧';

INSERT INTO questions 
VALUE (1, 1, 'takanawa.png'), 
      (2, 1, 'kameido.png'),
      (3, 2, 'mukainada.png');

DROP TABLE IF EXISTS choices;
CREATE TABLE choices(
    id INT NOT NULL PRIMARY KEY,
    big_questions_id INT NOT NULL COMMENT 'big_questionsテーブルのidカラムとの外部キー',
    name VARCHAR(255) NOT NULL COMMENT '地名の一覧',
    correct_number INT NOT NULL COMMENT '正解かどうかを判別する番号'
) COMMENT='地名の選択肢一覧';

INSERT INTO choices 
VALUE (1, 1, 'たかなわ', 1), 
      (2, 1, 'こうわ', 0),
      (3, 1, 'たかわ', 0),
      (4, 2, 'むかいなだ', 1),
      (5, 2, 'むこうひら', 0),
      (6, 2, 'むきひら', 0);

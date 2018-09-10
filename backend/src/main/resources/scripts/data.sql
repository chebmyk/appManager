--//USERS ROLES [ADMIN,PUBLISHER,ADOPS]
INSERT INTO User (id ,name, email, role) VALUES  (1, 'admin', 'forreg@i.ua','ADMIN');
INSERT INTO User (id, name, email, role) VALUES  (2, 'user', 'forreg1@i.ua','PUBLISHER');
INSERT INTO User (id, name, email, role) VALUES  (3, 'ops', 'ops@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(4,'ops4','ops4@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(5,'ops5','ops5@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(6,'ops6','ops6@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(7,'ops7','ops7@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(8,'ops8','ops8@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(9,'ops9','ops9@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(10,'ops10','ops10@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(11,'ops11','ops11@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(12,'ops12','ops12@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(13,'ops13','ops13@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(14,'ops14','ops14@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(15,'ops15','ops15@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(16,'ops16','ops16@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(17,'ops17','ops17@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(18,'ops18','ops18@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(19,'ops19','ops19@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(20,'ops20','ops20@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(21,'ops21','ops21@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(22,'ops22','ops22@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(23,'ops23','ops23@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(24,'ops24','ops24@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(25,'ops25','ops25@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(26,'ops26','ops26@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(27,'ops27','ops27@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(28,'ops28','ops28@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(29,'ops29','ops29@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(30,'ops30','ops30@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(31,'ops31','ops31@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(32,'ops32','ops32@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(33,'ops33','ops33@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(34,'ops34','ops34@email.com','ADOPS');
INSERT INTO User (id, name, email, role) VALUES(35,'ops35','ops35@email.com','ADOPS');

--//

--// APLICATIONS TYPES [IOS,ANDROID,WEB]
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (1, 'google', 'IOS', 1);
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (2, 'facebook', 'WEB', 1);
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (3, 'Company', 'WEB', 2);
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (4, 'Company', 'WEB', 3);
--//

--//APPLICATION TYPES  TYPES [VIDEO,IMAGE,HTML]
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (1, 'HTML');
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (1, 'VIDEO');
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (2, 'VIDEO');
--//

--//PASSWORDS
INSERT INTO SECURITY  (ID, PASSWORD , USER_ID) VALUES
  (1, '$2a$10$wkiTcfwsYh.V71/d2DRwyuZGDfWKORZXOC1d//j98WSSOh8UE9NdG', 1);
INSERT INTO SECURITY  (ID, PASSWORD , USER_ID) VALUES
  (2, '$2a$10$FmzD4RQ6S/5GK8gGQYKqx.x.QAjLyZAj4pPcHwvmi7prs7/aEx69y', 2);
INSERT INTO SECURITY  (ID, PASSWORD , USER_ID) VALUES
  (3, '$2a$10$m8TBFE3DhqHocIAKBuWiyOGjhXuM.UQCc/oFqg2WdOgZMqP6R3f3W', 3);
--//

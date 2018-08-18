--//USERS ROLES [ADMIN,PUBLISHER,ADOPS]
INSERT INTO User (id ,name, email, role) VALUES
  (1, 'admin', 'admin@email.com','ADMIN');
INSERT INTO User (id, name, email, role) VALUES
  (2, 'user', 'user@email.com','PUBLISHER');
INSERT INTO User (id, name, email, role) VALUES
  (3, 'ops', 'ops@email.com','ADOPS');


--// APLICATIONS TYPES [IOS,ANDROID,WEB]
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (1, 'google', 'IOS', 2);
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (2, 'facebook', 'WEB', 2);
INSERT INTO APPLICATION  (id, name, type, user_id) VALUES
  (3, 'Company', 'WEB', 3);
--//

--//APPLICATION TYPES  TYPES [VIDEO,IMAGE,HTML]
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (1, 'HTML');
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (2, 'VIDEO');
INSERT INTO APP_CONTENT_TYPES  (APP_ID, CONTENT_TYPES) VALUES
  (2, 'VIDEO');
--//

--//PASSWORDS
--INSERT INTO SECURITY  (ID, PWD , USER_ID) VALUES
--  (1, '$2a$10$wkiTcfwsYh.V71/d2DRwyuZGDfWKORZXOC1d//j98WSSOh8UE9NdG', 1);
--INSERT INTO SECURITY  (ID, PWD , USER_ID) VALUES
--  (2, '$2a$10$kaGdNxvgWVRDo/87cyNWRer5c4Av8fPGWwoSYfpIlmPO.hNyL.BDu', 2);
--//

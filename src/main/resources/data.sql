-- One admin user, named admin1 with passwor 4dm1n and authority admin
INSERT INTO authorities(id,authority) VALUES (1,'ADMIN');
INSERT INTO appusers(id,username,password,authority) VALUES (1,'admin1','$2a$10$nMmTWAhPTqXqLDJTag3prumFrAJpsYtroxf0ojesFYq0k4PmcbWUS',1);

-- Three clinic owners, with password "dixit"
INSERT INTO authorities(id,authority) VALUES (2,'PLAYER');
INSERT INTO appusers(id,username,password,authority) VALUES (2,'dixit','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);

INSERT INTO appusers(id,username,password,authority) VALUES (3,'dixit2','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);

INSERT INTO appusers(id,username,password,authority) VALUES (4,'dixit3','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);
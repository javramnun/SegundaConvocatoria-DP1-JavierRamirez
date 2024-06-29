-- One admin user, named admin1 with passwor 4dm1n and authority admin
INSERT INTO authorities(id,authority) VALUES (1,'ADMIN');
INSERT INTO appusers(id,username,password,authority) VALUES (1,'admin1','$2a$10$nMmTWAhPTqXqLDJTag3prumFrAJpsYtroxf0ojesFYq0k4PmcbWUS',1);

-- Three clinic owners, with password "dixit"
INSERT INTO authorities(id,authority) VALUES (2,'PLAYER');
INSERT INTO appusers(id,username,password,authority) VALUES (2,'dixit','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);

INSERT INTO appusers(id,username,password,authority) VALUES (3,'dixit2','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);

INSERT INTO appusers(id,username,password,authority) VALUES (4,'dixit3','$2a$12$UJ7bIFszrid1XInk0dKaGOOZ/T12/Xdnmid4OOtp7oSMAsBDyZKBC',2);


INSERT INTO cards(id, name, design) VALUES (1, 'Caja musical', '../../../../frontend/src/static/images/card/cajamusica.jpg');
INSERT INTO cards(id, name, design) VALUES (2, 'LLuvia de ideas', '../../../../frontend/src/static/images/card/lluviaideas.jpg');
INSERT INTO cards(id, name, design) VALUES (3, 'Molinos', '../../../../frontend/src/static/images/card/molinos.jpg');
INSERT INTO cards(id, name, design) VALUES (4, 'Mujer y cuna', '../../../../frontend/src/static/images/card/mujercuna.jpg');
INSERT INTO cards(id, name, design) VALUES (5, 'Boda', '../../../../frontend/src/static/images/card/boda.jpg');
INSERT INTO cards(id, name, design) VALUES (6, 'Cumpleaños', '../../../../frontend/src/static/images/card/cumpleaños.jpg');
INSERT INTO cards(id, name, design) VALUES (7, 'Día de reyes', '../../../../frontend/src/static/images/card/diareyes.jpg');
INSERT INTO cards(id, name, design) VALUES (8, 'Equilibrio', '../../../../frontend/src/static/images/card/equilibrio.jpg');
INSERT INTO cards(id, name, design) VALUES (9, 'Columpio', '../../../../frontend/src/static/images/card/columpio.jpg');
INSERT INTO cards(id, name, design) VALUES (10, 'Jardin', '../../../../frontend/src/static/images/card/jardin.jpg');
INSERT INTO cards(id, name, design) VALUES (11, 'Matematicas', '../../../../frontend/src/static/images/card/matematicas.jpg');
INSERT INTO cards(id, name, design) VALUES (12, 'Molinillo', '../../../../frontend/src/static/images/card/molinillo.jpg');
INSERT INTO cards(id, name, design) VALUES (13, 'Mensajero', '../../../../frontend/src/static/images/card/mensajero.jpg');
INSERT INTO cards(id, name, design) VALUES (14, 'Paz', '../../../../frontend/src/static/images/card/paz.jpg');
INSERT INTO cards(id, name, design) VALUES (15, 'Reposteria', '../../../../frontend/src/static/images/card/reposteria.jpg');
INSERT INTO cards(id, name, design) VALUES (16, 'Reflexion', '../../../../frontend/src/static/images/card/reflexion.jpg');
INSERT INTO cards(id, name, design) VALUES (17, 'Flor', '../../../../frontend/src/static/images/card/flor.jpg');
INSERT INTO cards(id, name, design) VALUES (18, 'Enamorados', '../../../../frontend/src/static/images/card/enamorados.jpg');
INSERT INTO cards(id, name, design) VALUES (19, 'Guerrero', '../../../../frontend/src/static/images/card/guerrero.jpg');
INSERT INTO cards(id, name, design) VALUES (20, 'Oriente', '../../../../frontend/src/static/images/card/oriente.jpg');
INSERT INTO cards(id, name, design) VALUES (21, 'Picnic', '../../../../frontend/src/static/images/card/picnic.jpg');
INSERT INTO cards(id, name, design) VALUES (22, 'LLama', '../../../../frontend/src/static/images/card/llama.jpg');
INSERT INTO cards(id, name, design) VALUES (23, 'Luna', '../../../../frontend/src/static/images/card/luna.jpg');
INSERT INTO cards(id, name, design) VALUES (24, 'Mar', '../../../../frontend/src/static/images/card/mar.jpg');
INSERT INTO cards(id, name, design) VALUES (25, 'Reloj de arena', '../../../../frontend/src/static/images/card/relojarena.jpg');
INSERT INTO cards(id, name, design) VALUES (26, 'Navidad', '../../../../frontend/src/static/images/card/navidad.jpg');
INSERT INTO cards(id, name, design) VALUES (27, 'Sombrillas', '../../../../frontend/src/static/images/card/sombrillas.jpg');
INSERT INTO cards(id, name, design) VALUES (28, 'Colores', '../../../../frontend/src/static/images/card/colores.jpg');
INSERT INTO cards(id, name, design) VALUES (29, 'Escondite', '../../../../frontend/src/static/images/card/escondite.jp<g');
INSERT INTO cards(id, name, design) VALUES (30, 'Pintor', '../../../../frontend/src/static/images/card/pintor.jpg');


INSERT INTO themes(id, name) VALUES (1, 'Mary Poppins');
INSERT INTO themes(id, name) VALUES (2, 'San Valentin');
INSERT INTO themes(id, name) VALUES (3, 'Charlie y la fabrica de chocolate');
INSERT INTO themes(id, name) VALUES (4, 'Los Reyes Magos');
INSERT INTO themes(id, name) VALUES (5, 'Pesadillas antes de Navidad');
INSERT INTO themes(id, name) VALUES (6, 'Raft');


--INSERT INTO tokens(id, color)
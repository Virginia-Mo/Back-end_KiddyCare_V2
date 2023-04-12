BEGIN;

TRUNCATE "tag","user", "classes", "teacher","article","comment","testimonial", "gallery" RESTART IDENTITY CASCADE;

INSERT INTO "tag" ("name") 
VALUES
    ('Arts at school'),
    ('Sports'),
    ('Events'),
    ('Homework Methodology');
INSERT INTO "user" ("name", "email","password","role") 
VALUES 
    ('adminKDC','admin@kdc.io','$2a$10$hwfB2c5lgT6u/WSXfgdsT.uTFdxSrfjwMkeTpvxWwZndD/HpxwGGO','admin'),
    ('teacherKDC','teacher@kdc.io','$2a$10$hwfB2c5lgT6u/WSXfgdsT.uTFdxSrfjwMkeTpvxWwZndD/HpxwGGO', 'teacher');

INSERT INTO "classes" ("img","name","short_description","age","seats","hours","price")
VALUES
    ('class-1.jpg','Drawing class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 30, '08:00 - 10:00', 290),
    ('class-2.jpg','French class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 20, '10:00 - 12:00', 300),
    ('class-3.jpg','Spanish class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 20, '08:00 - 10:00', 300),
    ('class-1.jpg','Basic Science','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 30, '13:00 - 15:00', 340),
    ('class-2.jpg','Multi-Sports','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 40, '08:00 - 10:00', 320),
    ('class-3.jpg','Music and dance class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo','3 - 6', 40, '15:00 - 17:00', 340);

INSERT INTO "teacher" ("img","name", "job","classes_id")
VALUES
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-1_e8nh7e.jpg','Julia Smith', 'Music Teacher',6),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-2_k46p6p.jpg','Tom Doe', 'Art Teacher',1),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-3_cgfng6.jpg','Molly Ross', 'French Teacher',2),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-4_sbgcym.jpg','Bryan Smoth', 'Multi-sports Teacher',5),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-2_k46p6p.jpg','David Robert', 'Spanish Teacher',3),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-1_e8nh7e.jpg','Julie Joe', 'Basic Science Teacher',4);

INSERT INTO "article" (
    "maintitle",
    "main_img",
    "introduction",
    "title1",
    "img1",
    "description1",
    "title2",
    "img2",
    "description2",
    "author_img",
    "authorname",
    "authorjob",
    "tag_id",
    "user_id")
VALUES
    ('How to become a super hero','https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/esteban-lopez-6yjAC0-OwkA-unsplash_vvefoo.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Work hard everyday', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164154/kdc/tk-qJDkJRTedNw-unsplash_dcotj2.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Be healthy and kind !','https://res.cloudinary.com/dps629xiv/image/upload/v1674164154/kdc/mulyadi-Gwx7TvhIN1M-unsplash_noshun.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/5fa5328aa176e_ruxgzj.jpg','Chuck Norris', 'Hero', 3, 1),
    ('Working out of school ','https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/element5-digital-OyCl7Y4y0Bk-unsplash_yiitfr.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Being in a calm environment', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/chris-liverani-rD2dc_2S3i0-unsplash_vpvgec.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Get rid of distractions while working','https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/laura-rivera-ArH3dtoDQc0-unsplash_shnj2u.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-1_e8nh7e.jpg','Julie Doe', 'Science teacher', 4, 1),
    ('BE an Artist !','https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/jess-bailey-l3N9Q27zULw-unsplash_ongdwg.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Art at KiddyCare', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164154/kdc/jason-sung-Ciz4lHr8Jgw-unsplash_avg2jz.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Developping imagination','https://res.cloudinary.com/dps629xiv/image/upload/v1674164154/kdc/mike-fox-P5PhmW-OoJg-unsplash_zws7jm.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/team-2_tibijs.jpg','Tom Doe', 'Art Teacher', 1, 1),
    ('School party !','https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-1_gnmczo.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Activities done during the party !', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-4_gdhw6v.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','We had fun !','https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-2_hwekar.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-3_cgfng6.jpg','Molly Ross', 'French Teacher', 3, 1),
    ('Go go go !','https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/blog-1_e1ctv7.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Let"s learn how to study after school !', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/blog-3_eikaob.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Writing notes','https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-6_pqvau6.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-1_e8nh7e.jpg','Julie Doe', 'Science teacher', 4, 1),
    ('The kids Show !','https://res.cloudinary.com/dps629xiv/image/upload/v1674164153/kdc/yannis-papanastasopoulos-kKzbyDeb62M-unsplash_sdovgy.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'Kids activities from last week ! ', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164154/kdc/mike-fox-P5PhmW-OoJg-unsplash_zws7jm.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Collaboration with artists','https://res.cloudinary.com/dps629xiv/image/upload/v1674164704/kdc/brittani-burns-3dbvtbqsdvo-unsplash_ugutec.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674127926/kdc/team-1_e8nh7e.jpg','Julia Smith', 'Music teacher', 3, 1),
    ('Summer holidays ~~','https://res.cloudinary.com/dps629xiv/image/upload/v1674164766/kdc/amy-humphries-2M_sDJ_agvs-unsplash_zxo3ub.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ', 'It"s summer time but we"ll be back soon !', 'https://res.cloudinary.com/dps629xiv/image/upload/v1674164790/kdc/niklas-ohlrogge-tc2Cts4aXCw-unsplash_iaxrjw.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 .Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
 ','Rest, Swim but don"t forget to Study ~!','https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/blog-2_agplnt.jpg','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque ipsum adipisci, deserunt ipsa reiciendis assumenda enim autem quis amet! Id nisi officia dolore quibusdam voluptates ex quia et neque!
  ','https://res.cloudinary.com/dps629xiv/image/upload/v1674164269/kdc/blog-author-img_vwbnwc.png','Mr Ray', 'Science teacher', 3, 1);

INSERT INTO "comment" ("name", "email", "message", "article_id")
VALUES 
    ('Lilly Sotter', 'lilly@hp.com', 'This party was great, we had so much fun !',4),
    ('James Wand', 'james@hp.com', 'Thank you for the party ! ',4),
    ('Hermione Grangour', 'hermy@hp.com', 'This article is pretty interesting, i will follow your advices and teach my kids how to do homeworks properly, school is so important.',2),
    ('Chuck_fan', 'chucky@fan.com', 'It"s such an honor to read your words, we"re all hero~', 1),
    ('Luna Lovehart', 'luna@hp.com', 'Wow this painting looks amazing, the kids did a good job !', 6),
    ('Molly Red', 'weasl@hp.com', 'All the kids had a blast during the party, it was awesome, see you after summer ! ', 6),
    ('Dory Fish', 'fish@do.com', 'Just keep swimming, just keep swimming :D', 7),
    ('TEST', 'TEST', 'Just keep swimming, just keep swimming :D', 7);
INSERT INTO "testimonial" ("img","name","message")
VALUES 
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674082801/kdc/testimonial-3_y9oorh.jpg', 'Luke Wars', 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674082801/kdc/testimonial-2_rj0w83.jpg', 'Elsa Snow', 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674082801/kdc/testimonial-1_zfxfvu.jpg', 'Jon Smith', 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674082801/kdc/testimonial-4_ghmdtv.jpg', 'Harry Gray', 'Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita');

INSERT INTO "gallery" ("img", "name", "category") 
VALUES
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-5_rr9ro0.jpg','Kids reading', 'Reading'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-6_pqvau6.jpg', 'Girl writing', 'Drawing'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-4_gdhw6v.jpg', 'Kid drawing', 'Drawing'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-1_gnmczo.jpg', 'Kids playing', 'Playing'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-2_hwekar.jpg', 'Girl playing', 'Playing'),
    ('https://res.cloudinary.com/dps629xiv/image/upload/v1674132683/kdc/portfolio-3_tyhpk6.jpg', 'Girl writing', 'Drawing');

COMMIT;
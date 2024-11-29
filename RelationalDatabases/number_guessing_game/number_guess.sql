--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: games; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.games (
    username character varying(22) NOT NULL,
    games_played integer,
    best_game integer
);


ALTER TABLE public.games OWNER TO freecodecamp;

--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.games VALUES ('Tom', 4, 6);
INSERT INTO public.games VALUES ('user_1732911414133', 2, 350);
INSERT INTO public.games VALUES ('user_1732911414134', 5, 198);
INSERT INTO public.games VALUES ('user_1732913082855', 2, 50);
INSERT INTO public.games VALUES ('user_1732912620761', 2, 518);
INSERT INTO public.games VALUES ('user_1732912620762', 5, 22);
INSERT INTO public.games VALUES ('user_1732911479710', 2, 342);
INSERT INTO public.games VALUES ('user_1732913082856', 5, 78);
INSERT INTO public.games VALUES ('user_1732911479711', 5, 350);
INSERT INTO public.games VALUES ('user_1732913740048', 2, 287);
INSERT INTO public.games VALUES ('user_1732913740049', 5, 135);
INSERT INTO public.games VALUES ('user_1732912633462', 2, 203);
INSERT INTO public.games VALUES ('user_1732911774925', 2, 279);
INSERT INTO public.games VALUES ('user_1732913983463', 2, 399);
INSERT INTO public.games VALUES ('user_1732912633463', 5, 111);
INSERT INTO public.games VALUES ('user_1732911774926', 5, 184);
INSERT INTO public.games VALUES ('user_1732914388209', 2, 334);
INSERT INTO public.games VALUES ('user_1732913236528', 2, 19);
INSERT INTO public.games VALUES ('user_1732913236529', 5, 314);
INSERT INTO public.games VALUES ('user_1732912689746', 2, 473);
INSERT INTO public.games VALUES ('user_1732913796070', 2, 604);
INSERT INTO public.games VALUES ('user_1732913983464', 5, 247);
INSERT INTO public.games VALUES ('user_1732912689747', 5, 65);
INSERT INTO public.games VALUES ('user_1732914388210', 5, 17);
INSERT INTO public.games VALUES ('user_1732912517424', 2, 619);
INSERT INTO public.games VALUES ('user_1732912517425', 5, 200);
INSERT INTO public.games VALUES ('Sara', 11, 1);
INSERT INTO public.games VALUES ('user_1732913796071', 5, 30);
INSERT INTO public.games VALUES ('user_1732913402887', 2, 199);
INSERT INTO public.games VALUES ('user_1732912905153', 2, 196);
INSERT INTO public.games VALUES ('user_1732913402888', 5, 27);
INSERT INTO public.games VALUES ('user_1732912905154', 5, 206);
INSERT INTO public.games VALUES ('Vjeran', 4, 3);
INSERT INTO public.games VALUES ('Yo', 2, 15);
INSERT INTO public.games VALUES ('user_1732913072925', 2, 328);
INSERT INTO public.games VALUES ('user_1732913415274', 2, 604);
INSERT INTO public.games VALUES ('user_1732913897222', 2, 414);
INSERT INTO public.games VALUES ('user_1732913072926', 5, 53);
INSERT INTO public.games VALUES ('user_1732914322990', 2, 309);
INSERT INTO public.games VALUES ('user_1732913415275', 5, 352);
INSERT INTO public.games VALUES ('user_1732914322991', 5, 237);
INSERT INTO public.games VALUES ('user_1732913897223', 5, 35);
INSERT INTO public.games VALUES ('user_1732913567944', 2, 33);
INSERT INTO public.games VALUES ('user_1732914401674', 2, 385);
INSERT INTO public.games VALUES ('user_1732913567945', 5, 167);
INSERT INTO public.games VALUES ('user_1732914401675', 5, 12);
INSERT INTO public.games VALUES ('user_1732913940227', 2, 394);
INSERT INTO public.games VALUES ('user_1732913940228', 5, 114);
INSERT INTO public.games VALUES ('user_1732914366919', 2, 624);
INSERT INTO public.games VALUES ('user_1732914366920', 5, 5);
INSERT INTO public.games VALUES ('user_1732913955385', 2, 449);
INSERT INTO public.games VALUES ('user_1732914412029', 2, 148);
INSERT INTO public.games VALUES ('user_1732913955386', 5, 264);
INSERT INTO public.games VALUES ('user_1732914373130', 2, 551);
INSERT INTO public.games VALUES ('user_1732914373131', 5, 137);
INSERT INTO public.games VALUES ('user_1732913959172', 2, 406);
INSERT INTO public.games VALUES ('user_1732914412030', 5, 153);
INSERT INTO public.games VALUES ('user_1732913959173', 5, 19);
INSERT INTO public.games VALUES ('user_1732914377008', 2, 100);
INSERT INTO public.games VALUES ('user_1732914377009', 5, 48);
INSERT INTO public.games VALUES ('user_1732914417083', 2, 86);
INSERT INTO public.games VALUES ('user_1732914417084', 5, 16);
INSERT INTO public.games VALUES ('user_1732914380750', 2, 581);
INSERT INTO public.games VALUES ('user_1732914380751', 5, 53);
INSERT INTO public.games VALUES ('user_1732914483111', 2, 866);
INSERT INTO public.games VALUES ('user_1732914483112', 5, 221);


--
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (username);


--
-- PostgreSQL database dump complete
--


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

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

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
-- Name: constellation; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.constellation (
    constellation_id integer NOT NULL,
    name character varying(50) NOT NULL,
    number_of_stars integer NOT NULL,
    brightest_star character varying(50) NOT NULL,
    hemisphere character varying(20) NOT NULL
);


ALTER TABLE public.constellation OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.constellation_constellation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.constellation_constellation_id_seq OWNER TO freecodecamp;

--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.constellation_constellation_id_seq OWNED BY public.constellation.constellation_id;


--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(30) NOT NULL,
    age_in_millions_of_years numeric,
    description text,
    has_life boolean
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(30) NOT NULL,
    diameter_km integer DEFAULT 0 NOT NULL,
    distance_from_planet_km integer DEFAULT 0 NOT NULL,
    discovered_year integer,
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(30) NOT NULL,
    distance_from_earth_mil_km integer,
    radius_km integer,
    has_atmosphere boolean,
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(30) NOT NULL,
    galaxy_id integer,
    mass_solar_masses numeric DEFAULT 1.0 NOT NULL,
    star_type character varying(20) DEFAULT 'Main Sequence'::character varying NOT NULL
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: constellation constellation_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation ALTER COLUMN constellation_id SET DEFAULT nextval('public.constellation_constellation_id_seq'::regclass);


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: constellation; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.constellation VALUES (1, 'Orion', 81, 'Betelgeuse', 'Northern');
INSERT INTO public.constellation VALUES (2, 'Ursa Major', 100, 'Dubhe', 'Northern');
INSERT INTO public.constellation VALUES (3, 'Centaurus', 88, 'Alpha Centauri', 'Southern');


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 13.6, 'Milky Way is a galaxy which includes the Solar System, 100-400 billion of stars and at least that many planets as well.', true);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 10.01, 'Andromeda Galaxy is a barred spiral galaxy and is the nearest major galaxy to the Milky Way, containing around 1 trillion of stars', false);
INSERT INTO public.galaxy VALUES (3, 'NGC 4151', 13.25, 'NGC 4151 is an intermediate spiral Seyfert galaxy. It is one of the nearest galaxies to Earth to contain an actively growing supermassive black hole, nicknamed Eye of Sauron.', false);
INSERT INTO public.galaxy VALUES (4, 'Triangulum', 12.32, 'Triangulum is a spiral galaxy that is part of the Local Group, containing around 40 billion stars.', false);
INSERT INTO public.galaxy VALUES (5, 'Messier 87', 13.25, 'Messier 87 is a supergiant elliptical galaxy in the Virgo cluster, known for its supermassive black hole.', false);
INSERT INTO public.galaxy VALUES (6, 'Whirlpool', 10.00, 'Whirlpool Galaxy is a classic spiral galaxy located in the constellation Canes Venatici, famous for its well-defined structure.', false);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', 3474, 384400, NULL, 1);
INSERT INTO public.moon VALUES (2, 'Phobos', 22, 9376, 1877, 4);
INSERT INTO public.moon VALUES (3, 'Deimos', 12, 23460, 1877, 4);
INSERT INTO public.moon VALUES (4, 'Io', 3643, 421700, 1610, 5);
INSERT INTO public.moon VALUES (5, 'Europa', 3122, 670900, 1610, 5);
INSERT INTO public.moon VALUES (6, 'Ganymede', 5262, 1070400, 1610, 5);
INSERT INTO public.moon VALUES (7, 'Callisto', 4821, 1882700, 1610, 5);
INSERT INTO public.moon VALUES (8, 'Titan', 5150, 1221870, 1655, 8);
INSERT INTO public.moon VALUES (9, 'Rhea', 1528, 527040, 1672, 8);
INSERT INTO public.moon VALUES (10, 'Iapetus', 1469, 3560800, 1671, 8);
INSERT INTO public.moon VALUES (11, 'Triton', 2706, 354800, 1846, 6);
INSERT INTO public.moon VALUES (12, 'Oberon', 1523, 583500, 1787, 7);
INSERT INTO public.moon VALUES (13, 'Titania', 1577, 436300, 1787, 7);
INSERT INTO public.moon VALUES (14, 'Ariel', 1158, 191020, 1851, 7);
INSERT INTO public.moon VALUES (15, 'Umbriel', 1169, 265970, 1851, 7);
INSERT INTO public.moon VALUES (16, 'Miranda', 471, 129390, 1948, 7);
INSERT INTO public.moon VALUES (17, 'Charon', 1212, 19570, 1978, 9);
INSERT INTO public.moon VALUES (18, 'S/2015 (136472) 1', 15, 20360, 2015, 10);
INSERT INTO public.moon VALUES (19, 'Kepler-452b Moon 1', 1000, 120000, 2020, 11);
INSERT INTO public.moon VALUES (20, 'HD 209458 b Moon 1', 800, 140000, 2021, 12);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Earth', 0, 6371, true, 1);
INSERT INTO public.planet VALUES (3, 'Venus', 38, 6052, true, 1);
INSERT INTO public.planet VALUES (2, 'Mercury', 207, 2440, false, 1);
INSERT INTO public.planet VALUES (4, 'Mars', 225, 3396, true, 1);
INSERT INTO public.planet VALUES (5, 'Jupiter', 714, 69911, true, 1);
INSERT INTO public.planet VALUES (6, 'Neptune', 4500, 24764, true, 1);
INSERT INTO public.planet VALUES (7, 'Uranius', 2796, 25559, true, 1);
INSERT INTO public.planet VALUES (8, 'Saturn', 1331, 58232, true, 1);
INSERT INTO public.planet VALUES (9, 'Proxima Centauri b', 4, 6371, true, 2);
INSERT INTO public.planet VALUES (10, 'Sirius B', 9, 6000, false, 2);
INSERT INTO public.planet VALUES (11, 'Kepler-452b', 1400, 9200, true, 3);
INSERT INTO public.planet VALUES (12, 'HD 209458 b', 150, 14000, true, 3);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 1, 1.0, 'Main Sequence');
INSERT INTO public.star VALUES (2, 'Sirius', 1, 2.02, 'Main Sequence');
INSERT INTO public.star VALUES (3, 'Alpheratz', 2, 2.3, 'Main Sequence');
INSERT INTO public.star VALUES (4, 'Mirach', 2, 3.5, 'Red Giant');
INSERT INTO public.star VALUES (5, 'SN 2018aoq', 3, 10.0, 'Supernova');
INSERT INTO public.star VALUES (6, 'Betelgeuse', 1, 18.0, 'Red Supergiant');
INSERT INTO public.star VALUES (7, 'Vega', 1, 2.1, 'Main Sequence');
INSERT INTO public.star VALUES (8, 'Aldebaran', 2, 1.7, 'Red Giant');
INSERT INTO public.star VALUES (9, 'Polaris', 2, 5.4, 'Yellow Supergiant');
INSERT INTO public.star VALUES (10, 'Regulus', 3, 3.8, 'Main Sequence');
INSERT INTO public.star VALUES (11, 'Arcturus', 4, 1.1, 'Red Giant');


--
-- Name: constellation_constellation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.constellation_constellation_id_seq', 3, true);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 1, false);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 1, false);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 1, false);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 1, false);


--
-- Name: constellation constellation_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_name_key UNIQUE (name);


--
-- Name: constellation constellation_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.constellation
    ADD CONSTRAINT constellation_pkey PRIMARY KEY (constellation_id);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: galaxy unique_galaxy_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT unique_galaxy_name UNIQUE (name);


--
-- Name: moon unique_moon_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT unique_moon_name UNIQUE (name);


--
-- Name: planet unique_planet_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT unique_planet_name UNIQUE (name);


--
-- Name: star unique_star_name; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT unique_star_name UNIQUE (name);


--
-- Name: moon fk_planet; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT fk_planet FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet fk_star; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT fk_star FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: star star_fk; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_fk FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--


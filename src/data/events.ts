/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FestivalEvent } from '../types';
import danceImage from '../assets/images/milan_dance_stage_1793168263679.jpg';
import musicImage from '../assets/images/milan_music_concert_1793168264241.jpg';
import dramaImage from '../assets/images/milan_drama_theatre_1793168265915.jpg';
import fashionImage from '../assets/images/milan_fashion_runway_1793168265792.jpg';
import techImage from '../assets/images/milan_creative_tech_1793168283333.jpg';

export const FESTIVAL_EVENTS: FestivalEvent[] = [
  {
    id: 'choreonite-western-fusion',
    title: 'ChoreoNite: Western & Urban Fusion',
    category: 'Dance',
    tagline: 'High-octane group choreography showdown with synchronization and cinematic narrative.',
    shortDescription: 'Premier flagship dance ensemble competition celebrating dynamic choreography, formation agility, and expressive street fusion.',
    fullDescription: 'ChoreoNite is the crown jewel of MILAN’s choreographic arena. Dance troupes from universities across the nation bring their sharpest synchronized formations, narrative transitions, and multi-genre versatility—spanning urban hip-hop, contemporary, waacking, and modern fusion.',
    date: 'February 18, 2027',
    time: '17:30 – 21:00 IST',
    venue: 'Dr. T.P. Ganesan Auditorium (Main Stage)',
    imageUrl: danceImage,
    teamSize: '12 – 30 members',
    duration: '8 – 12 minutes',
    rules: [
      'Original music track must be submitted in lossless WAV or 320kbps MP3 format during technical rehearsal.',
      'Props are permitted but must not compromise stage safety; hazardous chemicals, naked flames, or confetti residue are strictly prohibited.',
      'Judging criteria include synchronicity (30%), choreographic originality (25%), costume & visual concept (20%), and stage presence (25%).'
    ],
    accentGradient: 'from-amber-500/20 via-rose-500/20 to-violet-500/10',
    accentBorder: 'border-amber-500/30'
  },
  {
    id: 'battle-of-the-bands',
    title: 'Battle of the Bands: Sonic Resonance',
    category: 'Music',
    tagline: 'Electrifying live band competition spanning rock, progressive, and Indian fusion.',
    shortDescription: 'Live multi-instrumental ensemble clash on open stage with full drum kits, blistering riffs, and soaring vocals.',
    fullDescription: 'The premier live music championship of MILAN. From heavy overdrive guitar solos and intricate prog-metal odd-time meters to Carnatic fusion and alternative rock, university bands command the main open-air arena with pure sonic firepower.',
    date: 'February 19, 2027',
    time: '18:00 – 22:30 IST',
    venue: 'SRMIST Open Air Amphitheatre',
    imageUrl: musicImage,
    teamSize: '3 – 8 musicians',
    duration: '15 mins performance + 5 mins line check',
    rules: [
      'Standard 5-piece drum kit, bass amplifier, and twin guitar cabs will be provided by festival technical crew.',
      'Teams must perform at least one original composition alongside their setlist choices.',
      'Sound engineer will enforce calibrated decibel limits (max 102 dBA at FOH mixer desk) to protect audience acoustic safety.'
    ],
    accentGradient: 'from-fuchsia-500/20 via-cyan-500/20 to-blue-500/10',
    accentBorder: 'border-fuchsia-500/30'
  },
  {
    id: 'vogue-couture-runway',
    title: 'Vogue Couture: Avant-Garde Runway',
    category: 'Fashion',
    tagline: 'High-concept thematic apparel showcase blending sustainable textiles and editorial styling.',
    shortDescription: 'Theatrical ramp walk competition where student fashion design houses present cohesive collections on an elevated catwalk.',
    fullDescription: 'Where sartorial innovation meets theatrical runway storytelling. Design houses present experimental collections emphasizing sustainable fibers, deconstructed silhouettes, architectural drapery, and bold editorial hair and makeup.',
    date: 'February 20, 2027',
    time: '19:00 – 21:45 IST',
    venue: 'Dr. T.P. Ganesan Auditorium (Grand Hall)',
    imageUrl: fashionImage,
    teamSize: '10 – 18 models & designers',
    duration: '10 – 14 minutes per house',
    rules: [
      'Every collection must present a written conceptual portfolio explaining the design philosophy and material sourcing.',
      'Audio backing tracks and lighting cues must be rehearsed during assigned technical slots.',
      'Adjudicated on theme coherence (35%), garment construction & tailoring (30%), poise & runway cadence (25%), and styling (10%).'
    ],
    accentGradient: 'from-violet-500/20 via-rose-500/20 to-amber-500/10',
    accentBorder: 'border-violet-500/30'
  },
  {
    id: 'proscenium-theatre',
    title: 'Proscenium: One-Act Dramatic Play',
    category: 'Drama',
    tagline: 'Intense theatrical storytelling exploring contemporary themes with classical stagecraft.',
    shortDescription: 'One-act theatrical productions staged in an acoustic proscenium theater with custom blocking and live lighting cues.',
    fullDescription: 'Proscenium invites college dramatic societies to explore visceral human drama, absurdism, historical commentary, and satirical narratives. Teams utilize SRMIST’s professional stage lighting grid and acoustic shell to craft unforgettable theatrical experiences.',
    date: 'February 18, 2027',
    time: '10:00 – 15:00 IST',
    venue: 'Mini Auditorium I (Kattankulathur)',
    imageUrl: dramaImage,
    teamSize: '6 – 20 actors & stage crew',
    duration: '25 – 35 minutes',
    rules: [
      'Plays may be staged in English, Hindi, Tamil, or bilingual scripts with clear dramatic articulation.',
      'Stage clearance time must not exceed 5 minutes post-production to ensure scheduled flow.',
      'Judging criteria cover script fidelity & dramatic arc (30%), vocal delivery & physical acting (35%), and stagecraft/lighting design (35%).'
    ],
    accentGradient: 'from-amber-600/20 via-orange-500/20 to-red-500/10',
    accentBorder: 'border-amber-500/30'
  },
  {
    id: 'generative-code-jam',
    title: 'Creative Code Jam: Generative Art & Tech',
    category: 'Technical',
    tagline: 'Live audiovisual programming and algorithmic digital installation showcase.',
    shortDescription: 'Creative tech hackathon where developers and visual artists build real-time GLSL shaders, procedural audio, and spatial projections.',
    fullDescription: 'Merging technical computing with cultural aesthetic expression. Participants deploy WebGL, TouchDesigner, Processing, and Web Audio APIs to create generative visual landscapes and interactive projection-mapped installations reacting to live ambient acoustics.',
    date: 'February 19, 2027',
    time: '11:00 – 17:00 IST',
    venue: 'Tech Park Multimedia Lab & Atrium',
    imageUrl: techImage,
    teamSize: '1 – 4 developers / artists',
    duration: '6 hours sprint + live showcase',
    rules: [
      'All source code must run entirely in real time on workstation hardware; pre-rendered video loops are strictly disqualified.',
      'Open-source creative coding libraries (Three.js, p5.js, GLSL, WebGPU) are permitted with proper attribution.',
      'Judged on computational originality (35%), visual aesthetic elegance (35%), and live audio-reactive responsiveness (30%).'
    ],
    accentGradient: 'from-cyan-500/20 via-blue-500/20 to-emerald-500/10',
    accentBorder: 'border-cyan-500/30'
  },
  {
    id: 'natyatarang-classical-dance',
    title: 'NatyaTarang: Classical Solo & Duet',
    category: 'Dance',
    tagline: 'Ancient rhythmic footwork, expressive abhinaya, and timeless Indian classical traditions.',
    shortDescription: 'Traditional classical dance competition featuring Bharatanatyam, Kathak, Odissi, and Kuchipudi disciplines.',
    fullDescription: 'Celebrating India’s living cultural heritage. Soloists and duos present intricate rhythmic footwork (jatis), emotive narrative expressions (abhinaya), and devotion to sculptural poses under specialized theatrical warm-wash lighting.',
    date: 'February 19, 2027',
    time: '14:00 – 17:30 IST',
    venue: 'Dr. T.P. Ganesan Auditorium (Mini Hall II)',
    imageUrl: danceImage,
    teamSize: '1 – 2 dancers',
    duration: '7 – 10 minutes',
    rules: [
      'Classical forms recognized: Bharatanatyam, Kathak, Odissi, Kuchipudi, Mohiniyattam, and Kathakali.',
      'Live accompanists or recorded studio tracks are both allowed; recorded tracks must be pre-cleared for audio fidelity.',
      'Costume, traditional ornaments, and foot bells (ghungroos) must conform to orthodox classical guidelines.'
    ],
    accentGradient: 'from-rose-500/20 via-orange-500/20 to-amber-500/10',
    accentBorder: 'border-rose-500/30'
  },
  {
    id: 'symphonic-echoes-acappella',
    title: 'Symphonic Echoes: Western Acoustic & Vocal Harmony',
    category: 'Music',
    tagline: 'Pure vocal blend, polyphonic choral arrangements, and unplugged acoustic resonance.',
    shortDescription: 'Unplugged acoustic and a cappella ensemble showcase prioritizing vocal harmonics, vocal percussion, and arrangement depth.',
    fullDescription: 'A testament to the naked power of the human voice. Vocal ensembles and acoustic quartets strip away synthetic amplification to present breathtaking counterpoint, contemporary vocal percussion, and sublime four-part harmonic voicings.',
    date: 'February 18, 2027',
    time: '13:00 – 16:30 IST',
    venue: 'Bio-Engineering Acoustic Courtyard',
    imageUrl: musicImage,
    teamSize: '4 – 14 vocalists & acoustic players',
    duration: '8 – 12 minutes',
    rules: [
      'No electronic synthesizers or auto-tune processing; strictly natural vocalization and acoustic instruments (guitars, cajons, violins).',
      'Dynamic vocal microphones (Shure SM58 / Beta 58) will be provided on calibrated stands.',
      'Adjudication focuses on intonation & pitch accuracy (35%), arrangement complexity (30%), dynamic control (20%), and stage cohesion (15%).'
    ],
    accentGradient: 'from-blue-500/20 via-indigo-500/20 to-violet-500/10',
    accentBorder: 'border-blue-500/30'
  },
  {
    id: 'nukkad-natak-street-theatre',
    title: 'Nukkad Natak: Street Theatre Confluence',
    category: 'Drama',
    tagline: 'High-energy circle theatre, social commentary, resonant slogans, and acoustic dholak beats.',
    shortDescription: 'Open-air circular street performance addressing pressing social issues through poignant verse, chorus chanting, and unamplified presence.',
    fullDescription: 'Taking performance out into the open quadrangle. Troupes form circles around hundreds of spectators, using synchronized chorus lines, live dholak percussion, satire, and thought-provoking scripts to address pressing societal challenges.',
    date: 'February 20, 2027',
    time: '11:00 – 14:00 IST',
    venue: 'SRMIST Clock Tower Lawn Circle',
    imageUrl: dramaImage,
    teamSize: '10 – 25 performers',
    duration: '15 – 20 minutes',
    rules: [
      'Performances are completely acoustic; no electronic amplification or recorded tracks allowed.',
      'Only traditional acoustic instruments (dholak, manjira, dafli, flute) and hand props (dupatta, sticks) are permitted.',
      'Evaluation criteria: social relevance & message clarity (30%), vocal projection & chorus unity (35%), energy & crowd engagement (35%).'
    ],
    accentGradient: 'from-orange-500/20 via-amber-500/20 to-red-500/10',
    accentBorder: 'border-orange-500/30'
  },
  {
    id: 'robo-choreography-kinetics',
    title: 'RoboKinetic Choreography & Drones',
    category: 'Technical',
    tagline: 'Synchronized aerial drone swarms and kinetic robotic arm choreography set to live music.',
    shortDescription: 'Mechatronics design meet stage performance in a stunning synchronized routine of custom quadcopters and robotic arms.',
    fullDescription: 'Where robotics meets the performing arts. Engineering student teams program multi-rotor micro-drones and articulate 6-DOF robotic arms to execute complex synchronized flight patterns and kinetic light displays perfectly mapped to musical tempos.',
    date: 'February 21, 2027',
    time: '18:30 – 20:30 IST',
    venue: 'SRMIST Indoor Sports Complex Arena',
    imageUrl: techImage,
    teamSize: '3 – 8 robotics engineers',
    duration: '6 – 8 minutes',
    rules: [
      'All drones must operate inside the certified safety mesh enclosure with autonomous geofencing kill-switches.',
      'Software control pipelines must demonstrate custom path-planning algorithms and real-time telemetry logging.',
      'Scored on timing precision (35%), mechanical innovation (35%), and aesthetic choreography synergy (30%).'
    ],
    accentGradient: 'from-emerald-500/20 via-cyan-500/20 to-blue-500/10',
    accentBorder: 'border-emerald-500/30'
  },
  {
    id: 'upcycled-couture-fashion',
    title: 'E-Couture: Upcycled Architectural Wear',
    category: 'Fashion',
    tagline: 'Transforming discarded materials and e-waste into wearable sculptural high fashion.',
    shortDescription: 'Avant-garde runway competition where models exhibit wearable sculptures fashioned from circuit boards, recycled metals, and industrial fabrics.',
    fullDescription: 'Challenging fast fashion through provocative, radical design. Contestants craft structural garments using 100% reclaimed industrial materials, optical cables, circuit scrap, and decommissioned parachute silks, proving that sustainability can be dramatically avant-garde.',
    date: 'February 20, 2027',
    time: '16:00 – 18:00 IST',
    venue: 'Architecture Department Amphitheatre',
    imageUrl: fashionImage,
    teamSize: '2 – 6 designers & models',
    duration: '5 – 8 minutes',
    rules: [
      'At least 80% of garment surface materials must be documented as verified post-consumer or industrial waste.',
      'Costumes must be safe for the wearer with zero sharp exposed edges or toxic adhesives.',
      'Judged on innovation of material reuse (40%), structural integrity (30%), and runway impact (30%).'
    ],
    accentGradient: 'from-teal-500/20 via-cyan-500/20 to-violet-500/10',
    accentBorder: 'border-teal-500/30'
  }
];

export const FESTIVAL_CATEGORIES: ('All' | 'Dance' | 'Music' | 'Drama' | 'Fashion' | 'Technical')[] = [
  'All',
  'Dance',
  'Music',
  'Drama',
  'Fashion',
  'Technical'
];

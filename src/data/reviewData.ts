import { Flashcard, TrickyPattern, DictationWord, BoxChallenge, SpellingWord, Finalist, AuditionCandidate, MatchPair } from '../types';

// =============================================================================
// MEETING 2: "WORD ROOTS & PATTERNS" (Grade 3–6 • 90 Minutes)
// =============================================================================

// Slide 4: Warm-Up Word List (10 words)
export const MEETING_2_WARM_UP: DictationWord[] = [
  {
    id: 'm2-wu-1',
    word: 'triumphant',
    definition: 'feeling or expressing great joy after winning a victory',
    sentence: 'The team raised the championship trophy with triumphant cheers.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends with '-ant' (t-r-i-u-m-p-h-a-n-t) with 'ph' as /f/"
  },
  {
    id: 'm2-wu-2',
    word: 'guardian',
    definition: 'a person who protects or takes care of someone or something',
    sentence: 'Her legal guardian signed the safety permission slip.',
    difficulty: 'Warm-Up',
    trickyPart: "Silent 'u' after 'g': g-u-a-r-d-i-a-n"
  },
  {
    id: 'm2-wu-3',
    word: 'cascade',
    definition: 'a small waterfall, or things happening one after another in quick succession',
    sentence: 'A cool cascade of mountain water tumbled over the river stones.',
    difficulty: 'Warm-Up',
    trickyPart: "Two 'c's with different sounds: /k/ then soft /s/ with silent 'e'"
  },
  {
    id: 'm2-wu-4',
    word: 'amphibian',
    definition: 'an animal that can live both in water and on land',
    sentence: 'A spotted salamander is an amphibian that breathes with gills as a larva.',
    difficulty: 'Warm-Up',
    trickyPart: "Greek root 'amphi' + 'bio': 'ph' makes the /f/ sound"
  },
  {
    id: 'm2-wu-5',
    word: 'eavesdrop',
    definition: 'to secretly listen to a private conversation',
    sentence: 'It is bad manners to eavesdrop through the open window.',
    difficulty: 'Warm-Up',
    trickyPart: "Begins with 'e-a-v-e-s', not 'eves'"
  },
  {
    id: 'm2-wu-6',
    word: 'astonish',
    definition: 'to surprise or amaze someone greatly',
    sentence: 'Her phenomenal memory for words will astonish the audience.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends in '-ish' (not '-ist' or '-ishn')"
  },
  {
    id: 'm2-wu-7',
    word: 'genius',
    definition: 'exceptional intellectual or creative power or natural ability',
    sentence: 'Thomas Edison showed inventive genius throughout his lifetime.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends in '-us' (noun), unlike adjectives ending in '-ous'"
  },
  {
    id: 'm2-wu-8',
    word: 'fortification',
    definition: 'a structure or defensive wall built to protect against attack',
    sentence: 'The ancient fortress was protected by a thick stone fortification.',
    difficulty: 'Warm-Up',
    trickyPart: "From Latin 'fortis' (strong): f-o-r-t-i-f-i-c-a-t-i-o-n"
  },
  {
    id: 'm2-wu-9',
    word: 'remedial',
    definition: 'intended as a remedy to improve or cure a weakness or deficiency',
    sentence: 'He enrolled in a remedial phonics clinic to boost his reading accuracy.',
    difficulty: 'Warm-Up',
    trickyPart: "r-e-m-e-d-i-a-l (contains 'remedy' root)"
  },
  {
    id: 'm2-wu-10',
    word: 'trivia',
    definition: 'pieces of information of little value or importance; quiz facts',
    sentence: 'We played an engaging general knowledge trivia game at the bee party.',
    difficulty: 'Warm-Up',
    trickyPart: "t-r-i-v-i-a (plural of Latin 'trivium')"
  }
];

// Slide 5: Tricky Spelling Patterns (Meeting 2)
export const MEETING_2_PATTERNS: TrickyPattern[] = [
  {
    id: 'm2-pat-dis',
    title: 'Prefix DIS-',
    category: 'roots-affixes',
    rule: "The Latin prefix dis- means 'not', 'opposite of', or 'away / to leave'.",
    keyWord: 'disembark',
    keyWordExplanation: "dis- means 'not / away' — to leave a ship, airplane, or vehicle.",
    additionalExamples: [
      'disembark (leave a ship or plane)',
      'disconnect (break a connection)',
      'disarray (state of confusion / not orderly)',
      'disinfect (clean away infection)'
    ],
    spotlightHint: "Prefix 'dis-' attaches directly to the root without doubling the 's' unless the base starts with 's'!"
  },
  {
    id: 'm2-pat-tele',
    title: 'Root TELE-',
    category: 'roots-affixes',
    rule: "The Greek root 'tele-' means 'far' or 'distant'.",
    keyWord: 'telepathic',
    keyWordExplanation: "tele- means 'far' + pathos (feeling) — reading minds from far away!",
    additionalExamples: [
      'telepathic (reading thoughts from far away)',
      'telescope (instrument for viewing distant stars)',
      'telephone (device transmitting sound across distance)',
      'teleport (travel across distance instantaneously)'
    ],
    spotlightHint: "Whenever you see 'tele-', think 'far away' or 'long distance'!"
  },
  {
    id: 'm2-pat-ous',
    title: 'Suffix -OUS',
    category: 'roots-affixes',
    rule: "The suffix '-ous' converts a noun into an adjective meaning 'full of' or 'characterized by'.",
    keyWord: 'harmonious',
    keyWordExplanation: "-ous means 'full of' — full of harmony, melody, and agreement!",
    additionalExamples: [
      'harmonious (full of harmony and melody)',
      'courageous (full of courage)',
      'perilous (full of peril / danger)',
      'miraculous (full of wonder and miracles)'
    ],
    spotlightHint: "Remember: '-ous' creates adjectives (harmonious, famous), while '-us' is usually a noun (genius, cactus)!"
  }
];

// Slide 6 & 7: Word Study Rounds 1 & 2 (Meeting 2 "Words to Know")
export const MEETING_2_WORDS_TO_KNOW: Flashcard[] = [
  // Round 1 (Slide 6)
  {
    id: 'm2-r1-1',
    word: 'eavesdrop',
    definition: 'to secretly listen to a private conversation',
    partOfSpeech: 'verb',
    category: 'meeting-2-words-to-know',
    example: 'It is impolite to eavesdrop on people having a private meeting.',
    syllables: 'eaves-drop',
    phoneticHint: '/ˈiːvz.drɑːp/',
    languageOrigin: 'Old English (efesdrype)',
    trickyPattern: "Compound: 'eaves' + 'drop'. Don't forget the 'e' before the 'a'!",
    lesson: 'Meeting 2 · Round 1',
    funFact: "Originated from standing under house eaves where rainwater dripped down to spy on indoor talk!"
  },
  {
    id: 'm2-r1-2',
    word: 'guardian',
    definition: 'a person who protects or takes care of someone',
    partOfSpeech: 'noun',
    category: 'meeting-2-words-to-know',
    example: 'Her legal guardian accompanied her to the spelling bee championship.',
    syllables: 'guard-i-an',
    phoneticHint: '/ˈɡɑːr.di.ən/',
    languageOrigin: 'Old French (guardein)',
    trickyPattern: "Starts with 'G-U-A-R-D' with silent 'u'.",
    lesson: 'Meeting 2 · Round 1',
    funFact: "Related to 'warden' — both come from ancient Germanic words meaning to watch over!"
  },
  {
    id: 'm2-r1-3',
    word: 'cascade',
    definition: 'a small waterfall, or things happening one after another in quick succession',
    partOfSpeech: 'noun / verb',
    category: 'meeting-2-words-to-know',
    example: 'A shimmering cascade of water flowed down the mountain rocks.',
    syllables: 'cas-cade',
    phoneticHint: '/kæsˈkeɪd/',
    languageOrigin: 'French / Italian (cascata)',
    trickyPattern: "First 'c' is hard /k/, second 'c' is soft /s/ before 'a-d-e'.",
    lesson: 'Meeting 2 · Round 1',
    funFact: "Can describe physical waterfalls and a cascade of dominoes or notifications!"
  },
  {
    id: 'm2-r1-4',
    word: 'amphibian',
    definition: 'an animal that can live both in water and on land',
    partOfSpeech: 'noun',
    category: 'meeting-2-words-to-know',
    example: 'A green bullfrog is an amphibian that undergoes metamorphosis from a tadpole.',
    syllables: 'am-phib-i-an',
    phoneticHint: '/æmˈfɪb.i.ən/',
    languageOrigin: 'Greek (amphi = both + bios = life)',
    trickyPattern: "'ph' makes the /f/ sound, followed by 'i-b-i-a-n'.",
    lesson: 'Meeting 2 · Round 1',
    funFact: "Greek 'amphi' literally means dual — living both in aquatic and terrestrial worlds!"
  },

  // Round 2 (Slide 7)
  {
    id: 'm2-r2-1',
    word: 'astonish',
    definition: 'to surprise or amaze someone greatly',
    partOfSpeech: 'verb',
    category: 'meeting-2-words-to-know',
    example: 'His ability to spell any word backwards will astonish the audience.',
    syllables: 'as-ton-ish',
    phoneticHint: '/əˈstɑː.nɪʃ/',
    languageOrigin: 'Old French (estoner - to thunderstrike)',
    trickyPattern: "Standard phonetics, ends in '-ish'.",
    lesson: 'Meeting 2 · Round 2',
    funFact: "Shares an ancient Latin root with 'stun' and 'thunderstruck'!"
  },
  {
    id: 'm2-r2-2',
    word: 'fortification',
    definition: 'a structure built to defend against attack',
    partOfSpeech: 'noun',
    category: 'meeting-2-words-to-know',
    example: 'The ancient stone castle featured a thick rampart fortification.',
    syllables: 'for-ti-fi-ca-tion',
    phoneticHint: '/ˌfɔːr.tə.fəˈkeɪ.ʃən/',
    languageOrigin: 'Latin (fortis = strong + facere = to make)',
    trickyPattern: "Five syllables built from root 'fort' (strong) + '-ification'.",
    lesson: 'Meeting 2 · Round 2',
    funFact: "Words like fort, fortress, fortitude, and reinforce all come from Latin 'fortis'!"
  },
  {
    id: 'm2-r2-3',
    word: 'hydra',
    definition: 'a mythical serpent with many heads that regrows two heads when one is cut off',
    partOfSpeech: 'noun',
    category: 'meeting-2-words-to-know',
    example: 'In ancient Greek mythology, Hercules fought the venomous Lernaean Hydra.',
    syllables: 'hy-dra',
    phoneticHint: '/ˈhaɪ.drə/',
    languageOrigin: 'Greek (hydor = water)',
    trickyPattern: "Uses 'y' for long /aɪ/ vowel sound: h-y-d-r-a.",
    lesson: 'Meeting 2 · Round 2',
    funFact: "In modern biology, a hydra is a real tiny freshwater organism that regenerates lost body parts!"
  },
  {
    id: 'm2-r2-4',
    word: 'volumetric',
    definition: 'relating to the measurement of volume or capacity',
    partOfSpeech: 'adjective',
    category: 'meeting-2-words-to-know',
    example: 'The chemistry student measured the liquid using a volumetric flask.',
    syllables: 'vol-u-met-ric',
    phoneticHint: '/ˌvɑːl.jəˈmet.rɪk/',
    languageOrigin: 'Latin (volumen - roll/volume)',
    trickyPattern: "Root 'volume' drops 'e' and inserts 'u' before '-metric'.",
    lesson: 'Meeting 2 · Round 2',
    funFact: "Volumetric titration is one of the most precise quantitative chemical techniques."
  }
];

// Slide 8: Listening Stations (Meeting 2)
export const MEETING_2_STATION_1_PARTNER: string[] = [
  'triumphant', 'guardian', 'cascade', 'amphibian', 'eavesdrop',
  'astonish', 'genius', 'fortification', 'remedial', 'trivia'
];

export const MEETING_2_STATION_2_AUDIO: string[] = [
  'gargantuan', 'chaotic', 'shrimp', 'satellite', 'parasite',
  'favorite', 'famous', 'pristine', 'golden', 'modesty'
];

export const MEETING_2_STATION_3_QUIZ: string[] = [
  'jealousy', 'vouch', 'trivia', 'shoulder', 'zebra',
  'butterscotch', 'apron', 'beagle', 'kidney', 'raven'
];

// Slide 10: Mock Spelling Bee Stage List (Meeting 2 - 15 words)
// Specifically aligned to grade 3-6 lesson patterns (dis-, tele-, -ous, silent letters, double consonants)
export const MEETING_2_MOCK_BEE_WORDS: string[] = [
  'disembark', 'flannel', 'telepathic', 'guardian', 'harmonious',
  'gimmick', 'cucumber', 'eavesdrop', 'nephew', 'astonish',
  'janitor', 'amphibian', 'miraculous', 'volcano', 'disconnect'
];

// Slide 12: Progress Check Word List (Meeting 2 - 10 words)
export const MEETING_2_PROGRESS_CHECK: DictationWord[] = [
  {
    id: 'm2-pc-1',
    word: 'miraculous',
    definition: 'resembling a miracle; extraordinary and wonderful',
    sentence: 'The trapped puppy made a miraculous escape from the storm drain.',
    difficulty: 'Progress-Check',
    trickyPart: "Ends with '-ulous' (m-i-r-a-c-u-l-o-u-s)"
  },
  {
    id: 'm2-pc-2',
    word: 'trendy',
    definition: 'very fashionable or up to date in style',
    sentence: 'She wore a trendy yellow jacket to the spelling bee banquet.',
    difficulty: 'Progress-Check',
    trickyPart: "t-r-e-n-d-y (ends in 'y')"
  },
  {
    id: 'm2-pc-3',
    word: 'permafrost',
    definition: 'a thick subsurface layer of soil that remains frozen throughout the year',
    sentence: 'The Arctic tundra is anchored by thousands of feet of permafrost.',
    difficulty: 'Progress-Check',
    trickyPart: "Compound: 'perma' (permanent) + 'frost'"
  },
  {
    id: 'm2-pc-4',
    word: 'iceberg',
    definition: 'a large floating mass of ice detached from a glacier into the sea',
    sentence: 'The ship navigated carefully around the towering blue iceberg.',
    difficulty: 'Progress-Check',
    trickyPart: "i-c-e-b-e-r-g"
  },
  {
    id: 'm2-pc-5',
    word: 'cactus',
    definition: 'a succulent plant with a thick fleshy stem and spines',
    sentence: 'The saguaro cactus blooms with white blossoms in the desert heat.',
    difficulty: 'Progress-Check',
    trickyPart: "Ends in '-us' (noun form, not '-ous')"
  },
  {
    id: 'm2-pc-6',
    word: 'nationalism',
    definition: 'identification with one’s own nation and support for its interests',
    sentence: 'Flags wave proudly as a symbol of shared civic nationalism.',
    difficulty: 'Progress-Check',
    trickyPart: "Root 'nation' + '-al' + '-ism'"
  },
  {
    id: 'm2-pc-7',
    word: 'leeway',
    definition: 'the amount of freedom to move or act that is available',
    sentence: 'The judge gave the nervous speller some leeway to collect her thoughts.',
    difficulty: 'Progress-Check',
    trickyPart: "Double 'e': l-e-e-w-a-y"
  },
  {
    id: 'm2-pc-8',
    word: 'pilferer',
    definition: 'a thief who steals items of small value',
    sentence: 'The mischievous raccoon was a nocturnal pilferer of campsite snacks.',
    difficulty: 'Progress-Check',
    trickyPart: "Ends with '-er-er': p-i-l-f-e-r-e-r"
  },
  {
    id: 'm2-pc-9',
    word: 'rollicking',
    definition: 'exuberantly lively and amusing; high-spirited',
    sentence: 'The classroom shared a rollicking celebration after the final round.',
    difficulty: 'Progress-Check',
    trickyPart: "Contains 'ck' + 'ing': r-o-l-l-i-c-k-i-n-g"
  },
  {
    id: 'm2-pc-10',
    word: 'quart',
    definition: 'a unit of liquid capacity equal to a quarter of a gallon',
    sentence: 'We bought a cold quart of fresh milk at the country market.',
    difficulty: 'Progress-Check',
    trickyPart: "q-u-a-r-t (begins with 'qu')"
  }
];

// Meeting 2 Full 59 Words (From Study List Handout)
export const MEETING_2_FULL_59_WORDS: string[] = [
  'triumphant', 'guardian', 'cascade', 'amphibian', 'eavesdrop',
  'astonish', 'genius', 'fortification', 'remedial', 'trivia',
  'disembark', 'telepathic', 'harmonious', 'hydra', 'volumetric',
  'gargantuan', 'chaotic', 'shrimp', 'satellite', 'parasite',
  'favorite', 'famous', 'pristine', 'golden', 'modesty',
  'jealousy', 'vouch', 'shoulder', 'zebra', 'butterscotch',
  'apron', 'beagle', 'kidney', 'raven', 'gimmick',
  'flannel', 'cucumber', 'janitor', 'lionize', 'spreadsheet',
  'badger', 'nephew', 'imbibe', 'savvy', 'reckon',
  'boorish', 'nurture', 'volcano', 'forensics', 'miraculous',
  'trendy', 'permafrost', 'iceberg', 'cactus', 'nationalism',
  'leeway', 'pilferer', 'rollicking', 'quart'
];

// =============================================================================
// MEETING 3: "LEVELING UP: TWO-BEE WORDS" (Grade 3–6 • 90 Minutes)
// =============================================================================

// Slide 4: Warm-Up Word List (Meeting 3 - 10 words)
export const MEETING_3_WARM_UP: DictationWord[] = [
  {
    id: 'm3-wu-1',
    word: 'hexagonal',
    definition: 'having six straight sides and six angles',
    sentence: 'Bees build honeycombs with a beautiful hexagonal pattern.',
    difficulty: 'Warm-Up',
    trickyPart: "From Greek 'hexa' (six): h-e-x-a-g-o-n-a-l"
  },
  {
    id: 'm3-wu-2',
    word: 'seethe',
    definition: 'to bubble up as if boiling, or be filled with intense unexpressed anger',
    sentence: 'He tried not to seethe with frustration after missing the letter.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends with 't-h-e' with double 'e': s-e-e-t-h-e"
  },
  {
    id: 'm3-wu-3',
    word: 'antiquarian',
    definition: 'a person who collects or studies rare, ancient objects and books',
    sentence: 'The antiquarian examined the centuries-old illuminated manuscript.',
    difficulty: 'Warm-Up',
    trickyPart: "Contains 'quar' (q-u-a-r) + '-ian'"
  },
  {
    id: 'm3-wu-4',
    word: 'bachelorette',
    definition: 'an unmarried woman, or a celebration for a bride-to-be',
    sentence: 'The bridesmaids organized a festive bachelorette brunch.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends with French diminutive '-ette': b-a-c-h-e-l-o-r-e-t-t-e"
  },
  {
    id: 'm3-wu-5',
    word: 'unctuous',
    definition: 'excessively flattering or oily in speech; greasy in texture',
    sentence: 'The dishonest salesman spoke with an unctuous and insincere tone.',
    difficulty: 'Warm-Up',
    trickyPart: "u-n-c-t-u-o-u-s (contains 'ct' + 'u' + 'ous')"
  },
  {
    id: 'm3-wu-6',
    word: 'fluoride',
    definition: 'a compound of fluorine added to drinking water to strengthen teeth',
    sentence: 'Brushing with fluoride toothpaste helps protect against dental cavities.',
    difficulty: 'Warm-Up',
    trickyPart: "'u' comes before 'o': f-l-u-o-r-i-d-e (not flouride!)"
  },
  {
    id: 'm3-wu-7',
    word: 'epilepsy',
    definition: 'a neurological disorder marked by sudden recurrent seizures',
    sentence: 'Modern medicine provides effective treatments to manage epilepsy.',
    difficulty: 'Warm-Up',
    trickyPart: "Ends in '-lepsy': e-p-i-l-e-p-s-y"
  },
  {
    id: 'm3-wu-8',
    word: 'citronella',
    definition: 'a fragrant natural oil from grass, used as an insect repellent',
    sentence: 'We lit citronella candles to keep mosquitoes away from the porch.',
    difficulty: 'Warm-Up',
    trickyPart: "c-i-t-r-o-n-e-l-l-a (double 'l')"
  },
  {
    id: 'm3-wu-9',
    word: 'palliative',
    definition: 'relieving pain or alleviating symptoms without curing the cause',
    sentence: 'The doctor provided gentle palliative care to soothe the patient.',
    difficulty: 'Warm-Up',
    trickyPart: "Double 'l': p-a-l-l-i-a-t-i-v-e"
  },
  {
    id: 'm3-wu-10',
    word: 'personnel',
    definition: 'people employed in an organization or military service',
    sentence: 'Only authorized security personnel are permitted in the control room.',
    difficulty: 'Warm-Up',
    trickyPart: "Double 'n', single 'l': p-e-r-s-o-n-n-e-l (different from personal!)"
  }
];

// Slide 5: Tricky Spelling Patterns (Meeting 3)
export const MEETING_3_PATTERNS: TrickyPattern[] = [
  {
    id: 'm3-pat-french',
    title: 'French Loanwords',
    category: 'french-loanwords',
    rule: "Borrowed words often keep their original accent marks and silent letters from French.",
    keyWord: 'soirée',
    keyWordExplanation: "borrowed words often keep their accent marks — an evening party!",
    additionalExamples: [
      'soirée (an evening party, keeps accent mark é)',
      'faux (artificial or fake — silent x!)',
      'duvet (soft warm bed quilt — silent t!)',
      'rotisserie (spinning grill for roasting meat)'
    ],
    spotlightHint: "French loanwords frequently have accent marks (é) and silent final consonants (t, x)!"
  },
  {
    id: 'm3-pat-phil',
    title: 'Root PHIL-',
    category: 'roots-affixes',
    rule: "The Greek root 'phil-' means 'love', 'devotion to', or 'friendship'.",
    keyWord: 'philharmonic',
    keyWordExplanation: "phil- means 'love' — devoted to (in love with) music!",
    additionalExamples: [
      'philharmonic (devoted to music / symphony orchestra)',
      'philosophy (love of wisdom)',
      'philanthropy (love of humankind / charity)',
      'bibliophile (someone who loves books)'
    ],
    spotlightHint: "Greek 'ph' makes the /f/ sound, combined with 'i-l'!"
  },
  {
    id: 'm3-pat-phobia',
    title: 'Root -PHOBIA',
    category: 'roots-affixes',
    rule: "The Greek root '-phobia' means 'fear' or 'intense aversion'.",
    keyWord: 'brontophobia',
    keyWordExplanation: "-phobia means 'fear' — fear of thunder!",
    additionalExamples: [
      'brontophobia (fear of thunder and lightning)',
      'claustrophobia (fear of tight enclosed spaces)',
      'arachnophobia (fear of spiders)',
      'hydrophobia (fear of water)'
    ],
    spotlightHint: "Always ends in p-h-o-b-i-a. Greek roots feature the 'ph' spelling!"
  }
];

// Slide 6 & 7: Word Study Rounds 1 & 2 (Meeting 3 "Words to Know")
export const MEETING_3_WORDS_TO_KNOW: Flashcard[] = [
  // Round 1 (Slide 6)
  {
    id: 'm3-r1-1',
    word: 'abhorrence',
    definition: 'a strong feeling of hatred or disgust',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'The honest captain had an abhorrence for cowardice and cheating.',
    syllables: 'ab-hor-rence',
    phoneticHint: '/æbˈhɔːr.əns/',
    languageOrigin: 'Latin (abhorrere)',
    trickyPattern: "Double 'r' and ends with '-ence' (not '-ance')!",
    lesson: 'Meeting 3 · Round 1',
    funFact: "Comes from Latin 'horrere', which means to shudder or bristle with horror!"
  },
  {
    id: 'm3-r1-2',
    word: 'alacrity',
    definition: 'brisk, eager readiness or willingness',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'She accepted the challenge with prompt and cheerful alacrity.',
    syllables: 'a-lac-ri-ty',
    phoneticHint: '/əˈlæk.rə.ti/',
    languageOrigin: 'Latin (alacritas)',
    trickyPattern: "a-l-a-c-r-i-t-y (single 'l', single 'c')",
    lesson: 'Meeting 3 · Round 1',
    funFact: "Often used in classic literature to praise someone who carries out instructions quickly!"
  },
  {
    id: 'm3-r1-3',
    word: 'choreographer',
    definition: 'a person who designs dance movements',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'The choreographer staged a magnificent routine for the ballet company.',
    syllables: 'cho-re-og-ra-pher',
    phoneticHint: '/ˌkɔːr.iˈɑː.ɡrə.fər/',
    languageOrigin: 'Greek (choreia = dance + grapho = write)',
    trickyPattern: "'ch' pronounced like /k/, followed by 'o-r-e-o-g-r-a-p-h-e-r'.",
    lesson: 'Meeting 3 · Round 1',
    funFact: "Literally means 'dance-writer' in ancient Greek!"
  },
  {
    id: 'm3-r1-4',
    word: 'sophomoric',
    definition: 'overly confident but immature',
    partOfSpeech: 'adjective',
    category: 'meeting-3-words-to-know',
    example: 'The judge warned that making silly faces was sophomoric behavior.',
    syllables: 'soph-o-mor-ic',
    phoneticHint: '/ˌsɑː.fəˈmɔːr.ɪk/',
    languageOrigin: 'Greek (sophos = wise + moros = foolish)',
    trickyPattern: "Combines 'wise' and 'foolish' in Greek: s-o-p-h-o-m-o-r-i-c.",
    lesson: 'Meeting 3 · Round 1',
    funFact: "A true oxymoron: 'sophos' (wise) + 'moros' (moron/foolish) = wise fool!"
  },

  // Round 2 (Slide 7)
  {
    id: 'm3-r2-1',
    word: 'hydrangea',
    definition: 'a shrub with big, round clusters of flowers',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'The cottage garden was illuminated with blue hydrangea blossoms.',
    syllables: 'hy-dran-ge-a',
    phoneticHint: '/haɪˈdreɪn.dʒə/',
    languageOrigin: 'Greek (hydor = water + angeion = vessel)',
    trickyPattern: "Ends in '-gea' (soft 'g' sound followed by 'e-a').",
    lesson: 'Meeting 3 · Round 2',
    funFact: "Hydrangea flowers turn blue in acidic soil and pink in alkaline soil!"
  },
  {
    id: 'm3-r2-2',
    word: 'antiquarian',
    definition: 'a person who collects or studies rare, old objects',
    partOfSpeech: 'noun / adjective',
    category: 'meeting-3-words-to-know',
    example: 'The antiquarian cataloged centuries-old coins and antique clocks.',
    syllables: 'an-ti-quar-i-an',
    phoneticHint: '/ˌæn.təˈkwer.i.ən/',
    languageOrigin: 'Latin (antiquarius)',
    trickyPattern: "Contains 'quar' (q-u-a-r) + '-ian'.",
    lesson: 'Meeting 3 · Round 2',
    funFact: "Antiquarians in the 17th century rescued thousands of ancient Greek and Roman manuscripts!"
  },
  {
    id: 'm3-r2-3',
    word: 'perseverance',
    definition: 'continued effort to do something despite difficulty',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'Her tireless perseverance through tough rounds brought her the championship.',
    syllables: 'per-se-ver-ance',
    phoneticHint: '/ˌpɜːr.səˈvɪr.əns/',
    languageOrigin: 'Latin (perseverare)',
    trickyPattern: "Ends in '-ance' (not '-ence')!",
    lesson: 'Meeting 3 · Round 2',
    funFact: "NASA named its famous Mars rover 'Perseverance' after a student essay contest!"
  },
  {
    id: 'm3-r2-4',
    word: 'buoyancy',
    definition: 'the ability of something to float',
    partOfSpeech: 'noun',
    category: 'meeting-3-words-to-know',
    example: 'The natural buoyancy of the life vest kept the swimmer above the waves.',
    syllables: 'buoy-an-cy',
    phoneticHint: '/ˈbɔɪ.ən.si/',
    languageOrigin: 'Spanish (boyar - to float)',
    trickyPattern: "Starts with 'b-u-o-y' (silent 'u' after 'b') + '-ancy'.",
    lesson: 'Meeting 3 · Round 2',
    funFact: "Comes from 'buoy', the floating navigation marker in ocean channels!"
  }
];

// Slide 8: Listening Stations (Meeting 3)
export const MEETING_3_STATION_1_PARTNER: string[] = [
  'hexagonal', 'seethe', 'antiquarian', 'bachelorette', 'unctuous',
  'fluoride', 'epilepsy', 'citronella', 'palliative', 'personnel'
];

export const MEETING_3_STATION_2_AUDIO: string[] = [
  'vexatious', 'faux', 'sophisticated', 'nebulous', 'genus',
  'legionnaire', 'subcutaneous', 'alacrity', 'choreographer', 'leguminous'
];

export const MEETING_3_STATION_3_QUIZ: string[] = [
  'ceramics', 'mimetic', 'unabated', 'petrifying', 'specimen',
  'interlocutor', 'machete', 'dulcet', 'salubrious', 'rotisserie'
];

// Slide 10: Mock Spelling Bee Stage List (Meeting 3 - 15 words)
// Specifically aligned to grade 3-6 lesson patterns (French loanwords, roots phil- & -phobia, Two-Bee patterns)
export const MEETING_3_MOCK_BEE_WORDS: string[] = [
  'soirée', 'philharmonic', 'brontophobia', 'duvet', 'spectacles',
  'innovator', 'personnel', 'rotisserie', 'perseverance', 'buoyancy',
  'fluoride', 'hallowed', 'seismologist', 'fondant', 'commerce'
];

// Slide 12: Progress Check Word List (Meeting 3 - 10 words)
export const MEETING_3_PROGRESS_CHECK: DictationWord[] = [
  {
    id: 'm3-pc-1',
    word: 'fondant',
    definition: 'a thick paste made of sugar and water, used for decorating cakes',
    sentence: 'The baker smoothed pristine white fondant across the celebration cake.',
    difficulty: 'Progress-Check',
    trickyPart: "French origin: f-o-n-d-a-n-t"
  },
  {
    id: 'm3-pc-2',
    word: 'cupola',
    definition: 'a small dome-like structure on a roof',
    sentence: 'A bronze weather vane spun freely above the barn cupola.',
    difficulty: 'Progress-Check',
    trickyPart: "c-u-p-o-l-a"
  },
  {
    id: 'm3-pc-3',
    word: 'herbaceous',
    definition: 'denoting plants that have non-woody stems',
    sentence: 'Parsley and cilantro are tender herbaceous garden plants.',
    difficulty: 'Progress-Check',
    trickyPart: "Ends in '-aceous': h-e-r-b-a-c-e-o-u-s"
  },
  {
    id: 'm3-pc-4',
    word: 'pachinko',
    definition: 'a Japanese arcade game resembling a vertical pinball machine',
    sentence: 'The bright Tokyo entertainment district was filled with noisy pachinko parlors.',
    difficulty: 'Progress-Check',
    trickyPart: "Japanese loanword: p-a-c-h-i-n-k-o"
  },
  {
    id: 'm3-pc-5',
    word: 'decrepitude',
    definition: 'the state of being worn out or weakened by age or long use',
    sentence: 'The old timber bridge had fallen into quiet decrepitude.',
    difficulty: 'Progress-Check',
    trickyPart: "d-e-c-r-e-p-i-t-u-d-e"
  },
  {
    id: 'm3-pc-6',
    word: 'dramaturgy',
    definition: 'the theory and practice of dramatic composition and theatrical representation',
    sentence: 'The university student studied classical Greek dramaturgy.',
    difficulty: 'Progress-Check',
    trickyPart: "Ends in '-urgy': d-r-a-m-a-t-u-r-g-y"
  },
  {
    id: 'm3-pc-7',
    word: 'murmuration',
    definition: 'a flock of starlings that flies together in sweeping shapes',
    sentence: 'A mesmerizing murmuration of starlings wheeled across the sunset sky.',
    difficulty: 'Progress-Check',
    trickyPart: "m-u-r-m-u-r-a-t-i-o-n (contains double 'mur')"
  },
  {
    id: 'm3-pc-8',
    word: 'phonics',
    definition: 'a method of teaching reading by correlating sounds with letters',
    sentence: 'Practicing phonics helps spellers break words into phonemes.',
    difficulty: 'Progress-Check',
    trickyPart: "Greek 'ph' makes the /f/ sound: p-h-o-n-i-c-s"
  },
  {
    id: 'm3-pc-9',
    word: 'calisthenics',
    definition: 'gymnastic exercises to achieve bodily fitness and graceful movement',
    sentence: 'Morning calisthenics kept the athletes limber and energized.',
    difficulty: 'Progress-Check',
    trickyPart: "c-a-l-i-s-t-h-e-n-i-c-s (contains 'th')"
  },
  {
    id: 'm3-pc-10',
    word: 'torrent',
    definition: 'a strong and fast-moving stream of water or other liquid',
    sentence: 'Heavy rain transformed the dry gully into a rushing torrent.',
    difficulty: 'Progress-Check',
    trickyPart: "Double 'r': t-o-r-r-e-n-t"
  }
];

// Meeting 3 Full 61 Words (From Study List Handout)
export const MEETING_3_FULL_61_WORDS: string[] = [
  'hexagonal', 'seethe', 'antiquarian', 'bachelorette', 'unctuous',
  'fluoride', 'epilepsy', 'citronella', 'palliative', 'personnel',
  'soirée', 'philharmonic', 'brontophobia', 'hydrangea', 'perseverance',
  'buoyancy', 'vexatious', 'faux', 'sophisticated', 'nebulous',
  'genus', 'legionnaire', 'subcutaneous', 'alacrity', 'choreographer',
  'leguminous', 'ceramics', 'mimetic', 'unabated', 'petrifying',
  'specimen', 'interlocutor', 'machete', 'dulcet', 'salubrious',
  'rotisserie', 'banal', 'seismologist', 'spectacles', 'innovator',
  'bursary', 'hallowed', 'apogee', 'hiatus', 'freesia',
  'exoneration', 'duvet', 'turpitude', 'platitude', 'nobiliary',
  'commerce', 'fondant', 'cupola', 'herbaceous', 'pachinko',
  'decrepitude', 'dramaturgy', 'murmuration', 'phonics', 'calisthenics',
  'torrent'
];

// =============================================================================
// COMPLETE WORD DEFINITIONS MAP FOR BOTH STUDY LISTS (120 words total)
// =============================================================================
export const ALL_WORDS_MAP: Record<string, { def: string; ex: string; orig?: string; pattern?: string; syll?: string }> = {
  // Meeting 2 Full 59
  triumphant: { def: 'feeling or expressing great joy after winning a victory', ex: 'The speller gave a triumphant cheer when the bell stayed silent.', syll: 'tri-um-phant', orig: 'Latin', pattern: "Ends in '-ant'" },
  guardian: { def: 'a person who protects or takes care of someone', ex: 'Her guardian stood proudly in the auditorium.', syll: 'guard-i-an', orig: 'Old French', pattern: "Silent 'u' after 'g'" },
  cascade: { def: 'a small waterfall, or things happening in quick succession', ex: 'A cascade of autumn leaves fluttered to the ground.', syll: 'cas-cade', orig: 'Italian / French', pattern: "Hard /k/ then soft /s/" },
  amphibian: { def: 'an animal that can live both in water and on land', ex: 'Frogs and newts are examples of an amphibian.', syll: 'am-phib-i-an', orig: 'Greek', pattern: "'ph' as /f/" },
  eavesdrop: { def: 'to secretly listen to a private conversation', ex: 'Do not eavesdrop at the conference door.', syll: 'eaves-drop', orig: 'Old English', pattern: "'e' before 'a'" },
  astonish: { def: 'to surprise or amaze someone greatly', ex: 'Her encyclopedic knowledge will astonish the judges.', syll: 'as-ton-ish', orig: 'Old French', pattern: "Ends in '-ish'" },
  genius: { def: 'exceptional intellectual or creative power', ex: 'He showed a genius for solving orthographic puzzles.', syll: 'ge-nius', orig: 'Latin', pattern: "Ends in '-us'" },
  fortification: { def: 'a structure built to defend against attack', ex: 'The fortress fortification stood against the gale.', syll: 'for-ti-fi-ca-tion', orig: 'Latin', pattern: "Root 'fortis' = strong" },
  remedial: { def: 'intended as a remedy to improve a deficiency', ex: 'He attended remedial spelling practice sessions.', syll: 're-me-di-al', orig: 'Latin', pattern: "r-e-m-e-d-i-a-l" },
  trivia: { def: 'pieces of information of little value or importance; quiz facts', ex: 'The trivia competition tested word origins.', syll: 'triv-i-a', orig: 'Latin', pattern: "Plural form of trivium" },
  disembark: { def: 'to leave a ship, aircraft, or vehicle', ex: 'Passengers will disembark through the forward cabin door.', syll: 'dis-em-bark', orig: 'Prefix dis- (away)', pattern: "Prefix 'dis-' + embark" },
  telepathic: { def: 'reading minds or thoughts from far away', ex: 'The identical twins appeared telepathic on stage.', syll: 'tel-e-path-ic', orig: 'Greek tele- (far)', pattern: "Root 'tele-' = far" },
  harmonious: { def: 'full of harmony, melody, and agreement', ex: 'The chamber choir sang in harmonious blend.', syll: 'har-mo-ni-ous', orig: 'Suffix -ous (full of)', pattern: "Suffix '-ous' = full of" },
  hydra: { def: 'a mythical serpent with many heads', ex: 'Hercules conquered the many-headed Hydra.', syll: 'hy-dra', orig: 'Greek', pattern: "Uses 'y' for /aɪ/" },
  volumetric: { def: 'relating to the measurement of volume', ex: 'A volumetric cylinder measures exact cubic milliliters.', syll: 'vol-u-met-ric', orig: 'Latin', pattern: "volu- + metric" },
  gargantuan: { def: 'enormously huge or gigantic', ex: 'A gargantuan wave crashed against the sea barrier.', syll: 'gar-gan-tu-an', orig: 'Literary', pattern: "From Gargantua" },
  chaotic: { def: 'in a state of complete confusion and disorder', ex: 'The hall was chaotic before the rounds began.', syll: 'cha-ot-ic', orig: 'Greek', pattern: "'ch' pronounced /k/" },
  shrimp: { def: 'a small edible free-swimming crustacean', ex: 'Fresh Gulf shrimp sizzled in the skillet.', syll: 'shrimp', orig: 'Middle English', pattern: "'sh' and 'mp'" },
  satellite: { def: 'an artificial body placed in orbit round the earth', ex: 'The communications satellite beamed live signals.', syll: 'sat-el-lite', orig: 'Latin', pattern: "Double 'l': s-a-t-e-l-l-i-t-e" },
  parasite: { def: 'an organism that lives in or on a host organism', ex: 'A tick is a parasitic creature.', syll: 'par-a-site', orig: 'Greek', pattern: "p-a-r-a-s-i-t-e" },
  favorite: { def: 'preferred before all others of the same kind', ex: 'Spelling Bee is my favorite academic contest.', syll: 'fa-vor-ite', orig: 'Latin', pattern: "American 'favorite'" },
  famous: { def: 'known about by many people', ex: 'Dr. Jacques Bailly is famous across the spelling world.', syll: 'fa-mous', orig: 'Latin', pattern: "Ends in '-ous'" },
  pristine: { def: 'in its original condition; unspoiled and spotless', ex: 'The new dictionary arrived in pristine condition.', syll: 'pris-tine', orig: 'Latin', pattern: "Ends in silent 'e'" },
  golden: { def: 'made of, resembling, or shining like gold', ex: 'The winner lifted the golden Scripps trophy.', syll: 'gold-en', orig: 'Old English', pattern: "Root 'gold' + '-en'" },
  modesty: { def: 'the quality of being humble and unpretentious', ex: 'She received the prize with genuine modesty.', syll: 'mod-es-ty', orig: 'Latin', pattern: "m-o-d-e-s-t-y" },
  jealousy: { def: 'resentment against someone because of their success', ex: 'Do not let jealousy cloud good sportsmanship.', syll: 'jeal-ous-y', orig: 'Old French', pattern: "Starts with 'j-e-a-l'" },
  vouch: { def: 'confirm or assert as a result of experience', ex: 'Her coach will vouch for her intense daily practice.', syll: 'vouch', orig: 'Old French', pattern: "v-o-u-c-h" },
  shoulder: { def: 'part of the body between neck and upper arm', ex: 'He patted his teammate on the shoulder.', syll: 'shoul-der', orig: 'Old English', pattern: "Contains 'ou'" },
  zebra: { def: 'an African wild horse with black-and-white stripes', ex: 'A zebra stood vigilant on the savanna.', syll: 'ze-bra', orig: 'Italian / Portuguese', pattern: "z-e-b-r-a" },
  butterscotch: { def: 'confectionery flavor of brown sugar and butter', ex: 'He unwrapped a smooth butterscotch drop.', syll: 'but-ter-scotch', orig: 'English', pattern: "Compound: butter + scotch" },
  apron: { def: 'a protective garment worn over front clothes', ex: 'The baker tied her apron tight.', syll: 'a-pron', orig: 'Old French (naperon)', pattern: "a-p-r-o-n" },
  beagle: { def: 'a small breed of hound with droopy ears', ex: 'The lively beagle sniffed around the yard.', syll: 'bea-gle', orig: 'Old French', pattern: "Ends in '-le'" },
  kidney: { def: 'one of a pair of organs that filter blood', ex: 'Drinking water keeps kidney health optimal.', syll: 'kid-ney', orig: 'Middle English', pattern: "Ends in '-ey'" },
  raven: { def: 'a large black bird with a croaking call', ex: 'A raven roosted high in the oak tree.', syll: 'ra-ven', orig: 'Old English', pattern: "r-a-v-e-n" },
  gimmick: { def: 'a trick or device intended to attract attention', ex: 'No gimmick can replace honest hard work.', syll: 'gim-mick', orig: 'American Slang', pattern: "Double 'm': g-i-m-m-i-c-k" },
  flannel: { def: 'a soft-woven woollen or cotton cloth', ex: 'He wore a warm checkered flannel shirt.', syll: 'flan-nel', orig: 'Welsh', pattern: "Double 'n': f-l-a-n-n-e-l" },
  cucumber: { def: 'a long green-skinned vegetable eaten in salads', ex: 'Crisp cucumber slices refreshed the salad.', syll: 'cu-cum-ber', orig: 'Latin', pattern: "c-u-c-u-m-b-e-r" },
  janitor: { def: 'a person employed to take care of a building', ex: 'The school janitor polished the stage floor.', syll: 'jan-i-tor', orig: 'Latin (janua = door)', pattern: "Ends in '-or'" },
  lionize: { def: 'give a lot of public attention and praise to someone', ex: 'The town gathered to lionize the national speller.', syll: 'li-on-ize', orig: 'English', pattern: "American '-ize'" },
  spreadsheet: { def: 'an electronic document arranged in rows and columns', ex: 'She tallied scores on an interactive spreadsheet.', syll: 'spread-sheet', orig: 'Modern English', pattern: "Compound: spread + sheet" },
  badger: { def: 'a heavily built burrowing mammal with striped face', ex: 'A badger dug its nocturnal den.', syll: 'bad-ger', orig: 'Middle English', pattern: "b-a-d-g-e-r" },
  nephew: { def: 'a son of one’s brother or sister', ex: 'Her nephew took first place in the fifth grade bee.', syll: 'neph-ew', orig: 'Old French', pattern: "'ph' as /f/" },
  imbibe: { def: 'to drink liquids or absorb ideas', ex: 'Young minds imbibe knowledge eagerly.', syll: 'im-bibe', orig: 'Latin (imbibere)', pattern: "i-m-b-i-b-e" },
  savvy: { def: 'shrewd and knowledgeable in practical matters', ex: 'A savvy speller asks for word origins.', syll: 'sav-vy', orig: 'Spanish (sabe)', pattern: "Double 'v': s-a-v-v-y" },
  reckon: { def: 'establish by calculation, or consider / believe', ex: 'I reckon that practice builds true mastery.', syll: 'reck-on', orig: 'Old English', pattern: "Ends in '-on'" },
  boorish: { def: 'rough and bad-mannered; coarse', ex: 'Gloating over an opponent is boorish behavior.', syll: 'boor-ish', orig: 'Dutch (boer)', pattern: "Double 'o': b-o-o-r-i-s-h" },
  nurture: { def: 'care for and encourage the growth of someone', ex: 'Dedicated teachers nurture young spelling talent.', syll: 'nur-ture', orig: 'Old French', pattern: "n-u-r-t-u-r-e" },
  volcano: { def: 'a mountain with a crater erupting lava', ex: 'The volcanic cone smoked in the distance.', syll: 'vol-ca-no', orig: 'Italian (Vulcan)', pattern: "v-o-l-c-a-n-o" },
  forensics: { def: 'scientific methods used to investigate crimes', ex: 'Forensics solved the historic case.', syll: 'fo-ren-sics', orig: 'Latin (forum)', pattern: "f-o-r-e-n-s-i-c-s" },
  miraculous: { def: 'resembling a miracle; extraordinary', ex: 'The team completed a miraculous comeback.', syll: 'mi-rac-u-lous', orig: 'Latin', pattern: "m-i-r-a-c-u-l-o-u-s" },
  trendy: { def: 'very fashionable and modern', ex: 'She wore a trendy bee emblem pin.', syll: 'tren-dy', orig: 'English', pattern: "t-r-e-n-d-y" },
  permafrost: { def: 'subsurface ground that remains frozen', ex: 'Buildings in the Arctic sit on permafrost.', syll: 'per-ma-frost', orig: 'Compound', pattern: "perma + frost" },
  iceberg: { def: 'a large floating mass of glacier ice', ex: 'The iceberg floated majestically in the fjord.', syll: 'ice-berg', orig: 'Dutch / Scandinavian', pattern: "ice + berg" },
  cactus: { def: 'succulent plant with fleshy stem and spines', ex: 'The desert cactus stores rainwater efficiently.', syll: 'cac-tus', orig: 'Greek / Latin', pattern: "Ends in '-us'" },
  nationalism: { def: 'devotion and loyalty to one’s own nation', ex: 'Olympic games stir feelings of civic nationalism.', syll: 'na-tion-al-ism', orig: 'Latin', pattern: "nation + al + ism" },
  leeway: { def: 'amount of freedom or margin available', ex: 'The judge gave the nervous speller leeway.', syll: 'lee-way', orig: 'Nautical English', pattern: "Double 'e': l-e-e-w-a-y" },
  pilferer: { def: 'a petty thief who steals items of small value', ex: 'The crow acted like a pilferer of shiny buttons.', syll: 'pil-fer-er', orig: 'Old French', pattern: "p-i-l-f-e-r-e-r" },
  rollicking: { def: 'exuberantly lively and amusing', ex: 'The audience had a rollicking good time.', syll: 'rol-lick-ing', orig: 'English', pattern: "r-o-l-l-i-c-k-i-n-g" },
  quart: { def: 'a unit of liquid capacity equal to 1/4 gallon', ex: 'She bought a quart of lemonade.', syll: 'quart', orig: 'Latin (quartus = fourth)', pattern: "q-u-a-r-t" },

  // Meeting 3 Full 61 + 2 (Round 1)
  abhorrence: { def: 'a strong feeling of hatred or disgust', ex: 'She felt an abhorrence for any form of cruelty.', syll: 'ab-hor-rence', orig: 'Latin', pattern: "Double 'r', ends in '-ence'" },
  alacrity: { def: 'brisk, eager readiness or willingness', ex: 'He accepted the spelling challenge with alacrity.', syll: 'a-lac-ri-ty', orig: 'Latin', pattern: "a-l-a-c-r-i-t-y" },
  choreographer: { def: 'a person who designs dance movements', ex: 'The choreographer staged a lively musical routine.', syll: 'cho-re-og-ra-pher', orig: 'Greek', pattern: "'ch' as /k/ + grapher" },
  sophomoric: { def: 'overly confident but immature', ex: 'He regretted his sophomoric remarks.', syll: 'soph-o-mor-ic', orig: 'Greek', pattern: "sophos (wise) + moros (fool)" },
  hexagonal: { def: 'having six straight sides and six angles', ex: 'The bee honeycomb is naturally hexagonal.', syll: 'hex-ag-o-nal', orig: 'Greek', pattern: "From Greek 'hexa' (six)" },
  seethe: { def: 'to bubble up, or be filled with unexpressed anger', ex: 'He tried not to seethe after making an error.', syll: 'seethe', orig: 'Old English', pattern: "s-e-e-t-h-e" },
  antiquarian: { def: 'a person who collects or studies rare old objects', ex: 'The antiquarian restored the antique globe.', syll: 'an-ti-quar-i-an', orig: 'Latin', pattern: "Contains 'quar' + '-ian'" },
  bachelorette: { def: 'an unmarried woman, or a pre-wedding celebration', ex: 'They threw a cheerful bachelorette party.', syll: 'bach-e-lor-ette', orig: 'French suffix -ette', pattern: "Ends with '-ette'" },
  unctuous: { def: 'excessively flattering or oily in speech', ex: 'His unctuous compliments felt insincere.', syll: 'unc-tu-ous', orig: 'Latin (ungere = anoint)', pattern: "u-n-c-t-u-o-u-s" },
  fluoride: { def: 'a fluorine compound added to water for teeth', ex: 'Fluoride protects teeth enamel.', syll: 'flu-o-ride', orig: 'Latin', pattern: "'u' before 'o': f-l-u-o-r-i-d-e" },
  epilepsy: { def: 'neurological disorder marked by recurrent seizures', ex: 'Medication helps control symptoms of epilepsy.', syll: 'ep-i-lep-sy', orig: 'Greek', pattern: "e-p-i-l-e-p-s-y" },
  citronella: { def: 'natural fragrant grass oil used as insect repellent', ex: 'Citronella candles illuminated the evening deck.', syll: 'cit-ro-nel-la', orig: 'Latin / French', pattern: "Double 'l': c-i-t-r-o-n-e-l-l-a" },
  palliative: { def: 'relieving pain without curing underlying cause', ex: 'Herbs provided palliative relief for the headache.', syll: 'pal-li-a-tive', orig: 'Latin (pallium = cloak)', pattern: "Double 'l': p-a-l-l-i-a-t-i-v-e" },
  personnel: { def: 'people employed in an organization', ex: 'All medical personnel reported to their stations.', syll: 'per-son-nel', orig: 'French', pattern: "Double 'n', single 'l'" },
  soirée: { def: 'an evening party or refined gathering', ex: 'They attended an elegant musical soirée.', syll: 'soi-rée', orig: 'French', pattern: "Keeps accent mark: s-o-i-r-é-e" },
  philharmonic: { def: 'devoted to music; a symphony orchestra', ex: 'The New York Philharmonic gave a sold-out concert.', syll: 'phil-har-mon-ic', orig: 'Greek phil- (love)', pattern: "phil- = love of music" },
  brontophobia: { def: 'abnormal fear of thunder and lightning', ex: 'The dog trembled from brontophobia during storms.', syll: 'bron-to-pho-bia', orig: 'Greek', pattern: "bronto (thunder) + phobia (fear)" },
  hydrangea: { def: 'a shrub with big round clusters of flowers', ex: 'Vibrant pink hydrangea bloomed along the fence.', syll: 'hy-dran-ge-a', orig: 'Greek / Latin', pattern: "Ends in '-gea'" },
  perseverance: { def: 'continued effort despite difficulty', ex: 'Her perseverance carried her to the national stage.', syll: 'per-se-ver-ance', orig: 'Latin', pattern: "Ends in '-ance'" },
  buoyancy: { def: 'the ability of something to float', ex: 'The buoyancy of the raft kept all gear dry.', syll: 'buoy-an-cy', orig: 'Spanish', pattern: "Starts with 'b-u-o-y'" },
  vexatious: { def: 'causing annoyance, frustration, or worry', ex: 'Spelling silent letters can be a vexatious challenge.', syll: 'vex-a-tious', orig: 'Latin', pattern: "Ends in '-tious'" },
  faux: { def: 'made in imitation; artificial or fake', ex: 'She wore a cozy jacket lined with faux fur.', syll: 'faux', orig: 'French', pattern: "Silent 'x': f-a-u-x" },
  sophisticated: { def: 'having great knowledge or refined taste', ex: 'The computer used sophisticated algorithms.', syll: 'so-phis-ti-cat-ed', orig: 'Greek (sophos)', pattern: "'ph' as /f/" },
  nebulous: { def: 'cloudy, hazy, or ill-defined in concept', ex: 'His memory of the early rounds was nebulous.', syll: 'neb-u-lous', orig: 'Latin (nebula = mist)', pattern: "n-e-b-u-l-o-u-s" },
  genus: { def: 'a principal taxonomic category of organisms', ex: 'Panthera is the genus for large roaring cats.', syll: 'ge-nus', orig: 'Latin', pattern: "Ends in '-us'" },
  legionnaire: { def: 'a member of a legion or veteran association', ex: 'The French legionnaire stood at attention.', syll: 'le-gion-naire', orig: 'French', pattern: "Ends in '-naire'" },
  subcutaneous: { def: 'situated or applied under the skin', ex: 'The nurse gave a subcutaneous injection.', syll: 'sub-cu-ta-ne-ous', orig: 'Latin (sub + cutis)', pattern: "Ends in '-aneous'" },
  leguminous: { def: 'relating to the pea or bean family', ex: 'Soybeans and lentils are leguminous crops.', syll: 'le-gu-mi-nous', orig: 'Latin (legumen)', pattern: "Ends in '-ous'" },
  ceramics: { def: 'pots and items made from fired clay', ex: 'She crafted handmade ceramics in art class.', syll: 'ce-ram-ics', orig: 'Greek (keramos)', pattern: "Begins with soft 'c'" },
  mimetic: { def: 'relating to or characterized by imitation', ex: 'Chameleons use mimetic coloration to hide.', syll: 'mi-met-ic', orig: 'Greek (mimesis)', pattern: "m-i-m-e-t-i-c" },
  unabated: { def: 'without any reduction in intensity or strength', ex: 'The thunderstorm raged unabated through the night.', syll: 'un-a-bat-ed', orig: 'English', pattern: "Prefix 'un-' + abated" },
  petrifying: { def: 'making someone so frightened they cannot move', ex: 'Standing at the bee microphone was petrifying at first.', syll: 'pet-ri-fy-ing', orig: 'Greek (petra = stone)', pattern: "petra (stone) + fying" },
  specimen: { def: 'an individual animal, plant, or object for study', ex: 'The biologist preserved a rare butterfly specimen.', syll: 'spec-i-men', orig: 'Latin (specere = look)', pattern: "s-p-e-c-i-m-e-n" },
  interlocutor: { def: 'a person who takes part in a conversation', ex: 'The interviewer was a polite interlocutor.', syll: 'in-ter-loc-u-tor', orig: 'Latin', pattern: "Ends in '-or'" },
  machete: { def: 'a broad, heavy knife used as an implement or weapon', ex: 'The explorer cleared dense jungle vines with a machete.', syll: 'ma-che-te', orig: 'Spanish', pattern: "m-a-c-h-e-t-e" },
  dulcet: { def: 'sweet and soothing to hear or taste', ex: 'The pronouncer spoke in calm and dulcet tones.', syll: 'dul-cet', orig: 'Latin (dulcis = sweet)', pattern: "d-u-l-c-e-t" },
  salubrious: { def: 'health-giving, healthy, or pleasant', ex: 'The mountain air was brisk and salubrious.', syll: 'sa-lu-bri-ous', orig: 'Latin (salus = health)', pattern: "Ends in '-ous'" },
  rotisserie: { def: 'a cooking appliance with a rotating spit', ex: 'The chicken roasted golden on the rotisserie.', syll: 'ro-tis-se-rie', orig: 'French', pattern: "Double 's': r-o-t-i-s-s-e-r-i-e" },
  banal: { def: 'so lacking in originality as to be boring', ex: 'The speech was full of banal clichés.', syll: 'ba-nal', orig: 'French', pattern: "b-a-n-a-l" },
  seismologist: { def: 'a geophysicist who studies earthquakes', ex: 'The seismologist tracked seismic shockwaves.', syll: 'seis-mol-o-gist', orig: 'Greek (seismos = quake)', pattern: "Begins with 's-e-i-s'" },
  spectacles: { def: 'another term for eyeglasses', ex: 'He pushed his tortoise-shell spectacles up his nose.', syll: 'spec-ta-cles', orig: 'Latin (spectare = to look)', pattern: "s-p-e-c-t-a-c-l-e-s" },
  innovator: { def: 'a person who introduces new methods or ideas', ex: 'Steve Jobs was a pioneering tech innovator.', syll: 'in-no-va-tor', orig: 'Latin', pattern: "Double 'n', ends in '-or'" },
  bursary: { def: 'a scholarship or financial grant to attend school', ex: 'She earned a collegiate bursary for academic excellence.', syll: 'bur-sa-ry', orig: 'Medieval Latin (bursa = purse)', pattern: "Ends in '-ary'" },
  hallowed: { def: 'honored as holy, sacred, or greatly respected', ex: 'We walked through the hallowed halls of the library.', syll: 'hal-lowed', orig: 'Old English', pattern: "Double 'l': h-a-l-l-o-w-e-d" },
  apogee: { def: 'the highest point in the development of something; orbital peak', ex: 'Winning the national bee was the apogee of her school career.', syll: 'ap-o-gee', orig: 'Greek (apo = away + ge = earth)', pattern: "Ends in 'g-e-e'" },
  hiatus: { def: 'a pause or gap in a sequence, series, or process', ex: 'The spelling club took a two-week winter hiatus.', syll: 'hi-a-tus', orig: 'Latin (hiare = to gape)', pattern: "h-i-a-t-u-s" },
  freesia: { def: 'a small southern African flowering plant with sweet scent', ex: 'A vase of yellow freesia perfumed the dining room.', syll: 'free-sia', orig: 'German Botanist Freese', pattern: "Double 'e': f-r-e-e-s-i-a" },
  exoneration: { def: 'the action of officially clearing someone from blame', ex: 'New evidence led to the complete exoneration of the accused.', syll: 'ex-on-er-a-tion', orig: 'Latin (exonerare)', pattern: "e-x-o-n-e-r-a-t-i-o-n" },
  duvet: { def: 'a soft quilt filled with down, feathers, or fiber', ex: 'She curled up under the warm feather duvet.', syll: 'du-vet', orig: 'French', pattern: "Silent 't': d-u-v-e-t" },
  turpitude: { def: 'depravity or wicked behavior; moral baseness', ex: 'The corrupt official was condemned for moral turpitude.', syll: 'tur-pi-tude', orig: 'Latin (turpis = vile)', pattern: "t-u-r-p-i-t-u-d-e" },
  platitude: { def: 'a remark or statement that is flat, dull, or trite', ex: 'Telling someone to cheer up can feel like an empty platitude.', syll: 'plat-i-tude', orig: 'French (plat = flat)', pattern: "p-l-a-t-i-t-u-d-e" },
  nobiliary: { def: 'relating to the nobility or aristocracy', ex: 'The ancient castle displayed the family nobiliary crest.', syll: 'no-bil-i-ar-y', orig: 'Latin (nobilis)', pattern: "Ends in '-ary'" },
  commerce: { def: 'the activity of buying and selling, especially on a large scale', ex: 'International commerce connects cities worldwide.', syll: 'com-merce', orig: 'Latin (commercium)', pattern: "Double 'm': c-o-m-m-e-r-c-e" },
  fondant: { def: 'a sweet thick paste used for decorating cakes', ex: 'The pastry chef rolled pastel pink fondant.', syll: 'fon-dant', orig: 'French (fondre = to melt)', pattern: "f-o-n-d-a-n-t" },
  cupola: { def: 'a small dome-like structure on a roof', ex: 'Pigeons perched upon the historic town hall cupola.', syll: 'cu-po-la', orig: 'Italian / Latin', pattern: "c-u-p-o-l-a" },
  herbaceous: { def: 'denoting plants that have soft, non-woody stems', ex: 'Rosemary and sage are aromatic herbaceous perennials.', syll: 'her-ba-ceous', orig: 'Latin (herba)', pattern: "Ends in '-aceous'" },
  pachinko: { def: 'a Japanese arcade game with metallic balls', ex: 'Flashing lights signaled a win on the pachinko machine.', syll: 'pa-chin-ko', orig: 'Japanese', pattern: "p-a-c-h-i-n-k-o" },
  decrepitude: { def: 'the state of being worn out by age', ex: 'The derelict wooden barn slowly surrendered to decrepitude.', syll: 'de-crep-i-tude', orig: 'Latin', pattern: "d-e-c-r-e-p-i-t-u-d-e" },
  dramaturgy: { def: 'the theory and practice of dramatic stagecraft', ex: 'The theater director studied classical dramaturgy.', syll: 'dram-a-tur-gy', orig: 'Greek', pattern: "d-r-a-m-a-t-u-r-g-y" },
  murmuration: { def: 'a flock of starlings that flies together in sweeping shapes', ex: 'A murmuration of starlings formed dark ripples in the sky.', syll: 'mur-mu-ra-tion', orig: 'Latin (murmur)', pattern: "m-u-r-m-u-r-a-t-i-o-n" },
  phonics: { def: 'a method of teaching reading by correlating sounds and letters', ex: 'Daily phonics drills improve phonetic spelling accuracy.', syll: 'phon-ics', orig: 'Greek (phone = sound)', pattern: "'ph' as /f/" },
  calisthenics: { def: 'gymnastic exercises to achieve bodily fitness', ex: 'The gymnast warmed up with calisthenics.', syll: 'cal-is-then-ics', orig: 'Greek (kalos = beauty + sthenos = strength)', pattern: "Contains 'th'" },
  torrent: { def: 'a strong and fast-moving stream of water', ex: 'The flash flood sent a torrent down the ravine.', syll: 'tor-rent', orig: 'Latin (torrens)', pattern: "Double 'r': t-o-r-r-e-n-t" }
};

// =============================================================================
// ASSEMBLE ALL FLASHCARDS FOR STUDY DECKS
// =============================================================================
export const ALL_WORD_STUDY_CARDS: Flashcard[] = [
  ...MEETING_2_WORDS_TO_KNOW,
  ...MEETING_3_WORDS_TO_KNOW,
  ...MEETING_2_FULL_59_WORDS.map((w, idx) => {
    const existing = [...MEETING_2_WORDS_TO_KNOW, ...MEETING_3_WORDS_TO_KNOW].find(x => x.word.toLowerCase() === w.toLowerCase());
    if (existing) return existing;
    const detail = ALL_WORDS_MAP[w.toLowerCase()] || {
      def: 'Official Scripps Words of the Champions study word',
      ex: `We practiced spelling '${w}' in our bee preparation session.`,
      syll: w,
      pattern: 'Standard pattern'
    };
    return {
      id: `m2-card-${idx}-${w}`,
      word: w,
      definition: detail.def,
      category: 'meeting-2-practice-59' as const,
      example: detail.ex,
      syllables: detail.syll || w,
      phoneticHint: `/${w}/`,
      languageOrigin: detail.orig || 'English',
      trickyPattern: detail.pattern || 'Standard pattern',
      lesson: 'Meeting 2 (Full 59 List)'
    };
  }),
  ...MEETING_3_FULL_61_WORDS.map((w, idx) => {
    const existing = [...MEETING_2_WORDS_TO_KNOW, ...MEETING_3_WORDS_TO_KNOW].find(x => x.word.toLowerCase() === w.toLowerCase());
    if (existing) return existing;
    const detail = ALL_WORDS_MAP[w.toLowerCase()] || {
      def: 'Advanced Two-Bee Scripps Words of the Champions study word',
      ex: `The contestant correctly enunciated '${w}' on stage.`,
      syll: w,
      pattern: 'Advanced Two-Bee pattern'
    };
    return {
      id: `m3-card-${idx}-${w}`,
      word: w,
      definition: detail.def,
      category: 'meeting-3-practice-61' as const,
      example: detail.ex,
      syllables: detail.syll || w,
      phoneticHint: `/${w}/`,
      languageOrigin: detail.orig || 'English / Loanword',
      trickyPattern: detail.pattern || 'Two-Bee pattern',
      lesson: 'Meeting 3 (Full 61 List)'
    };
  })
];

// Backwards compatibility alias
export const FLASHCARDS = ALL_WORD_STUDY_CARDS;
export const PPT_ROUND_WORDS = [...MEETING_2_WORDS_TO_KNOW, ...MEETING_3_WORDS_TO_KNOW];

// All Tricky Patterns Combined
export const TRICKY_PATTERNS: TrickyPattern[] = [
  ...MEETING_2_PATTERNS,
  ...MEETING_3_PATTERNS
];

// Default Pre-test & Post-test (Meeting 2 defaults, can be switched to Meeting 3)
export const PRE_TEST_WORDS: DictationWord[] = MEETING_2_WARM_UP;
export const POST_TEST_WORDS: DictationWord[] = MEETING_2_PROGRESS_CHECK;

// =============================================================================
// WORDWALL "OPEN THE BOX" 30 CHALLENGES (15 from Meeting 2 + 15 from Meeting 3)
// Specially curated and kid-friendly for Grades 3-6, strictly mapped to lesson patterns
// =============================================================================
export const OPEN_THE_BOX_30: BoxChallenge[] = [
  // Boxes 1 - 15: Meeting 2 Words (Roots: dis-, tele-, -ous, double consonants & silent letters)
  { boxNumber: 1, word: 'disembark', definition: 'to leave a ship, airplane, or vehicle at the end of a trip', sentence: 'The excited passengers prepared to disembark from the airplane.', hint: "Prefix 'dis-' (away): d-i-s-e-m-b-a-r-k", level: 'Medium', points: 15 },
  { boxNumber: 2, word: 'flannel', definition: 'a soft-woven cotton or wool fabric used for warm pajamas and shirts', sentence: 'He wore a soft checkered flannel shirt on a cool morning.', hint: "Double 'n': f-l-a-n-n-e-l", level: 'Medium', points: 15 },
  { boxNumber: 3, word: 'telepathic', definition: 'able to communicate thoughts from far away without speaking aloud', sentence: 'The best friends seemed telepathic because they thought alike.', hint: "Greek root 'tele-' (far): t-e-l-e-p-a-t-h-i-c", level: 'Medium', points: 20 },
  { boxNumber: 4, word: 'guardian', definition: 'a trusted adult who protects and takes care of a child', sentence: 'Her guardian cheered loudly when she spelled her word correctly.', hint: "Silent 'u' after 'g': g-u-a-r-d-i-a-n", level: 'Medium', points: 15 },
  { boxNumber: 5, word: 'harmonious', definition: 'having parts that blend together pleasantly; full of harmony', sentence: 'The children sang in a sweet and harmonious melody.', hint: "Suffix '-ous' (full of): h-a-r-m-o-n-i-o-u-s", level: 'Medium', points: 20 },
  { boxNumber: 6, word: 'gimmick', definition: 'a clever trick or catchy idea used to grab people’s attention', sentence: 'Giving out free stickers was a fun advertising gimmick.', hint: "Double 'm': g-i-m-m-i-c-k", level: 'Medium', points: 15 },
  { boxNumber: 7, word: 'cucumber', definition: 'a crisp green vegetable often sliced in salads or dipped in hummus', sentence: 'She packed fresh cucumber sticks in her school lunchbox.', hint: "c-u-c-u-m-b-e-r", level: 'Medium', points: 10 },
  { boxNumber: 8, word: 'eavesdrop', definition: 'to secretly listen in on someone else’s conversation', sentence: 'It is bad manners to eavesdrop on private talks.', hint: "Starts with 'e-a-v-e-s': e-a-v-e-s-d-r-o-p", level: 'Medium', points: 15 },
  { boxNumber: 9, word: 'nephew', definition: 'the son of your brother or sister', sentence: 'Uncle David took his nephew to the science museum.', hint: "'ph' makes the /f/ sound: n-e-p-h-e-w", level: 'Medium', points: 10 },
  { boxNumber: 10, word: 'astonish', definition: 'to surprise or amaze someone greatly with something remarkable', sentence: 'The magician’s disappearing rabbit will astonish the audience.', hint: "Ends in '-ish': a-s-t-o-n-i-s-h", level: 'Medium', points: 15 },
  { boxNumber: 11, word: 'janitor', definition: 'a person who cleans, repairs, and takes good care of a school building', sentence: 'Our friendly school janitor always waves hello in the hall.', hint: "Ends in '-or' (not '-er'): j-a-n-i-t-o-r", level: 'Medium', points: 15 },
  { boxNumber: 12, word: 'amphibian', definition: 'a cold-blooded creature that can live both in fresh water and on land', sentence: 'A spotted frog is a cute amphibian that starts life as a tadpole.', hint: "Greek 'amphi' + 'bio' with 'ph' as /f/: a-m-p-h-i-b-i-a-n", level: 'Two-Bee', points: 20 },
  { boxNumber: 13, word: 'miraculous', definition: 'so amazing and wonderful that it seems like a miracle', sentence: 'The tiny kitten made a miraculous recovery after being rescued.', hint: "Suffix '-ulous' (full of): m-i-r-a-c-u-l-o-u-s", level: 'Medium', points: 20 },
  { boxNumber: 14, word: 'volcano', definition: 'a mountain with an opening that can erupt lava, ash, and steam', sentence: 'The science class built a baking soda volcano model that bubbled over.', hint: "v-o-l-c-a-n-o", level: 'Medium', points: 10 },
  { boxNumber: 15, word: 'disconnect', definition: 'to break or unplug a link, plug, or electrical connection', sentence: 'Please disconnect the tablet charger once the battery is full.', hint: "Prefix 'dis-' (away/un-): d-i-s-c-o-n-n-e-c-t", level: 'Medium', points: 15 },

  // Boxes 16 - 30: Meeting 3 Words (French loanwords, roots phil- & -phobia, Two-Bee patterns)
  { boxNumber: 16, word: 'soirée', definition: 'a fun and fancy evening party with snacks, games, or music', sentence: 'The school orchestra hosted a joyful musical soirée for parents.', hint: "French loanword: keeps the accent 'é' (s-o-i-r-é-e)", level: 'Two-Bee', points: 25 },
  { boxNumber: 17, word: 'philharmonic', definition: 'devoted to loving music; a large symphony orchestra', sentence: 'We listened to classical instruments at the youth philharmonic concert.', hint: "Greek root 'phil-' (love of): p-h-i-l-h-a-r-m-o-n-i-c", level: 'Two-Bee', points: 25 },
  { boxNumber: 18, word: 'brontophobia', definition: 'an intense fear of loud thunder and flashing lightning during a storm', sentence: 'During thunderstorms, our scared puppy hides because of brontophobia.', hint: "Greek roots 'bronto' (thunder) + '-phobia' (fear)", level: 'Two-Bee', points: 25 },
  { boxNumber: 19, word: 'duvet', definition: 'a soft, fluffy bed blanket stuffed with feathers or warm cotton', sentence: 'She pulled the warm fluffy duvet up to her chin on a snowy evening.', hint: "French loanword: silent final 't': d-u-v-e-t", level: 'Two-Bee', points: 20 },
  { boxNumber: 20, word: 'spectacles', definition: 'another classic word for eyeglasses that help people see clearly', sentence: 'Grandma slipped on her spectacles to read us a bedtime story.', hint: "Latin root 'spec' (look): s-p-e-c-t-a-c-l-e-s", level: 'Medium', points: 15 },
  { boxNumber: 21, word: 'innovator', definition: 'a creative person who invents clever new tools, games, or ideas', sentence: 'The young innovator designed a backpack with built-in solar chargers.', hint: "Double 'n', ends in '-or': i-n-n-o-v-a-t-o-r", level: 'Two-Bee', points: 20 },
  { boxNumber: 22, word: 'personnel', definition: 'the group of people or staff who work together at an organization', sentence: 'The library personnel organized a fun summer reading challenge.', hint: "Double 'n', single 'l': p-e-r-s-o-n-n-e-l (not personal!)", level: 'Two-Bee', points: 20 },
  { boxNumber: 23, word: 'rotisserie', definition: 'a rotating oven spit that slowly turns food as it cooks evenly', sentence: 'The aroma of chicken turning on the golden rotisserie was delicious.', hint: "French loanword: double 's': r-o-t-i-s-s-e-r-i-e", level: 'Two-Bee', points: 25 },
  { boxNumber: 24, word: 'perseverance', definition: 'never giving up and continuing to try hard even when things are difficult', sentence: 'With daily practice and perseverance, she spelled every word right.', hint: "Ends in '-ance': p-e-r-s-e-v-e-r-a-n-c-e", level: 'Two-Bee', points: 25 },
  { boxNumber: 25, word: 'buoyancy', definition: 'the natural power of water to keep toys, boats, and swimmers floating', sentence: 'The rubber duck floated with ease thanks to natural buoyancy.', hint: "Starts with 'b-u-o-y': b-u-o-y-a-n-c-y", level: 'Two-Bee', points: 20 },
  { boxNumber: 26, word: 'fluoride', definition: 'a healthy mineral added to toothpaste to keep children’s teeth strong', sentence: 'Brushing twice a day with fluoride toothpaste keeps cavities away.', hint: "'u' before 'o': f-l-u-o-r-i-d-e (think fluorine, not flour!)", level: 'Medium', points: 20 },
  { boxNumber: 27, word: 'hallowed', definition: 'greatly respected, honored, or celebrated through history', sentence: 'Framed pictures of spelling champions hung in the hallowed hall.', hint: "Double 'l': h-a-l-l-o-w-e-d", level: 'Medium', points: 15 },
  { boxNumber: 28, word: 'seismologist', definition: 'an earth scientist who studies ground movements and earthquakes', sentence: 'The seismologist showed students how underground tremors are measured.', hint: "Begins with 's-e-i-s': s-e-i-s-m-o-l-o-g-i-s-t", level: 'Champion', points: 30 },
  { boxNumber: 29, word: 'fondant', definition: 'a smooth sweet sugar icing rolled flat to decorate birthday cakes', sentence: 'The baker smoothed bright blue fondant over the celebration cake.', hint: "French origin: f-o-n-d-a-n-t", level: 'Medium', points: 15 },
  { boxNumber: 30, word: 'commerce', definition: 'the buying, selling, and trading of goods between stores and towns', sentence: 'The bustling downtown farmers market was full of cheerful commerce.', hint: "Double 'm': c-o-m-m-e-r-c-e", level: 'Medium', points: 15 }
];

// =============================================================================
// SCRIPPS NATIONAL SPELLING BEE FUN FACTS & LORE
// =============================================================================
export const SCRIPPS_LORE = [
  {
    title: 'A Big Time Spellebrity!',
    body: "If you’ve watched the Bee on ESPN, you've definitely heard Dr. Jacques Bailly's voice! He won the Scripps National Spelling Bee in 1980 and became the official pronouncer in 2003.",
    tag: 'Bee Royalty 👑'
  },
  {
    title: 'Eight Times the Fun: Octochamps!',
    body: "In 2019, eight brilliant spellers made Bee history and inspired a new word: 'Octochamps!' The dictionary admitted defeat when all 8 ended the finals in an unforgettable tie!",
    tag: 'Historic Record 🏆'
  },
  {
    title: 'Older than Sliced Bread!',
    body: "The National Spelling Bee was first held in 1925 in Louisville, Kentucky. That makes the Bee older than sliced bread, bubble gum, and even trampolines!",
    tag: 'Fun History 🍞'
  },
  {
    title: 'The Very First Champion (1925)',
    body: "In 1925, Frank Neuhauser won the championship trophy among 9 spellers after correctly spelling 'gladiolus'!",
    tag: 'Classic Word 🌺'
  },
  {
    title: 'In Good Company: 11 Million Spellers',
    body: "More than 11 million students participate in qualifying classroom, school, district, and regional spelling bees around the globe every year!",
    tag: 'Global Scale 🌍'
  },
  {
    title: 'It’s All Greek to Me!',
    body: "Most difficult English bee words are borrowed from Greek (ph, y, ch), Latin, and French loanwords. Once you learn their roots, spelling becomes simple!",
    tag: 'Word Detective 🔍'
  },
  {
    title: 'Cruising the Airwaves',
    body: "The first broadcast of the Bee was on radio in 1946 before being televised! ESPN has broadcast the finals live across the world since 1994.",
    tag: 'On the Air 🎙️'
  },
  {
    title: 'Home Sweet Home Hive',
    body: "While many people assume the Bee is headquartered in Washington, D.C., the National Spelling Bee hive is actually located in Cincinnati, Ohio!",
    tag: 'Bee Hive 🐝'
  }
];

// Backward-compatible SPELLING_BEE_WORDS list
export const SPELLING_BEE_WORDS: SpellingWord[] = ALL_WORD_STUDY_CARDS.map((card, idx) => ({
  id: card.id || `sb-${idx}`,
  word: card.word,
  topic: card.category,
  sentence: card.example,
  translation: card.translation,
  definition: card.definition,
  syllables: card.syllables || card.word,
  difficulty: card.category.includes('meeting-3') ? 'Championship' : 'Medium',
  phoneticHint: card.phoneticHint,
  isFromOfficialList: true,
  languageOrigin: card.languageOrigin
}));

// Backward-compatible MOCK_SAT_QUESTIONS (adapted into 50-mark Spelling & Etymology Assessment)
export const MOCK_SAT_QUESTIONS = [
  {
    id: 1,
    number: 1,
    category: 'listening',
    part: 1,
    points: 2,
    question: "Listen to the word pronounced: 'eavesdrop'. Which spelling is correct?",
    options: ['evesdrop', 'eavesdrop', 'eavedrop', 'eavsdropp'],
    correctAnswer: 'eavesdrop',
    explanation: "Eavesdrop begins with 'e-a-v-e-s', from roof eaves where water drips.",
    hint: "'e' before 'a'!"
  },
  {
    id: 2,
    number: 2,
    category: 'vocabulary',
    part: 1,
    points: 2,
    question: "What does the Greek root 'tele-' mean in words like telepathic, telescope, and telephone?",
    options: ['near', 'far / distant', 'sound', 'life'],
    correctAnswer: 'far / distant',
    explanation: "'tele-' means 'far' in Greek.",
    hint: "Reading thoughts or viewing stars from afar."
  },
  {
    id: 3,
    number: 3,
    category: 'grammar',
    part: 2,
    points: 2,
    question: "What does the Latin prefix 'dis-' mean in 'disembark'?",
    options: ['together', 'not / away / to leave', 'before', 'again'],
    correctAnswer: 'not / away / to leave',
    explanation: "Prefix 'dis-' means 'not', 'opposite of', or 'away'.",
    hint: "To leave a ship or aircraft."
  },
  {
    id: 4,
    number: 4,
    category: 'vocabulary',
    part: 2,
    points: 2,
    question: "Which of the following French loanwords keeps its accent mark and refers to an evening party?",
    options: ['soirée', 'duvet', 'faux', 'rotisserie'],
    correctAnswer: 'soirée',
    explanation: "Soirée keeps its accent mark over the 'é' and means an evening party.",
    hint: "Look for the accent mark!"
  },
  {
    id: 5,
    number: 5,
    category: 'writing',
    part: 3,
    points: 2,
    question: "What does the Greek root '-phobia' mean in 'brontophobia'?",
    options: ['love', 'fear', 'water', 'music'],
    correctAnswer: 'fear',
    explanation: "'-phobia' means 'fear' — brontophobia is fear of thunder.",
    hint: "Fear of thunder!"
  }
];

export const STORIES = [];

// =============================================================================
// BACKWARD-COMPATIBILITY & AUDITIONS / STAGE CONTEST EXPORTS
// =============================================================================

export const SPELLING_WORDS: SpellingWord[] = [
  {
    id: 'sw-1',
    word: 'gimmick',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The magician used a clever gimmick to distract the crowd.',
    definition: 'a trick or device intended to attract attention or publicity',
    syllables: 'gim-mick',
    difficulty: 'Medium',
    phoneticHint: '/ˈɡɪmɪk/',
    languageOrigin: 'American Slang',
    isFromOfficialList: true
  },
  {
    id: 'sw-2',
    word: 'flannel',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'He wore a soft flannel shirt during chilly autumn evenings.',
    definition: 'a soft woven cloth of wool or a blend used for warm clothing',
    syllables: 'flan-nel',
    difficulty: 'Medium',
    phoneticHint: '/ˈflænəl/',
    languageOrigin: 'Welsh',
    isFromOfficialList: true
  },
  {
    id: 'sw-3',
    word: 'cucumber',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'Fresh cucumber slices were added to the crisp garden salad.',
    definition: 'a long, green-skinned fruit with watery flesh, eaten raw in salads',
    syllables: 'cu-cum-ber',
    difficulty: 'Medium',
    phoneticHint: '/ˈkjuːkʌmbər/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-4',
    word: 'janitor',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The school janitor kept the hallways polished and clean.',
    definition: 'a person employed to take care of a large building or school',
    syllables: 'jan-i-tor',
    difficulty: 'Medium',
    phoneticHint: '/ˈdʒænɪtər/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-5',
    word: 'lionize',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The town decided to lionize the local firefighter who rescued the puppy.',
    definition: 'to treat someone as a celebrity or with great public acclaim',
    syllables: 'li-on-ize',
    difficulty: 'Hard',
    phoneticHint: '/ˈlaɪənaɪz/',
    languageOrigin: 'English',
    isFromOfficialList: true
  },
  {
    id: 'sw-6',
    word: 'spreadsheet',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The teacher organized all test scores into an electronic spreadsheet.',
    definition: 'a computer program or document showing data arranged in rows and columns',
    syllables: 'spread-sheet',
    difficulty: 'Medium',
    phoneticHint: '/ˈsprɛdʃiːt/',
    languageOrigin: 'English Compound',
    isFromOfficialList: true
  },
  {
    id: 'sw-7',
    word: 'badger',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The nocturnal badger burrowed deep into the forest hillside.',
    definition: 'a burrowing mammal with strong claws and distinctive black-and-white head stripes',
    syllables: 'bad-ger',
    difficulty: 'Medium',
    phoneticHint: '/ˈbædʒər/',
    languageOrigin: 'Middle English',
    isFromOfficialList: true
  },
  {
    id: 'sw-8',
    word: 'nephew',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'My nephew invited our entire family to his spelling bee championship.',
    definition: 'a son of one’s brother or sister, or brother-in-law or sister-in-law',
    syllables: 'neph-ew',
    difficulty: 'Medium',
    phoneticHint: '/ˈnɛfjuː/',
    languageOrigin: 'Old French via Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-9',
    word: 'imbibe',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'Young scientists imbibe new facts like eager sponges.',
    definition: 'to drink liquids, or absorb and take in ideas or knowledge',
    syllables: 'im-bibe',
    difficulty: 'Hard',
    phoneticHint: '/ɪmˈbaɪb/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-10',
    word: 'savvy',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'Her tech savvy helped her configure the classroom projector instantly.',
    definition: 'shrewdness, practical knowledge, or common sense',
    syllables: 'sav-vy',
    difficulty: 'Medium',
    phoneticHint: '/ˈsævi/',
    languageOrigin: 'Spanish / French',
    isFromOfficialList: true
  },
  {
    id: 'sw-11',
    word: 'reckon',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'I reckon we will arrive at the auditorium before noon.',
    definition: 'to calculate, estimate, consider, or believe',
    syllables: 'reck-on',
    difficulty: 'Medium',
    phoneticHint: '/ˈrɛkən/',
    languageOrigin: 'Old English',
    isFromOfficialList: true
  },
  {
    id: 'sw-12',
    word: 'boorish',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'Interrupting other speakers is considered boorish behavior.',
    definition: 'rough, ill-mannered, and clumsy in behavior',
    syllables: 'boor-ish',
    difficulty: 'Hard',
    phoneticHint: '/ˈbʊərɪʃ/',
    languageOrigin: 'Dutch / English',
    isFromOfficialList: true
  },
  {
    id: 'sw-13',
    word: 'nurture',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'Teachers nurture curious minds so students can reach their full potential.',
    definition: 'to care for, encourage growth, and support the development of',
    syllables: 'nur-ture',
    difficulty: 'Medium',
    phoneticHint: '/ˈnɜːrtʃər/',
    languageOrigin: 'Old French',
    isFromOfficialList: true
  },
  {
    id: 'sw-14',
    word: 'volcano',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The dormant volcano had hot steam rising from its rocky crater.',
    definition: 'a mountain or hill with a crater through which lava and rock fragments erupt',
    syllables: 'vol-ca-no',
    difficulty: 'Medium',
    phoneticHint: '/vɒlˈkeɪnoʊ/',
    languageOrigin: 'Italian via Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-15',
    word: 'forensics',
    topic: 'Meeting 2 Mock Bee',
    sentence: 'The forensics unit analyzed the footprint evidence at the scene.',
    definition: 'scientific methods and techniques used in the investigation of crime',
    syllables: 'fo-ren-sics',
    difficulty: 'Hard',
    phoneticHint: '/fəˈrɛnsɪks/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-16',
    word: 'banal',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The movie plot was so banal that everyone guessed the ending right away.',
    definition: 'lacking originality, freshness, or novelty; trite or commonplace',
    syllables: 'ba-nal',
    difficulty: 'Hard',
    phoneticHint: '/bəˈnɑːl/',
    languageOrigin: 'French',
    isFromOfficialList: true
  },
  {
    id: 'sw-17',
    word: 'seismologist',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The seismologist monitored ground tremors along the active earthquake fault.',
    definition: 'a geophysicist who specializes in studying earthquakes and seismic waves',
    syllables: 'seis-mol-o-gist',
    difficulty: 'Hard',
    phoneticHint: '/saɪzˈmɒlədʒɪst/',
    languageOrigin: 'Greek',
    isFromOfficialList: true
  },
  {
    id: 'sw-18',
    word: 'spectacles',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The librarian adjusted his round silver spectacles before reading.',
    definition: 'a pair of eyeglasses with lenses to correct vision',
    syllables: 'spec-ta-cles',
    difficulty: 'Medium',
    phoneticHint: '/ˈspɛktəkəlz/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-19',
    word: 'innovator',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The young innovator designed a solar-powered water filtration device.',
    definition: 'a person who introduces new methods, ideas, or products',
    syllables: 'in-no-va-tor',
    difficulty: 'Medium',
    phoneticHint: '/ˈɪnəveɪtər/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-20',
    word: 'bursary',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'She received an academic bursary to attend the prestigious STEM summer camp.',
    definition: 'a scholarship or financial grant awarded to a student to attend school',
    syllables: 'bur-sa-ry',
    difficulty: 'Hard',
    phoneticHint: '/ˈbɜːrsəri/',
    languageOrigin: 'Medieval Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-21',
    word: 'hallowed',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'Generations of scholars have walked the hallowed halls of Oxford University.',
    definition: 'greatly respected, honored, or regarded as sacred',
    syllables: 'hal-lowed',
    difficulty: 'Medium',
    phoneticHint: '/ˈhæloʊd/',
    languageOrigin: 'Old English',
    isFromOfficialList: true
  },
  {
    id: 'sw-22',
    word: 'apogee',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The satellite reached its apogee thousands of miles above Earth.',
    definition: 'the highest or most distant point in an orbit, or a climax of success',
    syllables: 'ap-o-gee',
    difficulty: 'Hard',
    phoneticHint: '/ˈæpədʒiː/',
    languageOrigin: 'Greek via French',
    isFromOfficialList: true
  },
  {
    id: 'sw-23',
    word: 'hiatus',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The band took a brief hiatus before recording their next studio album.',
    definition: 'a pause, break, or interruption in continuity or activity',
    syllables: 'hi-a-tus',
    difficulty: 'Hard',
    phoneticHint: '/haɪˈeɪtəs/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-24',
    word: 'freesia',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The sweet fragrance of yellow freesia blossoms filled the florist shop.',
    definition: 'a South African plant of the iris family with fragrant tubular flowers',
    syllables: 'free-si-a',
    difficulty: 'Hard',
    phoneticHint: '/ˈfriːziə/',
    languageOrigin: 'German / Botanical Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-25',
    word: 'exoneration',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The newly discovered evidence led to his complete and official exoneration.',
    definition: 'the act of freeing someone from blame, accusation, or criminal liability',
    syllables: 'ex-on-er-a-tion',
    difficulty: 'Hard',
    phoneticHint: '/ɪɡˌzɒnəˈreɪʃən/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-26',
    word: 'duvet',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'She curled up under the soft goose-down duvet on a winter night.',
    definition: 'a soft quilt filled with down, feathers, or fiber, used instead of a top sheet',
    syllables: 'du-vet',
    difficulty: 'Medium',
    phoneticHint: '/duːˈveɪ/',
    languageOrigin: 'French',
    isFromOfficialList: true
  },
  {
    id: 'sw-27',
    word: 'turpitude',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The judge denounced acts of moral turpitude that harmed the community.',
    definition: 'wickedness, depravity, or a disgraceful character trait',
    syllables: 'tur-pi-tude',
    difficulty: 'Hard',
    phoneticHint: '/ˈtɜːrpɪtjuːd/',
    languageOrigin: 'Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-28',
    word: 'platitude',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'He offered an empty platitude instead of a real, thoughtful apology.',
    definition: 'a remark or statement, especially one with moral content, that has been used too often to be interesting or thoughtful',
    syllables: 'plat-i-tude',
    difficulty: 'Hard',
    phoneticHint: '/ˈplætɪtjuːd/',
    languageOrigin: 'French',
    isFromOfficialList: true
  },
  {
    id: 'sw-29',
    word: 'nobiliary',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'The museum displayed nobiliary coats of arms from ancient royal families.',
    definition: 'relating to the nobility or aristocracy',
    syllables: 'no-bil-i-ar-y',
    difficulty: 'Hard',
    phoneticHint: '/noʊˈbɪliˌɛri/',
    languageOrigin: 'French / Latin',
    isFromOfficialList: true
  },
  {
    id: 'sw-30',
    word: 'commerce',
    topic: 'Meeting 3 Mock Bee',
    sentence: 'International maritime commerce flourished in the bustling coastal seaport.',
    definition: 'the activity of buying and selling, especially on a large scale',
    syllables: 'com-merce',
    difficulty: 'Medium',
    phoneticHint: '/ˈkɒmɜːrs/',
    languageOrigin: 'Latin via French',
    isFromOfficialList: true
  }
];

export const INITIAL_FINALISTS: Finalist[] = [
  {
    id: 'f-1',
    name: 'Aiden Chen',
    classroom: 'Room 402 · Grade 5',
    score: 35,
    strikes: 0,
    isEliminated: false,
    stageRank: 1,
    wordsHistory: [
      { word: 'gimmick', isCorrect: true },
      { word: 'flannel', isCorrect: true },
      { word: 'lionize', isCorrect: true }
    ]
  },
  {
    id: 'f-2',
    name: 'Maya Patel',
    classroom: 'Room 305 · Grade 4',
    score: 30,
    strikes: 1,
    isEliminated: false,
    stageRank: 2,
    wordsHistory: [
      { word: 'cucumber', isCorrect: true },
      { word: 'badger', isCorrect: false },
      { word: 'spreadsheet', isCorrect: true }
    ]
  },
  {
    id: 'f-3',
    name: 'Lucas Thorne',
    classroom: 'Room 408 · Grade 5',
    score: 25,
    strikes: 1,
    isEliminated: false,
    stageRank: 3,
    wordsHistory: [
      { word: 'nephew', isCorrect: true },
      { word: 'imbibe', isCorrect: true },
      { word: 'savvy', isCorrect: false }
    ]
  },
  {
    id: 'f-4',
    name: 'Zara Al-Mansoor',
    classroom: 'Room 501 · Grade 6',
    score: 20,
    strikes: 2,
    isEliminated: false,
    stageRank: 4,
    wordsHistory: [
      { word: 'forensics', isCorrect: true },
      { word: 'banal', isCorrect: false },
      { word: 'seismologist', isCorrect: false }
    ]
  },
  {
    id: 'f-5',
    name: 'Ethan Brooks',
    classroom: 'Room 312 · Grade 4',
    score: 15,
    strikes: 2,
    isEliminated: false,
    stageRank: 5,
    wordsHistory: [
      { word: 'spectacles', isCorrect: true },
      { word: 'innovator', isCorrect: false },
      { word: 'bursary', isCorrect: false }
    ]
  },
  {
    id: 'f-6',
    name: 'Chloe Kim',
    classroom: 'Room 504 · Grade 6',
    score: 40,
    strikes: 0,
    isEliminated: false,
    stageRank: 1,
    wordsHistory: [
      { word: 'exoneration', isCorrect: true },
      { word: 'duvet', isCorrect: true },
      { word: 'turpitude', isCorrect: true }
    ]
  }
];

export const INITIAL_AUDITION_CANDIDATES: AuditionCandidate[] = [
  {
    id: 'ac-1',
    name: 'Oliver Vance',
    classroom: 'Room 401 · Grade 4',
    score: 9,
    totalTested: 10,
    status: 'qualified',
    notes: 'Outstanding on Latin roots and prefix affixes.',
    wordsHistory: [{ word: 'triumphant', isCorrect: true, timestamp: Date.now() }]
  },
  {
    id: 'ac-2',
    name: 'Sophia Rodriguez',
    classroom: 'Room 403 · Grade 5',
    score: 10,
    totalTested: 10,
    status: 'qualified',
    notes: 'Flawless performance in partner dictation round.',
    wordsHistory: [{ word: 'seismologist', isCorrect: true, timestamp: Date.now() }]
  },
  {
    id: 'ac-3',
    name: 'Liam Jackson',
    classroom: 'Room 302 · Grade 3',
    score: 8,
    totalTested: 10,
    status: 'qualified',
    notes: 'Strong spelling cadence and asks good questions.',
    wordsHistory: [{ word: 'spectacles', isCorrect: true, timestamp: Date.now() }]
  },
  {
    id: 'ac-4',
    name: 'Emma Watson',
    classroom: 'Room 502 · Grade 6',
    score: 7,
    totalTested: 10,
    status: 'pending',
    notes: 'Needs practice with French loanword silent letters.',
    wordsHistory: [{ word: 'duvet', isCorrect: false, timestamp: Date.now() }]
  },
  {
    id: 'ac-5',
    name: 'Noah Patel',
    classroom: 'Room 405 · Grade 5',
    score: 8,
    totalTested: 10,
    status: 'qualified',
    notes: 'Confident stage presence and clear microphone voice.',
    wordsHistory: [{ word: 'innovator', isCorrect: true, timestamp: Date.now() }]
  },
  {
    id: 'ac-6',
    name: 'Ava Nguyen',
    classroom: 'Room 309 · Grade 4',
    score: 6,
    totalTested: 10,
    status: 'pending',
    notes: 'Good phonetic grasp, review double consonant rules.',
    wordsHistory: [{ word: 'flannel', isCorrect: false, timestamp: Date.now() }]
  }
];

export const PURPOSE_MATCH_PAIRS: MatchPair[] = [
  {
    id: 'mp-1',
    pattern: "Prefix 'dis-' (Not / Away)",
    word: 'disembark',
    sentence: "The passengers prepared to ___ from the cruise ship at port.",
    explanation: "Prefix 'dis-' denotes opposite or removal; disembark = leave ship."
  },
  {
    id: 'mp-2',
    pattern: "Greek Root 'tele-' (Far / Distant)",
    word: 'telepathic',
    sentence: "They seemed to share a ___ connection without saying a word.",
    explanation: "'tele-' means distance; telepathic = feeling thoughts from far away."
  },
  {
    id: 'mp-3',
    pattern: "Suffix '-ous' (Full of / Characterized by)",
    word: 'harmonious',
    sentence: "The choir sang in rich, ___ blend throughout the cathedral.",
    explanation: "Suffix '-ous' creates adjectives meaning 'full of harmony'."
  },
  {
    id: 'mp-4',
    pattern: "Greek Root 'phil-' (Love / Devotion)",
    word: 'philharmonic',
    sentence: "The world-renowned ___ orchestra performed Beethoven's Ninth.",
    explanation: "'phil-' means love; philharmonic = lover of harmony/music."
  },
  {
    id: 'mp-5',
    pattern: "Greek Root '-phobia' (Fear)",
    word: 'brontophobia',
    sentence: "She covered her ears during lightning due to her ___.",
    explanation: "'-phobia' signifies extreme fear; brontophobia = fear of thunder."
  }
];


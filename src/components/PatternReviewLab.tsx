import React, { useState } from 'react';
import { 
  Sparkles, 
  Volume2, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronRight, 
  Award, 
  BookOpen, 
  Search,
  Filter,
  Layers,
  ArrowRight,
  Flame,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TRICKY_PATTERNS } from '../data/reviewData';
import { sound } from './SoundManager';
import { humanVoice } from '../utils/humanVoice';
import { MeetingSession } from '../types';

interface PatternLabProps {
  onUpdateAccuracy?: (category: string, acc: number) => void;
  onAwardTeamScore?: (team: 'A' | 'B', pts: number) => void;
  genAlphaMode: boolean;
  activeMeeting?: MeetingSession;
}

interface PatternQuizQuestion {
  id: string;
  patternType: string;
  prompt: string;
  wordClue: string;
  options: string[];
  correct: string;
  explanation: string;
  audioWord: string;
}

const PATTERN_QUESTIONS: PatternQuizQuestion[] = [
  {
    id: 'pq-1',
    patternType: 'Silent Letters',
    prompt: "In the word 'knight', which letter is silent?",
    wordClue: "The armored warrior",
    options: ['k', 'n', 'g', 'h'],
    correct: 'k',
    explanation: "The 'k' is completely silent in 'knight'! Pronounced /naɪt/.",
    audioWord: 'knight'
  },
  {
    id: 'pq-2',
    patternType: 'Double Letters',
    prompt: "Which spelling correctly captures the double letters in this tricky word?",
    wordClue: "To cause someone to feel self-conscious or ashamed",
    options: ['embarass', 'embarrass', 'emabarass', 'embaras'],
    correct: 'embarrass',
    explanation: "Two r's and two s's! (e-m-b-a-r-r-a-s-s). Remember: Two R's, Two S's!",
    audioWord: 'embarrass'
  },
  {
    id: 'pq-3',
    patternType: 'Double Letters',
    prompt: "How is 'vacuum' correctly spelled?",
    wordClue: "A space with nothing in it",
    options: ['vaccuum', 'vacuum', 'vacume', 'vacumm'],
    correct: 'vacuum',
    explanation: "Vacuum has a single 'c' and a rare DOUBLE 'u' (v-a-c-u-u-m)!",
    audioWord: 'vacuum'
  },
  {
    id: 'pq-4',
    patternType: 'Double Letters',
    prompt: "Which is the correct spelling for 'occasion'?",
    wordClue: "A special event or celebration",
    options: ['occassion', 'ocasion', 'occasion', 'ocassion'],
    correct: 'occasion',
    explanation: "Occasion has TWO 'c's followed by a SINGLE 's'!",
    audioWord: 'occasion'
  },
  {
    id: 'pq-5',
    patternType: 'Roots & Affixes',
    prompt: "What does the root 'bio-' mean in 'biology' and 'amphibian'?",
    wordClue: "Greek root 'bio'",
    options: ['life', 'far away', 'water', 'fear'],
    correct: 'life',
    explanation: "'bio' comes from ancient Greek meaning 'life' or 'living organisms'!",
    audioWord: 'biology'
  },
  {
    id: 'pq-6',
    patternType: 'Roots & Affixes',
    prompt: "What does the prefix 'dis-' mean in 'disembark'?",
    wordClue: "disembark = to leave a ship or plane",
    options: ['together / with', 'not / away from', 'very fast', 'above / over'],
    correct: 'not / away from',
    explanation: "'dis-' means 'not / away' — disembark means stepping away from a vessel!",
    audioWord: 'disembark'
  },
  {
    id: 'pq-7',
    patternType: 'Roots & Affixes',
    prompt: "What does the Greek root 'tele-' mean in 'telepathic' and 'telescope'?",
    wordClue: "telepathic = reading minds from far away",
    options: ['sound', 'close / near', 'far / distant', 'smart'],
    correct: 'far / distant',
    explanation: "'tele-' means 'far' or 'distant' in Greek!",
    audioWord: 'telepathic'
  },
  {
    id: 'pq-8',
    patternType: 'Roots & Affixes',
    prompt: "What does the suffix '-ous' signify in 'harmonious' and 'courageous'?",
    wordClue: "harmonious = full of harmony",
    options: ['without any', 'full of / having the quality of', 'fear of', 'study of'],
    correct: 'full of / having the quality of',
    explanation: "'-ous' turns words into adjectives meaning 'full of'!",
    audioWord: 'harmonious'
  },
  {
    id: 'pq-9',
    patternType: 'French Loanwords',
    prompt: "Which French loanword keeps its accent mark and means an evening party?",
    wordClue: "From Meeting 3 spotlight",
    options: ['soirée', 'duvet', 'faux', 'rotisserie'],
    correct: 'soirée',
    explanation: "Soirée keeps its French acute accent mark (é) and describes an evening social gathering!",
    audioWord: 'soirée'
  },
  {
    id: 'pq-10',
    patternType: 'Roots & Affixes',
    prompt: "What does the root 'phil-' mean in 'philharmonic' and 'philosophy'?",
    wordClue: "philharmonic = devoted to music",
    options: ['fear', 'wisdom', 'love / devotion', 'skill'],
    correct: 'love / devotion',
    explanation: "The Greek root 'phil-' means 'love' or 'devoted to'!",
    audioWord: 'philharmonic'
  },
  {
    id: 'pq-11',
    patternType: 'Roots & Affixes',
    prompt: "What does the root '-phobia' mean in 'brontophobia'?",
    wordClue: "brontophobia = extreme fear of thunder",
    options: ['love', 'fear', 'sound', 'storm'],
    correct: 'fear',
    explanation: "'-phobia' means extreme or irrational fear!",
    audioWord: 'brontophobia'
  },
  {
    id: 'pq-12',
    patternType: 'Silent Letters',
    prompt: "In the word 'doubt', which letter is silent?",
    wordClue: "A feeling of uncertainty",
    options: ['d', 'o', 'u', 'b'],
    correct: 'b',
    explanation: "The 'b' is silent in 'doubt'! Pronounced /daʊt/.",
    audioWord: 'doubt'
  }
];

export default function PatternReviewLab({ onAwardTeamScore, genAlphaMode }: PatternLabProps) {
  const [activeSubTab, setActiveSubTab] = useState<'explorer' | 'quiz'>('explorer');
  const [selectedPatternId, setSelectedPatternId] = useState<string>(TRICKY_PATTERNS[0].id);

  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const selectedPattern = TRICKY_PATTERNS.find(p => p.id === selectedPatternId) || TRICKY_PATTERNS[0];
  const currentQ = PATTERN_QUESTIONS[currentQIndex];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const isCorrect = opt === currentQ.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
      sound.playCorrect();
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
      if (onAwardTeamScore) {
        onAwardTeamScore('A', 5);
      }
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < PATTERN_QUESTIONS.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      sound.playClick();
    } else {
      setShowSummary(true);
      sound.playFanfare();
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowSummary(false);
    sound.playClick();
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white rounded-[28px] p-6 sm:p-8 border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase font-mono px-3 py-1 bg-amber-100 text-amber-900 rounded-full border border-amber-400">
              Session Agenda: Part 2 (10 min)
            </span>
            <span className="text-xs font-black uppercase font-mono px-3 py-1 bg-fuchsia-100 text-[#560e51] rounded-full border border-fuchsia-300">
              Meeting 2 & 3 Spotlights
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
            Tricky Spelling Patterns & Word Roots 🔬
          </h2>
          <p className="text-xs sm:text-sm font-bold text-slate-600 mt-1 max-w-2xl">
            {genAlphaMode 
              ? "Decode secret orthographic rizz, silent letter stealth tricks, double consonant traps, and ancient Greek & Latin word roots!" 
              : "Master silent letters, double consonants, Greek roots (bio-, tele-, phil-, -phobia), prefixes (dis-), suffixes (-ous), and French loanwords."}
          </p>
        </div>

        {/* Sub-tab Switcher */}
        <div className="flex bg-[#fdf2fe] p-1.5 rounded-2xl border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] shrink-0">
          <button
            onClick={() => {
              setActiveSubTab('explorer');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeSubTab === 'explorer'
                ? 'bg-[#9b2c98] text-white shadow-[1px_1px_0px_0px_#560e51]'
                : 'text-[#560e51] hover:bg-fuchsia-100'
            }`}
          >
            Pattern Deck 🔍
          </button>
          <button
            onClick={() => {
              setActiveSubTab('quiz');
              sound.playClick();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeSubTab === 'quiz'
                ? 'bg-[#78c222] text-[#560e51] shadow-[1px_1px_0px_0px_#560e51]'
                : 'text-[#560e51] hover:bg-fuchsia-100'
            }`}
          >
            Pattern Quiz ⚡ ({score}/{PATTERN_QUESTIONS.length})
          </button>
        </div>
      </div>

      {/* VIEW 1: PATTERN EXPLORER */}
      {activeSubTab === 'explorer' && (
        <div className="space-y-6">
          
          {/* PPT Slide 6 Highlights Banner: Hexagonal Styled Cards */}
          <div className="bg-[#fffdf5] rounded-[28px] p-6 border-3 border-[#560e51] shadow-[4px_4px_0px_0px_#560e51]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase font-mono text-[#9b2c98] bg-fuchsia-100 px-3 py-1 rounded-lg border border-[#560e51]">
                PPT Slide 6 Core Showcase
              </span>
              <span className="text-xs font-bold text-slate-500">The 3 Big Pillars</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pillar 1: Silent Letters */}
              <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 font-mono mb-2">Silent Letters</span>
                <div className="w-20 h-20 bg-amber-500 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-lg border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                  <span>knight</span>
                </div>
                <p className="text-xs font-bold text-slate-800">The <strong className="text-amber-800">'k'</strong> is silent!</p>
                <button
                  onClick={() => humanVoice.speakWord('knight')}
                  className="mt-3 px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-xs font-black uppercase border border-amber-400 flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Listen
                </button>
              </div>

              {/* Pillar 2: Double Letters */}
              <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-wider text-rose-700 font-mono mb-2">Double Letters</span>
                <div className="w-20 h-20 bg-rose-500 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm text-center px-1 border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                  <span>embarrass</span>
                </div>
                <p className="text-xs font-bold text-slate-800">Two <strong className="text-rose-800">r's</strong>, two <strong className="text-rose-800">s's</strong>!</p>
                <button
                  onClick={() => humanVoice.speakWord('embarrass')}
                  className="mt-3 px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-lg text-xs font-black uppercase border border-rose-400 flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Listen
                </button>
              </div>

              {/* Pillar 3: Tricky Roots */}
              <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 font-mono mb-2">Tricky Roots</span>
                <div className="w-20 h-20 bg-emerald-600 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-base border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                  <span>biology</span>
                </div>
                <p className="text-xs font-bold text-slate-800"><strong className="text-emerald-800">'bio'</strong> = life!</p>
                <button
                  onClick={() => humanVoice.speakWord('biology')}
                  className="mt-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-lg text-xs font-black uppercase border border-emerald-400 flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Listen
                </button>
              </div>
            </div>
          </div>

          {/* Pattern Selector Carousel & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Pattern List Sidebar */}
            <div className="lg:col-span-5 space-y-2">
              <h3 className="text-xs font-black uppercase font-mono text-[#560e51] tracking-wider mb-2">
                All 9 Pattern Spotlights:
              </h3>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {TRICKY_PATTERNS.map((p) => {
                  const isSelected = p.id === selectedPatternId;
                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        setSelectedPatternId(p.id);
                        sound.playClick();
                      }}
                      className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#9b2c98] text-white border-[#560e51] shadow-[3px_3px_0px_0px_#78c222] translate-x-1'
                          : 'bg-white hover:bg-fuchsia-50 border-[#560e51]/40 text-slate-900 shadow-[2px_2px_0px_0px_#560e51]'
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-black uppercase font-mono block ${isSelected ? 'text-[#78c222]' : 'text-[#9b2c98]'}`}>
                          {p.category}
                        </span>
                        <span className="text-sm font-black uppercase tracking-tight block">
                          {p.title}
                        </span>
                      </div>
                      <span className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg border ${
                        isSelected ? 'bg-white/20 text-white border-white/40' : 'bg-fuchsia-100 text-[#560e51] border-[#560e51]/30'
                      }`}>
                        {p.keyWord}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pattern Details Showcase */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] space-y-6">
                <div className="border-b-2 border-fuchsia-100 pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black uppercase px-3 py-1 bg-fuchsia-100 text-[#9b2c98] rounded-full border border-fuchsia-300">
                      {selectedPattern.category} Spotlight
                    </span>
                    <button
                      onClick={() => humanVoice.speakWord(selectedPattern.keyWord)}
                      className="px-3 py-1.5 bg-[#78c222] hover:bg-[#68ab1c] text-[#560e51] font-black text-xs uppercase rounded-xl border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Volume2 className="h-4 w-4" /> Say "{selectedPattern.keyWord}"
                    </button>
                  </div>
                  <h3 className="text-2xl font-black text-[#560e51] uppercase tracking-tight mt-3">
                    {selectedPattern.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed mt-2 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    {selectedPattern.rule}
                  </p>
                </div>

                {/* Key Word Hero Box */}
                <div className="bg-[#fefaf0] p-5 rounded-2xl border-3 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#9b2c98] text-[#78c222] font-black text-xl rounded-xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] shrink-0 font-mono">
                      ★
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase font-mono text-[#9b2c98]">Spotlight Model Word</span>
                      <h4 className="text-xl font-black uppercase text-slate-900 tracking-tight font-mono">
                        {selectedPattern.keyWord}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-slate-700 mt-2.5">
                    {selectedPattern.keyWordExplanation}
                  </p>
                </div>

                {/* Additional Practice Examples */}
                <div>
                  <h4 className="text-xs font-black uppercase font-mono text-slate-700 tracking-wider mb-2.5">
                    More Words Following This Pattern:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPattern.additionalExamples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="bg-fuchsia-50/50 p-2.5 rounded-xl border border-fuchsia-200 flex items-center justify-between"
                      >
                        <span className="text-xs font-black text-slate-800">{ex}</span>
                        <button
                          onClick={() => {
                            const cleanWord = ex.split(' ')[0].replace(/[^a-zA-Z]/g, '');
                            humanVoice.speakWord(cleanWord);
                          }}
                          className="p-1 text-[#9b2c98] hover:text-[#560e51] cursor-pointer"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="p-3.5 bg-lime-50 rounded-xl border-2 border-lime-500 flex items-start gap-2.5">
                  <Sparkles className="h-5 w-5 text-lime-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-black uppercase font-mono text-lime-800 block">Bee Champion Memory Tip:</span>
                    <p className="text-xs font-bold text-lime-950">{selectedPattern.spotlightHint}</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* VIEW 2: INTERACTIVE PATTERN QUIZ */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-2xl mx-auto">
          {!showSummary ? (
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border-4 border-[#560e51] shadow-[8px_8px_0px_0px_#560e51] space-y-6">
              
              {/* Progress Bar & Header */}
              <div className="flex items-center justify-between border-b-2 border-fuchsia-100 pb-3">
                <span className="text-xs font-black uppercase font-mono text-[#9b2c98]">
                  Question {currentQIndex + 1} of {PATTERN_QUESTIONS.length}
                </span>
                <span className="text-xs font-black uppercase font-mono text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  Score: {score} Pts
                </span>
              </div>

              {/* Pattern Type Pill */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase font-mono px-3 py-1 bg-amber-100 text-amber-900 rounded-lg border border-amber-300">
                  {currentQ.patternType}
                </span>
                <button
                  onClick={() => humanVoice.speakWord(currentQ.audioWord)}
                  className="px-3 py-1 bg-fuchsia-100 hover:bg-fuchsia-200 text-[#560e51] rounded-xl text-xs font-black uppercase border border-fuchsia-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Volume2 className="h-3.5 w-3.5" /> Hear Word
                </button>
              </div>

              {/* Question Prompt */}
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {currentQ.prompt}
                </h3>
                <p className="text-xs font-bold text-slate-500 mt-1 italic">
                  Clue: {currentQ.wordClue}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt, idx) => {
                  let btnStyle = 'bg-white hover:bg-fuchsia-50 border-[#560e51] text-slate-900';
                  if (isAnswered) {
                    if (opt === currentQ.correct) {
                      btnStyle = 'bg-emerald-500 text-white border-emerald-700 shadow-[2px_2px_0px_0px_#065f46]';
                    } else if (opt === selectedOption) {
                      btnStyle = 'bg-rose-500 text-white border-rose-700 shadow-[2px_2px_0px_0px_#881337]';
                    } else {
                      btnStyle = 'bg-slate-100 text-slate-400 border-slate-300 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt)}
                      disabled={isAnswered}
                      className={`p-4 rounded-2xl border-3 text-left font-black text-sm uppercase transition-all shadow-[3px_3px_0px_0px_#560e51] cursor-pointer flex items-center justify-between ${btnStyle}`}
                    >
                      <span className="font-mono">{opt}</span>
                      {isAnswered && opt === currentQ.correct && (
                        <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
                      )}
                      {isAnswered && opt === selectedOption && opt !== currentQ.correct && (
                        <XCircle className="h-5 w-5 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 pt-2"
                >
                  <div className={`p-4 rounded-2xl border-2 ${
                    selectedOption === currentQ.correct 
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950' 
                      : 'bg-rose-50 border-rose-400 text-rose-950'
                  }`}>
                    <span className="text-xs font-black uppercase font-mono block mb-1">
                      {selectedOption === currentQ.correct ? '🎉 Correct!' : '❌ Not Quite!'}
                    </span>
                    <p className="text-xs font-bold leading-relaxed">{currentQ.explanation}</p>
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3.5 bg-[#78c222] hover:bg-[#68ab1c] text-[#560e51] font-black text-sm uppercase tracking-wide rounded-2xl border-3 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{currentQIndex === PATTERN_QUESTIONS.length - 1 ? 'See Final Score 🏆' : 'Next Question ➡️'}</span>
                  </button>
                </motion.div>
              )}

            </div>
          ) : (
            /* Quiz Completed Summary */
            <div className="bg-white rounded-[32px] p-8 border-4 border-[#560e51] shadow-[8px_8px_0px_0px_#560e51] text-center space-y-6">
              <div className="w-20 h-20 bg-amber-400 text-[#560e51] rounded-3xl mx-auto flex items-center justify-center border-3 border-[#560e51] shadow-[4px_4px_0px_0px_#560e51]">
                <Award className="h-10 w-10" />
              </div>
              <div>
                <span className="text-xs font-black uppercase font-mono text-[#9b2c98]">Pattern Mastery Quiz Completed</span>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  You Scored {score} / {PATTERN_QUESTIONS.length}!
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 mt-2 max-w-md mx-auto">
                  {score >= 10
                    ? "Spectacular orthographic genius! You've mastered all silent letters, double letters, and classical roots!"
                    : "Great effort! Review the tricky patterns and try again to hit 100%!"}
                </p>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={handleRestartQuiz}
                  className="px-6 py-3 bg-[#78c222] hover:bg-[#68ab1c] text-[#560e51] font-black text-xs uppercase tracking-wide rounded-xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" /> Try Again
                </button>
                <button
                  onClick={() => setActiveSubTab('explorer')}
                  className="px-6 py-3 bg-fuchsia-100 hover:bg-fuchsia-200 text-[#560e51] font-black text-xs uppercase tracking-wide rounded-xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] cursor-pointer"
                >
                  Study Patterns
                </button>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect } from 'react';
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
  Info,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TRICKY_PATTERNS, MEETING_2_PATTERNS, MEETING_3_PATTERNS } from '../data/reviewData';
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
  meeting: 'meeting-2' | 'meeting-3';
  patternType: string;
  prompt: string;
  wordClue: string;
  options: string[];
  correct: string;
  explanation: string;
  audioWord: string;
}

const PATTERN_QUESTIONS: PatternQuizQuestion[] = [
  // Meeting 2 Questions
  {
    id: 'pq-m2-1',
    meeting: 'meeting-2',
    patternType: "Prefix DIS- ('Not' / 'Away')",
    prompt: "What does the Latin prefix 'dis-' mean in 'disembark' and 'disconnect'?",
    wordClue: "disembark = to leave a ship, boat, or airplane",
    options: ['together / with', 'not / opposite / away from', 'very quickly', 'above / higher'],
    correct: 'not / opposite / away from',
    explanation: "'dis-' means 'not / away' — to disembark is to leave a vessel!",
    audioWord: 'disembark'
  },
  {
    id: 'pq-m2-2',
    meeting: 'meeting-2',
    patternType: "Root TELE- ('Far' / 'Distant')",
    prompt: "What does the Greek root 'tele-' mean in 'telepathic' and 'telescope'?",
    wordClue: "telepathic = reading thoughts from across a distance",
    options: ['close / near', 'far / distant', 'sound / voice', 'fear of darkness'],
    correct: 'far / distant',
    explanation: "'tele-' means 'far' or 'distant' in Greek (telescope, telephone, telepathic)!",
    audioWord: 'telepathic'
  },
  {
    id: 'pq-m2-3',
    meeting: 'meeting-2',
    patternType: "Suffix -OUS (Adjective 'Full of')",
    prompt: "What does the suffix '-ous' turn words into in 'harmonious' and 'courageous'?",
    wordClue: "harmonious = full of harmony",
    options: ['noun (person)', 'adjective meaning full of / characterized by', 'verb (action)', 'plural noun'],
    correct: 'adjective meaning full of / characterized by',
    explanation: "'-ous' creates adjectives meaning 'full of' (harmonious, perilous, courageous)!",
    audioWord: 'harmonious'
  },
  {
    id: 'pq-m2-4',
    meeting: 'meeting-2',
    patternType: "Silent Letter Trap",
    prompt: "In the Meeting 2 word 'guardian', which letter is silent?",
    wordClue: "A person who protects or takes care of someone",
    options: ['g', 'u', 'a', 'r'],
    correct: 'u',
    explanation: "The 'u' is silent in 'guardian' (g-u-a-r-d-i-a-n)! Pronounced /ˈɡɑːr.di.ən/.",
    audioWord: 'guardian'
  },
  {
    id: 'pq-m2-5',
    meeting: 'meeting-2',
    patternType: "Vowel Digraph Trap",
    prompt: "How does the Meeting 2 word 'eavesdrop' begin?",
    wordClue: "To secretly listen to a private conversation",
    options: ['eves-', 'eaves-', 'eavs-', 'eev-'],
    correct: 'eaves-',
    explanation: "Eavesdrop begins with 'e-a-v-e-s', referring to roof eaves where rainwater drips!",
    audioWord: 'eavesdrop'
  },
  {
    id: 'pq-m2-6',
    meeting: 'meeting-2',
    patternType: "Double Consonants",
    prompt: "Which spelling correctly captures the double consonants in 'flannel'?",
    wordClue: "Meeting 2 Mock Bee word for soft woven fabric",
    options: ['flanel', 'flannel', 'flannell', 'fflannel'],
    correct: 'flannel',
    explanation: "Flannel has a double 'n' with a single 'l' (f-l-a-n-n-e-l)!",
    audioWord: 'flannel'
  },

  // Meeting 3 Questions
  {
    id: 'pq-m3-1',
    meeting: 'meeting-3',
    patternType: "French Loanwords",
    prompt: "Which French loanword keeps its acute accent (é) and means an evening party?",
    wordClue: "From Meeting 3 French Loanword Spotlight",
    options: ['duvet', 'faux', 'soirée', 'rotisserie'],
    correct: 'soirée',
    explanation: "Soirée keeps its French accent mark (é) and describes an elegant evening reception!",
    audioWord: 'soirée'
  },
  {
    id: 'pq-m3-2',
    meeting: 'meeting-3',
    patternType: "Root PHIL- ('Love' / 'Devotion')",
    prompt: "What does the Greek root 'phil-' mean in 'philharmonic' and 'philosophy'?",
    wordClue: "philharmonic = in love with harmony/music",
    options: ['fear / fright', 'love / devotion to', 'wisdom only', 'speed'],
    correct: 'love / devotion to',
    explanation: "'phil-' means 'love' or 'devoted to' in Greek!",
    audioWord: 'philharmonic'
  },
  {
    id: 'pq-m3-3',
    meeting: 'meeting-3',
    patternType: "Root -PHOBIA ('Extreme Fear')",
    prompt: "What does the Greek root '-phobia' mean in 'brontophobia' (fear of thunder)?",
    wordClue: "brontophobia = extreme terror during lightning and thunder",
    options: ['extreme fear / aversion', 'study of storms', 'love of rain', 'sound of thunder'],
    correct: 'extreme fear / aversion',
    explanation: "'-phobia' signifies extreme or irrational fear! Always spelled p-h-o-b-i-a.",
    audioWord: 'brontophobia'
  },
  {
    id: 'pq-m3-4',
    meeting: 'meeting-3',
    patternType: "Double Consonant Trap",
    prompt: "How is the Two-Bee employee word 'personnel' correctly spelled?",
    wordClue: "Meeting 3 Warm-Up word for staff/employees",
    options: ['personal', 'personel', 'personnel', 'perrsonel'],
    correct: 'personnel',
    explanation: "Personnel has DOUBLE 'n' and single 'l' (p-e-r-s-o-n-n-e-l), unlike 'personal'!",
    audioWord: 'personnel'
  },
  {
    id: 'pq-m3-5',
    meeting: 'meeting-3',
    patternType: "Vowel Placement Trap",
    prompt: "Which is the correct spelling for dental 'fluoride'?",
    wordClue: "Meeting 3 Warm-Up word: mineral that strengthens tooth enamel",
    options: ['flouride', 'fluoride', 'floride', 'fluorid'],
    correct: 'fluoride',
    explanation: "'u' comes before 'o' in 'fluoride' (f-l-u-o-r-i-d-e) from fluorine, not flour!",
    audioWord: 'fluoride'
  }
];

export default function PatternReviewLab({ onAwardTeamScore, genAlphaMode, activeMeeting = 'meeting-2' }: PatternLabProps) {
  const [sessionMeeting, setSessionMeeting] = useState<'meeting-2' | 'meeting-3'>(
    activeMeeting === 'meeting-3' ? 'meeting-3' : 'meeting-2'
  );

  useEffect(() => {
    if (activeMeeting === 'meeting-2' || activeMeeting === 'meeting-3') {
      setSessionMeeting(activeMeeting);
    }
  }, [activeMeeting]);

  const [activeSubTab, setActiveSubTab] = useState<'explorer' | 'quiz'>('explorer');

  // Meeting specific patterns
  const meetingPatterns = sessionMeeting === 'meeting-2' ? MEETING_2_PATTERNS : MEETING_3_PATTERNS;
  const [selectedPatternId, setSelectedPatternId] = useState<string>(meetingPatterns[0]?.id || TRICKY_PATTERNS[0].id);

  // Sync selected pattern when meeting changes
  useEffect(() => {
    const list = sessionMeeting === 'meeting-2' ? MEETING_2_PATTERNS : MEETING_3_PATTERNS;
    if (list.length > 0) {
      setSelectedPatternId(list[0].id);
    }
  }, [sessionMeeting]);

  // Meeting specific quiz questions
  const meetingQuestions = PATTERN_QUESTIONS.filter(q => q.meeting === sessionMeeting);

  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const selectedPattern = meetingPatterns.find(p => p.id === selectedPatternId) || meetingPatterns[0] || TRICKY_PATTERNS[0];
  const currentQ = meetingQuestions[currentQIndex] || meetingQuestions[0];

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
    if (currentQIndex < meetingQuestions.length - 1) {
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
            Pattern Quiz ⚡ ({score}/{meetingQuestions.length})
          </button>
        </div>
      </div>

      {/* Explicit Learning Goal & Objectives Banner */}
      <div className="bg-gradient-to-r from-fuchsia-50 via-amber-50 to-lime-50 rounded-2xl p-4 sm:p-5 border-3 border-[#560e51] shadow-[4px_4px_0px_0px_#560e51] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-[#560e51] text-white rounded-xl shadow-[2px_2px_0px_0px_#78c222] shrink-0">
            <Target className="h-6 w-6 text-[#78c222]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-wider bg-[#560e51] text-white px-2.5 py-0.5 rounded-full font-mono">
                {sessionMeeting === 'meeting-2' ? 'Meeting 2 Learning Goal' : 'Meeting 3 Learning Goal'}
              </span>
              <span className="text-xs font-bold text-slate-600">
                {sessionMeeting === 'meeting-2' ? 'Target: Word Roots & Affixes' : 'Target: Two-Bee Level Words & French Roots'}
              </span>
            </div>
            <p className="text-sm font-black text-slate-900 mt-1">
              {sessionMeeting === 'meeting-2'
                ? "Master Latin prefix DIS- ('disembark'), Greek root TELE- ('telepathic'), and adjective suffix -OUS ('harmonious')."
                : "Master French loanwords with accents ('soirée', 'duvet'), Greek root PHIL- ('philharmonic'), and -PHOBIA ('brontophobia')."}
            </p>
          </div>
        </div>

        {/* Meeting Toggle */}
        <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] shrink-0 self-start md:self-auto">
          <button
            onClick={() => {
              setSessionMeeting('meeting-2');
              sound.playClick();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase font-mono transition-all cursor-pointer ${
              sessionMeeting === 'meeting-2'
                ? 'bg-[#78c222] text-[#560e51] border-2 border-[#560e51] shadow-[1px_1px_0px_0px_#560e51]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Meeting 2
          </button>
          <button
            onClick={() => {
              setSessionMeeting('meeting-3');
              sound.playClick();
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase font-mono transition-all cursor-pointer ${
              sessionMeeting === 'meeting-3'
                ? 'bg-[#9b2c98] text-white border-2 border-[#560e51] shadow-[1px_1px_0px_0px_#560e51]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Meeting 3
          </button>
        </div>
      </div>

      {/* VIEW 1: PATTERN EXPLORER */}
      {activeSubTab === 'explorer' && (
        <div className="space-y-6">
          
          {/* PPT Highlights Banner: Meeting Specific Core Pillars */}
          <div className="bg-[#fffdf5] rounded-[28px] p-6 border-3 border-[#560e51] shadow-[4px_4px_0px_0px_#560e51]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase font-mono text-[#9b2c98] bg-fuchsia-100 px-3 py-1 rounded-lg border border-[#560e51]">
                {sessionMeeting === 'meeting-2' ? 'Meeting 2 Core Pillars' : 'Meeting 3 Core Pillars'}
              </span>
              <span className="text-xs font-bold text-slate-500">Essential Patterns for Today's Assessment</span>
            </div>

            {sessionMeeting === 'meeting-2' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Pillar 1: Prefix DIS- */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-700 font-mono mb-2">Prefix DIS- ('Not/Away')</span>
                  <div className="w-24 h-16 bg-amber-500 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>disembark</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">To leave or step away from a ship!</p>
                  <button
                    onClick={() => humanVoice.speakWord('disembark')}
                    className="mt-3 px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-lg text-xs font-black uppercase border border-amber-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>

                {/* Pillar 2: Root TELE- */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-700 font-mono mb-2">Root TELE- ('Far Away')</span>
                  <div className="w-24 h-16 bg-rose-500 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm text-center px-1 border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>telepathic</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">Feeling thoughts from across a distance!</p>
                  <button
                    onClick={() => humanVoice.speakWord('telepathic')}
                    className="mt-3 px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-lg text-xs font-black uppercase border border-rose-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>

                {/* Pillar 3: Suffix -OUS */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 font-mono mb-2">Suffix -OUS ('Full Of')</span>
                  <div className="w-24 h-16 bg-emerald-600 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>harmonious</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">Adjective meaning full of harmony!</p>
                  <button
                    onClick={() => humanVoice.speakWord('harmonious')}
                    className="mt-3 px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 rounded-lg text-xs font-black uppercase border border-emerald-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Pillar 1: French Loanwords */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-700 font-mono mb-2">French Loanwords</span>
                  <div className="w-24 h-16 bg-purple-600 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>soirée</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">Keeps acute accent (é): evening party!</p>
                  <button
                    onClick={() => humanVoice.speakWord('soirée')}
                    className="mt-3 px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded-lg text-xs font-black uppercase border border-purple-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>

                {/* Pillar 2: Root PHIL- */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-700 font-mono mb-2">Root PHIL- ('Love')</span>
                  <div className="w-24 h-16 bg-cyan-600 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm text-center px-1 border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>philharmonic</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">'phil-' = devoted to / love of music!</p>
                  <button
                    onClick={() => humanVoice.speakWord('philharmonic')}
                    className="mt-3 px-3 py-1 bg-cyan-100 hover:bg-cyan-200 text-cyan-900 rounded-lg text-xs font-black uppercase border border-cyan-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>

                {/* Pillar 3: Root -PHOBIA */}
                <div className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] text-center flex flex-col items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-rose-700 font-mono mb-2">Root -PHOBIA ('Fear')</span>
                  <div className="w-24 h-16 bg-rose-600 text-white rounded-[18px] flex flex-col items-center justify-center font-black text-sm border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51] mb-3">
                    <span>brontophobia</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800">p-h-o-b-i-a = extreme fear of thunder!</p>
                  <button
                    onClick={() => humanVoice.speakWord('brontophobia')}
                    className="mt-3 px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-900 rounded-lg text-xs font-black uppercase border border-rose-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="h-3.5 w-3.5" /> Listen
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pattern Selector Carousel & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Pattern List Sidebar */}
            <div className="lg:col-span-5 space-y-2">
              <h3 className="text-xs font-black uppercase font-mono text-[#560e51] tracking-wider mb-2">
                {sessionMeeting === 'meeting-2' ? 'Meeting 2 Patterns (3 Spotlights)' : 'Meeting 3 Patterns (3 Spotlights)'}:
              </h3>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {meetingPatterns.map((p) => {
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
                  Question {currentQIndex + 1} of {meetingQuestions.length}
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
                    <span>{currentQIndex === meetingQuestions.length - 1 ? 'See Final Score 🏆' : 'Next Question ➡️'}</span>
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
                  You Scored {score} / {meetingQuestions.length}!
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

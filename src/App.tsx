import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FlashcardModule from './components/FlashcardModule';
import PatternReviewLab from './components/PatternReviewLab';
import ListeningStations from './components/ListeningStations';
import MockSpellingBeeStage from './components/MockSpellingBeeStage';
import ProgressCheckModule from './components/ProgressCheckModule';
import ClassroomGames from './components/ClassroomGames';
import SpellingBeeContest from './components/SpellingBeeContest';
import ProgressTracker from './components/ProgressTracker';
import { StudentProgress, ClassroomScores } from './types';
import { 
  ALL_WORD_STUDY_CARDS, 
  PPT_ROUND_WORDS, 
  MEETING_2_WORDS_TO_KNOW, 
  MEETING_3_WORDS_TO_KNOW,
  TRICKY_PATTERNS,
  OPEN_THE_BOX_30,
  SCRIPPS_LORE
} from './data/reviewData';
import { sound } from './components/SoundManager';
import { humanVoice } from './utils/humanVoice';
import { 
  Trophy, 
  BookOpen, 
  Sparkles, 
  Headphones, 
  Award, 
  CheckCircle2, 
  Play, 
  Users, 
  Clock, 
  ChevronRight, 
  X, 
  Flame, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Zap,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const INITIAL_PROGRESS: StudentProgress = {
  vocabReviewed: [],
  patternAccuracy: {},
  preTestScore: null,
  postTestScore: null,
  mockBeeScore: null,
  grammarAccuracy: {},
  mockExamScore: null,
  mockExamCompleted: false,
  gamesPlayed: [],
  unlockedBadges: [],
  projectSaved: false
};

const INITIAL_SCORES: ClassroomScores = {
  teamA: 0,
  teamB: 0
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedMeeting, setSelectedMeeting] = useState<'meeting-2' | 'meeting-3'>('meeting-2');
  const [isTeacherMode, setIsTeacherMode] = useState<boolean>(false);
  const [genAlphaMode, setGenAlphaMode] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState<boolean>(false);
  const [showProgressModal, setShowProgressModal] = useState<boolean>(false);

  // Pre-test & Post-test scores
  const [preTestScore, setPreTestScore] = useState<number | null>(() => {
    const saved = localStorage.getItem('spelling_pre_test_score');
    return saved !== null ? parseInt(saved, 10) : null;
  });

  const [postTestScore, setPostTestScore] = useState<number | null>(() => {
    const saved = localStorage.getItem('spelling_post_test_score');
    return saved !== null ? parseInt(saved, 10) : null;
  });

  // Student progress state with LocalStorage persistence
  const [progress, setProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem('spelling_bee_enrichment_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_PROGRESS, ...parsed };
      } catch (e) {
        console.error('Failed to parse saved progress', e);
      }
    }
    return INITIAL_PROGRESS;
  });

  // Team scores state with LocalStorage persistence (Team A: Spellbinders, Team B: Honeybees)
  const [teamScores, setTeamScores] = useState<ClassroomScores>(() => {
    const saved = localStorage.getItem('spelling_bee_team_scores');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved scores', e);
      }
    }
    return INITIAL_SCORES;
  });

  useEffect(() => {
    localStorage.setItem('spelling_bee_enrichment_progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('spelling_bee_team_scores', JSON.stringify(teamScores));
  }, [teamScores]);

  // Mastered words count
  const masteredCount = progress.vocabReviewed?.length || 0;
  const totalWords = ALL_WORD_STUDY_CARDS.length;

  // Comprehensive Session Mastery percentage (0 - 100)
  const wordScore = totalWords > 0 ? (masteredCount / totalWords) * 35 : 0;
  const preScoreContribution = preTestScore !== null ? (preTestScore / 10) * 15 : 0;
  const postScoreContribution = postTestScore !== null ? (postTestScore / 10) * 35 : 0;
  const gamesScore = Math.min(progress.gamesPlayed.length * 5, 15);
  const masteryPercentage = Math.min(100, Math.round(wordScore + preScoreContribution + postScoreContribution + gamesScore));

  const handleMarkWordReviewed = (id: string, mastered: boolean) => {
    setProgress(prev => {
      const current = prev.vocabReviewed || [];
      const updated = mastered
        ? Array.from(new Set([...current, id]))
        : current.filter(x => x !== id);
      return { ...prev, vocabReviewed: updated };
    });
  };

  const handleSaveScores = (pre: number, post: number) => {
    setPreTestScore(pre);
    setPostTestScore(post);
    localStorage.setItem('spelling_pre_test_score', pre.toString());
    localStorage.setItem('spelling_post_test_score', post.toString());
  };

  const handleAwardTeamScore = (team: 'A' | 'B', pts: number) => {
    setTeamScores(prev => ({
      ...prev,
      [team === 'A' ? 'teamA' : 'teamB']: prev[team === 'A' ? 'teamA' : 'teamB'] + pts
    }));
  };

  const handleGamePlayed = (gameKey: string) => {
    setProgress(prev => ({
      ...prev,
      gamesPlayed: Array.from(new Set([...prev.gamesPlayed, gameKey]))
    }));
  };

  const handleResetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    setTeamScores(INITIAL_SCORES);
    setPreTestScore(null);
    setPostTestScore(null);
    localStorage.removeItem('spelling_bee_enrichment_progress');
    localStorage.removeItem('spelling_bee_team_scores');
    localStorage.removeItem('spelling_pre_test_score');
    localStorage.removeItem('spelling_post_test_score');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-slate-900 flex flex-col font-sans selection:bg-[#78c222] selection:text-[#560e51]">
      
      {/* Universal Header with Navigation Tabs */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isTeacherMode={isTeacherMode}
        setIsTeacherMode={setIsTeacherMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        masteryPercentage={masteryPercentage}
        genAlphaMode={genAlphaMode}
        setGenAlphaMode={setGenAlphaMode}
        isHeaderCollapsed={isHeaderCollapsed}
        setIsHeaderCollapsed={setIsHeaderCollapsed}
        selectedMeeting={selectedMeeting}
        setSelectedMeeting={setSelectedMeeting}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Gen Alpha Slang Mode Alert Banner */}
        {genAlphaMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-2xl bg-[#560e51] text-white border-3 border-[#78c222] shadow-[4px_4px_0px_0px_#78c222] flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-xs font-black uppercase font-mono text-[#78c222] tracking-wider">
                  CHAMPION SPELLER AURA MODE ACTIVE! (+9999 Orthographic Aura)
                </p>
                <p className="text-xs font-bold text-fuchsia-100">
                  Silent letter traps decoded, Greek root rizz unlocked, and Scripps stage confidence maxed out!
                </p>
              </div>
            </div>
            <button
              onClick={() => setGenAlphaMode(false)}
              className="px-3 py-1.5 bg-[#78c222] text-[#560e51] font-black text-xs rounded-xl uppercase tracking-tight border-2 border-white/30 cursor-pointer shrink-0"
            >
              Exit Aura
            </button>
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: DASHBOARD / SESSION HUB */}
        {/* ======================================================== */}
        {activeTab === 'dashboard' && (
          <motion.div
            key="view-dashboard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Hero Banner */}
            <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 border-4 border-[#560e51] shadow-[8px_8px_0px_0px_#560e51] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center md:text-left max-w-2xl">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="text-xs font-black uppercase tracking-widest text-[#560e51] font-mono bg-[#fdf2fe] px-4 py-1.5 rounded-full border-2 border-[#560e51] inline-block shadow-[2px_2px_0px_0px_#560e51]">
                    Advanced Level • Grade 3–6 • 90 Minutes
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-[#43780a] font-mono bg-lime-100 px-3.5 py-1.5 rounded-full border-2 border-lime-500 inline-block shadow-[2px_2px_0px_0px_#43780a]">
                    Scripps National Format 🏆
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
                  Spelling Bee Enrichment Session 🐝
                </h2>
                <p className="text-sm sm:text-base font-bold text-slate-700 leading-relaxed">
                  Welcome to the official 90-minute championship workshop! Master tricky silent letters, double consonants, Greek and Latin roots (<em>bio-, tele-, phil-, -phobia</em>), rotate through 3 interactive listening stations, open the 30 mystery boxes, and take the stage!
                </p>
                
                {/* Hero Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
                  <button
                    onClick={() => {
                      setActiveTab('progress-check');
                      sound.playClick();
                    }}
                    className="px-6 py-3 bg-[#78c222] hover:bg-[#68ab1c] text-[#560e51] font-black text-xs sm:text-sm uppercase tracking-wide rounded-xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] cursor-pointer flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Start Warm-Up Pre-Test (10m) 📝
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('mock-bee');
                      sound.playClick();
                    }}
                    className="px-6 py-3 bg-[#9b2c98] hover:bg-[#852282] text-white font-black text-xs sm:text-sm uppercase tracking-wide rounded-xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] cursor-pointer flex items-center gap-2"
                  >
                    <Award className="h-4 w-4 text-[#78c222]" /> Open Wordwall 30 Boxes 📦
                  </button>
                </div>
              </div>

              {/* Stats & Scoreboard Card */}
              <div className="w-full md:w-80 bg-[#fefaf0] border-3 border-[#560e51] p-5 rounded-2xl shadow-[4px_4px_0px_0px_#560e51] space-y-3 shrink-0">
                <div className="flex justify-between items-center border-b-2 border-[#560e51]/20 pb-2">
                  <span className="text-xs font-black uppercase font-mono text-[#560e51]">Session Mastery</span>
                  <span className="text-lg font-black font-mono text-[#9b2c98]">{masteryPercentage}%</span>
                </div>
                <div className="space-y-2 text-xs font-bold text-slate-800">
                  <div className="flex justify-between">
                    <span>Words Mastered:</span>
                    <span className="font-mono font-black text-[#560e51]">{masteredCount} / {totalWords}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warm-Up Pre-Test:</span>
                    <span className="font-mono font-black text-[#560e51]">
                      {preTestScore !== null ? `${preTestScore} / 10 words` : 'Not Taken'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Progress Post-Test:</span>
                    <span className="font-mono font-black text-[#560e51]">
                      {postTestScore !== null ? `${postTestScore} / 10 words` : 'Not Taken'}
                    </span>
                  </div>
                </div>

                {/* Team Scoreboard */}
                <div className="pt-2 border-t-2 border-[#560e51]/20">
                  <span className="text-[10px] uppercase font-mono font-black text-[#9b2c98] block">CLASSROOM SCOREBOARD:</span>
                  <div className="flex justify-between mt-1 text-xs font-black">
                    <span className="text-emerald-700">Team A (Honeybees 🐝): {teamScores.teamA} pts</span>
                    <span className="text-indigo-700">Team B (Spellbinders ✨): {teamScores.teamB} pts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6-MODULE ROADMAP (The 90-Minute Agenda) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-black uppercase text-[#9b2c98] tracking-widest block">
                    Today's 90-Minute Schedule
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    6-Module Enrichment Roadmap 🗺️
                  </h3>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono hidden sm:inline">
                  Follow each module in sequence
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* Module 1: Warm-Up Challenge */}
                <div
                  onClick={() => {
                    setActiveTab('progress-check');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-amber-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <CheckCircle2 className="h-6 w-6 text-amber-700" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                        Part 1 · 10 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-amber-800">Slide 3 & 5 Diagnostic</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Warm-Up Challenge 🏁</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      "Let's see what you already know!" 10 diagnostic baseline words read twice on your whiteboard slate.
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Start Pre-Test <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Module 2: Tricky Patterns */}
                <div
                  onClick={() => {
                    setActiveTab('patterns');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-fuchsia-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-fuchsia-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <Sparkles className="h-6 w-6 text-[#9b2c98]" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-[#560e51] bg-fuchsia-100 px-3 py-1 rounded-full border border-fuchsia-300">
                        Part 2 · 10 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-[#9b2c98]">Slide 6 Orthography</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Tricky Patterns 🔬</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      Silent letters (<em>knight</em>), double letters (<em>embarrass, vacuum, occasion</em>), and Greek roots (<em>bio, tele, phil</em>).
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Explore Patterns <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Module 3: Word Study */}
                <div
                  onClick={() => {
                    setActiveTab('word-study');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-purple-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <BookOpen className="h-6 w-6 text-purple-700" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
                        Part 3 · 20 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-purple-700">Slide 7 & 8 Study</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Word Study Decks 📖</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      PPT Rounds 1 & 2, Meeting 2 "Words to Know", Meeting 3 "Two-Bee Words", and over 120 words with audio!
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Open Word Deck <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Module 4: Listening Stations */}
                <div
                  onClick={() => {
                    setActiveTab('listening');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-sky-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <Headphones className="h-6 w-6 text-sky-700" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-sky-900 bg-sky-100 px-3 py-1 rounded-full border border-sky-300">
                        Part 4 · 20 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-sky-700">Slide 9 3-Station Lab</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Listening Stations 🎧</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      Station 1: Partner Dictation • Station 2: Audio 2x with Digital Canvas • Station 3: Digital Quiz!
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Enter Stations <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Module 5: Mock Spelling Bee */}
                <div
                  onClick={() => {
                    setActiveTab('mock-bee');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-lime-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-lime-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <Award className="h-6 w-6 text-[#43780a]" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-lime-900 bg-lime-100 px-3 py-1 rounded-full border border-lime-300">
                        Part 5 · 15 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-lime-800">Slides 10 & 11 Stage</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Mock Spelling Bee 🐝</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      Wordwall 30 "Open the Box" challenge, official 4 stage rules, and Dr. Jacques Bailly pronouncer simulator!
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Take The Stage <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Module 6: Progress Check */}
                <div
                  onClick={() => {
                    setActiveTab('progress-check');
                    sound.playClick();
                  }}
                  className="bg-white hover:bg-rose-50/50 p-6 rounded-[28px] border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] cursor-pointer transition-all hover:translate-y-[-2px] space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center border-2 border-[#560e51] shadow-[2px_2px_0px_0px_#560e51]">
                        <Star className="h-6 w-6 text-rose-700" />
                      </div>
                      <span className="text-xs font-mono font-black uppercase text-rose-900 bg-rose-100 px-3 py-1 rounded-full border border-rose-300">
                        Part 6 · 15 min
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase text-rose-700">Slides 12, 13 & 14</span>
                    <h3 className="text-xl font-black text-[#560e51] uppercase tracking-tight">Progress Check & Star 🌟</h3>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mt-1">
                      10-word post-test growth analysis, comparative delta meter, and official Spelling Star celebration certificate!
                    </p>
                  </div>
                  <span className="text-xs font-black text-[#560e51] uppercase flex items-center gap-1 font-mono pt-2">
                    Check Growth <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

              </div>
            </div>

            {/* SCRIPPS NATIONAL SPELLING BEE LORE SECTION */}
            <div className="bg-[#fffdf5] rounded-[32px] p-6 sm:p-8 border-4 border-[#560e51] shadow-[6px_6px_0px_0px_#560e51] space-y-6">
              <div className="border-b-2 border-fuchsia-100 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-black uppercase text-[#9b2c98]">Behind the Championship</span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mt-1">
                    Scripps National Spelling Bee Lore 🏛️
                  </h3>
                </div>
                <Trophy className="h-7 w-7 text-amber-500" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SCRIPPS_LORE.map((lore, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border-2 border-[#560e51] shadow-[3px_3px_0px_0px_#560e51] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono font-black uppercase text-[#9b2c98] block mb-2">{lore.tag}</span>
                      <h4 className="text-sm font-black uppercase text-[#560e51]">{lore.title}</h4>
                      <p className="text-xs font-bold text-slate-600 mt-1 leading-relaxed">{lore.body}</p>
                    </div>
                    <span className="text-[10px] font-mono font-black text-[#9b2c98] mt-3 block pt-2 border-t border-slate-100">
                      Official Scripps Lore
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: WORD STUDY */}
        {/* ======================================================== */}
        {activeTab === 'word-study' && (
          <motion.div
            key="view-word-study"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <FlashcardModule
              reviewedIds={progress.vocabReviewed || []}
              onMarkReviewed={handleMarkWordReviewed}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: TRICKY PATTERNS */}
        {/* ======================================================== */}
        {activeTab === 'patterns' && (
          <motion.div
            key="view-patterns"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <PatternReviewLab
              onAwardTeamScore={handleAwardTeamScore}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: LISTENING STATIONS */}
        {/* ======================================================== */}
        {activeTab === 'listening' && (
          <motion.div
            key="view-listening"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <ListeningStations
              onAwardTeamScore={handleAwardTeamScore}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: MOCK SPELLING BEE */}
        {/* ======================================================== */}
        {activeTab === 'mock-bee' && (
          <motion.div
            key="view-mock-bee"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <MockSpellingBeeStage
              onAwardTeamScore={handleAwardTeamScore}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: PROGRESS CHECK (PRE-TEST & POST-TEST) */}
        {/* ======================================================== */}
        {activeTab === 'progress-check' && (
          <motion.div
            key="view-progress-check"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <ProgressCheckModule
              preTestScore={preTestScore}
              postTestScore={postTestScore}
              onSaveScores={handleSaveScores}
              onAwardTeamScore={handleAwardTeamScore}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: CLASSROOM GAMES */}
        {/* ======================================================== */}
        {activeTab === 'arcade' && (
          <motion.div
            key="view-games"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <ClassroomGames
              isTeacherMode={isTeacherMode}
              onGamePlayed={handleGamePlayed}
              teamScores={teamScores}
              setTeamScores={setTeamScores}
              genAlphaMode={genAlphaMode}
              activeMeeting={selectedMeeting}
            />
          </motion.div>
        )}

        {/* ======================================================== */}
        {/* TAB: TEACHER AUDITIONS & STAGE */}
        {/* ======================================================== */}
        {activeTab === 'auditions' && (
          <motion.div
            key="view-auditions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            <SpellingBeeContest
              isTeacherMode={isTeacherMode}
              genAlphaMode={genAlphaMode}
            />
          </motion.div>
        )}

      </main>

      {/* Progress Tracker Modal */}
      <AnimatePresence>
        {showProgressModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[32px] border-4 border-[#560e51] shadow-[8px_8px_0px_0px_#560e51] p-6 max-w-md w-full relative"
            >
              <div className="flex justify-between items-center pb-3 border-b-2 border-fuchsia-100 mb-4">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#9b2c98]" />
                  <h3 className="text-base font-black text-[#560e51] uppercase tracking-tight">Student Progress & Stamps</h3>
                </div>
                <button
                  onClick={() => setShowProgressModal(false)}
                  className="p-1.5 bg-fuchsia-50 hover:bg-fuchsia-100 text-[#560e51] rounded-full border-2 border-[#560e51] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <ProgressTracker
                progress={progress}
                onResetProgress={handleResetProgress}
                isTeacherMode={isTeacherMode}
                teamScores={teamScores}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full border-t-2 border-[#560e51]/20 bg-white py-4 px-6 mt-12 text-center text-xs text-[#560e51] font-bold">
        <p>Spelling Bee Enrichment Session · Words of the Champions 2024–2025 · SDIT Auliya</p>
      </footer>

    </div>
  );
}

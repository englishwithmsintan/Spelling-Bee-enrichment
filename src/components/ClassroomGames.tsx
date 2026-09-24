import React, { useState } from 'react';
import { OPEN_THE_BOX_30, ALL_WORD_STUDY_CARDS } from '../data/reviewData';
import { ClassroomScores, BoxChallenge } from '../types';
import { sound } from './SoundManager';
import { humanVoice } from '../utils/humanVoice';
import {
  Gamepad2,
  Trophy,
  Users,
  RotateCcw,
  Sparkles,
  ExternalLink,
  Volume2,
  CheckCircle2,
  XCircle,
  Zap,
  HelpCircle,
  Timer
} from 'lucide-react';

interface ClassroomGamesProps {
  teamScores: ClassroomScores;
  onUpdateScores?: (scores: ClassroomScores) => void;
  setTeamScores?: (scores: ClassroomScores) => void;
  onGamePlayed: (gameId: string) => void;
  genAlphaMode?: boolean;
  isTeacherMode?: boolean;
}

export default function ClassroomGames({
  teamScores,
  onUpdateScores,
  setTeamScores,
  onGamePlayed,
  genAlphaMode,
  isTeacherMode
}: ClassroomGamesProps) {
  const [selectedGame, setSelectedGame] = useState<'open-box' | 'wheel' | 'jeopardy' | 'speed-buzz'>('open-box');

  const updateScores = (newScores: ClassroomScores) => {
    if (onUpdateScores) onUpdateScores(newScores);
    if (setTeamScores) setTeamScores(newScores);
  };

  // Open the box state
  const [openedBoxes, setOpenedBoxes] = useState<Record<number, boolean>>({});
  const [activeBox, setActiveBox] = useState<BoxChallenge | null>(null);
  const [boxSpellingAttempt, setBoxSpellingAttempt] = useState<string>('');
  const [activeTeamTurn, setActiveTeamTurn] = useState<'teamA' | 'teamB'>('teamA');

  // Wheel State
  const [wheelDegree, setWheelDegree] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [wheelWord, setWheelWord] = useState<string | null>(null);

  // Speed Buzz State
  const [speedTimer, setSpeedTimer] = useState<number>(60);
  const [isSpeedRunning, setIsSpeedRunning] = useState<boolean>(false);
  const [speedScore, setSpeedScore] = useState<number>(0);

  // Open box handler
  const handleOpenBox = (item: BoxChallenge) => {
    sound.playLetterKey();
    setOpenedBoxes(prev => ({ ...prev, [item.boxNumber]: true }));
    setActiveBox(item);
    setBoxSpellingAttempt('');
    onGamePlayed('open-the-box');
  };

  const handleGradeBox = (isCorrect: boolean) => {
    if (!activeBox) return;

    if (isCorrect) {
      sound.playCorrect();
      updateScores({
        ...teamScores,
        [activeTeamTurn]: teamScores[activeTeamTurn] + (activeBox.points || 10)
      });
    } else {
      sound.playWrong();
    }
    setActiveBox(null);
    setActiveTeamTurn(prev => (prev === 'teamA' ? 'teamB' : 'teamA'));
  };

  // Wheel spin
  const handleSpinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    sound.playLetterKey();

    const randomRotation = 1440 + Math.floor(Math.random() * 360);
    const newDegree = wheelDegree + randomRotation;
    setWheelDegree(newDegree);

    setTimeout(() => {
      setIsSpinning(false);
      const chosenWord = ALL_WORD_STUDY_CARDS[Math.floor(Math.random() * ALL_WORD_STUDY_CARDS.length)];
      setWheelWord(chosenWord.word);
      sound.playFanfare();
      humanVoice.speak(`The wheel landed on: ${chosenWord.word}!`);
      onGamePlayed('wheel-of-spelling');
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6">
      {/* Title & Banner */}
      <div className="bg-[#241a12] border-2 border-amber-500/30 rounded-2xl p-5 sm:p-6 mb-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎮</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-amber-400">
                CLASSROOM GAMIFICATION ARENA
              </h2>
            </div>
            <p className="text-xs text-amber-200/80 mt-1">
              Slide 11 Open the Box, Wheel of Spelling Roots, Jeopardy Grid & Team Battles.
            </p>
          </div>

          {/* Team Scores Bar */}
          <div className="flex items-center gap-3 bg-[#18110b] border border-amber-500/30 px-4 py-2 rounded-xl">
            <div className="text-center">
              <span className="text-[10px] text-stone-400 block font-mono">
                {teamScores.teamAName || 'Team Honeybees'}
              </span>
              <span className="font-serif font-black text-xl text-amber-400">
                {teamScores.teamA} pts
              </span>
            </div>
            <span className="text-stone-600 font-bold">VS</span>
            <div className="text-center">
              <span className="text-[10px] text-stone-400 block font-mono">
                {teamScores.teamBName || 'Team Hornets'}
              </span>
              <span className="font-serif font-black text-xl text-amber-300">
                {teamScores.teamB} pts
              </span>
            </div>
          </div>
        </div>

        {/* Game Switcher Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-amber-500/20">
          <button
            onClick={() => {
              sound.playClick();
              setSelectedGame('open-box');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedGame === 'open-box'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-[#1a120b] border border-amber-500/20 text-stone-300 hover:border-amber-400'
            }`}
          >
            <span>📦</span>
            <span>Open the Box (30 Boxes)</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setSelectedGame('wheel');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedGame === 'wheel'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-[#1a120b] border border-amber-500/20 text-stone-300 hover:border-amber-400'
            }`}
          >
            <span>🎡</span>
            <span>Wheel of Spelling</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setSelectedGame('jeopardy');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              selectedGame === 'jeopardy'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'bg-[#1a120b] border border-amber-500/20 text-stone-300 hover:border-amber-400'
            }`}
          >
            <span>🏆</span>
            <span>Jeopardy Bee Grid</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* GAME 1: OPEN THE BOX 30 GRID */}
      {/* ========================================================================= */}
      {selectedGame === 'open-box' && (
        <div className="space-y-4">
          <div className="bg-[#1b120c] border border-amber-500/30 rounded-xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-stone-200">
              <span className="text-amber-400 font-bold">Turn to Spell: </span>
              <strong className="text-amber-300 font-serif uppercase tracking-wider">
                {activeTeamTurn === 'teamA' ? teamScores.teamAName : teamScores.teamBName}
              </strong>
            </div>
            <a
              href="https://wordwall.net/resource/93490509/spelling-bee-movers-medium-level"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-white flex items-center gap-1 font-semibold"
            >
              <span>Play Official Wordwall Resource</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-[#241a12] border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2.5">
              {OPEN_THE_BOX_30.map(item => {
                const isOpened = openedBoxes[item.boxNumber];
                const isSelected = activeBox?.boxNumber === item.boxNumber;

                return (
                  <button
                    key={item.boxNumber}
                    onClick={() => handleOpenBox(item)}
                    className={`aspect-square rounded-xl border flex flex-col items-center justify-center p-1 transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 font-black border-white shadow-lg scale-105 ring-2 ring-amber-400'
                        : isOpened
                        ? 'bg-[#382618] border-amber-500/60 text-amber-300'
                        : 'bg-[#1b120c] border-amber-500/30 hover:border-amber-400 text-stone-300 hover:scale-105'
                    }`}
                  >
                    <span className="font-mono font-black text-sm">{item.boxNumber}</span>
                    {isOpened ? (
                      <span className="text-[8px] font-mono uppercase truncate max-w-full text-amber-200">
                        {item.word}
                      </span>
                    ) : (
                      <span className="text-[9px] opacity-40">🔒</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {activeBox && (
            <div className="bg-[#241a12] border-2 border-amber-500/60 rounded-2xl p-6 shadow-2xl animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
                <span className="text-xs font-mono font-bold text-amber-400">
                  BOX #{activeBox.boxNumber} • Level: {activeBox.level} • {activeBox.points} pts
                </span>
                <button
                  onClick={() => humanVoice.speak(activeBox.word)}
                  className="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 rounded text-xs flex items-center gap-1 font-semibold"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Pronounce</span>
                </button>
              </div>

              <p className="text-base text-stone-100 font-serif italic mb-2">
                "{activeBox.definition}"
              </p>
              <p className="text-xs text-stone-400 mb-4">"{activeBox.sentence}"</p>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={boxSpellingAttempt}
                  onChange={e => setBoxSpellingAttempt(e.target.value)}
                  placeholder="Type speller letters..."
                  className="flex-1 bg-[#140d08] border-2 border-amber-500/40 focus:border-amber-400 rounded-xl px-4 py-2 font-mono text-amber-100 uppercase"
                />
                <button
                  onClick={() => handleGradeBox(true)}
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl text-xs uppercase"
                >
                  Correct (+Points)
                </button>
                <button
                  onClick={() => handleGradeBox(false)}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs uppercase"
                >
                  Missed
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* GAME 2: WHEEL OF SPELLING */}
      {/* ========================================================================= */}
      {selectedGame === 'wheel' && (
        <div className="bg-[#241a12] border-2 border-amber-500/30 rounded-2xl p-6 sm:p-10 shadow-xl text-center">
          <h3 className="font-serif text-2xl font-black text-amber-400 mb-2">
            WHEEL OF SPELLING ROOTS
          </h3>
          <p className="text-xs text-stone-300 mb-6">
            Spin the championship wheel to pick a random challenge word!
          </p>

          <div className="relative w-64 h-64 mx-auto my-6">
            <div
              className="w-full h-full rounded-full border-8 border-amber-500 shadow-2xl flex items-center justify-center transition-all duration-[3000ms] ease-out bg-gradient-to-tr from-amber-900 via-amber-600 to-amber-400"
              style={{ transform: `rotate(${wheelDegree}deg)` }}
            >
              <div className="w-20 h-20 rounded-full bg-[#1b120c] border-4 border-white flex items-center justify-center font-black text-2xl">
                🐝
              </div>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-amber-300 z-10"></div>
          </div>

          <button
            onClick={handleSpinWheel}
            disabled={isSpinning}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black rounded-2xl text-sm uppercase tracking-wider shadow-xl disabled:opacity-50"
          >
            {isSpinning ? 'Spinning The Wheel...' : 'Spin The Wheel! 🎡'}
          </button>

          {wheelWord && (
            <div className="mt-6 p-4 rounded-xl bg-[#1b120c] border border-amber-500/40 inline-block animate-fadeIn">
              <span className="text-xs text-stone-400 uppercase block mb-1">Target Word</span>
              <span className="font-serif font-black text-3xl text-amber-400 uppercase tracking-widest">
                {wheelWord}
              </span>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* GAME 3: JEOPARDY GRID */}
      {/* ========================================================================= */}
      {selectedGame === 'jeopardy' && (
        <div className="bg-[#241a12] border-2 border-amber-500/30 rounded-2xl p-6 shadow-xl">
          <h3 className="font-serif text-xl font-black text-amber-400 mb-4">
            JEOPARDY SPELLING BEE BOARD
          </h3>
          <div className="grid grid-cols-4 gap-3 text-center">
            {['Roots (Bio/Tele)', 'Core Words', 'Silent Letters', 'Double Consonants'].map(cat => (
              <div
                key={cat}
                className="bg-[#1b120c] border border-amber-500/40 p-2.5 rounded-xl font-bold text-xs text-amber-300 uppercase"
              >
                {cat}
              </div>
            ))}

            {[100, 200, 300, 400].map(pts => (
              <React.Fragment key={pts}>
                {Array.from({ length: 4 }).map((_, col) => (
                  <button
                    key={col}
                    onClick={() => {
                      sound.playLetterKey();
                      alert(`Jeopardy Clue for ${pts} Points!`);
                      onUpdateScores({
                        ...teamScores,
                        teamA: teamScores.teamA + pts
                      });
                    }}
                    className="p-4 bg-[#1e150f] hover:bg-amber-500 hover:text-stone-950 border border-amber-500/20 hover:border-amber-400 rounded-xl font-mono font-black text-lg text-amber-400 transition-all"
                  >
                    ${pts}
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

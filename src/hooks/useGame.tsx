import React, { createContext, useState, useContext, useEffect } from 'react';
import lodash from 'lodash';

import { gameLib } from '@app/lib';
import { useSettings } from '@app/hooks';
import { WORDS } from '@app/db';

type ReturnTypes = {
  currentRound: RoundType;
  prepareGame: () => void;
  gameState: GameState;
  correctAnswer: () => void;
  wrongAnswer: () => void;
  pass: () => void;
  currentWord: WordType | null;
  startRound: () => void;
  startFistRound: () => void;
  passIsAvailable: boolean;
  nextRoundTeam: TeamType | undefined;
  teams: TeamType[];
};

enum GameState {
  WAITING_ROUND,
  IN_ROUND,
  END_OF_ROUND,
  SCOREBOARD,
}

const GameContext = createContext({} as ReturnTypes);

export const GameProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { teamCount, roundDuration, passCount, roundCount } = useSettings();
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [rounds, setRounds] = useState<RoundType[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [gameWords, setGameWords] = useState<WordType[]>([]);
  const [usedWords, setUsedWords] = useState<WordType[]>([]);
  const [currentWord, setCurrentWord] = useState<WordType | null>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.WAITING_ROUND);

  let timer: NodeJS.Timeout | null = null;

  const currentRound = rounds[currentRoundIndex];
  const nextRoundTeam = rounds[currentRoundIndex + 1]?.team;
  const nextRoundIsAvailable = currentRoundIndex < rounds.length - 1;
  const passIsAvailable = currentRound?.remainingPasses > 0;

  function prepareGame() {
    const buildedTeams = gameLib.buildTeams(teamCount);
    const buildedRounds = gameLib.buildRounds(buildedTeams, roundCount, roundDuration, passCount);

    setTeams(buildedTeams);
    setRounds(buildedRounds);
    setGameWords(lodash.shuffle(WORDS));
    setGameState(GameState.WAITING_ROUND);
    setCurrentRoundIndex(0);
  }

  function correctAnswer() {
    setRounds((prevRounds) => {
      const newRounds = [...prevRounds];
      newRounds[currentRoundIndex].score += 10;

      return newRounds;
    });

    changeWord();
  }

  function wrongAnswer() {
    setRounds((prevRounds) => {
      const newRounds = [...prevRounds];
      newRounds[currentRoundIndex].score -= 10;

      return newRounds;
    });

    changeWord();
  }

  function pass() {
    setRounds((prevRounds) => {
      const newRounds = [...prevRounds];
      newRounds[currentRoundIndex].remainingPasses -= 1;

      return newRounds;
    });

    changeWord();
  }

  function nextRound() {
    if (!nextRoundIsAvailable) {
      onEndOfGame();
    } else {
      setCurrentRoundIndex((prevIndex) => prevIndex + 1);
      changeWord();
    }
  }

  function changeWord() {
    if (currentWord) {
      setUsedWords((prevUsedWords) => [...prevUsedWords, currentWord]);
    }

    setGameWords((prevGameWords) => {
      const newGameWords = [...prevGameWords];

      return newGameWords.filter((word) => !usedWords.includes(word));
    });

    setCurrentWord(lodash.sample(gameWords)!);
  }

  function onEndOfGame() {
    setGameState(GameState.SCOREBOARD);
    setTeams(gameLib.calculateTeamsScore(rounds));
  }

  function startRound() {
    if (nextRoundIsAvailable) {
      nextRound();
      setGameState(GameState.IN_ROUND);
    } else {
      setGameState(GameState.SCOREBOARD);
    }
  }

  function startFistRound() {
    setGameState(GameState.IN_ROUND);
  }

  function onTimerEnd() {
    if (nextRoundIsAvailable) {
      setGameState(GameState.END_OF_ROUND);
    } else {
      onEndOfGame();
    }
  }

  useEffect(() => {
    if (gameState === GameState.IN_ROUND) {
      if (currentWord === null) {
        changeWord();
      }

      timer = setInterval(() => {
        setRounds((prevRounds) => {
          const newRounds = [...prevRounds];
          newRounds[currentRoundIndex].remainingTime -= 1;

          if (newRounds[currentRoundIndex].remainingTime <= 0) {
            timer && clearInterval(timer);

            onTimerEnd();
          }

          return newRounds;
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [gameState]);

  return (
    <GameContext.Provider
      value={{
        currentRound,
        prepareGame,
        gameState,
        correctAnswer,
        wrongAnswer,
        pass,
        currentWord,
        startRound,
        startFistRound,
        passIsAvailable,
        nextRoundTeam,
        teams,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default function useGame(): ReturnTypes {
  const context = useContext(GameContext);

  return context;
}

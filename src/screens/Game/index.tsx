import React, { useEffect } from 'react';
import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { useGame } from '@app/hooks';
import { Game as GameComponent } from '@app/components';
import { COLORS } from '@app/constants';

enum GameState {
  WAITING_ROUND,
  IN_ROUND,
  END_OF_ROUND,
  SCOREBOARD,
}

const Game: React.FC = () => {
  const {
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
  } = useGame();

  useEffect(() => {
    prepareGame();

    return () => {};
  }, []);

  return (
    <LinearGradient
      colors={COLORS.GRADIENT_COLORS}
      style={{ gap: 50 }}
      className="flex-1 justify-center items-center"
    >
      {gameState === GameState.IN_ROUND && (
        <GameComponent.InRound.TopBar currentRound={currentRound} />
      )}

      <View style={{ gap: 30 }} className="flex-col w-full items-center justify-center">
        {gameState === GameState.IN_ROUND && currentWord && (
          <GameComponent.InRound.View currentWord={currentWord} />
        )}
        {gameState === GameState.END_OF_ROUND && nextRoundTeam && (
          <GameComponent.EndOfRound.View nextRoundTeam={nextRoundTeam} />
        )}
        {gameState === GameState.WAITING_ROUND && currentRound && (
          <GameComponent.WaitingRound.View currentRound={currentRound} />
        )}
        {gameState === GameState.SCOREBOARD && <GameComponent.Scoreboard.View teams={teams} />}
      </View>

      {gameState === GameState.IN_ROUND && currentRound && (
        <GameComponent.InRound.BottomBar
          passIsAvailable={passIsAvailable}
          correctAnswer={correctAnswer}
          wrongAnswer={wrongAnswer}
          pass={pass}
          currentRound={currentRound}
        />
      )}
      {gameState === GameState.END_OF_ROUND && (
        <GameComponent.EndOfRound.BottomBar startRound={startRound} />
      )}
      {gameState === GameState.WAITING_ROUND && (
        <GameComponent.WaitingRound.BottomBar startFistRound={startFistRound} />
      )}
    </LinearGradient>
  );
};

export default Game;

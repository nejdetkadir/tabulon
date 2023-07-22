import React, { createContext, useState, useContext } from 'react';

type ReturnTypes = {
  teamCount: number;
  setTeamCount: (teamCount: number) => void;
  roundDuration: number;
  setRoundDuration: (roundDuration: number) => void;
  passCount: number;
  setPassCount: (passCount: number) => void;
  roundCount: number;
  setRoundCount: (roundCount: number) => void;
};

const DEFAULT_TEAM_COUNT = 2;
const DEFAULT_ROUND_DURATION = 60;
const DEFAULT_PASS_COUNT = 3;
const DEFAULT_ROUND_COUNT = 2;

const SettingsContext = createContext({} as ReturnTypes);

export const SettingsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [teamCount, setTeamCount] = useState<number>(DEFAULT_TEAM_COUNT);
  const [roundDuration, setRoundDuration] = useState<number>(DEFAULT_ROUND_DURATION);
  const [passCount, setPassCount] = useState<number>(DEFAULT_PASS_COUNT);
  const [roundCount, setRoundCount] = useState<number>(DEFAULT_ROUND_COUNT);

  return (
    <SettingsContext.Provider
      value={{
        teamCount,
        setTeamCount,
        roundDuration,
        setRoundDuration,
        passCount,
        setPassCount,
        roundCount,
        setRoundCount,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default function useSettings(): ReturnTypes {
  const context = useContext(SettingsContext);

  return context;
}

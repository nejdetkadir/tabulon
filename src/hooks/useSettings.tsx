import React, { createContext, useState, useContext, useEffect } from 'react';

import { storageLib } from '@app/lib';

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
  const [teamCount, setTeamCount] = useState<number>(
    storageLib.getSettings()?.teamCount || DEFAULT_TEAM_COUNT,
  );
  const [roundDuration, setRoundDuration] = useState<number>(
    storageLib.getSettings()?.roundDuration || DEFAULT_ROUND_DURATION,
  );
  const [passCount, setPassCount] = useState<number>(
    storageLib.getSettings()?.passCount || DEFAULT_PASS_COUNT,
  );
  const [roundCount, setRoundCount] = useState<number>(
    storageLib.getSettings()?.roundCount || DEFAULT_ROUND_COUNT,
  );

  useEffect(() => {
    storageLib.setSettings({
      teamCount: teamCount || DEFAULT_TEAM_COUNT,
      roundDuration: roundDuration || DEFAULT_ROUND_DURATION,
      passCount: passCount || DEFAULT_PASS_COUNT,
      roundCount: roundCount || DEFAULT_ROUND_COUNT,
    });
  }, [teamCount, roundDuration, passCount, roundCount]);

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

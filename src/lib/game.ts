import { nanoid } from 'nanoid';
import lodash from 'lodash';

const ORDER = 'order';

function buildTeams(teamCount: number): TeamType[] {
  const buildedTeams: TeamType[] = [];

  for (let i = 0; i < teamCount; i++) {
    buildedTeams.push({
      id: nanoid(),
      name: `Team ${i + 1}`,
      totalScore: 0,
    });
  }

  return buildedTeams;
}

function buildRounds(
  teams: TeamType[],
  roundCount: number,
  roundDuration: number,
  passCount: number,
): RoundType[] {
  const buildedRounds: RoundType[] = [];

  for (let i = 0; i < roundCount; i++) {
    teams.forEach((team) => {
      buildedRounds.push({
        order: buildedRounds.length + 1,
        team,
        score: 0,
        remainingTime: roundDuration,
        remainingPasses: passCount,
      });
    });
  }

  return lodash.sortBy(buildedRounds, [ORDER]);
}

function calculateTeamsScore(rounds: RoundType[]): TeamType[] {
  const teams: TeamType[] = [];

  rounds.forEach((round) => {
    const teamIndex = teams.findIndex((team) => team.id === round.team.id);

    if (teamIndex === -1) {
      teams.push({
        id: round.team.id,
        name: round.team.name,
        totalScore: round.score,
      });
    } else {
      teams[teamIndex].totalScore += round.score;
    }
  });

  return teams.sort((a, b) => b.totalScore - a.totalScore);
}

export default { buildTeams, buildRounds, calculateTeamsScore };

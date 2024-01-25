"use client"
import Link from 'next/link';
import MatchCard from '../../components/MatchCard';
import PlayerCard from '../../components/PlayerCard';
import { getMatchHistory, getPlayerDetails } from '@/app/components/utils/route';
import { useEffect, useState } from 'react';

// Define the type for PlayerData
interface playerData {
  player: any
  valorantPlayerData: any
}

export default function Dashboard({ params }: { params: { username: string } }) {
  const [data, setData] = useState<playerData>()
  const [matchHistoryData, setMatchHistory] = useState<any[]>([])
  const [page, setPage] = useState(1);
  const resultArray = params.username.split('%23');
  const loadMoreMatches = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const loadPage = async () => {
    
    try {
      const playerDetails = await getPlayerDetails(resultArray[0], resultArray[1]);
      setData(playerDetails);

      if (playerDetails && playerDetails.player) {
        const newMatches = await getMatchHistory(playerDetails.player.region, resultArray[0], resultArray[1], 'competitive', page);

        // Concatenate newMatches with existing matchHistoryData
        setMatchHistory((prevMatches) => [...prevMatches, ...newMatches]);
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    console.log("this is the", page)
    loadPage();
  }, [page])

  return (
    <div className="flex flex-row">
      {data && (
        <PlayerCard
          profilePic={data.player.card.small}
          username={data.player.name}
          tag={data.player.tag}
          rank={data.valorantPlayerData.current_data.currenttierpatched}
          rankImage={data.valorantPlayerData.current_data.images.small}
          peakRank={data.valorantPlayerData.highest_rank.patched_tier}
          peakSeason={data.valorantPlayerData.highest_rank.season}
          peakRankImage={data.valorantPlayerData.highest_rank.rankUrl}
          rankingInTier={data.valorantPlayerData.current_data.ranking_in_tier}
        />
      )}

      <div className=" ml-5 flex-1 flex-col">
        <h1 className="text-center text-xl mb-4">Match History</h1>

        {matchHistoryData.map((match: any, index: number) => (
          <Link href={`${params.username}/${match.meta.id}`}>
            <MatchCard key={index}
              rankUrl={match.meta.rankUrl}
              HS={match.meta.headshotPercentage}
              ADR={match.meta.averageDamagePerRound}
              KD={match.meta.killDeathRatio}
              KDA={match.meta.killsDeathAssists}
              ACS={match.meta.averageCombatScore}
              result={match.teams}
              team={match.stats.team}
              won={match.won}
              map={match.meta.map.name}
              agentName={match.stats.character.name}
            />
          </Link>
        ))}
        <button className='flex justify-center' onClick={loadMoreMatches}>
          load more
        </button>
      </div>
    </div>
  );
};



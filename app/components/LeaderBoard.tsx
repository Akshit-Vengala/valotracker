import Link from 'next/link';
import React from 'react'
import { getLeaderBoard } from './utils/route'; 
import { RANK_DIVISION_MAP } from './utils/Constants';

interface leaderboardPlayer {
    gameName: string,
    tagLine: string,
    rankedRating: string
    numberOfWins: string
}

async function LeaderBoard() {
    const leaderboardPlayers = await getLeaderBoard('na');
    return (
        <div className='flex flex-auto flex-col border rounded-md bg-gray-500'>
            <div className='flex flex-row bg-cyan-500/50 justify-around rounded-sm'>
                <p className='flex justify-self-start w-64'>Player</p>
                <p className='pl-20'>Rank</p>
                <p>Rating</p>
                <p>Wins</p>
            </div>
            {leaderboardPlayers.players.map((player: leaderboardPlayer, index: any) => (
                <div key={index} className='flex flex-row justify-between'>
                    {player.gameName ? (
                        <Link href={`/dashboard/${encodeURIComponent(player.gameName)}%23${encodeURIComponent(player.tagLine)}`}>
                            <div className='flex flex-row hover:shadow-lg rounded-sm shadow-indigo-500/40 p-2 '>
                                <p className="text-left whitespace-nowrap ">{player.gameName}</p>
                                <p className="text-center whitespace-nowrap text-xs self-start p-0.5 m-0.5 shadow-md shadow-cyan-500/50 bg-gray-800 rounded-sm">#{player.tagLine}</p>
                            </div>
                        </Link>
                    ) :
                        (
                            <div className='flex flex-row hover:shadow-lg rounded-sm shadow-indigo-500/40 p-2 '>
                                <p className="text-left whitespace-nowrap ">Anonymous</p>
                                <p className="text-center whitespace-nowrap text-xs self-start p-0.5 m-0.5 shadow-md shadow-cyan-500/50 bg-gray-800 rounded-sm">#anon</p>
                            </div>
                        )}
                    <div className='flex flex-row justify-around items-center space-x-4 w-56'>
                        <img
                            src={RANK_DIVISION_MAP.get("radiant")}
                            alt="Rank pic"
                            className=" w-8 h-8 object-cover "
                        />
                        <p>{player.rankedRating}</p>
                        <p>{player.numberOfWins}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default LeaderBoard;

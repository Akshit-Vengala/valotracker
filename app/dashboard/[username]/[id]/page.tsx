
import { RANK_DIVISION_MAP, valorantAgentsMap } from '@/app/components/utils/Constants';
import getMatchDetails from '@/app/components/utils/getMatchDetails'
import Link from 'next/link';
import React from 'react'

export interface PlayerStats {
    username: string;
    tag: string;
    rank: string;
    kills: number;
    deaths: number;
    assists: number;
    kdPlusMinus: string;
    queuedWith: string | null;
    mode: string | null;
    team: string;
    acs: number;
    adr: number;
    hs: number;
    agentName: string;
}

export default async function MatchDetail({ params }: { params: { id: string } }) {
    const matchDetails: PlayerStats[] = await getMatchDetails(params.id)
    console.log(matchDetails)
    


    return (
        <div className='grid grid-cols-auto grid-cols-9 ml-24 mr-24 border border-gray-500  bg-gray-800 rounded-md justify-items-stretch place-items-center shadow-lg shadow-blue-500/50'>

            <p className="bg-cyan-500 col-span-2 text-center rounded-l-md">Team A</p>
            <p className="bg-cyan-500 text-center">Rank</p>
            <p className="bg-cyan-500 text-center">ACS</p>
            <p className="bg-cyan-500 text-center">K</p>
            <p className="bg-cyan-500 text-center">D</p>
            <p className="bg-cyan-500 text-center">A</p>
            <p className="bg-cyan-500 text-center">ADR </p>
            <p className="bg-cyan-500 text-center rounded-r-md">HS% </p>

            {matchDetails.map((player, index) => (
                <React.Fragment key={index}>
                    {(index > 0 && index % 5 === 0 && player.mode === "competitive") && (
                        <></>
                    )}
                    <div className='flex flex-row flex-1 w-40 col-span-2 m-2'>
                        <img
                            src={valorantAgentsMap.get(player.agentName.toLowerCase())}
                            alt="Profile Pic"
                            className="rounded-l-lg w-10 h-10 object-cover rounded-full"
                        />
                        <Link href={`/dashboard/${encodeURIComponent(player.username)}%23${encodeURIComponent(player.tag)}`}>
                        <div className='flex flex-row flex-auto ml-3 hover:shadow-lg shadow-blue-500/50 rounded-lg p-2'>
                            <p className="text-left whitespace-nowrap ">{player.username}</p>
                            <p className="text-center whitespace-nowrap text-xs self-start p-0.5 m-0.5 shadow-md shadow-cyan-500/50 bg-gray-800 rounded-sm">#{player.tag}</p>
                        </div>
                        </Link>
                        

                    </div>
                    <div className=''>
                        <img
                            src={RANK_DIVISION_MAP.get(player.rank.toLowerCase())}
                            alt="Profile Pic"
                            className=" mx-auto w-8 h-8 object-cover rounded-full "
                        />
                    </div>

                    <p className="text-center">{player.acs}</p>
                    <p className="text-center">{player.kills}</p>
                    <p className="text-center">{player.deaths}</p>
                    <p className="text-center">{player.assists}</p>
                    <p className="text-center">{player.adr}</p>
                    <p className="text-center">{player.hs}</p>
                </React.Fragment>
            ))}

        </div>
        // <table className=' mx-36 '>
        //         <tr className=' bg-blue-500 rounded-sm my-3'>
        //             <th className=' rounded-l-lg px-32'>Team A</th>
        //             <th className='px-10'>Rank</th>
        //             <th className='px-10'>ACS</th>
        //             <th className='px-10'>K</th>
        //             <th className='px-10'>D</th>
        //             <th className='px-10'>A</th>
        //             <th className='px-10'>+/-</th>
        //             <th className='px-10'>ADR</th>
        //             <th className='rounded-r-lg px-10'>HS% </th>
        //         </tr>
        //     {matchDetails.map((player, index) => (

        //         <tbody className=''>
        //             {index > 0 && index % 5 === 0 && player.mode === "competitive" && (
        //             <tr className='bg-blue-500 rounded-sm'>
        //                 <th className='rounded-l-lg px-32'>Team B</th>
        //                 <th className='px-10'>Rank</th>
        //                 <th className='px-10'>ACS</th>
        //                 <th className='px-10'>K</th>
        //                 <th className='px-10'>D</th>
        //                 <th className='px-10'>A</th>
        //                 <th className='px-10'>+/-</th>
        //                 <th className='px-10'>ADR</th>
        //                 <th className='rounded-r-lg px-10'>HS%</th>
        //             </tr>
        //         )}
        //             <tr className=' rounded-r-lg'>
        //                 <td className=' my-2 mx-4 flex flex-row mb-4'>
        //                     <img
        //                         src={valorantAgentsMap.get(player.agentName.toLowerCase())}
        //                         alt="Profile Pic"
        //                         className="  rounded-l-lg w-10 h-10 object-cover rounded-full"
        //                     />
        //                     <div className='flex flex-row items-end mx-4'>
        //                         <p className="text-left">{player.username}</p>
        //                         <p className="text-end text-xs p-1">#{player.tag}</p>
        //                     </div>
        //                 </td>
        //                 <td>
        //                     <div className=" ">
        //                         <img
        //                             src={RANK_DIVISION_MAP.get(player.rank.toLowerCase())}
        //                             alt="Profile Pic"
        //                             className="mx-auto w-8 h-8 object-cover rounded-full"
        //                         />
        //                     </div>
        //                 </td>
        //                 <td className="text-center">{player.acs}</td>
        //                 <td className="text-center">{player.kills}</td>
        //                 <td className="text-center">{player.deaths}</td>
        //                 <td className="text-center">{player.assists}</td>
        //                 <td className="text-center">{player.kdPlusMinus}</td>
        //                 <td className="text-center">{player.adr}</td>
        //                 <td className="text-center">{player.hs}</td>

        //             </tr>
        //         </tbody>
        //     ))}
        // </table >
    )
}

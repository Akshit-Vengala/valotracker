import MatchCard from "./MatchCard";
import PulsatingProfilePic from "./PulsatingProfilePic";

type PlayerCardProps = {
    profilePic: string;
    username: string;
    tag: string;
    rank: string;
    rankImage: string;
    peakRank: string;
    peakSeason: string;
    peakRankImage: string;
    rankingInTier: number;
};


const PlayerCard = (props: PlayerCardProps) => {
    const peakSeasonFullform = props.peakSeason.replace(/e/g, 'Episode ').replace(/a/g, ' Act ')
    const radius = 28; // Adjust the radius as needed
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (props.rankingInTier / 100) * circumference;
    return (
        <div className="flex flex-row h-full mt-10">
            <div className="flex flex-col justify-between items-start ml-10 border-2 rounded-2xl  p-4">
                <div className=" flex flex-row justify-start relative w-full">
                    {/* Profile Picture on the Left */}
                    <div className="mr-4">
                        <PulsatingProfilePic imageUrl={props.profilePic} borderColor="cyan" />
                    </div>
                    <h2 className="text-5xl">{props.username}</h2>
                    <p className="absolute bottom-1/4 right-10 text-3xl line-clamp-3">#{props.tag}</p>
                </div>
                {/* Details on the Right */}
                <div className="grid grid-rows-2 grid-cols-2 gap-4 items-center justify-items-center place-content-center">

                    <p>Current Rank: {props.rank}</p>
                    <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5">
                        <svg className="w-20 h-20 -rotate-90">
                            {/* Outer Grey Circle (Background) */}
                            <circle
                                className="" // Set the color for the outline
                                stroke-width="3"
                                stroke="white"
                                fill="none"
                                r={radius}
                                cx="40"
                                cy="40"
                            />

                            {/* Inner Cyan Circle (Animated) */}
                            <circle
                                className="text-cyan-500 animate-pulse ease-in-out"
                                stroke-width="3"
                                stroke-dasharray={circumference}
                                stroke-dashoffset={strokeDashoffset}
                                stroke-linecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="40"
                                cy="40"
                            />
                        </svg>
                        <img
                            src={props.rankImage}
                            alt="rank image"
                            className="relative right-16 w-12 h-12 object-cover rounded-full"
                        />

                    </div>

                    <p>Peak Rank: {props.peakRank}</p>

                    <div className="flex flex-col ">
                        <img
                            src={props.peakRankImage}
                            alt="peak image"
                            className="ml-8 w-12 h-12 object-cover rounded-full mb-2"
                        />
                        <p>{peakSeasonFullform}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
import { mapImages, valorantAgentsMap } from "./utils/Constants";
type MatchCardProps = {
    agentName: string;
    KDA: string;
    ADR: string;
    ACS: string;
    HS: string;
    KD: string;
    rankUrl: string;
    result: any;
    won: Boolean;
    map: string;
    team: string;

};
const MatchCard = (props: MatchCardProps) => {
    return (
        <div className="flex relative justify-between items-center p-3 rounded-lg outline outline-4 m-4 hover:shadow-lg shadow-cyan "
            style={props.won ? { backgroundImage: `linear-gradient(to right, rgba(55,100,0,0.5), darkgrey 45%,  rgba(0, 0, 0, 0),  rgba(0, 0, 0, 0)), url(${mapImages.get(props.map.toLowerCase())})`, backgroundSize: 'cover', backgroundPosition: 'center' }

                :
                { backgroundImage: `linear-gradient(to right, rgba(100,25,0,0.5), darkgrey 45%,  rgba(0, 0, 0, 0),  rgba(0, 0, 0, 0)), url(${mapImages.get(props.map.toLowerCase())})`, backgroundSize: 'cover', backgroundPosition: 'center' }
            }>


            {/* Character */}
            <div className="flex-1 flex items-center mx-auto">
                <img
                    src={valorantAgentsMap.get(props.agentName.toLowerCase())}
                    alt="Agent pic"
                    className="w-12 h-12 object-cover rounded-tl-lg rounded-br-lg"
                />
                <p className="flex-auto text-justify ml-5">• {props.map}</p>
            </div>
            <div className=" flex flex-1 flex-col justify-center items-center">
                <p className="text-center ">K/D/A</p>
                <p className="text-center ">{props.KDA}</p>
            </div>
            <div className="flex flex-1 flex-col justify-center ">
                <img
                    src={props.rankUrl}
                    alt="Rank pic"
                    className=" mx-auto w-12 h-12 object-cover "
                />
            </div>

            <div className="ml-18 mr-10  text-center text-lg font-semibold shadow-md shadow-blue-500/50 rounded-lg w-16 bg-slate-700">{props.team == 'Red' ?
                (<><span className="text-green-600 ">{props.result.red}</span><span>:</span><span className="text-red-400 text-shadow-md">{props.result.blue}</span></>)
                :
                (<><span className="text-green-600 ">{props.result.blue}</span><span>:</span><span className="text-red-400 text-shadow-md">{props.result.red}</span></>)}
            </div>

            {/* Text on the Extreme Right */}

            <div className=" grid grid-rows-2 grid-cols-4 gap-x-7 hover:backdrop-blur-sm  rounded-lg transition duration-200 ease-in-out"
            >
                <p className="text-center w-12">K/D </p>
                <p className="text-center w-12">ADR </p>
                <p className="text-center w-12">HS% </p>
                <p className="text-center w-12">ACS</p>
                <p className="text-center w-12">{props.KD}</p>
                <p className="text-center w-12">{props.ADR}</p>
                <p className="text-center w-12">{props.HS}</p>
                <p className="text-center w-12">{props.ACS}</p>
            </div>
        </div>
    )
}

export default MatchCard
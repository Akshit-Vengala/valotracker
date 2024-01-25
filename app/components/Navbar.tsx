"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Navbar = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const redirectToDashboard = () => {
        // Redirect to the dashboard page with the input value in the query parameter
        router.push(`/dashboard/${encodeURIComponent(username)}`);
    };
    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent the default behavior (e.g., form submission)
          redirectToDashboard();
        }
      };
    
    return (
        <nav className="bg-gray-800 p-4 mb-20">
            <div className="flex items-center justify-between">
                <Link href={'/'}>
                <div className="text-white font-bold text-xl" >Valorant tracker logo</div>
                </Link>
                <div className="flex items-center">
                    <div className="justify-center items-left relative mx-auto text-white">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
                            value={username}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button className="absolute right-0 top-0 bg-gray-700 text-white px-4 py-2 rounded-md" onClick={redirectToDashboard} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M21 21l-6-6"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
import Image from 'next/image'
import LeaderBoard from './components/LeaderBoard';

export default function Home() {
  const cardData = [
    {
      title: 'Login',
      description: 'Please sign in',
      targetLink: "/login"
    },
    {
      title: 'Register',
      description: 'Register with your details',
      targetLink: "/Register"
    }
  ];
  return (
    <main className="flex mt-5 flex-col items-center justify-start">
      
      <div className='flex justify-between content-normal items-baseline'>
        {/* {cardData.map((card,index) => (
          <Card key ={index} data={card}/>
        ))} */}
        <LeaderBoard/>
      </div>
    </main>
  )
}

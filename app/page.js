// import Image from 'next/image'
import dynamic from "next/dynamic";


export default function Home() {
    const Roulette = dynamic(() => import('../components/roulette'), {
        ssr: false
    });
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Roulette />
        </main>
    )

  
}

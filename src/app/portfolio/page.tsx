import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      <main className="flex-grow px-6 py-24 max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12">Portfolio</h1>
        
        {/* Garden Grocers Project */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Garden Grocers</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p>
                    Garden Grocers is a community-focused platform designed to reduce food waste by enabling families to share excess produce grown in their home gardens. The project addresses sustainability challenges through a peer-to-peer sharing economy model, fostering community connections while promoting environmental responsibility.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Design Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Created comprehensive UI/UX design in Figma</li>
                    <li>Developed user flows and interactive prototypes</li>
                    <li>Presented at TiDB Future App Hackathon 2024</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Development Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Building frontend interface using Flutter</li>
                    <li>Implementing smooth animations and transitions</li>
                    <li>Integrating with backend services</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a href="https://www.figma.com/proto/wEy3vOEK6W2bIoGtcYVZiC/Garden-Grocers?node-id=5678-6152&starting-point-node-id=5678%3A6152&t=3QfueUzuIsAO09rN-1" className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-900 rounded-lg hover:bg-pink-200 transition-colors">
                    View Figma Prototype
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  <a href="https://github.com/AstuteCrew/fruitapp_frontend/tree/update-figma" className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors">
                    View Repo
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6">
                <Image
                  src="/images/portfolio/garden_grocer.png"
                  alt="Garden Grocers Figma interface"
                  width={300}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Geneni Project */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Research Projects</h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  GENEni: AI Agent for Drug Discovery
                </h3>
                <div className="prose max-w-none">
                  <p>
                    GENEni enhances the analysis of complex genomic data by supplementing Large Language Models with bioinformatic non-textual data, improving reliability of genomic reasoning and addressing the challenge of interpreting the large repositories of genomic information in the biomedical research community.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Research Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Developed LLM Agent for genomic research queries</li>
                    <li>Integrated APIs from public biological databases</li>
                    <li>Achieved 11% better accuracy vs ChatGPT 3.0</li>
                    <li>Co-authored and presented research paper</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a href="https://docs.google.com/presentation/d/13mA_RYnfOICDwv-GPHhgpXFfHGty0k6f/edit?usp=sharing&ouid=115950631421672057612&rtpof=true&sd=true" className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-900 rounded-lg hover:bg-pink-200 transition-colors">
                    View Slide Deck
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                  <a href="https://drive.google.com/file/d/1FUP8ao2INcafo8FhWAFriTJWnYWYqTIt/view?usp=sharing" className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 rounded-lg hover:bg-blue-200 transition-colors">
                    View Research Paper
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <Image
                  src="/images/portfolio/geneni.png"
                  alt="GENEni research paper"
                  width={400}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

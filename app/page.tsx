import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FaWater, FaFish, FaAnchor, FaShip } from 'react-icons/fa';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-blue-900 text-white">
      <header className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 text-blue-300">
          Dive into AI Learning
        </h1>
        <p className="text-2xl mb-8 text-blue-100">
          Explore the depths of artificial intelligence with our immersive platform
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
            <Link href="/auth">Start Your Journey</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="text-blue-300 border-blue-300 hover:bg-blue-800 transition-colors duration-300">
            <Link href="#features">Explore More</Link>
          </Button>
        </div>
      </header>

      <section id="features" className="py-20 bg-blue-900 bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-200">
            Discover Our Ocean of Knowledge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<FaWater className="text-4xl mb-4 text-blue-400" />}
              title="Deep Learning"
              description="Dive deep into neural networks and advanced AI concepts."
            />
            <FeatureCard 
              icon={<FaFish className="text-4xl mb-4 text-blue-400" />}
              title="Adaptive Learning"
              description="Courses that adapt to your skill level, just like fish in the sea."
            />
            <FeatureCard 
              icon={<FaAnchor className="text-4xl mb-4 text-blue-400" />}
              title="Solid Foundations"
              description="Build a strong base in AI and machine learning principles."
            />
            <FeatureCard 
              icon={<FaShip className="text-4xl mb-4 text-blue-400" />}
              title="Navigate Your Career"
              description="Chart your course to success in the AI industry."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

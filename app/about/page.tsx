import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { FaWater, FaFish, FaAnchor, FaShip } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About AI Ocean of Learning',
  description: 'Learn about our mission and what we offer in AI education.',
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8 text-blue-300 text-center">About AI Ocean of Learning</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-200">Our Mission</h2>
            <p className="text-lg mb-6 text-blue-100">
              At AI Ocean of Learning, we&apos;re dedicated to making AI education as vast and deep as the ocean itself. 
              Our goal is to empower learners of all backgrounds to dive into the world of artificial intelligence and emerge as skilled AI navigators.
            </p>
            <h2 className="text-3xl font-semibold mb-4 text-blue-200">What We Offer</h2>
            <ul className="list-disc list-inside text-lg mb-6 text-blue-100">
              <li>Interactive AI model training simulations</li>
              <li>Comprehensive courses on machine learning and data science</li>
              <li>Real-world projects inspired by ocean research and conservation</li>
              <li>Community forums and expert mentorship from seasoned &quot;AI captains&quot;</li>
            </ul>
            <Button asChild size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
              <Link href="/auth">Dive In - Join Our Community</Link>
            </Button>
          </div>
          
          <Card className="bg-blue-800 text-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-300">Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FeatureItem 
                icon={<FaWater className="text-3xl text-blue-400" aria-hidden="true" />}
                title="Deep Learning Currents" 
                description="Ride the waves of cutting-edge AI advancements with our regularly updated content." 
              />
              <FeatureItem 
                icon={<FaFish className="text-3xl text-blue-400" aria-hidden="true" />}
                title="Adaptive Learning Ecosystem" 
                description="Our AI 'ocean simulator' provides hands-on experience, adapting to your skill level." 
              />
              <FeatureItem 
                icon={<FaAnchor className="text-3xl text-blue-400" aria-hidden="true" />}
                title="Anchored Flexibility" 
                description="Chart your own course through our sea of knowledge with flexible learning paths." 
              />
              <FeatureItem 
                icon={<FaShip className="text-3xl text-blue-400" aria-hidden="true" />}
                title="Expert Navigation" 
                description="Get guidance from AI professionals who've successfully navigated these waters before." 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
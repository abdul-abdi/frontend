import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark-surface text-dark-on-surface py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-dark-primary">AI Learning Platform</h3>
            <p className="text-sm">Empowering learners with AI and machine learning tools.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-dark-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-dark-primary">Home</Link></li>
              <li><Link href="/about" className="hover:text-dark-primary">About</Link></li>
              <li><Link href="/dashboard" className="hover:text-dark-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-dark-secondary">Contact</h4>
            <p className="text-sm">Email: info@ailearningplatform.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 AI Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
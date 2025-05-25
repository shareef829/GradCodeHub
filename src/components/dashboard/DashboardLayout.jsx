import { useState } from 'react';
import StatsCard from './StatsCard';
import ProgressTracker from './ProgressTracker';
import BadgesDisplay from './BadgesDisplay';

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg">
        {/* Sidebar content */}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
          {/* Header content */}
        </header>
        
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Questions Solved" value={42} />
            <StatsCard title="Current Streak" value="7 days" />
            <StatsCard title="Badges Earned" value={3} />
          </div>
          
          <ProgressTracker />
          <BadgesDisplay />
        </main>
      </div>
    </div>
  );
}
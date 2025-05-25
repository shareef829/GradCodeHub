import { useState } from 'react';
import CodeEditor from './CodeEditor';
import MCQQuestion from '../courses/MCQQuestion';

export default function CodePractice() {
  const [code, setCode] = useState('// Your code here');
  const [activeTab, setActiveTab] = useState('problem');

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Problem Section */}
          <div className="p-6 border-r border-gray-200 dark:border-gray-700">
            <MCQQuestion />
          </div>
          
          {/* Editor Section */}
          <div className="flex flex-col">
            <CodeEditor value={code} onChange={setCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
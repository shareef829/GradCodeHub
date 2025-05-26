import { useState } from 'react';
import CodeEditor from './CodeEditor';
import MCQQuestion from '../courses/MCQQuestion';
import OutputPanel from './OutputPanel';

export default function CodePractice() {
  const [code, setCode] = useState('// Your code here');
  const [output, setOutput] = useState('');

  // Example handler for running code (to be implemented)
  const handleRun = () => {
    setOutput('Output will be shown here.');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Problem Section */}
          <div className="p-6 border-r border-gray-200 dark:border-gray-700">
            <MCQQuestion />
          </div>
          {/* Editor Section */}
          <div className="flex flex-col gap-4 p-6">
            <CodeEditor value={code} onChange={setCode} />
            <button className="btn-primary self-start" onClick={handleRun}>Run Code</button>
            <OutputPanel output={output} />
          </div>
        </div>
      </div>
    </div>
  );
}
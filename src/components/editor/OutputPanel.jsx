export default function OutputPanel({ output }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg min-h-[100px] font-mono text-sm">
      <strong>Output:</strong>
      <pre className="whitespace-pre-wrap mt-2">{output || 'No output yet.'}</pre>
    </div>
  );
}

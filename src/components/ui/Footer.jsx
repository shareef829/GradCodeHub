export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 text-center py-4 border-t border-gray-200 dark:border-gray-700 mt-8">
      <span className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Grad Code Hub. All rights reserved.</span>
    </footer>
  );
}

export default function AdminPanel() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-700 rounded-lg">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <span>Content Management</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <span>User Management</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <span>Analytics</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
          <h1 className="text-2xl font-bold">Content Management</h1>
        </header>
        
        <main className="p-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-bold mb-4">Add New Course</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Course Title</label>
                <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block mb-1">Category</label>
                <select className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                  <option>Data Structures</option>
                  <option>Web Development</option>
                  <option>Git & GitHub</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" rows="4"></textarea>
              </div>
              <div>
                <label className="block mb-1">Course Content (Markdown)</label>
                <textarea className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 font-mono" rows="10"></textarea>
              </div>
              <div>
                <label className="block mb-1">Thumbnail</label>
                <input type="file" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                Save Course
              </button>
            </form>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Existing Courses</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Title</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Students</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-2">Introduction to Arrays</td>
                    <td className="px-4 py-2">Data Structures</td>
                    <td className="px-4 py-2">142</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">React Fundamentals</td>
                    <td className="px-4 py-2">Web Development</td>
                    <td className="px-4 py-2">87</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
import UserManagement from './UserManagement';
import ContentUpload from './ContentUpload';
import AnalyticsDashboard from './AnalyticsDashboard';

export default function AdminLayout() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <UserManagement />
        <ContentUpload />
        <AnalyticsDashboard />
      </div>
    </div>
  );
}

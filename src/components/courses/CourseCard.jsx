export default function CourseCard({ course }) {
  if (!course) return null;
  return (
    <div className="card p-4 flex flex-col gap-2">
      <h3 className="font-bold text-lg mb-1">{course.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{course.category}</p>
      <p className="text-xs text-gray-500 mb-2">{course.description}</p>
      <span className="text-xs text-indigo-600">{course.students} students</span>
    </div>
  );
}

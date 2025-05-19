export default function DashboardCard({ title, content }: { title: string, content: string }) {
    return (
      <div className="bg-white shadow-md rounded-xl p-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <div>{content}</div>
      </div>
    );
  }
  
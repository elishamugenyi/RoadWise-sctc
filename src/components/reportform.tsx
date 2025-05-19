export default function ReportForm() {
    return (
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
        <select className="w-full p-2 border rounded">
          <option>Accident</option>
          <option>Road Block</option>
          <option>Heavy Traffic</option>
        </select>
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Report
        </button>
      </form>
    );
  }
  
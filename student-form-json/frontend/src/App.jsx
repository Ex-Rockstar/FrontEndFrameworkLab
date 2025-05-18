import { useState, useEffect } from "react";

export default function App() {
  // ---------- state ----------
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]);

  // ---------- load saved records at startup ----------
  useEffect(() => {
    fetch("http://localhost:5000/get")
      .then((res) => res.json())
      .then((data) => setSubmittedData(data))
      .catch((err) => console.error("GET error:", err));
  }, []);

  // ---------- handlers ----------
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmittedData([...submittedData, formData]);         // optimistic UI
      setFormData({ name: "", email: "" });                   // reset form
      alert("Saved!");
    } else {
      alert("Save failed ☹");
    }
  };

  // ---------- UI ----------
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>

      {/* form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded w-96">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-2"
          required
        />
        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Submit
        </button>
      </form>

      {/* list */}
      <div className="mt-6 w-96">
        <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
        <ul className="bg-white p-4 shadow rounded">
          {submittedData.length === 0 ? (
            <p>No data yet.</p>
          ) : (
            submittedData.map((d, i) => (
              <li key={i} className="border-b p-2 last:border-0">
                <strong>Name:</strong> {d.name} <br />
                <strong>Email:</strong> {d.email}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

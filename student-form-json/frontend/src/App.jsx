import React, { useState } from 'react'; // React is the main character; useState gives us memory powers 🔮
import axios from 'axios'; // Axios is our messenger pigeon 🕊️ for sending data to the server

function App() {
  // Setting up state to hold the form data—Name, Email, and Age—like a digital notepad 📋
  const [formData, setFormData] = useState({ Name: '', Email: '', Age: '' });

  // This function handles typing in the form fields. Think of it as a scribe that updates our notepad in real time 🖊️
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread the previous state and update the field that's being changed
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // The moment of truth 😬 — this function is called when the user hits that juicy "Submit" button
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from doing a full reload like it's 1999 🚫🔁
    try {
      // Send form data to our backend using POST request. Go little data, go! 🚀
      await axios.post('http://localhost:5000/save', formData);
      alert('✅ Data saved to server!');
    } catch (err) {
      alert('❌ Failed to save in server');
      console.error(err); // Print the error like a disappointed parent
    }
  }; 

  return (
    <div>
      {/* The Holy Form - where users pour their digital hearts out 📝 */}
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange} // On every keystroke, we update state
        />

        <p>Email</p>
        <input
          type="text"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
        />

        <p>Age</p>
        <input
          type="number"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
        />

        {/* Big red button... but not destructive! Just submits the form */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App; // We export the App so other parts of our React kingdom can summon it 👑

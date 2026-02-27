import { useState } from "react";
import axios from 'axios';

export default function TicketForm(){
    const [form, setForm] = useState({
        ename: "",
        price : "",
        event : "",
        location : "",
        email : "",
        phone : ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setMessage("");

            const res = await axios.post("http://localhost:3000/api/tickets/book", form);
            setMessage("Your Booking is CONFIRMED & has been sent to your Email");
            console.log(res.data);

        } catch(err){
            setMessage("Booking Failed");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-[420px]">

      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        🎟 Event Ticket Booking
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="ename"
          placeholder="Customer Name"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="event"
          placeholder="Event Name"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="location"
          placeholder="Event Location"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          name="price"
          placeholder="Ticket Price"
          className="input"
          type="number"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email Address"
          className="input"
          type="email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="+91 Phone Number"
          className="input"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          {loading ? "Booking..." : "Book Ticket"}
        </button>

      </form>

      {message && (
        <p className="text-center mt-4 font-medium">
          {message}
        </p>
      )}

    </div>
  );

}
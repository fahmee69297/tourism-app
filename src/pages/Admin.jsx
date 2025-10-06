// src/pages/Admin.jsx (UPDATED FOR INQUIRIES)
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Trash2 } from "lucide-react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Tailwind.css";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [inquiries, setInquiries] = useState([]); // ➡️ RENAMED from 'bookings' to 'inquiries'
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const auth = getAuth();

  // 📦 Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const msgSnap = await getDocs(collection(db, "messages"));
        // ➡️ FETCHING DATA FROM 'inquiries' COLLECTION
        const inquirySnap = await getDocs(collection(db, "inquiries"));

        setMessages(msgSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setInquiries(inquirySnap.docs.map((d) => ({ id: d.id, ...d.data() }))); // ➡️ SETTING 'inquiries' STATE
      } catch (error) {
        console.error("Error fetching admin data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteMessage = async (id, type) => {
    try {
      await deleteDoc(doc(db, type, id));
      if (type === "messages") setMessages(messages.filter((m) => m.id !== id));
      // ➡️ UPDATED to filter the 'inquiries' state when 'type' is 'inquiries'
      else setInquiries(inquiries.filter((i) => i.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  // 🌀 Show loader
  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // 🧭 Main Dashboard
  return (
    <div className="p-4 max-w-5xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600">
        Admin Dashboard
      </h1>

      <button
        onClick={async () => {
          await signOut(auth);
          navigate("/admin-login");
        }}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded"
      >
        Logout
      </button>

      {/* Contact Messages (Remains unchanged) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">📩 Contact Messages</h2>
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="p-4 border rounded-lg shadow-sm bg-white relative"
              >
                <h3 className="font-semibold">{msg.name}</h3>
                <p>{msg.email}</p>
                <p>{msg.message}</p>
                <button
                  onClick={() => deleteMessage(msg.id, "messages")}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🧳 Safari Inquiries (Updated Section) */}
      <section>
        {/* ➡️ Title updated for clarity */}
        <h2 className="text-xl font-semibold mb-3">
          🧳 Safari Inquiries ({inquiries.length})
        </h2>
        {inquiries.length === 0 ? (
          <p>No new inquiries.</p>
        ) : (
          <div className="space-y-4">
            {/* ➡️ Iterating over 'inquiries' state */}
            {inquiries.map((i) => (
              <div
                key={i.id}
                className="p-4 border rounded-lg shadow-sm bg-white relative"
              >
                <h3 className="font-semibold">
                  {i.firstName} {i.lastName} ({i.country})
                </h3>
                <p>
                  {i.email} | {i.phoneNumber}
                </p>
                <p className="mt-2">
                  <strong>Type:</strong> {i.safariType} ({i.parkName})
                </p>
                <p>
                  <strong>Dates:</strong> {i.safariStartDate} to{" "}
                  {i.safariEndDate} ({i.duration} days)
                </p>
                <p>
                  <strong>Budget:</strong> {i.currency} {i.estimatedBudget}
                </p>
                <p>
                  <strong>Guests:</strong> {i.numAdults} Adults, {i.numChildren}{" "}
                  Children
                </p>
                <button
                  // ➡️ Deleting from the 'inquiries' collection
                  onClick={() => deleteMessage(i.id, "inquiries")}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Admin;

"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "Centrum",
    date: "",
    time: "",
    guests: "1",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Reservering verzonden! (demo)");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8 space-y-6"
    >
      <h3 className="text-2xl font-bold text-white">
        Maak een reservering
      </h3>

      {/* Name */}
      <div>
        <label className="text-sm text-[#4CFF00]">Naam</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm text-[#4CFF00]">Telefoon</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        />
      </div>

      {/* Location */}
      <div>
        <label className="text-sm text-[#4CFF00]">Locatie</label>
        <select
          name="location"
          value={form.location}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        >
          <option>Centrum</option>
          <option>GOW2</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="text-sm text-[#4CFF00]">Datum</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        />
      </div>

      {/* Time */}
      <div>
        <label className="text-sm text-[#4CFF00]">Tijd</label>
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        />
      </div>

      {/* Guests */}
      <div>
        <label className="text-sm text-[#4CFF00]">Aantal personen</label>
        <select
          name="guests"
          value={form.guests}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="text-sm text-[#4CFF00]">Opmerkingen</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full rounded-lg bg-[#111111] border border-white/10 p-3 text-white"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-full bg-[#C1121F] px-6 py-3 font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
      >
        Reservering versturen
      </button>
    </form>
  );
}
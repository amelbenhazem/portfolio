"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      /*
       * Intégration EmailJS (recommandée pour Vercel sans backend) :
       * 1. npm install @emailjs/browser
       * 2. Créer un compte sur emailjs.com
       * 3. Remplacer les IDs ci-dessous :
       *
       * import emailjs from "@emailjs/browser";
       * await emailjs.send(
       *   "YOUR_SERVICE_ID",
       *   "YOUR_TEMPLATE_ID",
       *   {
       *     from_name: `${form.firstName} ${form.lastName}`,
       *     from_email: form.email,
       *     phone: form.phone,
       *     message: form.message,
       *   },
       *   "YOUR_PUBLIC_KEY"
       * );
       *
       * Alternative : Resend via API Route (/app/api/contact/route.ts)
       */

      // Simulation d'envoi — remplacer par EmailJS ou Resend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm text-muted">
            Prénom
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Votre prénom"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm text-muted">
            Nom
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Votre nom"
            className="input-field"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="amelbenhazem@gmail.com"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+216 XX XXX XXX"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Votre message..."
          className="input-field resize-none"
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
          <CheckCircle size={18} />
          Message envoyé avec succès ! Je vous répondrai rapidement.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle size={18} />
          Une erreur est survenue. Veuillez réessayer ou m&apos;écrire directement par email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          "Envoi en cours..."
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

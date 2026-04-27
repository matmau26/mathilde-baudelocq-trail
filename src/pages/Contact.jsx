import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const RECIPIENT = 'mathilde.baudelocq@gmail.com'; // TODO: remplacer par l'email réel
const CONTACT_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295309/4610396B-0A29-45AF-96C4-0D9E53FB185B_srmuvl.mp4';

const SUBJECTS = [
  'Sponsoring / Représentation',
  'Intégration team',
  'Demande presse',
  'Autre',
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    societe: '',
    sujet: SUBJECTS[0],
    message: '',
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.sujet}] — ${form.prenom} ${form.nom}`);
    const body = encodeURIComponent(
      `Prénom : ${form.prenom}\nNom : ${form.nom}\nEmail : ${form.email}\nTéléphone : ${form.telephone}\nSociété : ${form.societe}\nSujet : ${form.sujet}\n\nMessage :\n${form.message}\n`
    );
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-mesh-warm pt-32 pb-24">
      {/* Blobs vifs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-flame-300/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-electric-300/40 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Lien retour */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-mountain-700 transition-colors hover:text-flame-600"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
          Retour au Media Kit
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Colonne formulaire */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">
              Contact
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-mountain-950 sm:text-6xl">
              Construisons
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                ensemble.
              </span>
            </h1>

            <form
              onSubmit={onSubmit}
              className="mt-10 rounded-2xl border-2 border-mountain-950 bg-white p-6 shadow-xl shadow-mountain-900/5 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Prénom"
                  name="prenom"
                  value={form.prenom}
                  onChange={onChange}
                  required
                />
                <Field
                  label="Nom"
                  name="nom"
                  value={form.nom}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
                <Field
                  label="Téléphone"
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Société"
                  name="societe"
                  value={form.societe}
                  onChange={onChange}
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="sujet"
                  className="block text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600"
                >
                  Sujet
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  value={form.sujet}
                  onChange={onChange}
                  className="mt-2 w-full appearance-none rounded-lg border-2 border-mountain-200 bg-white px-4 py-3 text-sm font-medium text-mountain-950 focus:border-flame-500 focus:outline-none"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  required
                  placeholder="Présentez brièvement votre projet, contexte, échéances…"
                  className="mt-2 w-full resize-none rounded-lg border-2 border-mountain-200 bg-white px-4 py-3 text-sm text-mountain-950 placeholder:text-mountain-400 focus:border-flame-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-flame-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-flame-500/30 transition-all hover:bg-flame-600 hover:shadow-xl sm:w-auto"
              >
                Envoyer le message
                <Send
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </button>

              {sent && (
                <p className="mt-5 rounded-lg bg-flame-50 px-4 py-3 text-xs font-semibold text-flame-700 ring-1 ring-flame-200">
                  Votre client mail vient de s’ouvrir avec le message
                  pré-rempli — il ne reste plus qu’à appuyer sur Envoyer.
                </p>
              )}
            </form>

            {/* Lien direct */}
            <div className="mt-6 flex items-center gap-3 text-sm text-mountain-700">
              <Mail className="h-4 w-4 text-flame-600" strokeWidth={2.5} />
              <span>
                Ou par mail direct :{' '}
                <a
                  href={`mailto:${RECIPIENT}`}
                  className="font-bold text-mountain-950 underline-offset-4 hover:underline"
                >
                  {RECIPIENT}
                </a>
              </span>
            </div>
          </motion.div>

          {/* Colonne vidéo téléphone */}
          <motion.aside
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="mx-auto w-full max-w-xs">
              {/* Cadre orange décalé */}
              <div className="rounded-[2.25rem] border-2 border-flame-500 p-2 shadow-2xl shadow-mountain-900/20">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] bg-mountain-950">
                  {/* Fallback dégradé */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-mountain-700 via-mountain-900 to-flame-900"
                  />

                  {CONTACT_VIDEO && (
                    <video
                      src={CONTACT_VIDEO}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              <p className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600">
                Vidéo de présentation
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  required,
  type = 'text',
  autoComplete,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600"
      >
        {label}
        {required && <span className="ml-1 text-flame-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-lg border-2 border-mountain-200 bg-white px-4 py-3 text-sm font-medium text-mountain-950 placeholder:text-mountain-400 focus:border-flame-500 focus:outline-none"
      />
    </div>
  );
}

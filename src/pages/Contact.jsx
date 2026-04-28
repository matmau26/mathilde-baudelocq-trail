import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useT } from '../i18n/useT.js';

const RECIPIENT = 'mathilde.baudelocq@gmail.com';
const CONTACT_VIDEO =
  'https://res.cloudinary.com/dnh2k1blz/video/upload/q_auto/f_auto/v1777295309/4610396B-0A29-45AF-96C4-0D9E53FB185B_srmuvl.mp4';

// EmailJS — clé publique exposable côté client (par design)
const EMAILJS_SERVICE_ID = 'service_qc05j83';
const EMAILJS_TEMPLATE_ID = 'template_egmll6a';
const EMAILJS_PUBLIC_KEY = 'KMXbPattObbv2GR1n';

const buildEmptyForm = (subjects) => ({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  societe: '',
  sujet: subjects[0],
  message: '',
});

export default function Contact() {
  const t = useT('contact');
  const formRef = useRef(null);
  const [form, setForm] = useState(() => buildEmptyForm(t.subjects));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatusMessage({
          type: 'success',
          text: t.success,
        });
        setForm(buildEmptyForm(t.subjects));
      })
      .catch(() => {
        setStatusMessage({
          type: 'error',
          text: t.error,
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
          {t.back}
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
              {t.eyebrow}
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-mountain-950 sm:text-6xl">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-flame-600 via-flame-500 to-solar-400 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="mt-10 rounded-2xl border-2 border-mountain-950 bg-white p-6 shadow-xl shadow-mountain-900/5 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label={t.labels.prenom}
                  name="prenom"
                  value={form.prenom}
                  onChange={onChange}
                  required
                  autoComplete="given-name"
                />
                <Field
                  label={t.labels.nom}
                  name="nom"
                  value={form.nom}
                  onChange={onChange}
                  required
                  autoComplete="family-name"
                />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label={t.labels.email}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
                <Field
                  label={t.labels.telephone}
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </div>

              <div className="mt-5">
                <Field
                  label={t.labels.societe}
                  name="societe"
                  value={form.societe}
                  onChange={onChange}
                  autoComplete="organization"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="sujet"
                  className="block text-[10px] font-bold uppercase tracking-[0.25em] text-mountain-600"
                >
                  {t.labels.sujet}
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  value={form.sujet}
                  onChange={onChange}
                  className="mt-2 w-full appearance-none rounded-lg border-2 border-mountain-200 bg-white px-4 py-3 text-sm font-medium text-mountain-950 focus:border-flame-500 focus:outline-none"
                >
                  {t.subjects.map((s) => (
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
                  {t.labels.message}
                  <span className="ml-1 text-flame-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  required
                  placeholder={t.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-lg border-2 border-mountain-200 bg-white px-4 py-3 text-sm text-mountain-950 placeholder:text-mountain-400 focus:border-flame-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-flame-500 px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-flame-500/30 transition-all hover:bg-flame-600 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-mountain-400 disabled:shadow-none disabled:hover:bg-mountain-400 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    {t.submitting}
                    <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
                  </>
                ) : (
                  <>
                    {t.submit}
                    <Send
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </>
                )}
              </button>

              {statusMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-5 inline-flex items-start gap-2 rounded-lg px-4 py-3 text-xs font-semibold ring-1 ring-inset ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                      : 'bg-red-50 text-red-700 ring-red-200'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                  ) : (
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                  )}
                  <span>{statusMessage.text}</span>
                </p>
              )}
            </form>

            {/* Lien direct */}
            <div className="mt-6 flex items-center gap-3 text-sm text-mountain-700">
              <Mail className="h-4 w-4 text-flame-600" strokeWidth={2.5} />
              <span>
                {t.directLabel}{' '}
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
                {t.videoCaption}
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

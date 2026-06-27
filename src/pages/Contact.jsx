import React, { useState, useRef } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

import './Contact.css';   

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  role: '',
  subject: '',
  message: '',
  consent: false,
};

const ROLES = [
  'Engineering Manager',
  'Compliance Officer',
  'CTO / VP Engineering',
  'Project Manager',
  'QA / Standards Engineer',
  'Business Analyst',
  'Other',
];

const SUBJECTS = [
  'Platform Demo Request',
  'Enterprise Pricing',
  'Partnership Inquiry',
  'Technical Support',
  'General Inquiry',
];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Full name is required.';
  else if (fields.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!fields.email.trim()) errors.email = 'Work email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email address.';

  if (fields.phone && !/^[+]?[\d\s\-().]{7,15}$/.test(fields.phone))
    errors.phone = 'Enter a valid phone number.';

  if (!fields.subject) errors.subject = 'Please select a subject.';

  if (!fields.message.trim()) errors.message = 'Message is required.';
  else if (fields.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';

  if (!fields.consent) errors.consent = 'You must agree to continue.';

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [submitError, setSubmitError] = useState('');
  const [refId, setRefId] = useState('');
  const firstErrorRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newVal = type === 'checkbox' ? checked : value;
    setForm(prev => ({ ...prev, [name]: newVal }));
    // Live validate touched fields
    if (touched[name]) {
      const fieldErrors = validate({ ...form, [name]: newVal });
      setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldErrors = validate(form);
    setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const allErrors = validate(form);
    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) {
      // Focus first error
      const firstField = document.querySelector('.contact-field.has-error input, .contact-field.has-error textarea, .contact-field.has-error select');
      if (firstField) firstField.focus();
      return;
    }

    setSubmitState('loading');
    setSubmitError('');

    try {
      // Save contact message to Firestore
      const docRef = await addDoc(collection(db, 'contactMessages'), {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        role: form.role || null,
        subject: form.subject,
        message: form.message.trim(),
        consent: form.consent,
        createdAt: serverTimestamp(),
      });

      setRefId(docRef.id);
      setSubmitState('success');
      setForm(INITIAL_FORM);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('Firestore error:', err);
      setSubmitError('Something went wrong. Please try again or email us directly.');
      setSubmitState('error');
    }
  };

  const handleReset = () => {
    setSubmitState('idle');
    setSubmitError('');
    setRefId('');
    setForm(INITIAL_FORM);
    setTouched({});
    setErrors({});
  };

  const fieldClass = (name) =>
    `contact-field${errors[name] && touched[name] ? ' has-error' : ''}${form[name] && !errors[name] ? ' is-valid' : ''}`;

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">
          <div className="contact-hero-radial contact-hero-radial-1" />
          <div className="contact-hero-radial contact-hero-radial-2" />
          <div className="contact-hero-grid" />
        </div>
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            <i className="bi bi-envelope-paper" /> Contact Us
          </span>
          <h1 className="contact-headline">
            Let's talk about your<br />
            <em className="contact-headline-em">compliance challenge</em>
          </h1>
          <p className="contact-subline">
            Whether you're exploring The Platform, planning a deployment, or need technical guidance —
            our engineering team is ready to help.
          </p>
          {/* Trust badges */}
          <div className="contact-trust-row">
            <span className="contact-trust-badge">
              <i className="bi bi-shield-check" /> SOC 2 Ready
            </span>
            <span className="contact-trust-badge">
              <i className="bi bi-clock" /> Reply in &lt;1 business day
            </span>
            <span className="contact-trust-badge">
              <i className="bi bi-lock" /> Data never sold
            </span>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="contact-body px-6-pct py-20">
        <div className="contact-grid max-w-7xl mx-auto">

          {/* Left — Info Cards */}
          <aside className="contact-sidebar">
            <div className="contact-info-card">
              <div className="contact-info-icon" style={{ background: 'rgba(128,4,4,0.08)', color: 'var(--color-burg)' }}>
                <i className="bi bi-building" />
              </div>
              <div>
                <h3 className="contact-info-title">Headquarters</h3>
                <p className="contact-info-text">
                  Payoda Technologies Inc.<br />
                  Pleasanton, CA, USA
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" style={{ background: 'rgba(43,138,183,0.08)', color: 'var(--color-denim)' }}>
                <i className="bi bi-envelope" />
              </div>
              <div>
                <h3 className="contact-info-title">Email</h3>
                <a href="mailto:contact@payoda.com" className="contact-info-link">contact@payoda.com</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" style={{ background: 'rgba(67,173,175,0.08)', color: 'var(--color-keppel)' }}>
                <i className="bi bi-telephone" />
              </div>
              <div>
                <h3 className="contact-info-title">Phone</h3>
                <a href="tel:+19254622300" className="contact-info-link">+1 (925) 462-2300</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" style={{ background: 'rgba(0,48,73,0.08)', color: 'var(--color-prussian)' }}>
                <i className="bi bi-linkedin" />
              </div>
              <div>
                <h3 className="contact-info-title">LinkedIn</h3>
                <a href="https://linkedin.com/company/payoda" target="_blank" rel="noreferrer" className="contact-info-link">
                  linkedin.com/company/payoda
                </a>
              </div>
            </div>

            {/* Response SLA Card */}
            <div className="contact-sla-card">
              <div className="contact-sla-header">
                <i className="bi bi-lightning-charge-fill contact-sla-icon" />
                <span>Response Times</span>
              </div>
              <ul className="contact-sla-list">
                <li><span className="contact-sla-type">Demo Request</span><span className="contact-sla-time">&lt; 4 hrs</span></li>
                <li><span className="contact-sla-type">General Inquiry</span><span className="contact-sla-time">&lt; 1 day</span></li>
                <li><span className="contact-sla-type">Technical Support</span><span className="contact-sla-time">&lt; 2 hrs</span></li>
              </ul>
            </div>
          </aside>

          {/* Right — Form */}
          <div className="contact-form-wrap">

            {submitState === 'success' ? (
              <div className="contact-success-state">
                <div className="contact-success-icon-wrap">
                  <div className="contact-success-ring" />
                  <i className="bi bi-check-lg contact-success-check" />
                </div>
                <h2 className="contact-success-title">Message Sent!</h2>
                <p className="contact-success-text">
                  Thank you for reaching out. Our engineering team will review your message and get back to you within one business day.
                </p>
                <div className="contact-success-ref">
                  Reference: <strong>{refId ? refId.slice(0, 8).toUpperCase() : '—'}</strong>
                </div>
                <button className="contact-submit-btn" onClick={handleReset} style={{ marginTop: '1.5rem' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-header">
                  <h2 className="contact-form-title">Send us a message</h2>
                  <p className="contact-form-subtitle">Fields marked <span className="contact-required-star">*</span> are required.</p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="contact-form" aria-label="Contact form">

                  {/* Row 1: Name + Email */}
                  <div className="contact-form-row">
                    <div className={fieldClass('name')}>
                      <label htmlFor="contact-name" className="contact-label">
                        Full Name <span className="contact-required-star">*</span>
                      </label>
                      <div className="contact-input-wrap">
                        <i className="bi bi-person contact-input-icon" />
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Jane Smith"
                          className="contact-input"
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                          aria-invalid={!!(errors.name && touched.name)}
                        />
                        {form.name && !errors.name && <i className="bi bi-check-circle-fill contact-valid-icon" />}
                      </div>
                      {errors.name && touched.name && (
                        <span id="name-error" className="contact-error-msg" role="alert">
                          <i className="bi bi-exclamation-circle" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div className={fieldClass('email')}>
                      <label htmlFor="contact-email" className="contact-label">
                        Work Email <span className="contact-required-star">*</span>
                      </label>
                      <div className="contact-input-wrap">
                        <i className="bi bi-envelope contact-input-icon" />
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="jane@company.com"
                          className="contact-input"
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                          aria-invalid={!!(errors.email && touched.email)}
                        />
                        {form.email && !errors.email && <i className="bi bi-check-circle-fill contact-valid-icon" />}
                      </div>
                      {errors.email && touched.email && (
                        <span id="email-error" className="contact-error-msg" role="alert">
                          <i className="bi bi-exclamation-circle" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="contact-form-row">
                    <div className={fieldClass('phone')}>
                      <label htmlFor="contact-phone" className="contact-label">Phone</label>
                      <div className="contact-input-wrap">
                        <i className="bi bi-telephone contact-input-icon" />
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+1 (555) 000-0000"
                          className="contact-input"
                          value={form.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby={errors.phone && touched.phone ? 'phone-error' : undefined}
                          aria-invalid={!!(errors.phone && touched.phone)}
                        />
                        {form.phone && !errors.phone && <i className="bi bi-check-circle-fill contact-valid-icon" />}
                      </div>
                      {errors.phone && touched.phone && (
                        <span id="phone-error" className="contact-error-msg" role="alert">
                          <i className="bi bi-exclamation-circle" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className={fieldClass('company')}>
                      <label htmlFor="contact-company" className="contact-label">Company</label>
                      <div className="contact-input-wrap">
                        <i className="bi bi-building contact-input-icon" />
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Acme Corp"
                          className="contact-input"
                          value={form.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Role + Subject */}
                  <div className="contact-form-row">
                    <div className={fieldClass('role')}>
                      <label htmlFor="contact-role" className="contact-label">Your Role</label>
                      <div className="contact-input-wrap contact-select-wrap">
                        <i className="bi bi-person-badge contact-input-icon" />
                        <select
                          id="contact-role"
                          name="role"
                          className="contact-input contact-select"
                          value={form.role}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select your role…</option>
                          {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                        </select>
                        <i className="bi bi-chevron-down contact-select-chevron" />
                      </div>
                    </div>

                    <div className={fieldClass('subject')}>
                      <label htmlFor="contact-subject" className="contact-label">
                        Subject <span className="contact-required-star">*</span>
                      </label>
                      <div className="contact-input-wrap contact-select-wrap">
                        <i className="bi bi-chat-square-dots contact-input-icon" />
                        <select
                          id="contact-subject"
                          name="subject"
                          className="contact-input contact-select"
                          value={form.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          aria-describedby={errors.subject && touched.subject ? 'subject-error' : undefined}
                          aria-invalid={!!(errors.subject && touched.subject)}
                        >
                          <option value="">Choose a subject…</option>
                          {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <i className="bi bi-chevron-down contact-select-chevron" />
                      </div>
                      {errors.subject && touched.subject && (
                        <span id="subject-error" className="contact-error-msg" role="alert">
                          <i className="bi bi-exclamation-circle" /> {errors.subject}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className={`${fieldClass('message')} contact-field-full`}>
                    <label htmlFor="contact-message" className="contact-label">
                      Message <span className="contact-required-star">*</span>
                    </label>
                    <div className="contact-textarea-wrap">
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Describe your use case, project scope, or any specific question you have for our team…"
                        className="contact-input contact-textarea"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                        aria-invalid={!!(errors.message && touched.message)}
                      />
                      <span className="contact-char-count" style={{ color: form.message.length < 20 ? 'var(--color-burg)' : 'var(--color-keppel)' }}>
                        {form.message.length}/20 min
                      </span>
                    </div>
                    {errors.message && touched.message && (
                      <span id="message-error" className="contact-error-msg" role="alert">
                        <i className="bi bi-exclamation-circle" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Consent */}
                  <div className={`contact-consent-row${errors.consent && touched.consent ? ' has-error' : ''}`}>
                    <label className="contact-checkbox-label">
                      <input
                        type="checkbox"
                        name="consent"
                        id="contact-consent"
                        className="contact-checkbox"
                        checked={form.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-describedby={errors.consent && touched.consent ? 'consent-error' : undefined}
                      />
                      <span className="contact-checkbox-custom" aria-hidden="true">
                        {form.consent && <i className="bi bi-check" />}
                      </span>
                      <span className="contact-consent-text">
                        I agree to Payoda's{' '}
                        <a href="#privacy" className="contact-consent-link">Privacy Policy</a>{' '}
                        and consent to being contacted about my enquiry.
                        <span className="contact-required-star"> *</span>
                      </span>
                    </label>
                    {errors.consent && touched.consent && (
                      <span id="consent-error" className="contact-error-msg" role="alert">
                        <i className="bi bi-exclamation-circle" /> {errors.consent}
                      </span>
                    )}
                  </div>

                  <div className="contact-submit-row">
                    {submitError && (
                      <p className="contact-error-msg" role="alert" style={{ marginBottom: '0.75rem' }}>
                        <i className="bi bi-exclamation-triangle-fill" /> {submitError}
                      </p>
                    )}
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="contact-submit-btn"
                      disabled={submitState === 'loading'}
                      aria-live="polite"
                    >
                      {submitState === 'loading' ? (
                        <>
                          <span className="contact-spinner" aria-hidden="true" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="bi bi-send-fill" />
                        </>
                      )}
                    </button>
                    <p className="contact-privacy-note">
                      <i className="bi bi-lock-fill" />
                      Your information is encrypted and never shared.
                    </p>
                  </div>

                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="contact-offices px-6-pct pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="contact-offices-title">Our Offices</h2>
          <div className="contact-offices-grid">
            {[
              { city: 'Pleasanton', country: 'USA', role: 'HQ', icon: 'bi-building', color: 'var(--color-burg)' },
              { city: 'Chennai', country: 'India', role: 'Engineering', icon: 'bi-code-slash', color: 'var(--color-denim)' },
              { city: 'Coimbatore', country: 'India', role: 'R&D', icon: 'bi-cpu', color: 'var(--color-keppel)' },
            ].map(office => (
              <div className="contact-office-card" key={office.city}>
                <div className="contact-office-icon" style={{ color: office.color, background: `${office.color}10` }}>
                  <i className={`bi ${office.icon}`} />
                </div>
                <div>
                  <div className="contact-office-city">{office.city}, <span>{office.country}</span></div>
                  <div className="contact-office-role">{office.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

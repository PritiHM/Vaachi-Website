// app/terms/page.jsx
import React from "react";
import { Nunito, Fraunces } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "General Terms and Conditions",
  description: "General Terms and Conditions - Vaachi Foundation",
};

export default function TermsofUse() {
  return (
    <main className={`${nunito.className} min-h-screen py-12`}>
      <div className="max-w-7xl mx-auto py-4">
        <article className="p-8">

          <header className="mb-8">
            <h1 className={`${fraunces.className} text-4xl font-bold uppercase tracking-wide`}>
              GENERAL TERMS AND CONDITIONS
            </h1>

            <p className={`${fraunces.className} mt-4 text-sm leading-relaxed`}>
              <strong>VAACHI FOUNDATION</strong> By accessing, registering on, or participating in any programme, event, dialogue,
              offline or online community hosted by Vaachi Foundation (“Vaachi”, “we”, “us”, “our”), you agree to these Terms
              and Conditions (“Terms”). Please read them carefully before using our website, digital platforms, or offline activities
              (collectively, the “Platform”). Vaachi Foundation is a non-profit organisation that aims to create community-led
              stakeholdership through dialogue and engagement.
            </p>
          </header>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              1. ELIGIBILITY
            </h2>

            <p className={`${fraunces.className} mb-2`}>1.1 You must be 18 years or older to register an account or participate in programmes requiring registration.</p>
            <p className={`${fraunces.className} mb-2`}>1.2 Individuals under 18 may participate only with parental or guardian consent, particularly where personal data is collected.</p>
            <p className={`${fraunces.className} mb-2`}>1.3 By using the Platform, you confirm legal capacity to enter into a binding agreement.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              2. REGISTRATION & ACCURACY OF INFORMATION
            </h2>

            <p className={`${fraunces.className} mb-2`}>2.1 You must provide true, accurate, and complete information during registration and keep it updated.</p>
            <p className={`${fraunces.className} mb-2`}>2.2 Participant categories may include: community members; dialogue participants; facilitators; volunteers; interns; partner organisations; and donors.</p>
            <p className={`${fraunces.className} mb-2`}>2.3 Vaachi may verify identity or organisational details where necessary for safety or compliance.</p>
            <p className={`${fraunces.className} mb-2`}>2.4 You are responsible for keeping login credentials confidential and reporting any unauthorised use.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              3. NATURE OF THE PLATFORM & PERMITTED USE
            </h2>

            <p className={`${fraunces.className} mb-2`}>3.1 Vaachi provides non-profit, community-oriented spaces for dialogue and engagement. The Platform may include events, workshops, forums, messaging groups, surveys,
              research activities, and resource materials.</p>

            <p className={`${fraunces.className} mb-2`}>3.2 You agree NOT to use the Platform for: commercial promotion unless expressly permitted; political campaigning or hate propaganda; harassment, abuse, threats, or intimidation;
              spreading misinformation; unlawful conduct.</p>

            <p className={`${fraunces.className} mb-2`}>3.3 You must comply with all applicable Indian laws, including those governing speech, intellectual property, technology, and data protection.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              4. COMMUNITY STANDARDS & PROHIBITED CONDUCT
            </h2>

            <p className={`${fraunces.className} mb-2`}>4.1 You must not: post defamatory, obscene, discriminatory, hateful, or unlawful content; incite violence or self-harm; impersonate others or misrepresent affiliations; upload content you lack rights to use; use bots, scrapers, or automated tools without permission; attempt to breach security or access unauthorised data.</p>

            <p className={`${fraunces.className} mb-2`}>4.2 Vaachi may remove content or restrict access where violations occur.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              5. PROGRAMMES, DONATIONS & PAYMENTS
            </h2>

            <p className={`${fraunces.className} mb-2`}>5.1 Vaachi may offer paid workshops, events, or learning modules and accept donations.</p>

            <p className={`${fraunces.className} mb-2`}>5.2 Unless specified otherwise or required by law, all fees and donations are non-refundable.</p>

            <p className={`${fraunces.className} mb-2`}>5.2 Unless specified otherwise or required by law, all fees and donations are non-refundable.</p>

            <p className={`${fraunces.className} mb-2`}>5.4 Third-party payment processors may apply their own terms.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              6. CONTENT OWNERSHIP & INTELLECTUAL PROPERTY
            </h2>

            <p className={`${fraunces.className} mb-2`}>6.1 User Content (a) “User Content” includes all text, media, recordings, comments, or materials you submit. (b) You retain ownership of your User Content. (c) You grant Vaachi a non-exclusive, worldwide, royalty-free licence to use such content for non-profit purposes, including documentation, reporting, education, and promotion. (d) Vaachi will credit you where feasible unless anonymity is requested or deemed necessary. (e) You confirm your content: is original or licensed; does not infringe rights or laws; does not breach confidentiality.</p>

            <p className={`${fraunces.className} mb-2`}>6.2 Vaachi Content (a) Vaachi Content (logos, text, designs, resources, videos, etc.) is protected by intellectual property laws. (b) You may download and use Vaachi Content for non-commercial purposes only. (c) You may not alter, distribute, or commercially exploit Vaachi Content without written consent.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              7. DATA PROTECTION & PRIVACY
            </h2>

            <p className={`${fraunces.className} mb-2`}>7.1 Vaachi processes personal data responsibly and in accordance with applicable Indian data protection laws.</p>
            <p className={`${fraunces.className} mb-2`}>7.2 Information collected may include name, contact details, demographics (if voluntarily provided), event participation, recordings, survey responses, and submissions.</p>
            <p className={`${fraunces.className} mb-2`}>7.3 Data is processed for purposes such as programme administration, communication, record-keeping, research, and legal compliance.</p>
            <p className={`${fraunces.className} mb-2`}>7.4 Where legally required, Vaachi will obtain consent before processing personal data.</p>
            <p className={`${fraunces.className} mb-2`}>7.5 Reasonable security measures are implemented to protect personal data.</p>
            <p className={`${fraunces.className} mb-2`}>7.6 Subject to law, you may request access, correction, deletion, or withdrawal of consent.</p>
            <p className={`${fraunces.className} mb-2`}>7.7 Data may be shared with service providers, funders (in anonymised form), or authorities where legally required.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              8. DISCLAIMERS, LIABILITY & ABSOLUTE INDEMNIFICATION
            </h2>

            <p className={`${fraunces.className} mb-2`}>8.1 Vaachi does not endorse participant statements, opinions, or third-party content shared on the Platform.</p>
            <p className={`${fraunces.className} mb-2`}>8.2 Information shared may reflect lived experiences and may not always be complete or applicable to your circumstances.</p>
            <p className={`${fraunces.className} mb-2`}>8.3 The Platform and its content are provided “as is” without warranties of any kind.</p>
            <p className={`${fraunces.className} mb-2`}>8.4 Vaachi is not liable for any loss, damage, injury, or claim arising from: use or inability to use the Platform; actions or disputes involving third parties; User Content or third-party content.</p>
            <p className={`${fraunces.className} mb-2`}>8.5 ABSOLUTE INDEMNIFICATION (as requested) You agree to absolutely, unconditionally, and irrevocably indemnify and hold harmless Vaachi, including its trustees, officers, employees, volunteers, and affiliates, from all losses, claims, liabilities, damages, costs, and expenses (including legal fees) arising from: your use of the Platform; your User Content; your breach of these Terms or applicable law; your infringement of rights of any person or entity.</p>
            <p className={`${fraunces.className} mb-2`}>8.6 This indemnity is absolute, continuing, and survives termination. 8.7 Nothing excludes liability that cannot be excluded under Indian law.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              9. SUSPENSION & TERMINATION
            </h2>

            <p className={`${fraunces.className} mb-2`}>9.1 Vaachi may suspend or terminate access without notice where: Terms or laws are breached; safety or legal risk arises; participation contradicts programme objectives.</p>
            <p className={`${fraunces.className} mb-2`}>9.2 You may request account deletion by contacting Vaachi.</p>
            <p className={`${fraunces.className} mb-2`}>9.3 Provisions on IP, liability, and indemnity survive termination.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              10. GOVERNING LAW & DISPUTE RESOLUTION
            </h2>

            <p className={`${fraunces.className} mb-2`}>10.1 These Terms are governed by the laws of India.</p>
            <p className={`${fraunces.className} mb-2`}>10.2 Disputes will be subject to the exclusive jurisdiction of the courts in the city where Vaachi Foundation is registered.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              11. CHANGES TO THESE TERMS
            </h2>

            <p className={`${fraunces.className} mb-2`}>11.1 Vaachi may amend these Terms as required.</p>
            <p className={`${fraunces.className} mb-2`}>11.2 Continued use after updates constitutes acceptance.</p>
          </section>

          <section className="mb-6">
            <h2 className={`${fraunces.className} text-xl font-bold mb-3`}>
              12. CONTACT US
            </h2>

            <p className={`${fraunces.className} mb-2`}>
              Email: <a href="mailto:contact@vaachi.org" className="text-[#00656D] underline">contact@vaachi.org</a>
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}

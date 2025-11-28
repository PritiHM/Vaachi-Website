import React from 'react';
import { Fraunces } from 'next/font/google';
import { Nunito } from "next/font/google";




export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy page',
  
  
};
const fraunces = Fraunces({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-fraunces', 
    display: 'swap',
  });
  const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});


export default function PrivacyPage() {
  return (
<main id="privacypolicy" className={`${fraunces.className} min-h-screen py-12 px-5 bg-white text-gray-900`}>
      <div className="max-w-7xl mx-auto">
        <article className="prose prose-lg lg:prose-xl">
          <header>
           <h1 className="font-fraunces font-bold text-4xl text-[#000000] pb-12">
  Privacy Policy
</h1>

<p className={`${nunito.className}`}>
  Vaachi Foundation (“Vaachi”, “we”, “our”, “us”) is a non-profit organization
  engaged in amplifying community stakeholdership through dialogue and engagement.
  We value your trust and respect your privacy. This Privacy Policy explains how we
  collect, use, disclose, and protect your personal information when you interact with
  our website, programmes, events, consultations, surveys, and other initiatives
  (collectively, the “Services”). By accessing or using our Services, you agree to the
  terms of this Privacy Policy.
</p>

            
          </header>

          <section>
            <h2 className="font-fraunces my-6">1. Information We Collect We may collect the following categories of information, depending on how 
                you engage with us: </h2>

           <h3 className={`${nunito.className} my-4`}>1.1 Personal details Name Email address Contact details you voluntarily provide Gender or other demographic details (if and when requested)</h3>
            

            <h3 className={`${nunito.className} my-4`}>1.2 Organisational / affiliation details Organisation / community / institution name Role or designation Sector / area of work Any supporting documents or information you voluntarily share (e.g., project descriptions, proposals)
</h3>
            

           <h3 className={`${nunito.className} my-4`}> 1.3 Participation and engagement information Registrations for events, dialogues, workshops, and consultations Attendance records Audio, video, and photographic recordings of events and meetings (where applicable and allowed) Responses submitted in surveys, feedback forms, polls, or other engagement tools</h3>
            

           <h3 className={`${nunito.className} my-4`}> 1.4 Payment and donation information (if applicable) Details necessary to process donations, event fees, or other payments (collected and processed via secure payment gateways) Transaction-related information (amount, date, mode of payment) Note: We do not store full payment card details on our own systems; such processing is typically handled by third-party payment service providers.</h3>
           

            <h3 className={`${nunito.className} my-4`}>1.5 Technical information Device type, browser type, operating system IP address, approximate location Cookies and similar technologies Log data and usage analytics relating to your interactions with our website and online tools You may choose not to provide certain information, but this may limit your ability to participate in certain initiatives or access certain features.</h3>
           

            <h3 className={`${nunito.className} my-4`}>1.6 Data From Contests and Surveys</h3>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6">2. How We Use Your Information We use your information for purposes consistent with our 
                non-profit mission, including: To register you as a participant, volunteer, partner, contributor, or stakeholder in Vaachi
                 initiatives To plan, organize, and manage dialogues, consultations, events, workshops, and other engagement activities To 
                 communicate with you about events, updates, invitations, opportunities, research, and programme-related information To create
                  anonymised or aggregated insights for research, reporting, and advocacy, without identifying you personally To maintain
                   records of participation, contributions, and donations (where applicable) To improve our Services, develop new programmes, 
                   and enhance outreach and impact To ensure the security and proper functioning of our website and platforms To comply with
                    legal, regulatory, accounting, and reporting obligations We may also use your information for any other purpose that
                 is reasonably related to the above and/or that we disclose to you at the time of collection.</h2>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6"> 3. Sharing of Information We do not sell your personal information 
                to third parties. We may share your information as follows: </h2>

            <h3 className={`${nunito.className} my-4`}> 3.1 With other participants and stakeholders For collaboration, networking, and community-
                building purposes in line with our mission Through participant lists, reports, or summaries of dialogues,
                 where this is contextually appropriate (for example, listing names and affiliations
                 of speakers or participants in event materials)  </h3>
            

           <h3 className={`${nunito.className} my-4`}>3.2 With service providers With trusted third-party service providers who assist us in operating our website, communication tools, data storage, payment processing, analytics, event facilitation (e.g., video conferencing platforms), and similar functions These service providers are expected to process data only on our instructions and with appropriate safeguards. </h3>
            

            <h3 className={`${nunito.className} my-4`}>3.3 With partners and funders In anonymised or aggregated form for reporting, research, and impact assessments In limited cases, with your consent, we may share identifiable information with collaborating institutions and partners for joint initiatives</h3>
           

            <h3 className={`${nunito.className} my-4`}> 3.4 With authorities and as required by law With governmental, regulatory, or law-enforcement authorities when we are legally required to do so, or when such disclosure is necessary to protect our rights, safety, or the rights and safety of others </h3>
            

           <h3 className={`${nunito.className} my-4`}>3.5 With your consent In any other situation where you explicitly consent to such sharing. Important: Once you voluntarily share information directly with other participants, organisations, or on public platforms (e.g., speaking at an event, posting in a public forum, or sharing your details openly), Vaachi cannot control or be responsible for how those third parties use or further disclose that information. </h3>
            

            
          </section>

          <section>
            <h2 className="font-fraunces my-6">4. Data Storage & Security We use reasonable technical and organizational 
                measures to protect your information, including secure servers, restricted access, and industry-standard 
                security practices. However: No method of transmission over the internet or electronic storage is completely 
                secure. We cannot guarantee absolute security of your data. You acknowledge that you provide information at your own 
                risk and are responsible for
                 safeguarding any account credentials or devices used to access our Services.</h2>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6">5. Retention of Information We retain your information for as long as: 
                It is necessary for the purposes described in this Privacy Policy, or Required by applicable laws, regulations,
                 or record-keeping obligations, or Needed to establish, exercise, or defend legal claims. We may retain anonymised or
                 aggregated information indefinitely, provided it cannot be used to identify you.</h2>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6">6. Your Rights Subject to applicable law, you may have the right to: Access the personal information we hold about you Update or correct inaccurate or incomplete information Request deletion of your personal data, subject to our legal and operational obligations Withdraw consent where processing is based on your consent (this will not affect processing done before withdrawal) Opt out of receiving non-essential communications such as newsletters or promotional updates To exercise any of these rights, please contact us at contact@vaachi.org. We may need to verify your identity before acting on certain requests. </h2>
           
          </section>

          <section>
            <h2 className="font-fraunces my-6">7. Children’s Privacy Our Services are not primarily intended for children 
                under 18 years of age. We do not knowingly collect personal data from children under 18 without appropriate consent or
                 authorisation from a parent, guardian, or responsible adult, where required by law and by our own internal policies.
                  If you believe that a child under 18 has provided us with personal information without
                 appropriate consent, please contact us so that we can take appropriate steps. </h2>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6">8. Third-Party Websites and Platforms Our Services may contain links to third-party websites, tools, or platforms (such as payment gateways, survey tools, or video conferencing services). We do not control and are not responsible for the privacy practices, security, or content of such third parties. Your use of those services is subject to their respective privacy policies and terms. We encourage you to review the privacy policies of any third-party sites or services you use. </h2>
            
          </section>

          <section>
            <h2 className="font-fraunces my-6">9. International Data Transfers Depending on where our 
                service providers and servers are located, your information may be stored or processed in 
                jurisdictions different from your own. By using our Services and providing information to us, 
                you acknowledge that your information may be transferred to, stored in, and processed in such
                 jurisdictions, subject to applicable law and reasonable safeguards. </h2>
           
          </section>

          <section>
            <h2 className="font-fraunces my-6">
10. Disclaimer, Limitation of Liability & Indemnity To the maximum extent permitted by applicable law: Our Services, including our website, communications, and related tools, are provided on an “as is” and “as available” basis. Vaachi Foundation and its trustees, officers, employees, volunteers, representatives, and partners disclaim all warranties, express or implied, relating to the Services and this Privacy Policy, including but not limited to accuracy, completeness, reliability, and fitness for a particular purpose. Vaachi Foundation and its trustees, officers, employees, volunteers, representatives, and partners shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages, or for any loss of data, goodwill, opportunities, revenue, or reputation arising out of or in connection with: Your use of or inability to use the Services, Any unauthorised access to or alteration of your information, Any third-party actions, omissions, tools, or services, or Any reliance placed by you on information provided through the Services. By using our Services, you agree to fully indemnify, defend, and hold harmless Vaachi Foundation and its trustees, officers, employees, volunteers, representatives, and partners from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or in connection with: Your use of the Services, Any content, information, or materials you provide or make available,
 or Your breach of this Privacy Policy or any applicable law or rights of a third party.</h2>
            
          </section>
          <section>
            <h2 className="font-fraunces my-6">11. Updates to This Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or Services. The updated version will be posted on our website with an updated “Last Updated” date. Your continued use of the Services after any changes are posted will constitute your acceptance
                 of those changes. We encourage you to review this Privacy Policy periodically.</h2>
           </section>
            <section>
            <h2 className="font-fraunces my-6">12. Contact Us If you have any questions, concerns, or requests relating to this Privacy Policy
                 or our handling of your personal information, please contact us at:<span className='text-[#00656D'>contact@vaachi.or</span> </h2>
           </section>
        </article>
      </div>
    </main>
  );
}

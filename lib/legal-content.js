// Tailwind utility classes reused inside the rich-text section bodies below.
const SUBSECTION = 'mb-7 border-b border-dashed border-line pb-7 last:mb-0 last:border-b-0 last:pb-0';
const H3 = 'mb-3 font-display text-[1.1rem] font-semibold text-ink';
const P = 'mb-4 text-ink-2 last:mb-0';
const UL = 'mb-4 list-none pl-0';
const LI =
  "relative mb-3 pl-6 text-ink-2 before:absolute before:left-1 before:text-[1.2rem] before:font-bold before:leading-none before:text-brand before:content-['•']";
const NOTICE = 'my-4 rounded-sm border border-ok-line bg-ok-bg px-5 py-4 text-[0.95rem] font-medium text-ok-text';
const INLINE_LINK = 'border-b border-transparent font-semibold text-brand hover:border-brand';
const CONTACT_CARD = 'mt-2 inline-flex items-center gap-3 rounded-sm bg-surface-3 px-5 py-3 font-medium';
const CONTACT_CARD_ICON = 'text-brand';
const CONTACT_CARD_LINK = 'font-semibold text-brand hover:underline';

export const privacyPolicy = {
  title: 'Privacy Policy',
  lastUpdated: 'November 2026',
  introduction:
    'CivicsAce ("we," "our," or "us") respects your privacy. This Privacy Policy explains how information is collected, used, and protected when you use the CivicsAce mobile application ("App").',
  sections: [
    {
      id: 'info-collect',
      number: 1,
      title: 'Information We Collect',
      content: `
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Account Information</h3>
          <p class="${P}">If you create an account, we may collect:</p>
          <ul class="${UL}">
            <li class="${LI}">Email address</li>
            <li class="${LI}">Name</li>
            <li class="${LI}">State selection</li>
            <li class="${LI}">Account credentials</li>
          </ul>
        </div>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Usage Information</h3>
          <ul class="${UL}">
            <li class="${LI}">Study progress</li>
            <li class="${LI}">Quiz results</li>
            <li class="${LI}">Flashcard activity</li>
            <li class="${LI}">Reading and writing practice activity</li>
            <li class="${LI}">Mock interview activity</li>
            <li class="${LI}">Subscription status</li>
          </ul>
        </div>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Device Information</h3>
          <ul class="${UL}">
            <li class="${LI}">Device type</li>
            <li class="${LI}">Operating system version</li>
            <li class="${LI}">App version</li>
            <li class="${LI}">Anonymous diagnostic information</li>
          </ul>
        </div>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Interview Date and Reminders</h3>
          <p class="${P}">If you enter your interview date or turn on reminders, this information is stored only on your device. We use it to show your interview countdown and to send you study reminders, interview reminders, and a reminder before your free trial ends. These reminders are created on your device; we do not use a push notification service.</p>
        </div>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Microphone Access</h3>
          <p class="${P}">The App requests microphone access for the Mock Interview feature. Audio is used solely for speech recognition and is not recorded, stored, or transmitted by CivicsAce. Speech recognition may be processed by Android's built-in speech recognition service, which may transmit audio to Google's servers subject to Google's privacy practices.</p>
        </div>
      `,
    },
    {
      id: 'how-use',
      number: 2,
      title: 'How We Use Information',
      content: `
        <p class="${P}">We use the collected information for the following purposes:</p>
        <ul class="${UL}">
          <li class="${LI}">Provide and improve the App</li>
          <li class="${LI}">Save and synchronize study progress</li>
          <li class="${LI}">Process subscriptions and purchases</li>
          <li class="${LI}">Provide customer support</li>
          <li class="${LI}">Monitor performance and reliability</li>
        </ul>
      `,
    },
    {
      id: 'free-trial',
      number: 3,
      title: 'Free Trial & Subscriptions',
      content: `
        <p class="${P}">CivicsAce offers a free trial period for new subscribers. After the trial period ends, the subscription will automatically renew unless canceled before the renewal date. Full details about trial duration, subscription billing, and cancellation are provided in our <a href="/terms#subscriptions" class="${INLINE_LINK}">Terms of Use</a>.</p>
      `,
    },
    {
      id: 'payments',
      number: 4,
      title: 'Payments',
      content: `
        <p class="${P}">All purchases and subscriptions are processed through Google Play. CivicsAce does not collect, process, or store your payment information. Payment information is handled by Google in accordance with Google's policies.</p>
      `,
    },
    {
      id: 'data-storage',
      number: 5,
      title: 'Data Storage',
      content: `
        <p class="${P}">Your account information and study progress are stored securely using Google Firebase to provide App functionality and synchronization across devices. We follow Firebase's data handling and security guidance for these purposes; for more information, see Firebase's <a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer" class="${INLINE_LINK}">Terms of Service</a> and Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="${INLINE_LINK}">Privacy Policy</a>. We take reasonable administrative, technical, and organizational measures to protect information from unauthorized access, disclosure, alteration, or destruction.</p>
      `,
    },
    {
      id: 'third-party',
      number: 6,
      title: 'Third-Party Services',
      content: `
        <p class="${P}">The App may use the following third-party services:</p>
        <ul class="${UL}">
          <li class="${LI}"><strong>Google Play Billing</strong> — payment processing</li>
          <li class="${LI}"><strong>Firebase Authentication</strong> — account management</li>
          <li class="${LI}"><strong>Firebase Firestore</strong> — data storage and synchronization</li>
          <li class="${LI}"><strong>Firebase Crashlytics</strong> — crash reporting and diagnostics</li>
          <li class="${LI}"><strong>Firebase Analytics</strong> — anonymous usage analytics</li>
          <li class="${LI}"><strong>Google AdMob</strong> — advertising services</li>
          <li class="${LI}"><strong>Android Speech Recognition</strong> — speech-to-text functionality for Mock Interview</li>
        </ul>
        <p class="${NOTICE}">Each service operates under its own privacy policy and terms.</p>
      `,
    },
    {
      id: 'advertising',
      number: 7,
      title: 'Advertising',
      content: `
        <p class="${P}">Free users may see advertisements provided by third-party advertising partners. Google AdMob may use your device's advertising ID to show and measure ads. You can reset or delete your advertising ID in your device's settings. These advertising partners may collect information necessary to deliver, measure, and improve advertisements. Premium subscribers do not see advertisements. Ads may be removed by upgrading to Premium.</p>
        <p class="${P}">Our website uses the Google Ads tag to measure the effectiveness of our advertising. When you visit the website, Google may set cookies and collect information such as your IP address, device and browser details, and the pages you view. This information is handled under Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="${INLINE_LINK}">Privacy Policy</a>, and you can manage how Google personalizes ads at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" class="${INLINE_LINK}">Google Ads Settings</a>.</p>
      `,
    },
    {
      id: 'data-retention',
      number: 8,
      title: 'Data Retention',
      content: `
        <p class="${P}">We retain account information and study progress while your account remains active. If your account remains inactive for 24 months, we may delete your account and associated data. Certain information may be retained longer when required by law, to resolve disputes, enforce agreements, or protect our legal rights.</p>
      `,
    },
    {
      id: 'account-deletion',
      number: 9,
      title: 'Account Deletion',
      content: `
        <p class="${P}">You can delete your account and personal information at any time using either of the options below.</p>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Option 1 — In-App (Recommended)</h3>
          <ol class="mb-4 list-decimal pl-6 text-ink-2 marker:font-bold marker:text-brand">
            <li class="mb-2 pl-1">Open the CivicsAce app.</li>
            <li class="mb-2 pl-1">Tap the <strong>Settings</strong> tab in the bottom navigation.</li>
            <li class="mb-2 pl-1">Scroll to the bottom and tap <strong>Delete Account</strong>.</li>
            <li class="mb-2 pl-1">Confirm the deletion in the dialog that appears.</li>
          </ol>
          <p class="${P}">This immediately and permanently deletes your account and associated data.</p>
        </div>
        <div class="${SUBSECTION}">
          <h3 class="${H3}">Option 2 — By Email</h3>
          <p class="${P}">If you're unable to access the app, you may request deletion by contacting us at <a href="mailto:support@civicsace.app" class="${INLINE_LINK}">support@civicsace.app</a> from the email address associated with your account. We will process deletion requests within a reasonable period unless retention is required by law.</p>
        </div>
      `,
    },
    {
      id: 'children-privacy',
      number: 10,
      title: "Children's Privacy",
      content: `
        <p class="${P}">The App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will take reasonable steps to delete it.</p>
      `,
    },
    {
      id: 'changes-policy',
      number: 11,
      title: 'Changes to This Privacy Policy',
      content: `
        <p class="${P}">We may update this Privacy Policy from time to time. Any changes will be posted within the App and become effective upon posting. Continued use of the App after changes become effective constitutes acceptance of the updated Privacy Policy.</p>
      `,
    },
    {
      id: 'contact-us',
      number: 12,
      title: 'Contact Us',
      content: `
        <p class="${P}">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <div class="${CONTACT_CARD}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${CONTACT_CARD_ICON}"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <a href="mailto:support@civicsace.app" class="${CONTACT_CARD_LINK}">support@civicsace.app</a>
        </div>
      `,
    },
  ],
};

export const termsOfUse = {
  title: 'Terms of Use',
  lastUpdated: 'November 2026',
  introduction:
    'Welcome to CivicsAce. By downloading, accessing, or using the CivicsAce mobile application ("App"), you agree to these Terms of Use. If you do not agree, please do not use the App.',
  sections: [
    {
      id: 'educational-purpose',
      number: 1,
      title: 'Educational Purpose',
      content: `
        <p class="${P}">CivicsAce is an educational study tool designed to help users prepare for the U.S. citizenship test and interview. While we strive to provide accurate and up-to-date information, we do not guarantee that all content is complete, accurate, or reflects the most current USCIS requirements.</p>
        <p class="${P}">CivicsAce is not responsible for any incorrect, outdated, or incomplete answers or study materials provided within the App. Users are solely responsible for verifying information through official USCIS resources at <a href="https://www.uscis.gov" target="_blank" rel="noopener noreferrer" class="${INLINE_LINK}">https://www.uscis.gov</a> and other official government sources before their naturalization interview.</p>
      `,
    },
    {
      id: 'user-accounts',
      number: 2,
      title: 'User Accounts',
      content: `
        <p class="${P}">Certain features may require the creation of an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information and keep your account information up to date. Account deletion and data removal requests are governed by our Privacy Policy.</p>
      `,
    },
    {
      id: 'subscriptions',
      number: 3,
      title: 'Subscriptions and Purchases',
      content: `
        <ul class="${UL}">
          <li class="${LI}">Subscriptions automatically renew unless canceled through your Google Play account before the renewal date.</li>
          <li class="${LI}">Free trial. Some subscriptions include a free trial (currently 3 days). Unless you cancel in your Google Play account before the trial ends, it automatically becomes a paid subscription and you will be charged the subscription price. If you cancel during the trial, you will not be charged.</li>
          <li class="${LI}">Lifetime. A Lifetime purchase is a one-time payment through Google Play that unlocks premium features for as long as the App is available. It is not a subscription, does not renew, and you will not be charged again.</li>
          <li class="${LI}">Free version. Some users may have access to a limited free version of the App, which may include daily limits on practice and may show advertisements.</li>
          <li class="${LI}">All payments are processed by Google Play and are subject to Google's payment terms and policies.</li>
          <li class="${LI}">All purchases are final and non-refundable except as required by Google Play's refund policies.</li>
          <li class="${LI}">Pricing, subscription options, and available features may change at any time.</li>
        </ul>
      `,
    },
    {
      id: 'intellectual-property',
      number: 4,
      title: 'Intellectual Property',
      content: `
        <p class="${P}">The App, including its content, design, logos, graphics, software, study materials, question banks, flashcards, audio content, educational content, and other features, is owned by CivicsAce and protected by applicable intellectual property laws. You may not copy, reproduce, distribute, modify, reverse engineer, or create derivative works from any part of the App without prior written permission.</p>
      `,
    },
    {
      id: 'acceptable-use',
      number: 5,
      title: 'Acceptable Use',
      content: `
        <p class="${P}">You agree not to:</p>
        <ul class="${UL}">
          <li class="${LI}">Use the App for unlawful purposes</li>
          <li class="${LI}">Attempt to gain unauthorized access to the App or its systems</li>
          <li class="${LI}">Interfere with the operation or security of the App</li>
          <li class="${LI}">Copy, redistribute, or resell premium content</li>
          <li class="${LI}">Use automated tools to access or scrape App content</li>
          <li class="${LI}">Misuse microphone access for any purpose other than the Mock Interview feature</li>
        </ul>
      `,
    },
    {
      id: 'app-availability',
      number: 6,
      title: 'App Availability',
      content: `
        <p class="${P}">We do not guarantee that the App will be available at all times or free from interruptions, errors, or technical issues. Features may be modified, suspended, or discontinued at any time without notice.</p>
      `,
    },
    {
      id: 'disclaimer-warranties',
      number: 7,
      title: 'Disclaimer of Warranties',
      content: `
        <p class="${P}">The App is provided on an "as is" and "as available" basis. CivicsAce makes no warranties, express or implied, regarding the accuracy, reliability, availability, or suitability of the App for any particular purpose. Use of the App is at your own risk.</p>
      `,
    },
    {
      id: 'no-guarantee-results',
      number: 8,
      title: 'No Guarantee of Results',
      content: `
        <p class="${P}">Using CivicsAce does not guarantee that you will pass the U.S. citizenship test, interview, or any government examination.</p>
      `,
    },
    {
      id: 'limitation-liability',
      number: 9,
      title: 'Limitation of Liability',
      content: `
        <p class="${P}">To the fullest extent permitted by law, CivicsAce shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to your use of the App.</p>
      `,
    },
    {
      id: 'termination',
      number: 10,
      title: 'Termination',
      content: `
        <p class="${P}">You may stop using the App at any time. CivicsAce may suspend or terminate access to the App, with or without notice, if you violate these Terms or engage in activity that may harm the App, its users, or its services. Upon termination, your right to use the App immediately ends.</p>
      `,
    },
    {
      id: 'changes-terms',
      number: 11,
      title: 'Changes to These Terms',
      content: `
        <p class="${P}">CivicsAce may update these Terms from time to time. Continued use of the App after updated Terms become effective constitutes acceptance of the revised Terms.</p>
      `,
    },
    {
      id: 'contact-terms',
      number: 12,
      title: 'Contact Us',
      content: `
        <p class="${P}">If you have any questions about these Terms, please contact us at:</p>
        <div class="${CONTACT_CARD}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${CONTACT_CARD_ICON}"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <a href="mailto:support@civicsace.app" class="${CONTACT_CARD_LINK}">support@civicsace.app</a>
        </div>
      `,
    },
    {
      id: 'governing-law',
      number: 13,
      title: 'Governing Law',
      content: `
        <p class="${P}">These Terms shall be governed by and construed in accordance with the laws of the State of Washington, United States, without regard to conflict of law principles.</p>
      `,
    },
    {
      id: 'dispute-resolution',
      number: 14,
      title: 'Dispute Resolution',
      content: `
        <p class="${P}">Any dispute arising out of or relating to these Terms or the App shall be resolved exclusively in the state or federal courts located in Washington State, and you consent to the jurisdiction of such courts.</p>
      `,
    },
  ],
};

export const faqs = [
  {
    q: 'How do I request account deletion?',
    a: `The fastest way is in the app: go to <strong>Settings</strong> and tap <strong>Delete Account</strong> to remove your account and data immediately. If you can't access the app, you can instead email us at <a href="mailto:support@civicsace.app" class="${INLINE_LINK}">support@civicsace.app</a> from the address associated with your account, and we'll process your request within a reasonable timeframe.`,
  },
  {
    q: 'How does the free trial work?',
    a: 'When you first launch the app, any new user gets full access to all premium features (like Mock Interviews, full flashcard sets, and advanced quizzes) for a limited free trial period. After the trial ends, you must subscribe through Google Play to continue using those features.',
  },
  {
    q: 'Is CivicsAce affiliated with the US government?',
    a: 'No. CivicsAce is completely independent. It is not affiliated with, endorsed by, or sponsored by the U.S. Citizenship and Immigration Services (USCIS), the Department of Homeland Security, or any other government agency.',
  },
  {
    q: 'Does CivicsAce record mock interview audio?',
    a: "No. Your audio is processed directly through Android's built-in speech-to-text service. CivicsAce does not store, record, or transmit your audio.",
  },
];

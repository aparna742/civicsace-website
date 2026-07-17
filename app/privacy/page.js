import LegalPage from '@/components/LegalPage';
import { privacyPolicy } from '@/lib/legal-content';

export const metadata = {
  title: 'Privacy Policy — CivicsAce',
};

export default function PrivacyPolicyPage() {
  return <LegalPage data={privacyPolicy} />;
}

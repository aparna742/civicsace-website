import LegalPage from '@/components/LegalPage';
import { termsOfUse } from '@/lib/legal-content';

export const metadata = {
  title: 'Terms of Use — CivicsAce',
};

export default function TermsOfUsePage() {
  return <LegalPage data={termsOfUse} />;
}

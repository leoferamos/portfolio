import { I18nProvider } from './lib/i18n/context';
import { AppContent } from './App.i18n';

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
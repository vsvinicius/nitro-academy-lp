import languageDetector from 'next-language-detector';

export default languageDetector({
  supportedLngs: ['en', 'pt'],
  fallbackLng: 'pt'
})
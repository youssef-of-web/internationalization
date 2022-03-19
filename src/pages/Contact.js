import React from "react";
import {useTranslation} from 'react-i18next'
function Contact() {
  const {t} = useTranslation()
  return (
    <div class="alert alert-success" role="alert">
      <h1 class="display-1">{t('page.welcome.contact')}</h1>
    </div>
  );
}

export default Contact;

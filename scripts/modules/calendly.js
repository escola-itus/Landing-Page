const calendly = document.querySelectorAll('.calendly');
calendly.forEach(element => element.addEventListener('click', () => {
  Calendly.initPopupWidget({
    url: 'https://calendly.com/itus_escola/aula-experimental?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3f9a15'}
  );
  return false;
}))
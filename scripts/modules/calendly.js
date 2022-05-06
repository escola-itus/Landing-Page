const calendly = document.querySelectorAll('.calendly');
calendly.forEach(element => element.addEventListener('click', () => {
  console.log(calendly)
  Calendly.initPopupWidget({
    url: 'https://calendly.com/davidsonmarra/itus?hide_event_type_details=1&hide_gdpr_banner=1&text_color=07224b&primary_color=269912'}
  );
  return false;
}))
const sucessMessage = document.getElementById("success-message");

const form = document.getElementById("contact-form");
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let hasErrors = false;

  const fields = [
    {
      input: document.getElementById("first-name"),
      error: document.getElementById("first-name-error"),
    },
    {
      input: document.getElementById("last-name"),
      error: document.getElementById("last-name-error"),
    },
    {
      input: document.getElementById("email"),
      error: document.getElementById("email-error"),
    },
    {
      input: document.getElementById("message"),
      error: document.getElementById("message-error"),
    },
    {
      input: document.getElementById("consent"),
      error: document.getElementById("consent-error"),
    }
  ];

    fields.forEach(({ input, error }) => {
      const isValid = input.checkValidity();

      if (!isValid) {
        hasErrors = true;
        input.setAttribute("aria-invalid", "true");
        error.setAttribute("aria-hidden", "false");
      } else {
        input.removeAttribute("aria-invalid");
        error.setAttribute("aria-hidden", "true");
      }
    });

    const radios = document.querySelectorAll('input[name="query-type"]');
    const radioError = document.getElementById("query-type-error");
    const isRadioChecked = Array.from(radios).some(radio => radio.checked);

    if (!isRadioChecked) {
      hasErrors = true;
      radios.forEach(radio => radio.setAttribute("aria-invalid", "true"));
      radioError.setAttribute("aria-hidden", "false");
    } else {
      radios.forEach(radio => radio.removeAttribute("aria-invalid"));
      radioError.setAttribute("aria-hidden", "true");
    }

    if (!hasErrors) {
      sucessMessage.style.display = "flex";
      form.reset();
    }
});
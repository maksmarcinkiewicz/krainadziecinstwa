import Confetti from "./Confetti";

const ContactForm = () => {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col gap-8"
    >
      <input
        type="hidden"
        name="access_key"
        value="e9f2c2bc-e972-4ad3-8851-83e08958117d"
      />

      <input
        type="text"
        name="name"
        placeholder="Imię i naziwsko"
        className="input input-bordered w-full "
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input input-bordered w-full "
        required
      />
      <textarea
        name="message"
        placeholder="Wiadomość"
        className="textarea textarea-bordered"
        required
      ></textarea>
      <input
        type="hidden"
        name="redirect"
        value="https://web3forms.com/success"
      />

      <Confetti type="submit" style="btn btn-outline" />
    </form>
  );
};
export default ContactForm;

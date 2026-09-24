import { ArrowRight, Mail, MapPin, Send, type LucideIcon } from "lucide-react";

type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const EMAIL = "abubakkarm620@gmail.com";

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
  },
];

const Contact = () => {
  return (
    <section className="lg:px-10">
      <div className="w-11/12 max-w-7xl mx-auto mt-16 pb-16">
        <div>
          <p className="text-violet-600 font-bold text-xl">Contact</p>

          <h1 className="font-bold text-4xl mt-3">Let's Work Together</h1>

          <p className="text-text-secondary text-sm leading-relaxed mt-3 max-w-xl">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email + Location cards */}
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-[#0D0C19] border border-border rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-violet-600/50 transition-all duration-300"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl border border-violet-600/30 bg-violet-600/10 flex items-center justify-center text-violet-500">
                <Icon size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-text-secondary text-xs mt-0.5 truncate">
                  {value}
                </p>
              </div>
            </div>
          ))}

          {/* Send Message card */}
          <a
            href={`mailto:${EMAIL}`}
            className="group relative overflow-hidden bg-linear-to-br from-violet-600/15 via-[#0D0C19] to-[#0D0C19] border border-violet-600/30 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-violet-600/70 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-600/30 border border-violet-600/40 px-4 py-2 text-sm font-semibold">
              <Send size={16} className="text-violet-400" />
              Send Message
            </span>

            <ArrowRight
              size={16}
              className="text-white transition-transform duration-300 group-hover:translate-x-1"
            />

            {/* Gradient underline */}
            <span className="pointer-events-none absolute bottom-2 left-6 right-6 h-px bg-gradient-to-r from-violet-600 via-violet-600/40 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

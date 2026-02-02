import { Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Header & Description */}
          <div>
            <h2 className="heading-brutal text-3xl md:text-5xl mb-6">
              LET'S BUILD
              <br />
              <span className="text-primary">SOMETHING</span>
              <br />
              REAL
            </h2>
            
            <div className="space-y-4 text-lg">
              <p>
                Have an idea, project, or opportunity?
              </p>
              <p className="text-muted-foreground">
                If it involves AI, systems, or shipping fast—I'm interested.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="mt-12 flex gap-2">
              <div className="w-12 h-12 bg-primary border-[3px] border-foreground" />
              <div className="w-12 h-12 bg-foreground" />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="card-brutal p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold tracking-wide mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-brutal w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold tracking-wide mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-brutal w-full"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold tracking-wide mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-brutal w-full resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-brutal w-full bg-foreground text-background py-4 text-sm tracking-wide flex items-center justify-center gap-3"
              >
                SEND MESSAGE
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

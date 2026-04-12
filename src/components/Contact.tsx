import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-2xl font-black mb-2">MESSAGE SENT!</h3>
                <p className="text-muted-foreground">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
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
                    maxLength={100}
                    className="input-brutal w-full"
                    placeholder="Your name"
                    disabled={isSubmitting}
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
                    maxLength={255}
                    className="input-brutal w-full"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
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
                    maxLength={1000}
                    className="input-brutal w-full resize-none"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-brutal w-full bg-foreground text-background py-4 text-sm tracking-wide flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      SENDING...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

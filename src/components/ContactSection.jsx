import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

  const {toast} = useToast()
  const [isSubmitting,setisSubmitting] = useState(false)
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setisSubmitting(true)
    const data = {
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      message:document.getElementById('message').value


    }
    const res = await fetch("http://localhost:3000/send-email",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data),
    })
    const result = await res.json();
    console.log(result);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thankyou for YOur message. i will get back to you soon.",
      });
      setisSubmitting(false)
    }, 1500);
    

  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sabikkp2004@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:8590625302"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    8590625302
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kerala,India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4>Connected With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/muhammed-sabik-kp-524bb1360/">
                  <Linkedin />
                </a>
                <a href="">
                  <Twitter />
                </a>
                <a href="">
                  <Instagram />
                </a>
                <a href="">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs" >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form action="/send-email" method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm  font-medium mb-2">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machao"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm  font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm  font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello i like to talk about ..."
                />
              </div>
              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                
              )} disabled={isSubmitting} >{isSubmitting ? "Sending..": "Send Message"}
              <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

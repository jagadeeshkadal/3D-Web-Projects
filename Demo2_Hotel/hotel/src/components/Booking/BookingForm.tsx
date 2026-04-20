import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Calendar, Users, MapPin, CreditCard, Send } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  destination: z.string().min(1, "Please select a destination"),
  date: z.string().min(1, "Please select a date"),
  guests: z.string().refine(val => parseInt(val) > 0, "At least 1 guest required"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: "1",
    }
  });

  const handleRazorpayPayment = (data: BookingFormData) => {
    const options = {
      key: "rzp_test_YOUR_KEY",
      amount: 500000,
      currency: "INR",
      name: "The Travel Company",
      description: `Luxury Stay in ${data.destination}`,
      handler: function (response: any) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: data.name,
        email: data.email,
      },
      theme: {
        color: "#1FB4B4",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const onSubmit = async (data: BookingFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    handleRazorpayPayment(data);
  };

  const inputClasses = "w-full bg-white/[0.03] border border-white/10 px-5 py-4 text-white placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:bg-white/[0.05] transition-all duration-300 font-sans text-sm";
  const labelClasses = "text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block font-sans";

  return (
    <section id="booking" className="py-28 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-sans">
            Begin Your Journey
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight text-white font-light mb-4">
            Reserve Your Stay
          </h2>
          <p className="text-white/30 font-sans text-sm tracking-wide">
            Your sanctuary is waiting.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className={labelClasses}>Full Name</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                <input
                  {...register("name")}
                  className={cn(inputClasses, "pl-12", errors.name && "border-red-500/40")}
                  placeholder="Your name"
                />
              </div>
              {errors.name && <p className="text-red-400/80 text-[11px] mt-1.5 font-sans">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={labelClasses}>Email Address</label>
              <div className="relative">
                <Send className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                <input
                  {...register("email")}
                  className={cn(inputClasses, "pl-12", errors.email && "border-red-500/40")}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-400/80 text-[11px] mt-1.5 font-sans">{errors.email.message}</p>}
            </div>

            {/* Destination */}
            <div>
              <label className={labelClasses}>Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                <select
                  {...register("destination")}
                  className={cn(inputClasses, "pl-12 appearance-none cursor-pointer")}
                >
                  <option value="" className="bg-neutral-900">Select destination</option>
                  <option value="Maldives" className="bg-neutral-900">Maldives Private Island</option>
                  <option value="SwissAlps" className="bg-neutral-900">Swiss Alps Chalet</option>
                  <option value="Tuscany" className="bg-neutral-900">Tuscany Villa</option>
                </select>
              </div>
              {errors.destination && <p className="text-red-400/80 text-[11px] mt-1.5 font-sans">{errors.destination.message}</p>}
            </div>

            {/* Date + Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/15" />
                  <input
                    type="date"
                    {...register("date")}
                    className={cn(inputClasses, "pl-12")}
                  />
                </div>
              </div>
              <div>
                <label className={labelClasses}>Guests</label>
                <input
                  type="number"
                  {...register("guests")}
                  className={inputClasses}
                  min="1"
                  max="20"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-accent text-white text-xs uppercase tracking-[0.3em] font-sans
                       hover:bg-accent/85 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CreditCard className="w-4 h-4" />
            {isSubmitting ? "Processing..." : "Secure My Reservation"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

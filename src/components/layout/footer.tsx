import Link from "next/link";
import { MapPin, Phone, Mail, Heart, Star, Sparkles, ArrowRight, Cloud, Sun } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#FFFDF9] text-slate-700 pt-32 pb-8 relative overflow-hidden border-t border-slate-100">
      
      {/* Polka Dot Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

      {/* Decorative top wave/shape with a soft gradient */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden line-clamp-1 text-white select-none pointer-events-none transform -translate-y-1/2">
        <svg className="w-full h-16 text-[#FFFDF9]" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: "rotate(180deg)" }}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.58V0Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Large Floating Doodles */}
      <div className="absolute top-10 right-10 text-brand-yellow/30 hidden lg:block rotate-12">
        <Sun className="w-16 h-16" strokeWidth={1} />
      </div>
      <div className="absolute top-40 left-10 text-brand-sky/30 hidden lg:block -rotate-12">
        <Cloud className="w-20 h-20" strokeWidth={1} />
      </div>
      <div className="absolute bottom-20 right-20 text-brand-peach/30 hidden lg:block rotate-45">
        <Star className="w-10 h-10 fill-current" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Top CTA Bar - Overlapping & Highly Styled */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-brand-peach/10 border-2 border-brand-peach/10 -mt-20 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          
          {/* Background decorative shapes inside card */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-yellow/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-sky/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-peach/10 text-brand-peach font-semibold text-xs mb-3">
              <Sparkles className="w-3 h-3 fill-current" />
              Limited Seats Available
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-2">Ready to start the journey?</h3>
            <p className="text-slate-600 max-w-xl">We are now enrolling for the 2026-27 session. Give your child the perfect start.</p>
          </div>
          
          <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10 whitespace-nowrap">
            Join the Family
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/logo/logo.png" 
                alt="Daya Little Step Public School Logo" 
                width={96}
                height={96}
                className="h-24 w-auto object-contain bg-white rounded-2xl p-2 shadow-md border border-slate-50"
              />
            </div>
            <div>
              <h4 className="text-xl font-heading font-bold text-slate-800">Daya Little Step</h4>
              <p className="text-xs text-brand-peach font-bold tracking-wider">PUBLIC SCHOOL</p>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              “Small Steps Towards a Bright Future”<br/>
              A premium early education center focusing on holistic child development through play, learning, and growth.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <Link href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-brand-sky hover:text-white hover:border-brand-sky hover:-translate-y-1 transition-all group shadow-sm">
                <svg className="w-4 h-4 fill-current text-slate-500 group-hover:text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center hover:bg-brand-peach hover:text-white hover:border-brand-peach hover:-translate-y-1 transition-all group shadow-sm">
                <svg className="w-4 h-4 fill-current text-slate-500 group-hover:text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </Link>
            </div>
          </div>

          {/* Detailed Links (5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-6">
              <h5 className="font-heading font-bold text-slate-800 text-lg relative inline-block">
                Explore
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-yellow"></span>
              </h5>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-peach transition-colors flex items-center gap-1">
                      Our Story
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">Learn about our heart</span>
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-sky transition-colors flex items-center gap-1">
                      Programs
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">For every age group</span>
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-yellow transition-colors flex items-center gap-1">
                      Admissions
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">Join the family</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <h5 className="font-heading font-bold text-slate-800 text-lg relative inline-block">
                More
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-brand-sky"></span>
              </h5>
              <ul className="space-y-4">
                <li>
                  <Link href="/gallery" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-mint transition-colors flex items-center gap-1">
                      Gallery
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">See the fun in action</span>
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-peach transition-colors flex items-center gap-1">
                      Activities
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">What we do all day</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group flex flex-col">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-sky transition-colors flex items-center gap-1">
                      Contact
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">Get in touch with us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card (3 Columns) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-50 shadow-lg shadow-slate-100/50 space-y-4 relative group hover:border-brand-peach/10 transition-colors">
              <div className="absolute top-4 right-4 text-brand-peach/20">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h5 className="font-heading font-bold text-slate-800 text-lg">Drop By</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-sky/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-sky" />
                  </div>
                  <span className="text-slate-600 leading-relaxed">10 Shankar Puri, Sector 9, Ghaziabad</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-peach/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-brand-peach" />
                  </div>
                  <span className="text-slate-600">7065200233</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-mint/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-brand-mint" />
                  </div>
                  <span className="text-slate-600 truncate">info@dayaschool.edu.in</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Daya Little Step Public School.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-brand-sky transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-sky transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1 text-slate-600 font-medium">
              Made with <Heart className="w-3 h-3 text-brand-peach fill-current" /> for kids
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

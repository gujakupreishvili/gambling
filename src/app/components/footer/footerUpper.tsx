import React from "react";
import FooterSection from "./footerSection";

const games = ["Slots", "Live Dealers", "Table Games", "Video Poker", "Crash"];
const promotions = [
  "Welcome Bonus",
  "Cash Back Deals",
  "Weekly Cashback",
  "Tournaments",
  "VIP Club",
];
const banking = [
  "Deposit Options",
  "Withdraw Options",
  "Refund Policy",
  "Payment Security",
  "AML Policy",
];
const casino = [
  "Terms & Conditions",
  "Privacy Policy",
  "Bonus Terms",
  "Affiliate Program",
  "About CASINO",
];
const customerCare = [
  "Live Chat",
  "Phone Support",
  "Email Support",
  "Help Desk",
  "Responsible Gaming",
];

export default function FooterUpper() {
  return (
    <div className="upper-part py-12">
      <div className="flex flex-wrap gap-6 lg:gap-8 max-sm:hidden">
        <section className="flex-1 min-w-[280px] lg:min-w-[200px]">
          <div className="w-[75px] h-[40px] rounded-[5px] bg-[#253241] mb-4"></div>
          <p className="w-full max-w-[250px] text-[#8898B0] text-[14px] leading-relaxed">
            Strike it rich at CASINO! Experience heart-pounding action with
            massive jackpots, fast payouts, and VIP treatment that keeps
            champions coming back. Join thousands of winners today - your
            fortune awaits!
          </p>
        </section>

        <FooterSection title="Games" items={games} />
        <FooterSection title="Promotions" items={promotions} />
        <FooterSection title="Banking" items={banking} />
        <FooterSection title="Casino" items={casino} />
        <FooterSection title="Customer Care" items={customerCare} />
      </div>

      {/* Mobile version */}
      <div className="sm:hidden flex flex-col gap-8">
        <section className="w-full">
          <div className="w-[75px] h-[40px] rounded-[5px] bg-[#253241] mb-4"></div>
          <p className="w-full text-[#8898B0] text-[14px] leading-relaxed">
            Strike it rich at CASINO! Experience heart-pounding action with
            massive jackpots, fast payouts, and VIP treatment that keeps
            champions coming back. Join thousands of winners today - your
            fortune awaits!
          </p>
        </section>

        <div className="border-t border-[#282F48] w-full"></div>

        <div className="flex gap-8">
          <FooterSection title="Games" items={games} />
          <FooterSection title="Promotions" items={promotions} />
        </div>

        <div className="flex gap-8">
          <FooterSection title="Banking" items={banking} />
          <FooterSection title="Casino" items={casino} />
        </div>

        <div className="flex gap-8">
          <FooterSection title="Customer Care" items={customerCare} />

          <section className="flex flex-col gap-4 flex-1 items-center justify-center">
            <div className="w-[135px] h-[75px] bg-amber-50 rounded-[5px]"></div>
            <div className="w-[135px] h-[75px] bg-amber-50 rounded-[5px]"></div>
          </section>
        </div>
      </div>

      <div className="border-t border-[#282F48] mt-12 pt-6 w-full"></div>
    </div>
  );
}

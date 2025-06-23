import React from "react";
import FooterIconsRow from "./footerIconRow";

export default function FooterLower() {
  return (
    <div className="lower-part w-full">
      <FooterIconsRow />

      <div className="border-t border-[#282F48] mt-12 bg-gray-600 h-[1px] w-full mb-7"></div>

      <div className="lower-upper-part flex flex-col sm:flex-row justify-between items-center w-full gap-4">
        <div className="flex-1 hidden sm:block"></div>

        <p className="text-[#66788C] text-center">
          © <span className="text-[#FFFFFF]">2025 CASINO.COM </span>. All Rights
          Reserved.
        </p>

        <div className="images-div flex items-center justify-center sm:justify-end gap-3 flex-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[35px] h-[35px] bg-amber-500"></div>
          ))}
        </div>
      </div>

      <div className="llower-low-part w-full mt-5">
        <p className="text-[#66788C] w-full text-center">
          GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
        </p>
        <p className="text-[#66788C] mt-5 w-full text-center text-[12px] max-sm:text-[11px]">
          CASINO casino is operated by CASINO B.V., ensuring a secure and fair
          gaming environment for all players. We strictly adhere to all
          regulatory requirements to maintain transparency and fairness. Our
          commitment to integrity and ethical practices is at the core of our
          business. We employ advanced security measures, including SSL
          encryption and robust firewall systems, to protect your personal and
          financial information. Promoting responsible gaming is a priority at
          CASINO Casino. We provide tools and resources to help you gamble
          responsibly. We offer a variety of secure payment methods and ensure
          seamless transactions. All payment processes are encrypted and
          compliant with industry standards. Our customer support team is
          available 24/7 to assist you with any questions or issues you may
          have. Contact us via Live Chat, Email, or Phone for prompt and
          professional assistance.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import bitcoinCashIcon from "../../../../public/assets/footerIcon/bitcoin_cash_icon.svg"
import bitcoinIcon from "../../../../public/assets/footerIcon/bitcoin_icon.svg"
import ethereumIcon from "../../../../public/assets/footerIcon/etherium_icon.svg"
import litecoinIcon from "../../../../public/assets/footerIcon/litecoin_icon.svg"
import tetherIcon from "../../../../public/assets/footerIcon/tether_icon.svg"
import visaIcon from "../../../../public/assets/footerIcon/visaIcon.svg"
import masterIcon from "../../../../public/assets/footerIcon/mastercardIcon.svg"
import usdcIcon from "../../../../public/assets/footerIcon/usdc_icon.svg"
import dogeCoin from "../../../../public/assets/footerIcon/dogecoin_icon.svg"
import rippleIcon from "../../../../public/assets/footerIcon/ripple_icon.svg"
import ovalIcon from "../../../../public/assets/footerIcon/ovalIcon.svg"
import americanExpressIcon from "../../../../public/assets/footerIcon/americanExpressICon.svg"
import discoverIcon from "../../../../public/assets/footerIcon/discover.svg"
import Image from "next/image";

export default function FooterIconsRow() {
  return (
    <div className="icons-div flex items-center justify-center gap-3 flex-wrap">
      <div className="first-five-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        <Image  src={bitcoinIcon} alt="litecoinIcon"/>
        <Image  src={ethereumIcon} alt="etherium"/>
        <Image  src={tetherIcon} alt="litecoinIcon"/>
        <Image  src={bitcoinCashIcon} alt="bitcoin"/>
        <Image  src={litecoinIcon} alt="litecoinIcon"/>
      </div>
      <div className="second-five-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        <Image  src={usdcIcon} alt="usdcIcon"/>
        <Image  src={dogeCoin} alt="dogeCoin"/>
        <Image  src={rippleIcon} alt="rippleIcon"/>
        <Image  src={visaIcon} alt="visaIcon"/>
        <Image  src={masterIcon} alt="masterIcon"/>
      </div>
      <div className="third-three-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        <Image src={americanExpressIcon} alt="americanExpressIcon" />
        <Image src={ovalIcon} alt="oval" />
        <Image src={discoverIcon} alt="discoverIcon" />
      </div>
    </div>
  );
}

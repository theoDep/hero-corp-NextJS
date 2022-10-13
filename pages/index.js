import Image from "next/future/image";
import Link from "next/link";
import Logo from "../public/images/hero-corporation-logo-mobile.png";
import PlayElement from "../public/images/play-element.png";

function Home() {
  return (
    <div className="main-homepage">
      <div className="banner">
        <div className="banner-presentation">Ready for a new adventure ?</div>
        <div className="edition-number-container">
          <div className="edition-number">
            <h2>#01</h2>May 2022
          </div>
        </div>
      </div>
      <div className="flex-column">
        <Image
          src={Logo}
          alt="hero-corporation-logo"
          className="hero-corporation-logo"
        />
        <Link href="/selecthero">
          <Image src={PlayElement} alt="play img" className="play" />
        </Link>
      </div>
      <div className="banner-footer">
        <div className="banner-teaser">
          FT. Aquaman, Odin, Goku and many others ...
        </div>
      </div>
    </div>
  );
}

export default Home;

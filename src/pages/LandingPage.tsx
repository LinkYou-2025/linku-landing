import logo from "../assets/landing/logo.svg";
import phone from "../assets/landing/phone.svg";

import playIcon from "../assets/landing/play-icon.png";

import iconAI from "../assets/landing/icon-ai.svg";
import iconFolder from "../assets/landing/icon-folder.svg";
import iconLink from "../assets/landing/icon-link.svg";

import FeatureChip from "../components/FeatureChip";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex justify-center">
      <div className="relative w-full max-w-[390px] overflow-hidden">

        {/* Header */}

        <section className="pt-16 flex flex-col items-center">

          <img
            src={logo}
            className="w-[78px]"
            alt="logo"
          />

          <p className="mt-2 text-[#87898F] text-[14px]">
            Link U, Think You
          </p>

          <h1 className="mt-8 text-center text-[28px] font-bold leading-[38px] text-[#000208]">
            공유받은 폴더를
            <br />
            <span className="bg-gradient-to-r from-[#2C6FFF] to-[#C800FF] bg-clip-text text-transparent">
              링큐
            </span>
            에서 열어보세요
          </h1>

        </section>

        {/* Hero */}

        <section className="relative mt-10">

          <img
            src={phone}
            className="w-full"
            alt="phone"
          />

          <FeatureChip
            className="absolute left-[-18px] top-[95px]"
            icon={<img src={iconLink} className="w-6" />}
            label="링크 저장"
          />

          <FeatureChip
            className="absolute right-[-25px] top-[190px]"
            icon={<img src={iconFolder} className="w-6" />}
            label="공유 폴더"
          />

          <FeatureChip
            className="absolute left-[28px] bottom-[110px]"
            icon={<img src={iconAI} className="w-6" />}
            label="AI 요약"
          />
        </section>

        {/* CTA */}

        <section className="px-8 mt-4">

          <button
            className="
            w-full
            h-[54px]
            rounded-2xl
            flex
            items-center
            justify-center
            gap-3
            text-white
            font-bold
            bg-gradient-to-r
            from-[#2C6FFF]
            to-[#C800FF]
          "
          >
            <img src={playIcon} className="w-6" />

            Google Play에서 설치
          </button>

          <button
            className="
            mt-3
            w-full
            h-[54px]
            rounded-2xl
            border
            border-[#D7E2FF]
            text-[18px]
            font-bold
            bg-white
          "
          >
            <span className="bg-gradient-to-r from-[#2C6FFF] to-[#C800FF] bg-clip-text text-transparent">
              링큐 앱 열기 →
            </span>
          </button>

          <p className="mt-8 text-center text-[13px] text-[#71757B]">
            무료 설치 · Android 8.0 이상
          </p>

        </section>

      </div>
    </main>
  );
}
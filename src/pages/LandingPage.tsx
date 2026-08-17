import logo from "../assets/landing/logo.svg";
import phone from "../assets/landing/phone.svg";

import playIcon from "../assets/landing/play-icon.png";

import iconAI from "../assets/landing/icon-ai.svg";
import iconFolder from "../assets/landing/icon-folder.svg";
import iconLink from "../assets/landing/icon-link.svg";

import FeatureChip from "../components/FeatureChip";

// TODO: 앱 출시 후 실제 URL로 변경
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.linku";

const APP_LINK_BASE =
  "https://dev.linkudeveloper.org/open";

export default function LandingPage() {
  // 공유 링크 URL(/open?token=~~)의 query parameter를 읽습니다.
  // 현재는 정상 수신 여부 확인을 위해 console.log만 출력하며,
  // 추후 딥링크 연동 시 해당 값을 앱 실행 및 설치 후 복귀 로직에 사용합니다.
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  console.log("token:", token);

  // TODO: 앱 출시 후 실제 Play Store URL로 변경
  const handlePlayStore = () => {
    window.location.href = PLAY_STORE_URL;
  };

  // TODO: App Link 확정 후 APP_LINK_BASE만 변경하면 됩니다.
  const handleOpenApp = () => {
    if (!token) return;

    window.open(
      `${APP_LINK_BASE}?token=${encodeURIComponent(token)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-white flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[390px]">

        {/* Header */}
        <section className="pt-[63px] flex flex-col items-center">

          <img
            src={logo}
            alt="logo"
            className="w-[70px]"
          />

          <p className="mt-[10px] text-[13px] text-[#87898F]">
            Link U, Think You
          </p>

          <h1
            className="
              mt-[4px]
              text-center
              text-[26px]
              font-bold
              leading-[35px]
              tracking-[-0.65px]
              text-[#000208]
            "
          >
            공유받은 폴더를
            <br />
            <span className="bg-gradient-to-r from-[#2C6FFF] to-[#C800FF] bg-clip-text text-transparent">
              링큐
            </span>
            에서 열어보세요
          </h1>

        </section>

        {/* Hero */}
        <section className="mt-[35px] flex justify-center">

          <div className="relative w-[310px]">

            <img
              src={phone}
              alt="phone"
              className="w-full block"
            />

            {/* 링크 저장 */}
            <FeatureChip
              className="absolute left-[-44px] top-[150px]"
              icon={<img src={iconLink} className="w-full h-full" />}
              label="링크 저장"
            />

            {/* 공유 폴더 */}
            <FeatureChip
              className="absolute right-[-22px] top-[250px]"
              icon={<img src={iconFolder} className="w-full h-full" />}
              label="공유 폴더"
            />

            {/* AI 요약 */}
            <FeatureChip
              className="absolute left-[-4px] bottom-[70px]"
              icon={<img src={iconAI} className="w-full h-full" />}
              label="AI 요약"
            />

          </div>

        </section>

        {/* CTA */}
        <section className="mt-[40px] px-[28px]">

          <button
            onClick={handlePlayStore}
            className="
              w-full
              h-[52px]
              rounded-[18px]
              flex
              items-center
              justify-center
              gap-2
              bg-gradient-to-r
              from-[#2C6FFF]
              to-[#C800FF]
              text-white
              text-[14px]
              font-bold
            "
          >
            <img
              src={playIcon}
              alt=""
              className="w-5 h-5"
            />

            Google Play에서 설치
          </button>

          <button
            onClick={handleOpenApp}
            className="
              mt-[8px]
              w-full
              h-[46px]
              rounded-[15px]
              border
              border-[#D4E1FF]
              bg-[#F8FAFF]
              text-[14px]
              font-bold
              shadow-[0_1.45px_2.9px_rgba(79,123,255,0.06)]
            "
          >
            <span className="bg-gradient-to-r from-[#2C6FFF] to-[#C800FF] bg-clip-text text-transparent">
              링큐 앱 열기 →
            </span>
          </button>

          <p className="mt-[20px] pb-[72px] text-center text-[12px] text-[#71757B]">
            무료 설치 · Android 8.0 이상
          </p>

        </section>

      </div>
    </main>
  );
}
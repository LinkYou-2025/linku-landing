type BrandHeaderProps = {
  logoSrc: string;
};

export default function BrandHeader({ logoSrc }: BrandHeaderProps) {
  return (
    <header className="flex flex-col items-center pt-16">
      <img
        src={logoSrc}
        alt="링큐 로고"
        className="h-14 w-auto"
      />

      <p className="mt-3 text-[13px] text-[#87898F] font-normal">
        Link U, Think You
      </p>
    </header>
  );
}

export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none fixed left-[-150px] top-[120px] z-0 h-[400px] w-[400px] rounded-full bg-[#C8A96B]/10 blur-[120px]" />

      <div className="pointer-events-none fixed bottom-[-100px] right-[-120px] z-0 h-[350px] w-[350px] rounded-full bg-[#ffffff]/5 blur-[120px]" />

      <div className="pointer-events-none fixed left-[40%] top-[60%] z-0 h-[250px] w-[250px] rounded-full bg-[#C8A96B]/5 blur-[100px]" />
    </>
  );
}
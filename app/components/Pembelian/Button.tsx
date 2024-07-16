export default function Button() {
  return (
    <div>
      <div className="flex">
        <button className="bg-[#FF4500] py-[6px] px-[12px] mx-1 my-2 w-full text-white rounded-3xl">
          <p className="text-[16px]">Lihat Benefit</p>
        </button>
        <button className="bg-[#1A1ADB] py-[6px] px-[12px] mx-1 my-2 w-full text-white rounded-3xl">
          <p className="text-[16px]">Beli</p>
        </button>
      </div>
    </div>
  );
}

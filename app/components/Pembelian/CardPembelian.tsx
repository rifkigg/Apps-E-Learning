import Button from "./Button";

export default function CardPembelian() {
  return (
    <div className="mt-[90px]">
      <div className="bg-[#ebe1e1] w-[90%] mx-auto p-4 rounded">
        <div className="flex items-center">
          <div>
            <img src="https://via.placeholder.com/100" alt="" />
          </div>
          <div>
            <p className="text-[#FF4500] font-bold">Belajar Mandiri</p>
            <p className="font-bold">Masuk Apoteker</p>
            <p className="line-through">Rp 500.000</p>
            <h1 className="text-[24px] text-[#FF4500] font-bold">Rp 150.000</h1>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

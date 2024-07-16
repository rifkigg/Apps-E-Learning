import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import TabsBook from "./TabsBook";

interface Soal {
  id: number;
  pertanyaan: string;
  jawaban: string;
}

interface Buku {
  id: number;
  buku: string;
  soal: Soal[];
  video_pembahasan?: string;
}

interface ProgramStudi {
  id: number;
  nama: string;
  buku: Buku[];
}

interface Jurusan {
  id: number;
  nama: string;
  program_studi: ProgramStudi[];
}

const DisplayBook = async () => {
  const response = await fetch(`${process.env.API_LINK}/jurusan/`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const jurusan: Jurusan[] = await response.json();
  console.log(jurusan);

  // Memilih program studi pertama dari jurusan pertama
  const programStudiPertama =
    jurusan.length > 0 && jurusan[0].program_studi.length > 0
      ? jurusan[0].program_studi[0]
      : null;

  return (
    <div className="bg-white h-auto w-[95%] mx-auto rounded-3xl p-5">
      <Link href="/filter">
        <div className="flex justify-between items-center">
          <section>
            <p className="text-xl">Program Studi</p>
            {programStudiPertama ? (
              <p>{programStudiPertama.nama}</p>
            ) : (
              <p>Program studi tidak ditemukan</p>
            )}
          </section>
          <section>
            <FaAngleRight />
          </section>
        </div>
      </Link>
      <TabsBook />
    </div>
  );
};

export default DisplayBook;

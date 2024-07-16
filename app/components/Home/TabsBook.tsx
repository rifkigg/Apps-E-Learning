"use client";
import React, { useState, useEffect } from "react";
import { FaBook } from "react-icons/fa";

interface Soal {
  id: number;
  pertanyaan: string;
  jawaban: string;
}
interface Bab {
  id: number;
  nama: string;
  soal: Soal[];
  video_pembahasan?: string;
}

interface Buku {
  id: number;
  buku: string;
  bab: Bab[];
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

const TabsBook: React.FC = () => {
  const [jurusanList, setJurusanList] = useState<Jurusan[]>([]);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [bookDescriptions, setBookDescriptions] = useState<{
    [key: number]: JSX.Element;
  }>({});

  // Fetch jurusan data
  useEffect(() => {
    const fetchJurusan = async () => {
      try {
        const response = await fetch("http://localhost:3001/jurusan/");
        if (!response.ok) {
          throw new Error("Failed to fetch jurusan");
        }
        const data: Jurusan[] = await response.json();
        setJurusanList(data);
      } catch (error) {
        console.error("Error fetching jurusan:", error);
      }
    };

    fetchJurusan();
  }, []);

  // Set initial active tab
  useEffect(() => {
    if (jurusanList.length > 0 && activeTab === null) {
      const selectedJurusan = jurusanList.find((jurusan) =>
        jurusan.program_studi.some(
          (programStudi) => programStudi.nama === "PROFESI APOTEKER"
        )
      );

      if (selectedJurusan) {
        const selectedProgramStudi = selectedJurusan.program_studi.find(
          (programStudi) => programStudi.nama === "PROFESI APOTEKER"
        );

        if (selectedProgramStudi) {
          setActiveTab(selectedProgramStudi.buku[0]?.id ?? null);

          const descriptions: { [key: number]: JSX.Element } = {};
          selectedProgramStudi.buku.forEach((buku) => {
            descriptions[buku.id] = (
              <div className="grid grid-cols-2">
                {buku.bab.map((bab) => {
                  return (
                    <div
                      key={bab.id}
                      className="my-5 mx-auto flex flex-col items-center"
                    >
                      <FaBook className="inline-block text-5xl text-center mx-auto mb-5 text-gray-300" />
                      <p className="text-center">{bab.nama}</p>
                    </div>
                  );
                })}
              </div>
            );
          });
          setBookDescriptions(descriptions);
        }
      }
    }
  }, [jurusanList, activeTab]);

  useEffect(() => {
    const tabs = document.querySelectorAll(".buku-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        setTimeout(() => {
          (event.target as HTMLElement).scrollIntoView({
            behavior: "smooth",
            inline: "start",
          });
        }, 100);
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => {});
      });
    };
  }, [jurusanList, activeTab]);

  const handleTabClick = (bukuId: number) => {
    setActiveTab(bukuId);
  };

  const selectedProgramStudi = jurusanList
    .flatMap((jurusan) => jurusan.program_studi)
    .find((programStudi) => programStudi.nama === "PROFESI APOTEKER");

  return (
    <>
      <section className="border-b-2 border-b-gray-300 flex flex-row gap-3 overflow-x-auto mx-auto whitespace-nowrap hide-scrollbar">
        {selectedProgramStudi &&
          selectedProgramStudi.buku.map((buku) => (
            <div>
              <p
                key={buku.id}
                className={`buku-tab px-4 py-2 cursor-pointer w-full ${
                  activeTab === buku.id
                    ? "border-b-2 border-green-600 text-green-800"
                    : ""
                }`}
                onClick={() => handleTabClick(buku.id)}
              >
                {buku.buku}
              </p>
            </div>
          ))}
      </section>
      {activeTab && (
        <div className="my-4 p-4 rounded-lg overflow-y-auto h-[300px] ">
          {bookDescriptions[activeTab]}
        </div>
      )}
    </>
  );
};

export default TabsBook;

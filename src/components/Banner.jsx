import React from "react";
import bg from "../assets/bg.jpeg";

export const Banner = () => {
  return (
    <div className="relative w-full aspect-video">
      <img src={bg} alt="Banner" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-8">
        <div className=" bg-opacity-50 p-6 rounded-lg text-white flex gap-8 max-w-5xl w-full">
          {/* Nội dung bên trái */}
          <div className="max-w-md">
            <p className="text-white bg-gradient-to-r from-red-500 to-white text-md py-2 px-3 w-fit rounded-lg mb-6">
              TV Show
            </p>
            <h1 className="text-3xl font-bold mb-6">Đi đến nơi có gió</h1>
            <p className="mt-2 mb-6">
              Đi Đến Nơi Có Gió - Windy Place là hành trình rời bỏ thành phố
              đông đúc, trở về quê hương tìm cách cân bằng cuộc sống của Hứa Đậu
              Hồng (Lưu Diệc Phi). Sau cái chết của người bạn thân, cuộc sống và
              công việc của Đậu Hồng rơi vào bế tắc. Để vực dậy tinh thần, cô
              đến thôn Vân Miêu tại Đại Lý nghỉ ngơi.
            </p>

            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition">
                Chi tiết
              </button>
              <button className="bg-white text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg transition">
                Xem phim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

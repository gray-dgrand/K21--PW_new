// 4) Bài tập khai báo chiều cao và tính cân nặng theo công thức đã cho

// Chiều cao (cm) - bài yêu cầu chiều cao > 100
const heightCm = 170;

// "Số lẻ" ở ví dụ được hiểu theo phần còn lại sau khi trừ 100 (tức height % 100)
const soLe = heightCm % 100;

// Công thức theo đề:
// Cân nặng lý tưởng = soLe * 9 / 10
// Mức cân tối thiểu = soLe * 8 / 10
const canNangLyTuong = (soLe * 9) / 10;
const canNangToiThieu = (soLe * 8) / 10;

console.log(
  "Cân nặng lý tưởng: " +
    canNangLyTuong +
    " kg, Cân nặng tối thiểu: " +
    canNangToiThieu +
    " kg"
);


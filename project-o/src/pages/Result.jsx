import { useParams } from 'react-router-dom';

export default function Result() {
  const data = {
    1: 'Lập trình Web (Web Developer)',
    2: 'Lập trình Front-end (Front-End Developer)',
    3: 'Quản trị an ninh/bảo mật (Security)',
    4: 'Kiểm định chất lượng (QA/QC/Tester)',
    5: 'Khoa học dữ liệu (Data Scientist)',
    6: 'Phân tích dữ liệu (Data Analyst)',
    7: 'Lập trình Game (Game Developer)',
    8: 'Phát triển phần mềm (Software Developer)',
    9: 'Kỹ sư mạng (Cyber Engineer)',
    10: 'Quản trị dữ liệu (Data Management Specialist)',
    11: 'Quản trị hệ thống (System Management)',
    12: 'Phân tích nghiệp vụ (Business Analysis)',
    13: 'Trí tuệ nhân tạo (AI)',
    14: 'Thiết kế đồ họa/giao diện (UI/UX)',
  };

  let { id } = useParams();
  console.log('Result');
  console.log(id);
  var career = data[id];
  console.log(career);

  return (
    <div class="bg-white">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://www.careerlines.in/assets/img/logo.png"
                alt=""
              />
            </a>
          </div>

          <div class="hidden lg:flex lg:gap-x-12">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Project O
            </a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Chi tiết <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div class="mx-auto max-w-2xl sm:py-20 lg:py-20 py-20">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div class="relative px-3 py-1 text-lg leading-6 text-gray-600 hover:ring-gray-900/20">
              <a>Bạn được đánh giá là phù hợp với</a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {career}
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 italic">
              *Lưu ý: Kết quả này chỉ mang tính tham khảo. Để tìm hiểu rõ hơn về
              ngành {career} này, bạn có thể tìm kiếm kỹ hơn trên Google.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Về trang chủ
              </a>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}

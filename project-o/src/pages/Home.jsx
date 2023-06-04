export default function Home() {
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
            <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Ôn luyện kiến thức trắc nghiệm.{' '}
              <a
                target="_blank"
                href="https://fb.com/sitdepk"
                class="font-semibold text-indigo-600"
              >
                <span class="absolute inset-0" aria-hidden="true"></span>Tải
                SITDE PK<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Chào mừng bạn đến với Project O
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Đây là trang web hỗ trợ lựa chọn hướng đi chuyên ngành cụ thể dành
              cho sinh viên thuộc khối ngành Công nghệ như Công nghệ thông tin
              (IT), Khoa học máy tính (CS) hay Hệ thống thông tin quản lý (MIS)
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/questions"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Bắt đầu
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

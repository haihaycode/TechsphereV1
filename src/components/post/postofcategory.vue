<template>
  <div class="w1160">
    <div class="grid grid-cols-1 md:grid-cols-2 my-5 gap-7">
      <div class="col-span-1">
        <div>
          <img
            class="rounded-lg w-full"
            src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
            alt="image loading...."
          />
          <h1 class="font-bold" style="font-size: x-large">
            Sếp AMD thừa nhận: PlayStation 4 đã cứu AMD khỏi bờ vực phá sản
          </h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-b border-gray-200">
          <div>
            <img
              class="rounded-lg w-full"
              src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
              alt="image loading...."
            />
            <h1 class="font-bold" style="font-size: x-large">
              Sếp AMD thừa nhận: PlayStation 4 đã cứu AMD khỏi bờ vực phá sản
            </h1>
          </div>
          <div>
            <img
              class="rounded-lg w-full"
              src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
              alt="image loading...."
            />
            <h1 class="font-bold" style="font-size: x-large">
              Sếp AMD thừa nhận: PlayStation 4 đã cứu AMD khỏi bờ vực phá sản
            </h1>
          </div>
        </div>

      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="col-span-1">
          <div>
            <img
              class="rounded-lg"
              src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
              alt="image loading...."
            />
            <h1 class="font-bold my-3">
              Bất ngờ: Dat Bike "flex" cha đẻ ChatGPT Sam Altman chính là một
              trong những người đầu tiên lái thử xe máy điện Việt từ 6 năm trước
            </h1>
          </div>

          <ul class="line">
            <li>
              <div class="grid grid-cols-2">
                <img
                  class="rounded-lg"
                  src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
                  alt="image loading...."
                />
                <h1 class="font-bold ml-3" style="font-size: 70%">
                  Bất ngờ: Dat Bike "flex" cha đẻ ChatGPT Sam Altman chính là
                  một trong những người đầu
                </h1>
              </div>
            </li>

            <li>
              <div class="grid grid-cols-2">
                <img
                  class="rounded-lg"
                  src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
                  alt="image loading...."
                />
                <h1 class="font-bold ml-3" style="font-size: 70%">
                  Bất ngờ: Dat Bike "flex" cha đẻ ChatGPT Sam Altman chính là
                  một trong những người đầu
                </h1>
              </div>
            </li>

            <li>
              <div class="grid grid-cols-2">
                <img
                  class="rounded-lg"
                  src="https://genk.mediacdn.vn/zoom/540_336/139269124445442048/2024/7/4/ps4-1653562798854-17201114607691774150088-0-59-720-1211-crop-172011146595844491969.jpg"
                  alt="image loading...."
                />
                <h1 class="font-bold ml-3" style="font-size: 70%">
                  Bất ngờ: Dat Bike "flex" cha đẻ ChatGPT Sam Altman chính là
                  một trong những người đầu
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FindCategory } from "@/services/authService";
export default {
  name: "PostofCategory",
  data() {
    return {
      search: "Ca Nhạc",
    };
  },
  mounted() {
    this.FindCategory();
  },
  methods: {
    async FindCategory() {
      const loginData = {
        keywords: this.search,
      };
      try {
        console.log(loginData);
        const response = await FindCategory(loginData);
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        console.error("Failed to load account:", error);
      }
    },
  },
};
</script>


<style>
.w1160 {
  width: 1160px;
  margin: 0 auto;
}

.line li {
  padding-top: 18px;
  border-top: 1px dashed #e5e5e5;
  margin-bottom: 18px;
}
.image-gif{
    width: 25px;
    height: 25px;
    margin-right: 5px;
}
</style>
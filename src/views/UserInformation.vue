<!-- clean code là trên hết nghe -->
<template>
  <div class="card m-3">
    <div class="card-body grid grid-cols-1 md:grid-cols-3">
      <div class="w-full">
        <sidebar></sidebar>
      </div>
      <div class="col-span-2">

        <Form>
          <div class="relative">
            <img v-if="account.profilePicture"
              class="w-40 h-40 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              :src="account.profilePicture" alt="User avatar" @click="$refs.fileInput.click()" />
            <img v-else class="w-40 h-40 p-1 mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/image/account/no-avatar.png" alt="Default avatar" @click="$refs.fileInput.click()" />

            <div class="absolute bottom-2 right-1/2 transform translate-x-1/2 text-white"
              @click="$refs.fileInput.click()">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 2a3 3 0 00-3 3H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V8a3 3 0 00-3-3h-4a3 3 0 00-3-3zM7 5h10M12 14.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </div>

          </div>




          <input type="file" ref="fileInput" @change="handleFileChange" style="display: none" accept="image/*" />
          <p class="text-blue-600 text-center" style="cursor: pointer" @click="$refs.fileInput.click()">
            Update
            avatar
          </p>
        </Form>

        <Form @submit="updateAccount" :validation-schema="schema" v-slot="{ errors }">
          <div class="flex justify-center items-center">
            <p class="text-3xl font-bold text-gray-900 my-2 text-center dark:text-white">
              {{ account.username + "." }}
            </p>
            <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round"
              stroke-linejoin="round">
              <circle cx="12" cy="12" r="11"></circle>
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none"></path>
            </svg>
          </div>

          <div class="form-row mb-3">
            <div class="form-group col">
              <label>Name</label>
              <Field name="name" type="text" v-model="account.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
              'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                errors.name,
              ' border border-blue-500 text-blue-900  placeholder-blue-700':
                !errors.name,
            }" />
              <div class="text-red-500">{{ errors.name }}</div>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="form-group col">
              <label>Address</label>
              <Field name="address" as="textarea" rows="3" v-model="account.address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
              'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                errors.address,
              ' border border-blue-500 text-green-900 dark:text-green-400 placeholder-green-700':
                !errors.address,
            }" />
              <div class="text-red-500">{{ errors.address }}</div>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="form-group col">
              <label>Phone</label>
              <Field name="phone" type="number" v-model="account.phoneNumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
              'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                errors.phone,
              ' border border-blue-500 text-blue-900  placeholder-blue-700':
                !errors.phone,
            }" />
              <div class="text-red-500">{{ errors.phone }}</div>
            </div>
          </div>

          <div class="form-group form-check">
            <label>Gender</label><br />
            <Field as="select" name="gender" id="gender" v-model="account.gender"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-select"
              :class="{
              'bg-red-50 border border-red-500 text-red-900 placeholder-red-700':
                errors.gender,
              'border border-blue-500 text-blue-900 placeholder-blue-700':
                !errors.gender,
            }">
              <option value="male" :selected="account.gender === 'male'">
                Male
              </option>
              <option value="female" :selected="account.gender === 'female'">
                Female
              </option>
              <option value="other" :selected="account.gender === 'other'">
                Other
              </option>
            </Field>
            <div class="text-red-500">{{ errors.gender }}</div>

            <div class="text-red-500">{{ errors.gender }}</div>
          </div>

          <div class="form-group text-end">
            <Button type="submit" :disabled="isButtonDisabled" :text="UpdateButton" :loading="loading" />
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import Button from "@/components/button.vue";
import sidebar from "@/components/account/sidebar.vue";
import * as Yup from "yup";
import { Notyf } from "notyf";
import {
  accountService,
  getAvatar,
  updateAccount,
  updateAvatar,
} from "@/services/authService";
export default {
  name: "UserInformation",
  components: {
    Form,
    Field,
    Button,
    sidebar,
  },
  data() {
    const schema = Yup.object().shape({
      name: Yup.string().required("name is required *"),
      address: Yup.string().required("address is required *"),
      phone: Yup.string()
        .matches(/^[0-9]/g, "Phone number is not valid")
        .required("Phone number is required"),
      gender: Yup.string().required("Please agree to the terms"),
    });

    return {
      schema,
      isButtonDisabled: false,
      loading: false,
      UpdateButton: "Update",
      account: {
        name: null,
        gender: null,
        address: null,
        phoneNumber: null,
        username: "Loading...",
        profilePicture: null,
        photo: null,
      },
    };
  },
  mounted() {
    this.loadAccount();
  },
  methods: {
    async loadAccount() {
      try {
        const response = await accountService();
        this.account = response.data;
      } catch (error) {
        console.error("Failed to load account:", error);
      }
      this.loadImage();
    },

    async loadImage() {
      try {
        const response = await getAvatar(this.account.profilePicture);
        this.account.photo = response;
        this.account.profilePicture = response;
      } catch (error) {
        console.error("Failed to load account:", error);
      }
    },

    async updateAccount() {
      this.disabledButton = true;
      this.loading = true;
      this.SignupButton = "Loading...";
      const notyf = new Notyf();

      try {
        const response = await updateAccount(this.account);
        notyf.success(response.message);
      } catch (error) {
        console.error("Error:", error);
        notyf.error("Update information failed!");
      } finally {
        this.disabledButton = false;
        this.loading = false;
        this.loadAccount();
      }
    },


    // click image chọn image rồi thực hiện gọi api lưu ảnh
    handleFileChange(event) {
      const file = event.target.files[0];
      this.updateAvatar(file);
    },

    // nhận ảnh gọi tới api để lưu
    async updateAvatar(file) {
      const notyf = new Notyf();
      try {
        const response = await updateAvatar(file);
        console.log("Response:", response);
        notyf.success(response.message);

      } catch (error) {
        notyf.error("Update image failed!");
      }
      finally {
        this.loadAccount();
      }
    },
  },
};
</script>
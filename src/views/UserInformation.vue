<template>
  <div class="card m-3">
    <div class="card-body grid grid-cols-1 md:grid-cols-3">
        <div class="w-full ">
            <sidebar></sidebar>
        </div>
      <Form class="col-span-2" @submit="onSubmit" :validation-schema="schema" >
        <div class="form-row mb-3">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <Field
            name="name"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>

        <div class="form-row mb-3">
          <label>Address</label>
          <Field
            name="address"
            as="textarea"
            rows="3"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="form-group col">
          <label>Phone</label>
          <Field
            name="phone"
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div class="form-group form-check">
          <label>Gender</label><br />
          <Field as="select" name="gender" id="gender" class="form-select">
            <option value="male" selected>Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
        </div>

        <div class="form-group text-end">
          <Button type="submit">update</Button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import Button from "@/components/button.vue";
import sidebar from "@/components/account/sidebar.vue";
import * as Yup from "yup";

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
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      phone: Yup.number().required("Phone is required"),
      gender: Yup.string().required("Please agree to the terms"),
    });

    return {
      schema,
    };
  },
  methods: {
    async onSubmit(values) {
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
    },
  },

};
</script>
<template>
    <div class="container-fluid box resume">
        <div class="box">
            <title-heading title="Contact"></title-heading>


            <b-row align-v="center">
                <b-col md="8" data-aos="fade-right">
                    <b-card>
                        <b-row align-v="center">
                            <b-card-body title="Let's Talk">
                                <b-card-text class="fs-5">
                                    If you have any questions, please don't hesitate to reach out.
                                </b-card-text>
                            </b-card-body>
                            <b-col md="8">

                                <b-form @submit.prevent="handleSubmit" class="contact-form " novalidate>

                                    <b-form-group v-for="field in formFields" :key="field.name" :label="field.label"
                                        :label-for="field.name" :state="field.state" class="position-relative formGroup">
                                        <b-form-input v-if="field.type !== FieldType.TextArea" :type="field.type"
                                            :id="field.name" :placeholder="field.placeholder" v-model="field.modelValue"
                                            @input="field.validate()" :state="field.state" size="lg" trim></b-form-input>
                                        <b-form-textarea v-else :id="field.name" :placeholder="field.placeholder"
                                            v-model="field.modelValue" rows="3" @input="field.validate()"
                                            :state="field.state" size="lg" trim></b-form-textarea>
                                        <div class="invalid-tooltip">{{ field.invalidFeedback }}</div>

                                    </b-form-group>

                                    <b-button class="m-2" type="submit" pill variant="outline-dark">Send Message</b-button>
                                </b-form>

                            </b-col>
                            <b-col>
                                <b-card-body title="Email">
                                    <b-card-text>
                                        tonys61311@gmail.com
                                    </b-card-text>
                                </b-card-body>
                                <b-card-body title="Based in">
                                    <b-card-text>
                                        Philadelphia, Pennsylvania
                                    </b-card-text>
                                </b-card-body>
                                <b-row class="m-3">
                                    <b-col md="auto">
                                        <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
                                    </b-col>
                                    <b-col md="auto">
                                        <font-awesome-icon icon="fa-brands fa-github" size="2x" />
                                    </b-col>
                                    <b-col md="auto">
                                        <font-awesome-icon icon="fa-brands fa-facebook" size="2x" />
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col data-aos="fade-left" class="text-center">
                    <img src="@/assets/img/Lina.jpg" alt="Image" class="card-img rounded-3 tilt">
                </b-col>
            </b-row>
        </div>
    </div>
</template>
  
  
<script setup lang="ts">
import { BForm, BFormGroup, BFormInput, BFormTextarea, BButton } from 'bootstrap-vue-3';
import TitleHeading from '@/components/TitleHeading.vue';
import { FormField, FieldType, FormData } from '@/ts/enum/FieldType';
import { reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios';

const formFields: FormField[] = reactive([
    new FormField('name', 'Name *', FieldType.Text, 'Your Name', 'Name is required'),
    new FormField('email', 'Email *', FieldType.Email, 'Your Email', 'A valid email is required'),
    new FormField('message', 'Message *', FieldType.TextArea, 'Your Message', 'Message cannot be empty')
]);

const handleSubmit = () => {
    const isFormValid = formFields.reduce((val, field) => {

        if (!field.validate()) {
            console.log(`Validation failed for field: ${field.label}`);
            return false;
        }
        return val;
    }, true);

    if (isFormValid) {
        console.log('Form is valid, proceed with submission');

        const data: FormData = {
            name: formFields[0].modelValue,
            email: formFields[1].modelValue,
            message: formFields[2].modelValue,
        };
        summit(data);
    } else {
        console.log('Validation failed');
    }
};

const summit = async (data: FormData) => {
    try {
        await axios.post('/.netlify/functions/submit-form', data).then(response => {
            console.log('Data:', response);
        })
            .catch(error => {
                console.error('There was an error!', error);
            });
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error here
    }

};


</script>

<style scoped lang="scss">
// @keyframes tilt-animation {
//   0%, 100% {
//     transform: rotate(-7deg);
//   }
//   50% {
//     transform: rotate(7deg);
//   }
// }

.tilt {
    //   animation: tilt-animation 2.5s infinite linear;
    transform: rotate(-7deg);
    //   width: 80%;
}

.feedback {
    display: none;
}

.formGroup {
    margin-bottom: 2rem !important;
    ;
}
</style>
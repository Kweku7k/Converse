import Vue from 'vue'
import { ConversationalForm } from 'conversational-form';

export default Vue.component('MyForm', {
  template: '<div class="myForm"></div>',
  styles: [`
    .myForm {
      position: relative;
      height: 100%;
      width: 100%;
    }
  `],
  methods: {
    setupForm: function () {
      const formFields = [
        {
          'tag': 'input',
          'type': 'text',
          'name': 'firstname',
          'cf-questions': 'What is your firstname?'
        },
        {
          'tag': 'input',
          'type': 'text',
          'name': 'lastname',
          'cf-questions': 'What is your lastname?'
        }
      ];

      this.cf = ConversationalForm.startTheConversation({
        options: {
          submitCallback: this.submitCallback,
          preventAutoFocus: true,
        },
        tags: formFields
      });
      this.$el.appendChild(this.cf.el);
    },
    submitCallback: function () {
      var formDataSerialized = this.cf.getFormData(true);
      console.log("Formdata, obj:", formDataSerialized);
      this.cf.addRobotChatResponse("You are done. Check the dev console for form data output.")
    }
  },
  mounted: function () {
    this.setupForm()
  },
});
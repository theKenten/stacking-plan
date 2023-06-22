<template>
	<div id="sp-form-inquire" style="display:none; max-width:500px;">
		<form id="spark-registration-form" action="https://spark.re/sable-gate/the-kenten/register/kenten-contact" accept-charset="UTF-8" method="post">

		  <input type="hidden" name="authenticity_token" value="CRDWf0pJVMvO7i81xYEZVRVDlUdufSBLoAT5R+ADCqd/qIs9QfddvMF+DrdX27HDDtzUliXWbnGtH++QLFpyOA==" autocomplete="off" >

		  <div class="form-field-2col">
		    <div class="form-field-wrapper">
		      <label for="contact_first_name" class="field-label">First Name</label>
		      <input type="text" name="contact[first_name]" id="contact_first_name" class="form-input" required>
		    </div>
		    <div class="form-field-wrapper">
		      <label for="contact_last_name" class="field-label">Last Name</label>
		      <input type="text" name="contact[last_name]" id="contact_last_name" class="form-input" required>
		    </div>
		  </div>
		  <div class="form-field-2col">
		    <div class="form-field-wrapper">
		      <label for="contact_email" class="field-label">Email</label>
		      <input type="email" name="contact[email]" id="contact_email" class="form-input" required>
		    </div>
		    <div class="form-field-wrapper">
		      <label for="contact_phone" class="field-label">Phone</label>
		      <input type="tel" name="contact[phone]" id="contact_phone" class="form-input" required>
		    </div>
		  </div>
		  <div class="form-field-wrapper"><label for="Residence_You_re_Interested_In_" class="field-label">Residence you&#39;re interested in?</label>
		    <select name="answers[13026][answers]" id="answers_13026" class="form-input is-select-input w-select">
		      <option value="">Select one...</option>
		      <option value="The Hayden">The Hayden</option>
		      <option value="The Plaza B">The Plaza B</option>
		      <option value="The Plaza C">The Plaza C</option>
		      <option value="The Bow A">The Bow A</option>
		      <option value="The Bow B">The Bow B</option>
		      <option value="The Bow C">The Bow C</option>
		      <option value="The Riley A">The Riley A</option>
		      <option value="The Riley B">The Riley B</option>
		      <option value="The Riley C">The Riley C</option>
		      <option value="The Riley D">The Riley D</option>
		      <option value="The Riley E">The Riley E</option>
		      <option value="The Broadview A">The Broadview A</option>
		      <option value="The Broadview B">The Broadview B</option>
		      <option value="The Metro">The Metro</option>
		      <option value="The Sable">The Sable</option>
		      <option value="The Corner">The Corner</option>
		      <option value="The Legacy">The Legacy</option>
		      <option value="The Key">The Key</option>
		  </select></div>
		  <div class="form-field-wrapper"><label class="label-text" for="Agent">Which best describes you?</label>
		    <select name="agent" id="agent" class="form-input is-select-input w-select" required>
		      <option value="">Select one...</option>
		      <option value="false">Buyer</option>
		      <option value="true">Agent</option>
		    </select>
		  </div>
		  <div class="form-field-wrapper">
		    <label for="contact_comments" class="field-label">Message</label>
		    <textarea placeholder="Additional comments or questions" data-enhance="false" name="contact[comments]" id="contact_comments" class="form-input is-text-area">
		    </textarea>
		  </div>

		  <a onclick="submitRegistrationForm(this);" class="button submit" href="javascript:void(0);">Submit</a>

		  <input type="hidden" name="source" id="source" value="Website" autocomplete="off" >
		  <input type="hidden" name="redirect_success" id="redirect_success" value="https://www.thekenten.ca/thank-you" autocomplete="off" >
		  <input type="hidden" name="redirect_error" id="redirect_error" value="" autocomplete="off" >
		  <input type="text" name="are_you_simulated" id="are_you_simulated" placeholder="Leave this field blank" style="display:none;">
		  <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" class="g-recaptcha-response" autocomplete="off" >
		</form>
	</div>
</template>

<script>
export default {

	props: {
	  label: {
	    type: String,
	    // required: true,
	  },
	  primary: {
	    type: Boolean,
	    default: false,
	  },
	  size: {
	    type: String,
	    validator: function (value) {
	      return ['small', 'medium', 'large'].indexOf(value) !== -1;
	    },
	  },
	  backgroundColor: {
	    type: String,
	  },
	},

	/**
	 * Data attached to the component
	 * @return {Object}
	 */
	data() {

	},

	/**
	 * When the component is created
	 * @return  {Null}
	 */
	created() {

	},

	/**
	 * Triggers when mounted
	 * el has been replaced by the newly created vm.$el.
	 * @return {Null}
	 */
	mounted() {

	},

	/**
	 * Methods attached to the component
	 * @type {Object}
	 */
	methods: {

	},

	/**
	 * Holds computed props
	 * Reactive properties that can be static, derived from other variables, 
	 * or static functions
	 * @type {Object}
	 */
	computed: {
	}
}
</script>


<style scoped>
	.sp-form-inquire {

	}
</style>

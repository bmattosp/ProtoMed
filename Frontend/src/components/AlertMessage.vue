<template>
    <div>
      <b-alert id="alertMessage" v-if="showAlert()" :variant="whitchVariant()" show>
        {{Message}}
      </b-alert>
    </div>
</template>

<script>


export default {

  name: 'Alert',
  props:
  {
    Message: { type:String, default: "" },
    Success: { type:Boolean, default: false }
  },
  methods: {
    showAlert()
    {
        return this.Message != "";     
    },
    whitchVariant()
    {
        var variant = "";

        if(this.Success)
            variant = "success"
        else
            variant = "danger"
        
        return variant;
    }
  }
}

</script>
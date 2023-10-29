<script>
import FooterComponents from '../components/footerComponents.vue'
import HeaderComponents from '../components/headerComponents.vue'
export default {
  name: 'noauthLayout',
   components: {
    FooterComponents,
    HeaderComponents,
 
  },
}
</script>
<template>
<HeaderComponents></HeaderComponents>
  <slot />
  <FooterComponents></FooterComponents>
</template>

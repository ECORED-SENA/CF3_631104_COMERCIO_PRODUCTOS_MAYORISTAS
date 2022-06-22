<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.p-5
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Comercio de productos mayoristas 
          p Síntesis: Mercados y clasificación de clientes

    p.mb-3  Los mercados y clasificación de los clientes parte de la necesidad de segmentar los mercados que las empresas mayoristas tienen, siendo así más efectivos y eficientes, esta necesidad no solo va en la segmentación, sino también en la definición de los clientes, sus necesidades, hasta el servicio que reciben, todo ello logrado a través de la recolección de la información del entorno donde se desarrollan las empresas y su procesamiento de datos, logrando así una clara zonificación, es decir un sector ideal, encaminado por un excelente plan de trabajo.

    p.mb-3 A continuación se verá un esquema que explica lo anterior y más lo desarrollado a través de este componente formativo:

    .row.justify-content-center.p-5
      .col-lg-12
        img(src='@/assets/curso/images/tema5/sintesis.svg')

   
      .col-auto.mt-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

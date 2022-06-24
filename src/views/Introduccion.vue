<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")  
        img.mb-3(src='@/assets/curso/images/tema1/intro/img_1.png')
      .col-lg-6(data-aos="fade-left")
          p.mb-3 En un mundo globalizado, conectado virtualmente, donde las fronteras y límites son cada vez menores y donde la multiculturalidad florece, la velocidad y la capacidad de procesamiento de datos son factores vitales para el desarrollo y crecimiento de las empresas, por lo tanto, el desconocimiento de cada detalle por más mínimo que sea puede ser una falla catastrófica.

          p.mb-0 Es aquí donde entra en juego el poder de conocimiento, no solo del producto, sino del mercado en general, las necesidades de los clientes y la cultura, entre otros elementos, desarrollan un papel crucial a la hora de generar estrategias y actuar como empresa en la economía actual, en la que se desarrollan y se desenvuelven.

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-6(data-aos="fade-right") 
          p.mb-3 Si se habla de mercados, cada país tiene uno diferente que afronta sus propios retos, necesidades, tácticas, estrategias y técnicas, siendo estas palabras, las que se escucharán constantemente en el rol de empresa y mercado. 

          p.mb-3 Este entorno comercial y económico necesita de personal altamente capacitado, siendo el pilar para dar respuesta a las necesidades que afrontan las empresas en el mundo globalizado; por lo tanto, conocer las variables del mercado, su segmentación y su sistema de monitoreo, harán más fácil la tarea, además de garantizar la permanencia de las compañías a través del tiempo.

          p.mb-0 No obstante, el mercado no solamente lo conforman las empresas, por lo que se debe hablar de dos tipos de clientes: 

      .col-lg-4(data-aos="fade-left") 
        img.mt-3(src='@/assets/curso/images/tema1/intro/img_2.png'  alt='', style="width:400px; display:block; margin:auto 0 ;")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-down")
        img(src="@/assets/curso/images/tema1/intro/img_3.svg")

    
    p.mb-3 De aquí parten las primeras necesidades, como el conocimiento de la cultura para determinar gustos y preferencias o como la ubicación geográfica para determinar qué tipo de empresa funcionaria o tendría éxito en esa zona.

    p.mb-3 Como se mencionó anteriormente, el manejo de la información es vital para el desarrollo y el correcto funcionamiento de las empresas, es aquí donde adquiere gran importancia la inteligencia empresarial o comercial para hacerle frente a las necesidades de los clientes y del mercado en general que demandan sobre la economía actual, por lo que las técnicas de recolección de la información, una correcta prospección de clientes y una segmentación adecuada de mercados harán la diferencia entre una empresa exitosa y una que no podrá afrontar la velocidad y el cambio de norte que esta era digitalizada exige.

    p.mb-3 Si se habla de la zonificación y rutas de ventas, se entenderá que son factores que acercan más a las empresas a su objetivo real de llegarle a todo su público meta, tener claro este factor los vuelve eficientes, y asertivos y para ello están disponibles múltiples herramientas o software que agilizan y permiten tener claridad a la hora de tomar decisiones.

    .row.aling.my-5   
      .col-lg-10(data-aos="zoom-in-down")
        .cajon.color-custom.p-4.mb-4.p-5
          .row.justify-content-around.align-items-center
            .col-lg-2.col-sm-2
              img.mx-3(src="@/assets/curso/images/tema1/intro/ico_1.svg",  alt='', style="width:90px; display:block; margin:auto 0 ;").mb-3
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Ahora bien, es importante mencionar el papel de un <b> plan de trabajo claro y contundente </b>, pues facilitará el cumplimiento de metas propuestas, así como el seguimiento de resultados y un correcto control de los tiempos y movimientos, por lo que cada empresa debe contar con uno y es aquí donde nace la necesidad de personal capacitado para entenderlo y ejecutarlo a la perfección.
    
    p.mb-5 Por lo tanto, en este componente formativo se dará al aprendiz la información necesaria logrando conocer todos los factores importantes y relevantes para dar respuesta a las necesidades de las empresas y ser el apoyo vital para el desarrollo y crecimiento de las mismas, de igual manera, el conocimiento para determinar las necesidades de los clientes y cómo seguir un plan de trabajo, abordando los temas pertinentes, que serán soporte para desenvolverse en este campo de la economía. Para contextualizar más este componente, se invita a revisar el siguiente video:

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jtClREk9TY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

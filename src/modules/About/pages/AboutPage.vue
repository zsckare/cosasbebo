<template>
<v-container grid-list-md>
 <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
    
 </v-carousel>

<v-layout row wrap >
<v-flex xs12 sm6>
<v-card>
<v-card-title>OBJETIVO DE LA EMPRESA</v-card-title>
<v-card-text>Nuestro objetivo dentro de toda la industria de la innovación es saber de qué manera podemos repercutir y lucir entre todas las demás empresas, saber cuál es nuestro punto fuerte y explotarlo de manera positiva tanto como para nosotros como también para las exigencias de los clientes a los cuales se les esté brindando de los servicios que ofrece nuestra empresa.</v-card-text>
<v-card-actions></v-card-actions>
</v-card>
</v-flex>

<v-flex xs12 sm6>
<v-card>
<v-card-title>ESTRATEGIAS DE LA EMPRESA </v-card-title>
<v-card-text>Se buscará adoptar distintos tipos de estrategias para poder generar una mayor competitividad en el sector en que se desempeñe la corporación, entre las cuales destacan:

<br>•	Generar alianzas con empresas del mismo rubro, en la cual se puedan compartir recursos y obtener distintas ganancias por medio de esta unión.<br>
<br>•	Mantener una competencia activa entre los aspirantes a obtener un cargo dentro de la organización.<br>
<br>•	Proporcionar distintos bienes y apoyos al personal perteneciente a la corporación.<br>
</v-card-text>
<v-card-actions></v-card-actions>
</v-card>
</v-flex>
</v-layout>
<v-layout>



<v-flex xs12 sm6>
<v-card>
<v-img id=logo2
          style="width: 250px; height: 60%;"
          :src="require('@/assets/Karol.jpg')"></v-img>
<v-card-title >Karol Araico <br>"Director General y Diseñador"<br></v-card-title>
<v-card-actions><v-btn class="mt-12"
          color="indigo darken-4"
          dark
          large flat @click="dialog3 = true" > Info.</v-btn>
</v-card-actions>
</v-card> 
</v-flex>

<v-flex xs12 sm6>
<v-card>
<v-img id=logo
          style="width: 250px; height: 60%;"
          :src="require('@/assets/Luis.jpg')"></v-img>
<v-card-title >Luis Fraire <br>Vicepresidente y programador<br> </v-card-title>
<v-card-actions><v-btn class="mt-12"
          color="indigo darken-4"
          dark
          large flat @click="dialog = true"> Info.</v-btn>
</v-card-actions>
</v-card>
</v-flex>

<v-flex xs12 sm6>
<v-card>
<v-img id=logo2
          style="width: 250px; height: 60%;"
          :src="require('@/assets/Carmen.jpg')"></v-img>
<v-card-title >Carmen Alanis <br>"Marketing"<br> </v-card-title>
<v-card-actions><v-btn class="mt-12"
          color="indigo darken-4"
          dark
          large flat @click="dialog4 = true"> Info.</v-btn>
</v-card-actions>
</v-card>
</v-flex>

<v-flex xs12 sm6>
<v-card>
<v-img id=logo
          style="width: 250px; height: 60%;"
          :src="require('@/assets/Brandon.jpg')"></v-img>
<v-card-title >Brandon Carrillo<br>"Presidente Programador"<br></v-card-title>
<v-card-actions><v-btn class="mt-12"
          color="indigo darken-4"
          dark
          large flat @click="dialog2 = true"> Info.</v-btn>
</v-card-actions>
</v-card>
</v-flex>
</v-layout>


<v-dialog v-model="dialog"  width="500" persistent>

<v-card>
<v-card-title class="text-h5 grey lighten-2">Luis Alberto Fraire Berumen <br>"Vicepresidente y Programador"<br></v-card-title>
<v-card-text >Tiene un papel clave a la hora de prestar apoyo a las decisiones del presidente. El seguimiento de una línea de actuación u otra por parte de este cargo es de vital importancia para que la empresa siga un mismo patrón. Así, en ausencia del presidente, sus principales objetivos y todo cuanto determine y define a dicha formación no han de ser modificados en absoluto.<br> La función del vicepresidente es mantener el mismo rumbo que había marcado el presidente hasta el momento.
Desarrollan aplicaciones y programas informáticos, sirviéndose de las bases de un software existente para crear una interfaz para los usuarios con fines comerciales, profesionales o recreativos, diseña la estrategia a seguir, propone las secuencias de instrucciones y/o escribe el código correspondiente en un determinado lenguaje de programación.<br>
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
<v-btn @click="dialog = false">Cerrar</v-btn>
</v-card-actions> </v-card>

</v-dialog> 

<v-dialog v-model="dialog2"  width="500" persistent>

<v-card>
<v-card-title class="text-h5 grey lighten-2">Brandon Aaron Carrilla Martinez <br>"Presidente Y Programador"<br></v-card-title>
<v-card-text >Responsable de detectar las necesidades de los usuarios y gestionar los recursos económicos, materiales y humanos, para obtener los resultados esperados en los plazos previstos y con la calidad necesaria. planifica y coordina las estrategias y las operaciones de la empresa, toma decisiones y organiza las actividades de la compañía. Es la persona que tiene la responsabilidad total del planeamiento y la ejecución acertados de cualquier proyecto. 
Desarrollan aplicaciones y programas informáticos, sirviéndose de las bases de un software existente para crear una interfaz para los usuarios con fines comerciales, profesionales o recreativos, diseña la estrategia a seguir, propone las secuencias de instrucciones y/o escribe el código correspondiente en un determinado lenguaje de programación.<br>
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
<v-btn @click="dialog2= false">Cerrar</v-btn>
</v-card-actions> </v-card>

</v-dialog> 

<v-dialog v-model="dialog4"  width="500" persistent>

<v-card>
<v-card-title class="text-h5 grey lighten-2">Maria del Carmen Alanis Ochoa <br>"Marketing"<br></v-card-title>
<v-card-text >Marketing Digital es el conjunto de estrategias volcadas hacia la promoción de una marca en el internet. Se diferencia del marketing tradicional por incluir el uso de canales y métodos que permiten el análisis de los resultados en tiempo real.
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
<v-btn @click="dialog4= false">Cerrar</v-btn>
</v-card-actions> </v-card>

</v-dialog> 

<v-dialog v-model="dialog3"  width="500" persistent>

<v-card>
<v-card-title class="text-h5 grey lighten-2">Karol Araico Badillo<br>"Diseñador y Directora General"<br></v-card-title>
<v-card-text >
<br>Un profesional de este tipo puede dedicarse o especializarse en una gran variedad de objetos o áreas del diseño. Los diseñadores son responsables del desarrollo, en cuanto al proyecto, de un objeto, producto, o concepto. Trabajan según un proceso de diseño que comienza con la interpretación o detección de un problema o necesidad y culminan con la producción o construcción de la solución a este problema.<br>
Es quien realiza la estrategia empresarial y se encarga de proporcionar los medios necesarios para llevarla a cabo. Su cargo impacta directamente en los colaboradores y su productividad. Está en contacto con los directores de diferentes áreas. 
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
<v-btn @click="dialog3= false">Cerrar</v-btn>
</v-card-actions> </v-card>

</v-dialog> 



</v-container>

  
</template>


<script>

  export default {
    data () {
      return {

          dialog: false,
          dialog2: false,
          dialog3: false, 
          dialog4: false,

        items: [
          {
            src: 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg'
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg',
          },
          {
            src: 'https://cdn.pixabay.com/photo/2015/07/17/22/42/typing-849806_960_720.jpg',
          },
        ],
      }
    },
  }
</script>

<style>
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:800px;
        height:500px;
        z-index:10;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
</style>
<template>
  
    <Carta :carta="cartaPredador" />
    
  
  
</template>

<script>
import Carta from './components/Carta.vue'
import predador from '@/assets/predador.png'

export default {
  components: { Carta },
  data() {
    return {
      cartaPredador: {
        nome: "O Predador Flamejante",
        tipo: "Criatura Infernal",
        efeito: "Quando entra em campo, causa 2 de dano ao inimigo.",
        atk: 5,
        def: 3,
        custo: 4,
        imagem: predador
      }
    }
  }
}
</script>

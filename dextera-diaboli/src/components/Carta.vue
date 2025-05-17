<template>
  <div
    class="w-[22vw] min-w-[120px] max-w-[180px] aspect-[2/3] bg-gradient-to-b from-zinc-800 to-black border border-red-700 rounded-xl shadow-lg overflow-hidden flex flex-col relative"
  >
    <!-- Custo -->
    <div class="absolute top-1 left-1 bg-red-600 text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded shadow z-10">
      {{ carta.custo }}🔥
    </div>

    <!-- Imagem (60% da carta) -->
    <div class="h-[60%] w-full overflow-hidden border-b border-red-700">
      <img
        :src="carta.imagem"
        alt="Arte da carta"
        class="object-cover w-full h-full"
      />
    </div>

    <!-- Infos (40% da carta) -->
    <div class="h-[40%] w-full px-2 py-1 flex flex-col justify-between text-white text-[0.7rem] leading-tight">
      <div class="text-center font-bold text-[0.75rem] truncate">
        {{ carta.nome }}
      </div>
      <div class="text-center text-red-400 uppercase font-semibold text-[0.6rem] tracking-wide">
        {{ carta.tipo }}
      </div>
      <div class="italic text-gray-300 text-center text-[0.65rem] px-1">
        {{ carta.efeito }}
      </div>
      <div class="flex justify-between text-[0.6rem] font-mono border-t border-zinc-700 pt-1 mt-1">
        <span>ATK: {{ carta.atk }}</span>
        <span>DEF: {{ carta.def }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carta',
  props: {
    carta: {
      type: Object,
      required: true
    }
  }
}
</script>

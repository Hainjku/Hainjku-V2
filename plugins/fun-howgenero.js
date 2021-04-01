let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(howgenero|genero|howg)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https//:jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "1. *Abimegénero:* un género que es profundo, intenso e infinito; tiene la intención de parecerse a un espejo que se refleja en otro espejo creando una paradoja infinita.",
  "2. *Adamasgénero:* un género que se niega a ser categorizado.",
  "3. *Aerogénero:* un género que está influenciado por su entorno",
  "4. *Aestetigénero:* un género que se deriva de una estética; también conocido como videgénero.",
  "5. *Afectogénero:* un género que se ve afectado por los cambios de humor.",
  "6. *Agénero:* la sensación de ningún género / ausencia de sexo o de género neutro.",
  "7. *Agéneroflujo:* Es en su mayoría un agénero, excepto que tiene pequeños cambios hacia otros géneros haciéndolos demigéneros (debido a la constancia de ser agénero)",
  "8. *Alexigénero:* un género que es fluido entre más de un género pero el individuo no puede decir lo que esos géneros son.",
  "9. *Aliusgénero:* un género que se retira de las descripciones y directrices de género comunes.",
  "10. *Amaregénero:* un género que cambia dependiendo de la persona de la cual se está enamorado.",
  "11. *Ambigénero:* se define como la sensación de tener dos géneros simultáneamente sin fluctuación; pretende reflejar el concepto de ser ambidiestro pero solo en términos relacionados con el género.",
  "12. *Ambonec:* se identifica como hombre o mujer pero no al mismo tiempo.",
  "13. *Amicagénero:* un género que cambia dependiendo del amigo con quién esté.",
  "14. *Andrógino:* a veces se utiliza en el caso de “presentación andrógina”; describe la sensación de ser una mezcla de las cualidades tanto del género masculino y femenino (y algunas veces neutras).",
  "15. *Anesigénero:* sentirse en un determinado género pero con la sensación de estar más cómodo identificándose con otro.",
  "16. *Angenital:* un deseo de estar sin características sexuales primarias, sin ser necesariamente sin género; se puede ser tanto angenital como identificarse como cualquier otro género junto.",
  "17. *Anogénero:* un género que se desvanece dentro y fuera, pero siempre vuelve a la misma sensación.",
  "18. *Anongénero:* un género que es desconocido tanto para usted como para otros.",
  "19. *Antegénero:* un género proteico que tiene el potencial para ser cualquier cosa, pero es sin forma y sin movimiento. *Por lo tanto, no se manifiesta en ningún género en particular.",
  "20. *Anxiegénero:* un género que se ve afectado por la ansiedad.",
  "21. *Apagénero:* un sentimiento de apatía hacia los géneros que no conducen a ir más allá.",
  "22. *Apconsugénero:* un género donde se sabe lo que no es pero no lo que es; el género se esconde de usted.",
  "23. *Astergénero:* un género que se siente brillante y celestial.",
  "24. *Astralgénero:* un género que se siente conectado con el espacio.",
  "25. *Autigénero:* un género que sólo puede ser entendido en el contexto de ser autista.",
  "26. *Autogénero:* una experiencia de género que es profundamente personal, con uno mismo.",
  "27. *Axigénero:* cuando una persona experimenta dos géneros que se sienten en extremos opuestos de un eje; un ser agénero y otro ser de cualquier otro género; estos géneros son experimentados uno a la vez sin superposiciones con el tiempo y en una transición muy corta.",
  "28. *Bigénero:* la sensación de tener dos géneros a la vez o de manera alternada; por lo general es usado para describir la sensación “tradicionalmente masculina” y la “tradicionalmente femenina”, pero no necesariamente.",
  "29. *Biogénero:* un género que se siente conectado con la naturaleza de alguna forma.",
  "30. *Blurgénero:* la sensación de tener más de un género que de alguna manera están borrosos juntos hasta el punto de no ser capaz de distinguir o identificar los géneros individuales; sinónimo de género pelusa.",
  "31. *Flujo Chico:* cuando uno se siente varón la mayor parte del tiempo pero esa identidad fluctua.",
  "32. *Burstgénero:* género que se presenta en momentos de gran intensidad de sentimientos y rápidamente se desvanece de nuevo a su estado original.",
  "33. *Caelgénero:* un género que comparte cualidades con el espacio exterior o tiene la estética del espacio, estrellas, nebulosas, etc.",
  "34. *Cassgénero:* la sensación de un género es poco importante para usted.",
  "35. *Cassflujo:* cuando el nivel de indiferencia hacia su sexo fluctúa.",
  "36. *Cavusgénero:* para las personas con depresión; cuando siente que uno de los géneros no está deprimido mientras que el otro si lo está.",
  "37. *Cendgénero:* cuando su género cambia entre uno y su opuesto.",
  "38. *Ceterofluido:* cuando se está ceterogénero y sus sentimientos fluctúan entre masculino, femenino, y neutro.",
  "39. *Ceterogénero:* un género no binario con sentimientos específicos de masculinidad, feminidad o neutralidad.",
  "40. *Cisgénero:* la sensación de ser el género que se le asignó al nacer todo el tiempo (asignado masculino / sentimiento masculino).",
  "41. *Género Nublado:* un género que no puede llegar a la realización plena o a verse claramente debido al trastorno de despersonalización /desrealización de la persona.",
  "42. *Collgénero:* la sensación de tener demasiados géneros al mismo tiempo como para describir cada uno.",
  "43. *Colorgénero:* un género asociado con uno o más colores y los sentimientos, y emociones que las tonalidades y/u objetos asociados con ese color produzcan; se puede utilizar como rosado-género, azul-género, amarillo-género.",
  "44. *Comogénero:* cuando se sabe que no es cisgénero pero que se ha acomodado al género asignado por el momento.",
  "45. *Condigénero:* un género que sólo se siente durante ciertas circunstancias.",
  "46. *Deliciagénero:* Viene de la palabra latina “Delicia” que significa “favorito”. *Es decir, la sensación de tener más de un género simultáneamente pero prefiriendo el que se adapte mejor.",
  "47. *Demifluido:* la sensación de tener un género fluido a través de todos los demigéneros; la sensación de tener múltiples géneros, algunos estáticos y otros fluidos.",
  "48. *Demiflujo:* la sensación de tener múltiples géneros, algunos estáticos y otros fluidos.",
  "49. *Demigénero:* un género que es en parte un género y en parte otro.",
  "50. *Domgénero:* tener más de un género pero uno de ellos es más dominante que los demás.",
  "51. *Duragénero:* de la palabra latina “Dura” que significa “larga duración”, siendo una subcategoría de multigénero en el cual un género es más identificable, duradero y destacable que el resto de géneros.",
  "52. *Egogénero:* un género que es tan personal a su experiencia que sólo puede ser descrito como “usted”.",
  "53. *Epiceno:* usado a veces como sinónimo del adjetivo “andrógino”; el sentimiento de sentirse teniendo o no características de ambos o cualquiera de los género binario; a veces se usa para describir los individuos masculino femeninos.",
  "54. *Espigénero:* un género que se relaciona con ser un espíritu o existir en un plano superior o extradimensional.",
  "55. *Exgénero:* la negativa pura y simple para aceptar o identificarse con, sobre o alrededor del espectro del género.",
  "56. *Existigénero:* un género que sólo existe o se siente presente cuando se piensa al respecto o se hace un esfuerzo consciente para notarlo.",
  "57. *Femfluido:* ser fluctuante o tener sentimientos de género fluidos que se limitan al género femenino.",
  "58. *Femgénero:* un género no binario que es de naturaleza femenina.",
  "113 *Gay:* Un chico siente atracción por una persona de su mismo sexo.",
  "59. *Flujo fluido:* la sensación de ser fluido entre dos o más géneros que también fluctúan en intensidad una combinación de género fluido y género flujo.",
  "60. *Gemigénero:* tener dos sexos opuestos que funcionan en conjunto, siendo ambos fluido y flujo.",
  "61. *Género vacío:* un género que sólo puede ser descrito como un espacio en blanco; cuando el género se pone en duda, todo lo que viene a la mente es un espacio en blanco.",
  "62. *Género corriente:* un género que es fluido entre sentimientos infinitos.",
  "63. *Género fluido:* la sensación de fluidez dentro de su identidad de género; sintiendo un género diferente a medida que pasa el tiempo o según cambien las situaciones; no restringido a cualquier número de géneros.",
  "64. *Género flujo:* la sensación de que tu sexo fluctúa en intensidad como el género fluido pero entre un género y un agénero.",
  "65. *Género pelusa:* acuñado por lolzmelmel; la sensación de tener más de un género que de alguna manera están borrosos hasta el punto de no ser capaz de distinguir o identificar los géneros individuales; sinónimo de blurgénero.",
  "66. *Género neutral:* la sensación de tener un género neutro, ubicado en algún lugar entre masculino y femenino o un tercer género que está separado de los binarios; a menudo se combina con neutrois.",
  "67. *Género punk:* una identidad de género que se resiste activamente a las normas de género",
  "68. *Género queer:* originalmente utilizado como un término general para los individuos no binarios; se puede utilizar como una identidad; describe un género no binario, independientemente de si la persona tiene una inclinación masculina o femenina.",
  "69. *Género embrujado:* un género en el que uno se siente intrigado o fascinado por la idea de un género en particular pero no es seguro que en realidad lo sienta.",
  "70. *Flujo Chica:* cuando uno se siente principalmente femenina la mayor parte del tiempo pero experimenta fluctuación en la intensidad de esa identidad femenina.",
  "71. *Género Cristal:* un género que es muy sensible y frágil.",
  "72. *Género Destello:* una que brilla débilmente, género vacilante",
  "73. *Género Gris:* tener un género que está en su mayoría por fuera de los binarios pero es débil y apenas se puede sentir.",
  "74. *Girogénero:* cuando se tienen múltiples géneros pero ninguna comprensión de los mismos.",
  "75. *Género Sanador:* un género que al ser reconocido, trae mucha paz, claridad, seguridad y creatividad a la mente del individuo.",
  "76. *Heliogénero:* un género que es cálido y quema.",
  "77. *Hemigénero:* un género que es mitad de uno de los géneros y mitad de otro; una o ambas mitades pueden ser géneros identificables.",
  "78. *Horogénero:* un género que cambia con el tiempo pero su sentimiento principal se mantiene igual.",
  "79. *Hidrogénero:* un género que comparte cualidades con el agua.",
  "80. *Imperigénero:* un género fluido que puede ser controlado por el individuo.",
  "81. *Intergénero:* sensación de un género que se ubica en algún punto del espectro entre masculino y femenino; Nota:* no confundir con intersexual.",
  "82. *Juxera:* un género femenino similar a una chica pero en un plano separado y fuera de sí.",
  "114 *Lesbiana* Una chica Sente atracción por otra persona de su mismo sexo",
  "83. *Libragénero:* un género que se siente agénero pero tiene una fuerte conexión con otro género.",
  "84. *Magigénero:* un género que es en su mayoría un género pero con un residuo de algo más.",
  "85. *Mascfluido:* Un género que tiene naturaleza fluida pero limita sólo en los géneros masculinos.",
  "86. *Mascgénero:* un género no binario que es de naturaleza masculina.",
  "87. *Maverique:* tomado de la palabra rebelde; la sensación de tener un género que está separado de la masculinidad, feminidad y neutralidad pero no es agénero; una forma de un tercer género.",
  "88. *Género espejo:* un género que cambia para adaptarse a las personas que le rodean.",
  "89. *Molligénero:* un género que es suave, sutil y tenue.",
  "90. *Multigénero:* la sensación de tener más de un género simultáneo o fluctuante; simultaneidad con el multigénero y el omnigénero.",
  "91. *Nanogénero:* sentir una pequeña parte de un género pero el resto es algo más.",
  "92. *Neutrois:* la sensación de tener un género neutro; a veces la falta de género que lleva a la sensación neutra.",
  "93. *No binario:* originalmente un término general para cualquier género fuera de la binaria de cisgéneros; se puede utilizar como una identidad individual; de vez en cuando se utiliza junto a géneroqueer.",
  "94. *Omnigénero:* la sensación de tener más de un género simultáneo o fluctuante; simultaneidad con el multigénero y el poligénero.",
  "95. *Oneirogénero:* acuñado por un anónimo. *“Ser un agénero pero tener fantasías o sueños siendo de un género determinado sin la disforia o el deseo de ser de ese género en el día a día”.",
  "96. *Pangénero:* la sensación de tener todos los géneros; esto se considera problemático por algunas comunidades y por lo tanto, se utiliza como concepto de poder relacionarse de alguna manera con todos los géneros en lugar de contener todas las identidades de género; sólo aplica para los géneros de su propia cultura.",
  "97. *Paragénero:* la sensación de estar muy cerca de la categoría de un género pero no poder sentirlo plenamente debido a la existencia de algo distinto.",
  "98. *Perigénero:* identificarse con un género pero no hasta el punto de tomarlo como su género.",
  "99. *Polygénero:* la sensación de tener más de un género simultáneo o fluctuante; simultaneidad con multigénero y omnigénero.",
  "100. *Proxvir:* un género masculino similar al chico pero en un plano separado y fuera de sí.",
  "101. *Quoigénero:* la sensación de que el concepto de género es inaplicable o sin sentido para uno mismo.",
  "102. *subgénero:* principalmente agénero pero con un poco de otro género.",
  "103. *Surgénero:* un género definido 100% pero con algo más de otro género que se añade por encima de este.",
  "104. *Sistemgénero:* un género que es la suma de todos los géneros dentro de un sistema múltiple o medio.",
  "105. *Tragénero:* un género que se extiende a lo largo de todo el espectro de géneros.",
  "106. *Transgénero:* cualquier identidad de género que trasciende o no se alinea con su género asignado o con la idea de género que tiene la sociedad; la sensación de estar en cualquier género que no coincide con su sexo asignado.",
  "107. *Trigénero:* la sensación de tener tres géneros simultáneos o fluctuantes.",
  "108. *Vapogénero:* una especie de género que se evapora como el humo; puede ser visto como algo trivial pero una vez que se trata de profundizar, este desaparece y se queda uno sin género, sólo diminutas briznas de lo que se pensaba que era.",
  "109. *Venngénero:* cuando dos géneros se solapan creando todo un nuevo género a similitud de un diagrama de Venn.",
  "110. *Verangénero:* un género que parece cambiar en el momento en que se identifica.",
  "111. *Vibragénero:* un género que suele ser un género estable pero de vez en cuando cambia o fluctúa antes de estabilizarse de nuevo.",
  "112. **Vocigénero:* un género que es débil o hueco."
]

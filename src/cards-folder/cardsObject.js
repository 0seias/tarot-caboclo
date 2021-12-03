const cardsObject = [
    

    {   name: `The Fool`,
    cardImage: require(`../cards-folder/card1.png`),
    keywords: `Beginnings, innocence, spontaneity, a free spirit`,
    content: `A carta do louco significa o início e o ser humano que passará por todas as outras cartas dentro de sua jornada. Sendo uma carta que a grande maioria das pessoas reconhece ese identifica, foi escolhido a figura do Novilho do Auto do Bumba Meu Boi no Maranhão na qual a maioria no Estado consegue reconhecer. E dentro da questão dos “começos”temos tambores esquentando seus couros em fogueiras, marcado o aquecimento eafinação dos instrumentos através do calor e além disso representando as festas que existem pelo estado.
         `
},

{   name: `The Magician`,
    cardImage: require(`../cards-folder/card3.png`),
    keywords: `Manifestation, resourcefulness, power, inspired action`,
    content: ` A carta do mago significa habilidade, comunicação, conhecimento, técnica. A figura representa um Cantador de Bumba meu Boi, geralmente nos Bois mais tradicionais estas pessoas são também as coordenadoras dos grupos e das festas. Possuem estes traços de comunicação, comandam o Boi e cantam. Este Cantador foi feito como uma homenagem a todos os grandes Mestres maranhenses que tivemos.
    `
},

{   name: `The High Priestess`,
    cardImage: require(`../cards-folder/card5.png`),
    keywords: `Intuition, sacred knowledge, divine feminine, the subconscious mind`,
    content: `A carta da sacerdotisa significa segredos, o inconsciente, espiritualidade e conhecimento. A figura representa a Rainha Na Agontimé que foi traficada do antigo Reino do Daomé, atual Benin, para o Maranhão no fim do século 19. Agontimé teria fundado o que viria a ser a Casa das Minas hoje em dia. Esta teoria iniciada pelo antropólogo Pierre Verger ganhou mais peso com o passar dos anos. Uma das principais evidências segundo Verger seria o fato de que as entidades cultuadas na Casa das Minas, os voduns, só poderia ser conhecidas aqui se alguém do Benin estivesse nestas terras e não qualquer pessoa, mas alguém com o conhecimento secreto e exclusivo destas entidades.
    `
},

{   name: `The Empress`,
    cardImage: require(`../cards-folder/card7.png`),
    keywords: `Femininity, beauty, nature, nurturing, abundance`,
    content: `A carta da imperatriz significa fertilidade, maternidade, crescimento, criação e abundância. Seria o arquétipo da Grande Mãe. A figura representa uma das mães mais conhecidas no folclore que é a Mãe Catirina. No Auto do Bumba Meu Boi maranhense, Mãe Catirina deseja comer a língua do novilho mais bonito da fazenda. Seu marido, Pai Francisco acaba por atender o pedido da mulher grávida e mata o novilho que também era o boi preferido do fazendeiro. Podem existir diversas variações da história pelo estado, assim como existem pelo país.
     `
},

{   name: `The Emperor`,
    cardImage: require(`../cards-folder/card9.png`),
    keywords: `Authority, establishment, structure, a father figure`,
    content: `A carta do imperador significa organização, liderança, domínio e poder. A figura representa Pai Francisco, marido da Mãe Catirina. Também pode ser chamado de Nego Chico. Ele atende ao desejo de sua mulher e corta a língua do novilho mais bonito da fazenda. Porém este novilho era o animal preferido do fazendeiro. Isto dá início à sua perseguição. As variações da história mostram Pai Francisco prestes a ser morto ou ordenado pelo fazendeiro a dar jeito na situação.
    `
},

{   name: `The Hierophant`,
    cardImage: require(`../cards-folder/card11.png`),
    keywords: `Spiritual wisdom, religious beliefs, conformity, tradition, institutions`,
    content: `A carta do hierofante significa ensino, autoridade, tradições, disciplina e respeito. A figura representa uma caixeira que basicamente engloba todos estes traços citados. Elas sempre estão presentes nas Festas do Divino Espírito Santo espalhadas pelo estado, tocando suas músicas e ladainhas. Algumas das vezes organizam estas festas. Também estão presentes nos grupos de Cacuriá. Nem todas as caixeiras são idosas, mas a escolha por um desenho de uma senhora demonstra a sabedoria dentro do fazer das festas e manutenção da tradicionalidade.
    `
},

{   name: `The Lovers`,
    cardImage: require(`../cards-folder/card13.png`),
    keywords: `Love, harmony, relationships, values alignment, choices`,
    content: `A carta dos enamorados significa escolhas, amor, relações e acordos. A figura demonstra a dança “agarradinho”. No maranhão, se dança segue agarrado. Esta forma de dança virou Patrimônio Cultura Imaterial do Maranhão em 2021. O reggae chegou no Estado por meados dos anos 70 e a população adaptou a forma de dançar de boleros e forrós ao ritmo do reggae. O estilo de dança se desenvolve até hoje.
    `
},

{   name: `The Chariot`,
    cardImage: require(`../cards-folder/card15.png`),
    keywords: `Control, willpower, success, action, determination`,
    content: `A carta do carro significa movimento, disciplina, foco e determinação. A figura representa um indígena Canela Ramkokamekrá dentro de uma corrida com toras. Dentro de suas tradições, as corridas são bem presentes e feitas para celebrar diversos tipos de rituais e festas. Ao participar assiduamente das corridas, os corredores asseguram que a comunidade terá alegria, bondade e sabedoria, fazendo a manutenção da cultura.
    `
},

{   name: `Strength`,
    cardImage: require(`../cards-folder/card17.png`),
    keywords: `Strength, courage, persuasion, influence, compassion`,
    content: `A carta da força significa força de vontade, motivação, energia, perseverança e coragem. A figura representa uma quebradora de coco babaçu. Assim como a mulher representada nas cartas tradicionais, as quebradeiras não quebram o coco com uma bruta e sim com técnica e jeito. Antigamente, este ofício representava vergonha, mas atualmente as mulheres que o exercem são perseverantes e se orgulham do que fazem, mantendo-se firmes e continuando sua tradição.
    `
},

{   name: `The Hermit`,
    cardImage: require(`../cards-folder/card19.png`),
    keywords: `Soul-searching, introspection, being alone, inner guidance`,
    content: `A carta do eremita significa solidão, sabedoria, contemplação e total introspecção. A figura representa o Rei Sebastião sozinho nas duas da Praia dos Lençóis. Este mito é um dos mais conhecidos no Estado. É dito que o Rei Sebastião se encantou no Maranhão após morrer na batalha de Alcácer Quibir e sua forma encantada seria de um grande touro negro que vaga pelas dunas com uma brilhante estrela na testa. O mito é presente na ilha da Praia dos Lençóis ao norte do Estado no município de Cururupu.
    `
},

{   name: `The Wheel of Fortune`,
    cardImage: require(`../cards-folder/card21.png`),
    keywords: `Good luck, karma, life cycles, destiny, a turning point`,
    content: `A carta da roda da fortuna significa movimentos cíclicos, sorte, azar, imprevisibilidade e mudanças. A figura ilustra o ciclo de corte e queima da agricultura que é bem presente no Estado. A Roda gira na carta passando pelo corte do mato, queima do local, plantio e depois abandono das terras para que mais tarde possa ser usada novamente.
    `
},

{   name: `Justice`,
    cardImage: require(`../cards-folder/card23.png`),
    keywords: `Justice, fairness, truth, cause and effect, law`,
    content: `A carta da justiça significa autocontrole, razão, discernimento e equilíbrio. A figura representa a escritora maranhense Maria Firmina dos Reis que é considerada a primeira romancista brasileira. Ela participava ativamente da vida cultural e intelectual de sua cidade, publicava crônicas, textos em jornais e era professora. Chegou a criar uma escola para meninos e meninas na cidade de Maçaricó, no município de Guimarães, mas infelizmente o projeto durou menos de três anos graças à recepção da sociedade. Por  volta de 1860 publicou Úrsula, o primeiro romance abolicionista da história do Brasil inaugurando aqui este gênero que somente mais tarde começava a ser trabalhado.
    `
},

{   name: `The Hanged Man`,
    cardImage: require(`../cards-folder/card25.png`),
    keywords: `Pause, surrender, letting go, new perspectives`,
    content: `A carta do enforcado significa marasmo, estagnação, depressão, sacrifício e dificuldades. A figura faz alusão ao abandono do centro histórico de São Luís do Maranhão por parte dos governos. Muitos prédios estão jogados ao tempo e sua restauração é lenta ou ineficiente. O prédio devastado e neste local acinzentado representa essa estagnação no tempo que a carta do Pendurado trás.
    `
},
    
{   name: `Death`,
    cardImage: require(`../cards-folder/card27.png`),
    keywords: `Endings, change, transformation, transition`,
    content: `A carta da morte significa transformação, mudanças bruscas, revolução e rupturas. A figura representa a morte do Boi dentro do Bumba meu Boi Maranhense. Dentro do Auto, o novilho morto por Pai Francisco é ressuscitado mais tarde pelos Cazumbas, existem outras versões. Então, o boi passa por essa transformação e sua morte não é o ponto final da história, assim como a morte no tarô. Na imagem, vemos o sangue como vinho e uma fita como sua língua. Este ritual é feito pelos grupos de Boi mais tradicionais nas Cerimônias de Morte do Boi que acontecem após o período junino.
    `
},

{   name: `Temperance`,
    cardImage: require(`../cards-folder/card29.png`),
    keywords: `Balance, moderation, patience, purpose`,
    content: `A carta da temperança significa moderação, versatilidade, adaptação, equilíbrio e sobriedade. A figura representa a adaptação, equilíbrio e a versatilidade dos biomas dentro das fronteiras do Maranhão. Aqui, nós temos o encontro da Amazônia, do cerrado, caatinga, mata de cocais e mangues, além das misturas dessas regiões que são chamadas de ecótonos.
    `
},

{   name: `The Devil`,
    cardImage: require(`../cards-folder/card31.png`),
    keywords: ` Shadow self, attachment, addiction, restriction, sexuality`,
    content: `A carta do diabo significa o adversário, vícios, fogo criativo, força, medo, tentações, volúpia e comunicação. A figura representa o Fofão, personagem do carnaval maranhense. O carnaval representa muito bem a carta do Diabo e uma figura que se tornou comum no Estado é o fofão. Eles sempre usam máscara e roupas largas com gizos, geralmente carregam pedaços de pau ou restos de bonecas. Como figuras mascaradas, eles têm a dissociação de sua humanidade e viram figuras de temor, curiosidade, fascínio ou alegria. Tradicionalmente, em São Luís, as máscaras eram feitas de papel machê, bem diferente as máscaras de borracha comumente usadas.
    `
},

{   name: `The Tower`,
    cardImage: require(`../cards-folder/card33.png`),
    keywords: ` Sudden change, upheaval, chaos, revelation, awakening`,
    content: `A carta da torre significa destruição, perigo, falha e miséria. A figura representa a destruição do Maranhão profetizada pela famosa música “Rei Rei Rei, Rei Sebastião, quem desencanta lençol vai a baixo o Maranhão”. A música retrata o que pode acontecer ao Estado, caso o Rei Sebastião seja desencantado. Para isso é necessário acertar a estrela dourada em sua testa, assim sua forma de touro seria desfeita e ele estaria livre. Dependendo da versão da história, o local destruído varia entre o Estado do Maranhão, a capital São Luís ou a Praia dos Lençóis. A imagem também retrata pontos turísticos de cidades pelo Estado.
    `
},

{   name: `The Star`,
    cardImage: require(`../cards-folder/card35.png`),
    keywords: `Hope, faith, purpose, renewal, spirituality`,
    content: `A carta da estrela significa esperança, fé, perseverança e otimismo. A figura representa o tambor de crioula e sua resistência durante os anos. São Benedito é tido como o santo do Tambor de Crioula e em seu mito fundador, teria ensinado pessoas escravizadas sobre como realizar o ritual. Hoje, o tambor de crioula é Patrimônio Cultural Imaterial do Brasil, reconhecido pelo Instituto de Patrimônio Histórico e Artístico Nacional (IPHAN) e está presente em quase todas as festas do Maranhão, principalmente em São Luís. Significa fé, resistência e esperanças da melhora de vida e perseverança da continuidade das tradições. Na imagem, a figura do São Benedito no topo da cabeça da senhora representa esse porto seguro que ilumina o caminho dos fieis e dos brincantes que participam do Tambor.
    `
},

{   name: `The Moon`,
    cardImage: require(`../cards-folder/card37.png`),
    keywords: ` Illusion, fear, anxiety, subconscious, intuition`,
    content: `A carta da lua significa depressão, ilusões, insegurança, desafios e um caminho necessário a ser seguido. A figura representa um caranguejo chama-maré, comum nos mangues do Estado, de frente para um caminho repleto de lixo. A imagem, como um todo, representa o sofrimento ecológico por conta da ação humana. Desmatamento, erosão acelerada, especulação imobiliária e obras públicas. Infelizmente a relação com o mangue possui um peso cultural ao relacionar a mala com nojo, doenças, sujeira e a pobreza. Com o passar do tempo, esta noção vem se transformando, mas assim como a Lua, é um trabalho lento que demanda muito e muito tempo.
    `
},

{   name: `The Sun`,
    cardImage: require(`../cards-folder/card39.png`),
    keywords: `Positivity, fun, warmth, success, vitality`,
    content: `A carta do sol significa vitória, felicidade e otimismo. A figura representa a Festa do Divino, mais especificamente a salva de caixa do meio dia das caixeiras. Durante os dias de Festa, as caixeiras fazem salvas durante o nascer e pôr do sol e durante o meio dia. Ao ser erguido, o mastro determina o início da festa e ao ser derrubado, o fim. Geralmente ele assinala quem está pagando a promessa para o Divino e é enfeitado com comidas, frutas e bebidas ou somente pintado.
    `
},

{   name: `Judgement`,
    cardImage: require(`../cards-folder/card41.png`),
    keywords: `Judgement, rebirth, inner calling, absolution`,
    content: `A carta do julgamento significa renascimento, julgamento, reflexão e retrospectiva. A figura representa o momento em que o novilho do Auto do Bumba meu Boi é ressuscitado pelos Cazumbas. Estes seres representam a natureza e são como entidades sobrenaturais relacionadas à ela. São mais comuns em grupos de Bois presentes na Baixada Maranhense. Geralmente suas máscaras representam animais, sendo somente as caretas ou possuindo grandes torres no topo a qual carregam motivos.
    `
},

{   name: `The World`,
    cardImage: require(`../cards-folder/card43.png`),
    keywords: `Completion, integration, accomplishment, travel`,
    content: `A carta do mundo significa o fim, retorno ao lugar comum, sucesso e o encerramento do ciclo iniciado pelo Louco. A figura mostra o Estado do Maranhão. É difícil falar sobre cultura e de onde possam ter surgidos as coisas e na verdade, sabemos que todo que possuímos são acumulados culturais de incontáveis sociedades que vieram antes. Muitas das culturas aqui retratadas possuem suas variantes pelo Brasil, mas este baralho retratou justamente as variantes culturais dentro do Maranhão. Retratou o que nós podemos ter de diferente.
`

},


];

export default cardsObject;
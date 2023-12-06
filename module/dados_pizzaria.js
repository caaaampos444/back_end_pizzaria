    var categoria=[
        {
            id:1,
            nome:"Pizzas Grandes"
        },
        {
            id:2,
            nome:"Bebidas"
        },
        {
            id:3,
            nome:"Sobremesas"
        },
        {
            id:4,
            nome:'Pizzas Brotinho'
        },
    ]
    
    var usuarios=[
        {
            id:1,
            nome:'Maria da Silva',
            email:'mariazinha@gmail.com',
            senha:'m4r14dAsiLvA',
            telefone:'48923222984',
            endereco:[
                {
                    cidade:'Campos dos Goytacazes',
                    cep:'28022-030',
                    bairro:'Parque Penha',
                    logradouro:'Rua das Hortências',
                    numero:'177'
                }
            ]
        },
        {
            id:2,
            nome:'Pedro Gomes Dias',
            email:'pedraodocapa@gmail.com',
            senha:'pedrinhofofo11',
            telefone:'68934878320',
            endereco:[
                {
                    cidade:'Natal',
                    cep:'59122-445',
                    bairro:'Redinha',
                    logradouro:'Rua Teixeira de Castro',
                    numero:'250'
                }
            ]
        },
        {
            id:3,
            nome:'Alberto José Almeida',
            email:'albertoooo@gmail.com',
            senha:'albertogato9090',
            telefone:'63923076495',
            endereco:[
                {
                    cidade:'Piracicaba',
                    cep:'13411-159',
                    bairro:'Santa Terezinha',
                    logradouro:'Rua São José do Barreiro',
                    numero:'725'
                }
            ]
        },
        {
            id:4,
            nome:'Joao Meira',
            email:'jotaeme@gmail.com',
            senha:'vaicorinthians',
            telefone:'28922082888',
            endereco:[
                {
                    cidade:'Palmas',
                    cep:'77066-034',
                    bairro:'Setor Morada do Sol',
                    logradouro:'Avenida Ipanema',
                    numero:'510'
                }
            ]
        },
        {
            id:5,
            nome:'Maria da Silva',
            email:'mariazinha@gmail.com',
            senha:'m4r14dAsiLvA',
            telefone:'11964092984',
            endereco:[
                {
                    cidade:'Japeri',
                    cep:'26463-110',
                    bairro:'Parque Luis Gonzaga',
                    logradouro:'Rua São Luís Gonzaga',
                    numero:'1000'
                }
            ]
        }
    ]
    
    var produtos=[
        {
            id:1,
            nome:'Pizza de calabresa com queijo',
            descricao:'Pizza grande de calabresa com queijo mussarela',
            preco:16,
            avaliacao:5,
            categorias:[
                categoria[0]
            ],
            comentarios:[
                {
                    id:3,
                    usuario: usuarios[0],
                    comentario:'Pizza muito saborosa.',
                    avaliacao:5
                }
            ]
        },
        {
            id:2,
            nome:'Pizza de pepperoni com queijo',
            descricao:'Pizza grande de pepperoni com queijo mussarela',
            preco:19,
            avaliacao:4,
            categorias:[
                categoria[0]
            ],
            comentarios:[
                {
                    id:1,
                    usuario: usuarios[4],
                    comentario:'Pizza muito boa, chegou antes do esperado',
                    avaliacao:4
                }
            ]
        },
        {
            id:3,
            nome:'Pizza de pepperoni com queijo e tomate',
            descricao:'Pizza grande de pepperoni com queijo mussarela e tomate',
            preco:22,
            avaliacao:2,
            categorias:[
                categoria[0]
            ],
            comentarios:[
                {
                    id:4,
                    usuario: usuarios[2],
                    comentario:'Pizza chegou fria.',
                    avaliacao:2
                }
            ]
        },
        {
            id:4,
            nome:'Coca-Cola 2L',
            descricao:'Garrafa de 2 litros de refrigerante Coca-Cola',
            preco:14.99,
            avaliacao:5,
            categorias:[
                categoria[1]
            ],
        },
        {
            id:5,
            nome:'Cerveja Heineken',
            descricao:'Garrafa long neck de cerveja Heineken',
            preco:7.99,
            avaliacao:4.5,
            categorias:[
                categoria[1]
            ],
        },
        {
            id:6,
            nome:'Pizza brotinho de chocolate',
            descricao:'Pizza brotinho com chocolate derretido',
            preco:14,
            avaliacao:3.5,
            categorias:[
                categoria[3],
                categoria[2]
            ],
            comentarios:[
                {
                    id:2,
                    usuario: usuarios[2],
                    comentario:'Pizza saborosa, mas chegou fria',
                    avaliacao:3.5
                }
            ]
        },
        {
            id:7,
            nome:'Sundae de baunilha com cobertura de morango',
            descricao:'Sorvete de baunilha com calda de morango',
            preco:8.99,
            avaliacao:4,
            categorias:[
                categoria[2]
            ],
            comentarios:[
                {
                    id:5,
                    usuario: usuarios[1],
                    comentario:'Sorvete de qualidade e calda bem feita.',
                    avaliacao:4
                }
            ]
        },
    ]

module.exports={categoria,produtos,usuarios}
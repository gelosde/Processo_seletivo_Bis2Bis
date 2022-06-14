<h1 align="center"> Processo selteivo Bis2Bis</h1>
Banco de dados para para informações de banco de dados


## rota Post
/api/universities/

{
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains: [array de strings],

stateProvince(opcional):RS }

deve retornar

{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS }

## rota Get

/api/universities/id/:id

deve retornar :

{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS
}

/api/universities/:pagination/?country

retorna um array com ate  vinte universidades

[{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains:[array de strings],

stateProvince(opcional):RS
},{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings],

name: Universidade blablabla ,

country: brasil,

domains: [array de strings],

stateProvince(opcional):RS
},{
id: id da faculdade
alpha_two_code:"BR"

web_pages:[array de strings]

name: Universidade blablabla ,

country: brasil,

domains: [array cm elementos],

stateProvince(opcional):RS
}]

## rota Put 
/api/universities/:id

no corpo da requisição
todas as atualizações são opcionais
{
name:blablabla ,
web_pages:,
domains:,
}
retorna a univeridade atualizado

## rota DELET 
/api/universities/:id

universidade retorna "University is deleted from database"

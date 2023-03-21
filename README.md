# Olá time Sympla!
## Aqui estarei compartilhando com vocês um pouco do meu raciocínio e mais alguns detalhes sobre meu teste técnico

# Executar o projeto

> npm run install
> npm run dev

# Executar testes

> npm run test

# Layout
O layout foi um pouco mais difícil do que imaginei apenas vendo as fotos no pdf, dai eu me enrolei um pouco com ele e a escala
do projeto não ficou tão boa como eu gostaria, como eu tive alguns imprevistos quando comecei a fazer o projeto eu já fiz muita
coisa direto, então acabou que não teria tempo para ajustar essa questão, felizmente também acho que não ficou tão ruim, mas
com certeza se eu tivesse planejado e testado melhor antes de começar o resultado teria sido melhor.

# Estado global
Considerando que o teste técnico foi uma aplicação bem simples e que não tinha muitos estados para serem mantidos a nível global
achei que o ideal seria usar a context api do react para guardar esses dados, imagino que talvez na aplicação original,
dependendo da quantidade de dados já seria necessário usar o redux que é mais poderoso, do qual eu também sei usar.

# Testes
Felizmente consegui testar a maior parte do projeto e também os pontos mais importantes, talvez eu tenha deixado passar algum detalhe
ou test case mais secundário, mas acho que está tudo bem. Testei todos os componentes e os hooks também, mas não testei as páginas inteiras
então no caso foram apenas testes unitários, novamente foi mais questão de tempo pelos imprevistos, acredito que também não teria tido problemas
em testar a compra de um ingresso do inicio ao fim já que todos os componentes que fazem essa funcionalidade funcioam e passaram nos testes.

# Carrinho
Foi bem tranquilo fazer a transição de páginas e ter acesso aos estados globais na página do carrinho, aproveitei e fiz
uma animação legal no botão "VER INGRESSOS", apesar disso, a parte de trás de card não ficou com um layout muito bom,
mas me faltou um pouco de criatividade para fazer algo mais agradável aos olhos.

# Responsividade
Eu fiz a responsividade usando os breackpoints: 1200, 992, 768 e 480. Normalmente eu também teria feito em 320, porém achei
que ficou espremido demais e que não ficaria bom assim, também imagino que hoje em dia seja dificil um smartphone com tela
de "320px" então acho que não foi uma decisão tão ruim.

# Tagueamento com Google Analytics usando data layers e Ferramentas de avaliação de performance
Não tenho muita experiencia com esses tópicos, então acabou que não consegui implementá-los no projeto. As experiencias que tive com otimização de performance
foram mais brutas, de forma que era perfeitamente visível a diferença, dai tinha que usar code splitting, lazy loading, verificar re-renders extras do react
e coisas mais diretamente relacionadas ao código. Da mesma forma, não tive experiencias com tagueamento com google analytics pois os produtos que já contribui
eram feitos para um público fechado, então não precisavam possuir esse quesito. Mas com certeza é algo que estarei estudando e aprendendo nas próximas semanas
já que vi que é algo a mais que posso adicionar ao meu repertório.

# Palavras finais
Apesar de ser um projetinho simples e pequeno ele deu um trabalho legal, o layout com todos esses detalhes foi o que mais
tomou tempo, fazer a organização das pastas/arquivos, a responsividade, testes e ajustes finais foram até que rápidos.
Eu tive alguns imprevistos então não tive tanto tempo quanto gostaria para deixar o melhor possível, mas acredito que
o resultado já seja bem satisfatório e mostre bastante tudo que eu sei. Agradeço pela oportunidade!
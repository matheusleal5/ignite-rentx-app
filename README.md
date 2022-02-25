**RF -> Requisitos Funcionais**

**RNF -> Requisitos não Funcionais**

**RN -> Regra de Negócio**


# Cadastro de carro

**RF**
-> Deve ser possível cadastrar um novo carro.

**RN**
-> * Não deve ser possível cadastrar um carro com um usuário sem privilégios de administrador.
-> Não deve ser possível cadastrar um carro com um placa já existente.
-> Deve ser possível cadastrar um carro sempre com a disponibilidade ativa por padrão.


# Listagem de carros

**RF**
-> Deve ser possível listar todos os carros disponíveis.
-> Deve ser possível listar todas as categorias.
-> Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
-> Deve ser possível listar todos os carros disponíveis pelo nome da marca carro.
-> Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
-> Deve ser possível visualizar a listagem de carros sem se autenticar no sistema.

# Cadastro de Especificação no carro

**RF**
-> Deve ser possível cadastrar uma especificação para um carro.
-> Deve ser possível listar todas as especificações.
-> Deve ser possível listar todos os carros.

**RN**
-> Não deve ser possível cadastrar uma especificação com um usuário sem privilégios de administrador.
-> Não deve ser possível cadastrar uma especificação para um carro não existente.
-> Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.


# Cadastro de Imagens do Carro

**RF**
-> Deve ser possível cadastrar a imagem do carro.
-> Deve ser possível listar todos os carros.

**RNF**
-> Utilizar o multer para upload dos arquivos.

**RN**
-> O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
-> O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro

**RF**
-> Deve ser possível cadastrar um aluguel.

**RN**
-> O aluguel deve ter duração mínima de 24h, ou seja, 1 dia.
-> Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
-> Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
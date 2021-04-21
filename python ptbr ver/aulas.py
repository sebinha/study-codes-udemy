# aula2
'''
print('824' , '176' , '070',sep='.',end='-')
print("18")
'''
# aula3

'''
str = string


print("isso e uma 'string' (str)")
print('isso e uma "string" (str)')
print(r"isso e um \n",'\n (str).') 
'''

# aula 4

'''
str -  string - textos "oi" 'oi'
int - inteiro - 3 2 1 0 -1 -2 -3
float - real/ponto flutuante - 1.5 2.4 3.3 0.0 -1.2 -2.3 -3.4
bool - booleano/logico - True/False 10==10 > True, 10==9 > False

print("Victor", type('Victor'))
print(1, type(1))
print(1.1, type(1.1))
print(10==10, type(10==10))
print(10==9, type(10==10))
print(type('victor'), bool(0))

str(input("Digite seu nome: "))

'''

# aula 5

'''
operadores
+, - , *, /, //, **, %, ()

print('Soma +' , 10+3)
print('Subtacao -' , 10-3)
print('Multiplicacao * ', 10*3)
print('Divisao /', 10/3)
print('Divisao inteira //', 10//3 )
print('Exponencial **', 10**3)
print('Resto %', 10%3 )
'''

# aula 6

'''

iniciar com letra, pode conter numero, separar com _, letras minusculas

'''
'''
nome = 'victor'
idade = 21
altura = 1.82
peso = 78
imc = peso/(altura*altura)
print(nome, ' tem ', idade, ' anos de idade e seu imc e:', imc)
'''


# aula 7
'''
print(f'{nome} tem {idade} anos e seu imc e: {imc:.2f}')
print('{} tem {} anos e seu imc e {:.2f}'.format(nome, idade,imc))
print('{0}{2:.2f}{1} tem {1}{2:.2f}{0} anos e seu imc e {2:.2f}{0}{1}'.format(nome, idade,imc))
'''

# exercício

'''
nome= 'Victor Fernandes Cardoso'
idade= 21
altura= 1.82
peso= 78
ano_atual=2020
nascimento=ano_atual-idade
imc=peso/(altura**2)
print('{0} tem {1} anos, {2} de altura e pesa {3}kg.\nO IMC de {0} eh {5:.2f}.\n{0} nasceu em {4}.'.format(nome, idade, altura, peso, nascimento, imc))
'''

# aula 8
'''
nome = input("Nome? ")
idade = int(input("Idade? "))
'''

'''
Operadores Relacionais

== > >= < <= !=

Operadores Lógicos

and, or, not
in e not in

'''
'''
usuario1 = input('Digite o seu nome: ')
usuario2 = input('Digite seu sobrenome: ')

print(f'O numero de caracteres somado eh {len(usuario1) + len(usuario2)}')
'''
'''
num1 = input('Digite um número: ')
num2 = input('Digite outro número: ')

#isnumeric isdigit isdecimal
#numeros e positivos <- isnumeric


if (num1.isdigit()) and (num2.isdigit()):
    num1 = int(num1)
    num2 = int(num2)
    s = (num1+num2)
    print(s)

elif (num1.isdigit()) and not (num2.isdigit()):
    print("Numero 2 inválido")

elif not (num1.isdigit()) and (num2.isdigit()):
    print("Numero 1 inválido")

elif not (num1.isdigit()) and not (num2.isdigit()):
    print("Numero 1 e 2 inválido")

'''
'''
while(1):
    num = input('Digite um numero inteiro: ')

    if (num.isdigit()):
        num = int(num)
        if (num%2) == 0:
            print(f'{num} é par')
        else:
            print(f'{num} é ímpar')
    elif ((num.isalpha()) or (num == None)):
        print(f"'{num}', isso não é um número")
    else:
        print("Não é inteiro")
    
'''

'''
while(1):
    ola = input("Que horas são?")
    c= int(ola)
    if (c >= 0) & (c <= 11):
        print("Bom dia")
    elif (c > 11 ) & (c <= 17):
        print("Boa tarde")
    elif (c > 17 ) & (c <= 23):
        print("Boa noite")
    else:
        print("Digite um horário entre 0 e 23")
    
'''
'''
formatar float :.'numero'f << sem aspas ex :.2f '2' casa decimal
formatar p tamanho específico >> 1:0>10 << preenchido c 10 casas de numeros zeros resultado == 0000000001 ou quiser zeros a direita 1:0<10 resultado == 1000000000
> - esquerda
< - direita
^ - centro

'''
'''
fatiamento de strings (inicio:fim:passo)
built-in, len, abs, type, print

'''
'''
# posit [012345]
texto = 'victor'
# nega -[654321]
print(texto[0:6:2])
print(len(texto))

for i in texto:
    print(i)

'''
'''
x=0

while x <= 5:
    y = 0

    while y <= 5:
        print(f'({x},{y})')
        y +=1

    x += 1

'''
# iterando strings com while em python
'''
pergunta=input("Deseja fazer uma contagem de frase? [s]im ou [n]ão ")

while pergunta == 's':

    frase = input("Digite uma frase: ")
    b=len(frase)
    c=0
    print(frase.count('a'))
    novo=''
    while c<b:
        conta=frase.count(frase[c])

        d=b-c
        print(f'({c}, {frase[c]}, {conta})\t', f'({d-1}, {frase[d-1]})')

        if frase[c] == 'r':
            novo += frase[c].upper()
        else:
            novo += frase[c]
        c +=1    
    print(novo)
    pergunta=input("Deseja continuar? [s]im ou [n]ão ")
    if pergunta == 'n':
        print("ok")
    elif pergunta != 'n' and pergunta != 's':
        print("ERRO")
'''

# For In em Python
# Iterando strings com for
# Função range(start=0, stop, step=1)


'''
for i, letra in enumerate(frase):
    print(i, letra)

for i in range(0,10,2):
    print(i)

frase = 'fodasse'
novo = ''
for i in frase:
    if i == 's':
        novo = novo + i.upper()
    elif i == 'f':
        novo = novo + i.upper()
    else:
        novo += i

print(novo)

'''

# Listas em python
# Fatiamento
#    v       v      v   v     v             v    v     v
# append, insert, pop, del, clear, extend, min, max, range
'''
lista1 = ['A', 'B', 'c', 'd', 10.5, 10, True]
lista2 = [1, 5 , 'Victor']
listarange = list(range(0,100,8))

lista3 = lista1 + lista2
print(lista3)
print(listarange)
'''
'''
a='sim'
while a == 'Sim' or a == 'sim':
    secreto = input("Digite a sua palavra: ")
    tamanho = len(secreto)
    listasecreto = list(secreto)
    listacerta = listasecreto.copy()
    print('\n\n\n\n\n\n\n\n\n\n\n\n\n')

    for c, bo in enumerate(listacerta):
        listacerta[c] = ' '
    a = 'nao'

    while a == 'nao' or a == 'Nao' :
        if listacerta == listasecreto:
            print("Parabéns")
            a = input("Deseja jogar de novo? (sim ou nao) ")
            if a == 'Sim' or a == 'sim':
                break
            else:
                break
        
        while a == 'nao' or a == 'Nao':
            letra = input("Digite uma letra: ")
            if len(letra) > 1:
                print("Isso não vale, apenas um caractér")
                break
            for i, co in enumerate(listasecreto):
                if co in letra:
                    print("Essa letra está presente")
                    listacerta.pop(i)
                    listacerta.insert(i,co)
                    print(listacerta)
            break
'''
'''
nome="Victor Fernandes"
for c,b in enumerate(nome):
    print(c,b)
   '''
'''
variavel = ['Victor', 'Fernandes', 'Cardoso']
letra = input("Digite uma letra: ")
for valor in variavel:
    if valor.lower().startswith(letra):
        print(f'Começa com a letra {letra}')
    else:
        print("Não começa com essa letra")
'''

'''

Split, Join e Enumerate em Python

Split - Dividir uma string # str
Join  - Juntar uma lista # str
Enumerate - Enumerar elementos da lista # list / iteráveis

'''
'''
str = "Testando split, join e enumerate e e e e"

lista =  str.split(' ')
lista2 = str.split(',')
str2 = ','.join(lista)
str3 = ' '.join(lista)
print(str)
print(lista)
print(str2)
print(str3)

for valor in lista2:
    print(valor.strip().capitalize())

for numeros, letras in enumerate(lista):
    print(numeros, letras, lista[numeros])

lista_com_listas = [
    [1,2],
    [3,4],
    [5,6],
]

for v in lista_com_listas:
    print(v)

for v1,v2 in enumerate(lista_com_listas):
    print(v1,v2)

n1,n2,n3 = lista_com_listas
print(n2)

'''

# DESEMPACOTAMENTO DE LISTAS
'''
lista = ['Ordem1', 'Ordem2', 'Ordem3', '0','1','2','3','4','5','6','7','8','9']


*outra_lista, n1,n2,n3 = lista

print(n1,n2,n3)
print(outra_lista)
str = ' '.join(outra_lista)
print(str)

'''

# join só funciona c string

'''
x = 10 # Victor
y = 'Victor' # 10
z = True

x,y,z = z,x,y
print(f'x={x} e y={y} e z={z}')


'''

# Operador Ternário
'''

idade = input('Digite a idade: ')

if not idade.isnumeric():
    print('Só números')
else:
    idade = int(idade)
    e_de_maior = (idade >= 18)
    msg = 'Maior de idade' if e_de_maior else 'Menor de idade'
    print(msg)


if idade >=18:
    print('Maior de idade')
else:
    print('Menor de idade')


usuario_logado = False

msg = 'Usuário logado' if usuario_logado else 'Usuário precisa logar'
print(msg) 

if usuario_logado: # == True
    msg = 'Usuário logado'
else:
    msg = 'Usuário precisa logar'
print(msg)
'''
'''
nome = input('Seu nome: ')

print(nome or 'Nada digitado')

if nome:
    print(nome)
else:
    print('Nada digitado')
'''
'''
a = 0
b = None
c = False
d = []
e = {}
f = 21 # <-- pega esse por ser True
g = 'Victor' # <-- caso n tivesse o 22 seria esse o escolhido

variavel = a or b or c or d or e or f or g
print(variavel)
'''

'''
desafio
for / while

0 9
1 8
2 7
3 6
4 5
5 4
6 3
7 2
8 1
9 0



lista  = [9,8,7,6,5,4,3,2,1,0]

for p, r in enumerate(range(9,-1,-1)):
    print(p,r)

for v1,v2 in enumerate(lista):
    print(v1,v2)

c = 0
while lista[0] >=  c:
    print(c, lista[c])
    c +=1



cpf = 168.995.350-09                #
                                    #
1 *10 = 10                          # 1* 11 = 11
6 * 9 = 54                          # 6 * 10 = 60
8 * 8 = 64                          # 8 * 9 = 72
9 * 7 = 63                          # 9 * 8 = 72
9 * 6 = 54                          # 9 * 7 = 63
5 * 5 = 25                          # 5 * 6 = 30
3 * 4 = 12                          # 3 * 5 = 15
5 * 3 = 15                          # 5 * 4 = 20
0 * 2 = 0                           # 0 * 3 = 0
                                    # 0 * 2 = 0
# soma das multiplicações = 297     # #soma das multiplicações = 343
                                    # 11 - (343 % 11) = 9
formula = 11 - (297%11) = 11        #
if 11 > 9 = 0                       # digito 2 = 9
digito 1 = 0                        #

'''
'''
cpf  = input("Digite seu cpf com ou sem ponto/hífen: ")

contagem1=list(range(10,1,-1))
contagem2=list(range(11,1,-1))
lista_cpf = []
for v1, v2 in enumerate(cpf):
    if v2.isnumeric():
        lista_cpf.append(v2)
    else:
        continue
*lista_cpf, digito1,digito2 = lista_cpf

y=0
x=0
i=0
while contagem1[i] > 2:
    x = contagem1[i]*int(lista_cpf[i])
    i +=1
print(contagem1)
print(lista_cpf)
print(y)
z = (11 - (y % 11))
if z > 9:
    digito1 = 0
else:
    digito1 = z

lista_cpf.append(digito1)

y=0
x=0
i=0
while contagem2[i] > 2:
    x = contagem2[i]*int(lista_cpf[i])
    y += x
    i+=1
print(y)
z = (11 - (y % 11))
if z > 9:
    digito2=0
else:
    digito2 = z

lista_cpf.append(digito2)
print(lista_cpf)


cpf = '39638668881'
novo_cpf = cpf[:-2]
reverso = 10
total = 0
for index in range(19):
    if index > 8:
        index -=9
    
    total += int(novo_cpf[index]) * reverso

    reverso -=1
    if reverso < 2:
        reverso = 11
        d = 11 - (total % 11)
    
        if d > 9:
            d = 0
        total = 0
        novo_cpf += str(d)

print(novo_cpf)

'''
'''
reverso = 10
soma=0
digito=0
novo_cpf = lista_cpf[:-2]

for b1 in range(19)):
    if b1 > 8:
        b1 -=9
    soma += int(novo_cpf[b1]) * reverso
    reverso -= 1  

    if reverso < 2:
        reverso = 11
        digito = 11 - (soma % 11)
        if digito > 9:
            digito = 0
        soma = 0
        novo_cpf += str(digito)
print(novo_cpf)
'''
'''
from random import randint
#Gerador de CPF

numero = str(randint(100000000,999999999))

cpf = numero
lista_cpf=[]
for v1,v2 in enumerate(cpf):
    if v2.isnumeric():
        lista_cpf.append(v2)

novo_cpf = lista_cpf
total = 0
d=0
contador = 10

for v1 in range(19):
    if v1 > 8:
        v1 -=9
    total += int(novo_cpf[v1]) * contador
    contador -=1

    if contador < 2:
        contador = 11
        d= 11 - (total % 11)
        if d > 9:
            d = 0
        total = 0
        novo_cpf += str(d)
print(novo_cpf)

if lista_cpf == novo_cpf:
    print("Válido")
else:
    print("Inválido")


'''
# Funções - def em python pt1
'''
def funcao(msg='Olá', nome='Pessoa'):
    nome = nome.replace('e','3')
    msg = msg.replace('O', '0')
    return f'{msg} {nome}'


variavel = funcao()

print(variavel)

funcao('ola', 'victor')
funcao()
funcao('ola')
funcao(nome='Fulano', msg='salve')


def funcao(var):
    return var

variavel = funcao('teste')

print(variavel)
funcao('printa ae')

if variavel:
    print(variavel)
else:
    print('valor nenhum')
'''
'''
def div(v1,v2):
    if v2>0:
        return v1/v2

divisao = div(10,3)
if divisao:
    print(divisao)
else:
    print('Invalido')
'''

# exercicios função python

# 1
'''
def saud(ola, nome):
    if saud:
        print(ola,nome)
    
    return

x = input("digite uma saudação: ")
y = input("digite seu nome: ")
saudacao = saud(x,y)
'''

# 2
'''
def soma(x,y,z):
    print(x+y+z)




soma1 = int(input("Digite o primeiro valor: "))
soma2 = int(input("Digite o segundo valor: "))
soma3 = int(input("Digite o terceiro valor: "))

soma(soma1,soma2,soma3)
'''
# 3

'''
def porcentagem(valor,porcento):
    return (valor+(valor*porcento/100))


x = int(input("Digite o valor: "))
y = int(input("Digite o porcento: "))

print(porcentagem(x,y))
'''

# 4

'''
def fizzbuzz(x):
    if x % 5 == 0 and x % 3 == 0:
        return 'FizzBuzz'
    elif x % 5 != 0 and x % 3 != 0 :
        return f'Número enviado = {x}'
    elif x % 3 == 0:
        return 'Fizz'
    else:
        return 'Buzz'


numero = int(input("Digite um número: "))
print(fizzbuzz(numero))
'''

'''

Funções (def) em Python - *args **kwargs - PT3

'''
'''
def func(a1, a2, a3, a4, a5, nome=None, a6=None):
    print(a1,a2,a3,a4,a5,nome,a6)
    return nome, a6

var =  func(1,2,3,4,5,nome='Victor',a6='5')
print(var, var[0], var[1])
'''

# ' * ' << desempacota listas

'''
def func(*args, **kwargs):
    print(args)
    print(kwargs['nome'], kwargs['sobrenome'])

    idade = kwargs.get('idade')
    if idade is not None:
        print(idade)
    else:
        print(idade)

    
    for v in args:
        print(v)
    '''

'''
    args = list(args)
    args[0] = 20
    print(args)
    '''

'''
    print(args)
    print(args[0])
    print(args[-1])
    print(len(args))
    '''

'''
lista = [1, 2, 3, 4, 5]
lista2 = [10, 20, 30, 40, 50]
func(*lista, *lista2, nome='Victor', sobrenome='Fernandes')
'''
'''
lista = [1, 2, 3, 4, 5]

print(lista)
print(*lista)
print(*lista, sep='-')
n1, n2, *n = lista
print(n1, n2, n)
'''

# Exercícios Aula 56

# 1-

'''
def ola_mundo():
    return 'Ola mundo'


def mestre(funcao):
    print(funcao)


exec = ola_mundo()
mestre(exec)
'''

# 2-

'''
def fala_oi(nome):
    return f'Oi {nome}'


def saudacao(nome, saudacao):
    return f'{saudacao} {nome}'


def exec2func(*args, **kwargs):
    print(*args, **kwargs)


nome = 'victor'
saudac = 'eai'

x = fala_oi(nome)
y = saudacao(nome, saudac)

exec2func(x, y)
'''
'''
lista = [['P1', 5],
         ['P2', 15],
         ['P3', 10],
         ['P4', 50],
         ['P5', 25],
         ]

#lista.sort(key=lambda sorting: sorting[1], reverse=True)
print(sorted(lista, key=lambda i: i[1]))
'''

# Tuplas
'''
t1 = (1, 2, 3, 'a', 'victor')
t1 = list(t1)
t1[1] = 2000
print(t1)
t1 = tuple(t1)
print(t1)
'''
'''
t1 = (1, 2, 3, 'a', 'victor') * 20 << retirar o 20

print(t1)

t2 = 1, 2, 3, 4, 5, 'oi'
t3 = t1 + t2
print(t2, type(t2))
print(t1[::-1], type(t1))
for v in t1:
    print(v)
print(t3)

n1, n2, n3, *resto, ultimo = t3

print(f'{n3} valor de n3, {resto} valor do resto, {ultimo} valor do ultimo')
'''


# DICIONARIOS
'''
d1 = {
    1: 2,
    3: 4,
    5: 6,
}

d2 = {
    'a': 'b',
    'c': 'd',
    'e': 'f',
}
# d1.pop(1)
# d1.popitem()
# print(d1)

d1.update(d2)
print(d1)
'''
'''
lista = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
]
lista2 = (
    ['a', 1],
    ['b', 2],
    ['c', 3],
)
lista3 = [
    ('a', 1),
    ('b', 2),
    ('c', 3),
]
d1 = dict(lista)
d2 = dict(lista2)
d3 = dict(lista3)
print(d1)
print(d2)
print(d3['c'])
'''

'''
import copy
d1 = {1: 'a', 2: 'b',3: 'c', 'd' : ['Victor', 'Fernandes']}
v = copy.deepcopy(d1)
v[1] = 'Victor'
v['d'][0] = 'Teste'
# Não usar v = d1 pois o '=' faz com que ocupem o mesmo lugar na memoria
# Não usar copy() quando existir uma lista no dicionário, usar import copy e depois copy.deepcopy(), copy() funciona com tuplas
print(d1)
print(v)
'''

'''
clientes = {
    'cliente_1': {
        'nome': 'Victor',
        'sobrenome': 'Fernandes',
    },
    'cliente_2': {
        'nome': 'João',
        'sobrenome': 'Pedro',
    },
}

for clientes_k, clientes_v in clientes.items():
    print(f'Mostrando o {clientes_k}')
    for dados_k, dados_v in clientes_v.items():
        print(f'\t{dados_k} =  {dados_v}')
'''

'''
d1 = {
    'str': 'valor',
    123: 'Outro valor',
    (1, 2, 3, 4): 'Tupla'
}

for k, v in d1.items():
    print(k, v)
'''
# print(len(d1))

'''
print('str' in d1)
print('str' in s1.keys())
print('valor' in d1.values())
del d1['str']
print(d1)
'''
'''
d1['str'] = 'novo valor'
d1['nomedachave'] = 'chave criada'
if d1.get('nomedachave') is not None:
    print(d1.get('nomedachave'))

print(d1['str'])
'''
# print(d1.get('nomedachave'))
'''
d1 = dict(chave2='valor da chave2', chave3='valor da chave 3')
#d1 = {'chave1': 'valor da chave', 'chave4': 'valor da chave4'}
d1['nova_chave'] = 'Valor da nova chave'

print(d1)
'''

# Sistema de perguntas e respostas com dicionários em python
'''
perguntas = {
    'Pergunta 1': {
        'pergunta': 'Quanto é 5+5?',
        'respostas': {
            'a': '9',
            'b': '15',
            'c': '10',
            'd': '11'
        },
        'resposta_certa': 'c',
    },
    'Pergunta 2': {
        'pergunta': 'Quanto é 7*3?',
        'respostas': {
            'a': '9',
            'b': '15',
            'c': '10',
            'd': '21'
        },
        'resposta_certa': 'd',
    },
}
respostas_certas = 0
for pk, pv in perguntas.items():
    print(f'\n{pk}: {pv["pergunta"]}')

    print('\nRespostas: ')
    for rk, rv in pv['respostas'].items():
        print(f'({rk}) {rv}')

    resposta_usuario = input('Digite sua resposta: ')
    if resposta_usuario == pv['resposta_certa']:
        print('Acertou')
        respostas_certas += 1
    else:
        print('Errou')

qnt_perguntas = len(perguntas)
porcentagem_acerto = (respostas_certas/qnt_perguntas)*100
print(f'Você acertou: {respostas_certas} questões')
print(f'Você acertou: {porcentagem_acerto}% das questões')
'''

# SETS/CONJUNTOS EM PYTHON

# add (adiciona), update (atualiza), clear, discard
# union | (une)
# intersection & (todos os elementos presente nos dois sets)
# difference - (elementos apenas no set da esquerda)
# symmetric_difference ^ (Elementos que estão nois dois sets, mas não em ambos)
'''
s1 = {1, 2, 3, 4, 5, 6}
s2 = {1, 2, 3, 4, 5, 7}
s3 = s1 | s2
s4 = s1 & s2
s5 = s1 - s2
s6 = s1 ^ s2
print(f'\n{s3} : União, \n {s4} : Interseccção, \n{s5} : Diferença,\n {s6} : Diferença Simétrica')
'''
'''
l1 = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 'Victor', 'Victor']
l2 = set(l1)
l3 = list(l2)
print(l1, l2, l3)
'''

'''
s1 = set()
s1.update('a')
s1.update('Python')
s1.update(['Python'])
s1.update([0, 2, 3, 4, 5], {1,5, 6, 7, 8})

print(s1)
'''
# s1.add(1)
# s1.add(2)
# s1.discard(2)


# Exercício Aula 63

"""
-> É uma lista de listas de números inteiros
-> As listas internas tem o tamanho de 10 elementos
-> As listas internas contém números entre 1 a 10 e eles podem ser duplicados
Exercício
-> Crie uma função que encontra o primeiro duplicado considerando o segundo
    número como a duplicação. Retorne a duplicação considerada.
        Requisitos:
            A ordem do número duplicado é considerada a partir da segunda
            ocorrência do número, ou seja, o número duplicado em si.
            Exemplo:
                [1, 2, 3, ->3<-, 2, 1] -> 1, 2 e 3 são duplicados (retorne 3)
                [1, 2, 3, 4, 5, 6] -> Retorne -1 (não tem duplicados)
            Se não encontrar duplicados na lista, retorne -1
"""


lista_de_listas_de_inteiros = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [9, 1, 8, 9, 9, 7, 2, 1, 6, 8],
    [1, 3, 2, 2, 8, 6, 5, 9, 6, 7],
    [3, 8, 2, 8, 6, 7, 7, 3, 1, 9],
    [4, 8, 8, 8, 5, 1, 10, 3, 1, 7],
    [1, 3, 7, 2, 2, 1, 5, 1, 9, 9],
    [10, 2, 2, 1, 3, 5, 10, 5, 10, 1],
    [1, 6, 1, 5, 1, 1, 1, 4, 7, 3],
    [1, 3, 7, 1, 10, 5, 9, 2, 5, 7],
    [4, 7, 6, 5, 2, 9, 2, 1, 2, 1],
    [5, 3, 1, 8, 5, 7, 1, 8, 8, 7],
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
]

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/', methods=['POST'])
def sua_funcao():
    # Acessar os dados POST
    data = request.json

    # Agora 'data' contém os dados POST em formato JSON
    # Faça o que você precisa fazer com esses dados
    print(data["cars_quantity"])

    # Responda à solicitação, se necessário
    return jsonify({"message": "Dados POST recebidos com sucesso"})

if __name__ == '__main__':
    app.run()
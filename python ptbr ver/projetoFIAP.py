import cv2
import cvlib as cv
from cvlib.object_detection import draw_bbox
import requests
import numpy as np
from PIL import Image
from io import BytesIO
import threading
import time
from uuid import uuid4
import json

# URL do servidor que gera imagens

url1 = 'http://192.168.15.152'
url2 = 'http://192.168.15.181'

# Semaforo do servidor que gera imagens
semaforo1 = f'{url1}/capture'
semaforo2 = f'{url2}/capture'

# Variáveis para rastrear a última maior quantidade de carros detectados
max_car_count = 0
last_max_car_objects = []

# Lista para armazenar os objetos detectados
detected_objects = []

# Mutex para controle de acesso à lista de objetos
mutex = threading.Lock()

# Variável para indicar quando parar a execução
stop_execution = False  # Definindo stop_execution como False

# Função para realizar a detecção de objetos
def detect_objects(image):
    global detected_objects

    # Realizar a detecção de objetos com YOLOv3 usando cvlib
    bbox, label, conf = cv.detect_common_objects(image, confidence=0.4, model='yolov3')

    # Criar uma lista para armazenar as detecções do frame atual
    current_frame_objects = []

    # Processar os resultados da detecção
    for lb, cf in zip(label, conf):
        object_id = str(uuid4())
        object_label = f"{lb}_{object_id} ({cf:.2f})"
        current_frame_objects.append(object_label)

    # Remover objetos que não foram detectados no frame atual
    detected_objects = current_frame_objects

    # Desenhar os retângulos delimitadores nos objetos detectados
    output_image = draw_bbox(image, bbox, label, conf)

    # Exibir a imagem com as detecções
    # cv2.imshow("Detecção de Objetos em Tempo Real", output_image)

# Função para obter a imagem do servidor
def get_image():
    while not stop_execution:
        try:
            # Obter a imagem do servidor
            response = requests.get(semaforo1)
            image = np.array(Image.open(BytesIO(response.content)))
            detect_objects(image)
        except Exception as e:
            print("Erro ao obter ou processar a imagem:", e)
            break

# Função para enviar GET e trocar cor do led
def set_traffic_light_color(url, red, yellow, green, pred, pgreen):
    try:
        response = requests.get(f'{url}:81/semaforo?r={red}&y={yellow}&g={green}&pr={pred}&pg={pgreen}')
        if response.status_code == 200:
            print("Status do semaforo atualizado com sucesso.")
        else:
            print("Falha ao atualizar o status do semáforo.")
    except Exception as e:
        print("Erro ao enviar a solicitação para o semáforo:", e)

# Função para controlar o semáforo em uma thread separada


def is_pedestrian_traffic_light_red(pedestrianRed):
    global max_car_count

    if pedestrianRed == True:
        # Se o semáforo estiver vermelho, aguarde por X segundos
        traffic_light_counter = 20
        max_car_count = 0
        cars_5_happened_once = False
        cars_10_happened_once = False
        set_traffic_light_color(url1, 1, 0, 0, 1, 0)
        set_traffic_light_color(url2, 1, 0, 0, 0, 1)   # Liga o último LED
        for _ in range(traffic_light_counter):
            if traffic_light_counter > 0:
                print(f'Tempo atual com pedestre fechado: {traffic_light_counter}s')
                if ((max_car_count in range(5,9)) & (cars_5_happened_once == False) & (traffic_light_counter >= 5)):         
                    traffic_light_counter -= 5
                    cars_5_happened_once = True
                    print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 5s, tempo atual com pedestre fechado: {traffic_light_counter}s')
                    max_car_count = 0
                elif ((max_car_count >= 10) & (cars_10_happened_once == False) & (traffic_light_counter >= 10)):
                    if cars_5_happened_once == True:
                        traffic_light_counter -= 5
                        cars_10_happened_once = True
                        print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 5s, tempo atual com pedestre fechado: {traffic_light_counter}s')
                        max_car_count = 0
                    elif cars_5_happened_once == False:
                        traffic_light_counter -= 10
                        cars_10_happened_once = True
                        print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 10s, tempo atual com pedestre fechado: {traffic_light_counter}s')
                        max_car_count = 0
                traffic_light_counter -= 1
            else:
                break
            time.sleep(1)
    else:
        # Se o semáforo estiver vermelho, aguarde por X segundos
        traffic_light_counter = 20
        max_car_count = 0
        cars_5_happened_once = False
        cars_10_happened_once = False
        set_traffic_light_color(url1, 1, 0, 0, 0, 1)
        set_traffic_light_color(url2, 0, 0, 1, 1, 0) 
        for _ in range(traffic_light_counter):
            if traffic_light_counter > 0:
                print(f'Tempo atual com pedestre aberto: {traffic_light_counter}s')
                if ((max_car_count in range(5,9)) & (cars_5_happened_once == False) & (traffic_light_counter >= 5)):         
                    traffic_light_counter -= 5
                    cars_5_happened_once = True
                    print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 5s, tempo atual com pedestre aberto: {traffic_light_counter}s')
                    max_car_count = 0
                elif ((max_car_count >= 10) & (cars_10_happened_once == False) & (traffic_light_counter >= 10)):
                    if cars_5_happened_once == True: 
                        traffic_light_counter -= 5
                        cars_10_happened_once = True
                        print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 5s, tempo atual com pedestre aberto: {traffic_light_counter}s')
                        max_car_count = 0
                    elif cars_5_happened_once == False:
                        traffic_light_counter -= 10
                        cars_10_happened_once = True
                        print(f'Com {max_car_count} veiculos detectados, o tempo foi reduzido em 10s, tempo atual com pedestre aberto: {traffic_light_counter}s')
                        max_car_count = 0
                traffic_light_counter -= 1
            else:
                    break
            time.sleep(1)



def control_traffic_light():
    global max_car_count  # Declare a variável global

    while not stop_execution:

        is_pedestrian_traffic_light_red(True)

        for _ in range(5):
            set_traffic_light_color(url2, 1, 0, 0, 0, 1)
            time.sleep(1)
            set_traffic_light_color(url2, 1, 0, 0, 0, 0)   
            time.sleep(1)

        set_traffic_light_color(url2, 1, 0, 0, 1, 0) 
        set_traffic_light_color(url1, 0, 0, 1, 1, 0)

        time.sleep(5)

        set_traffic_light_color(url1, 0, 1, 0, 1, 0)

        time.sleep(5)

        is_pedestrian_traffic_light_red(False)

        set_traffic_light_color(url2, 0, 1, 0, 1, 0)

        time.sleep(5)

        set_traffic_light_color(url2, 1, 0, 0, 1, 0)

        for _ in range(5):
            set_traffic_light_color(url1, 1, 0, 0, 0, 1)
            time.sleep(1)
            set_traffic_light_color(url1, 1, 0, 0, 0, 0)   
            time.sleep(1) 

        set_traffic_light_color(url1, 1, 0, 0, 1, 0)        

# Função para imprimir os objetos detectados
def print_detected_objects():
    global detected_objects, max_car_count, last_max_car_objects

    while not stop_execution:
        try:
            with mutex:
                filtered_objects = [obj for obj in detected_objects if obj.split('_')[0] in ["car", "motorcycle", "bus", "truck", "bicycle", "person"]]
                car_count = len(filtered_objects)

                # Verificar se a quantidade atual é maior do que a última quantidade máxima
                if car_count > max_car_count:
                    max_car_count = car_count
                    last_max_car_objects = filtered_objects

                # count = len(filtered_objects)
                # if count > 0:
                #     print(f"{count} Itens detectados nos ultimos 5 segundos")
                #     for obj in filtered_objects:
                #         label, _ = obj.split('_')
                #         print(f"   {label.capitalize()}: {obj}")
                # else:
                #     print("Nenhum objeto detectado nos ultimos 5 segundos.")
                detected_objects.clear()  # Limpar a lista após a impressão
        except KeyboardInterrupt:
            break

if __name__ == "__main__":
    # Iniciar a thread de impressão
    printing_thread = threading.Thread(target=print_detected_objects)
    printing_thread.daemon = True
    printing_thread.start()

    # Iniciar a thread de captura de imagem
    image_thread = threading.Thread(target=get_image)
    image_thread.daemon = True
    image_thread.start()

     # Iniciar a thread de controle do semáforo
    traffic_light_thread = threading.Thread(target=control_traffic_light())
    traffic_light_thread.daemon = True
    traffic_light_thread.start()

    # Aguardar o encerramento do programa
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            stop_execution = True
            break

    cv2.destroyAllWindows()
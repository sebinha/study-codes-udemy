# Função para enviar GET e trocar cor do led
def set_traffic_light_color(red, yellow, green, pred, pgreen):
    try:
        response = requests.get(f'http://192.168.240.152:8000/semaforo?r={red}&y={yellow}&g={green}&pr={pred}&pg={pgreen}')
        if response.status_code == 200:
            print("Status do semaforo atualizado com sucesso.")
        else:
            print("Falha ao atualizar o status do semáforo.")
    except Exception as e:
        print("Erro ao enviar a solicitação para o semáforo:", e)

# Função para controlar o semáforo em uma thread separada

def is_pedestrian_traffic_light_red(pedestrianRed):
    if pedestrianRed == True:
        # Se o semáforo estiver vermelho, aguarde por X segundos
        traffic_light_counter = 30
        max_car_count = 0
        cars_5_happened_once = False
        cars_10_happened_once = False
        set_traffic_light_color(1, 0, 0, 1, 0)  # Liga o último LED
        for _ in range(traffic_light_counter):
            if max_car_count >= 5 & max_car_count < 9 & cars_5_happened_once == False & traffic_light_counter >= 5:         
                traffic_light_counter -= 5
                cars_5_happened_once == True
                print(f'Com {max_car_count} detectados, o tempo foi reduzido em 5s, tempo atual com pedestre fechado: {traffic_light_counter}s')
            elif max_car_count >= 10 & cars_10_happened_once == False & traffic_light_counter >= 10:
                traffic_light_counter -= 10
                cars_5_happened_once == True
                print(f'Com {max_car_count} detectados, o tempo foi reduzido em 10s, tempo atual com pedestre fechado: {traffic_light_counter}s')
            else:
                print(f'Tempo atual com pedestre fechado: {traffic_light_counter}s')
                traffic_light_counter -= 1
            time.sleep(1)
    else:
        # Se o semáforo estiver vermelho, aguarde por X segundos
        traffic_light_counter = 30
        max_car_count = 0
        cars_5_happened_once = False
        cars_10_happened_once = False
        set_traffic_light_color(1, 0, 0, 0, 1)  # Liga o último LED
        for _ in range(traffic_light_counter):
            if max_car_count >= 5 & max_car_count < 9 & cars_5_happened_once == False & traffic_light_counter >= 5:         
                traffic_light_counter -= 5
                cars_5_happened_once == True
                print(f'Com {max_car_count} detectados, o tempo foi reduzido em 5s, tempo atual com pedestre aberto: {traffic_light_counter}s')
            elif max_car_count >= 10 & cars_10_happened_once == False & traffic_light_counter >= 10:
                traffic_light_counter -= 10
                cars_5_happened_once == True
                print(f'Com {max_car_count} detectados, o tempo foi reduzido em 10s, tempo atual com pedestre aberto: {traffic_light_counter}s')
            else:
                print(f'Tempo atual com pedestre aberto: {traffic_light_counter}s')
                traffic_light_counter -= 1
            time.sleep(1)



def control_traffic_light():
    global max_car_count  # Declare a variável global

    while not stop_execution:

        is_pedestrian_traffic_light_red(True)
        set_traffic_light_color(0, 0, 1, 1, 0)
        time.sleep(5)
        set_traffic_light_color(0, 1, 0, 1, 0)
        time.sleep(5)
        is_pedestrian_traffic_light_red(False)

        for _ in range(5):
            set_traffic_light_color(1, 0, 0, 0, 1)
            time.sleep(0.5)
            set_traffic_light_color(1, 0, 0, 1, 0)   
            time.sleep(0.5)      
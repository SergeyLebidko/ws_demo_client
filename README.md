# ws_demo_client

Клиентская часть небольшого учебного проекта для отработки приемов работы с Websocket'ами. 
Приложение простое и разбито на 4 раздела, иллюстрирующих разные приемы работы вебсокетов.

Для каждого раздела на сервере создан соответствующий обработчик, реализующий логику получения сообщений и отправки ответов. Все сообщения текстовые.

![screenshot](screenshots/screen1.jpg)

Первый раздел - простейший эхо-сокет. Он получает сообщение от клиента и тут же отправляем строку в ответ.

![screenshot](screenshots/screen2.jpg)

Второй раздел - миниатюрный чат из трех клиентов. При подключении клиента, код на сервере сразу же добавляет его в группу и когда клиент отправляет на сервер сообщение, оно сразу же рассылается всем членам группы.

![screenshot](screenshots/screen3.jpg)

Третий раздел - сокет, отправляющий сообщения на клиент по таймеру.

![screenshot](screenshots/screen4.jpg)

Четвертый раздел - сокет, позволяющий организовать отправку сообщений заданному абоненту (клиенту). При подключении к серверу, клиент отправляет ему свое имя (или идентификатор), сервер запоминает его и в дальнейшем, при отправке сообщений клиентами использует это имя для определения адресата данных и доставки сообщения только заданному клиенту (без необходимости массовой групповой рассылки.

![screenshot](screenshots/screen5.jpg)

# miniWebServer
a mini web server

__How to use__

### Routes

* /messages
* /messages/id

### Methods

* get __(/messages)__: Get all messages
* get __(/messages/id)__: Get the message with the matching id

* post __(/messages)__: Add new messages
  * required fields: Mensaje => {"Mensajes": "Hola Mundo"}

* put __(/messages/id)__: Update the message with the matching id
    * required fields: Mensaje => {"Mensajes": "Hola Mundo"}
    
* delete __(/messages/id)__: Delete the message with the matching id

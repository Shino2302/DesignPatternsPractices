const NotificationFactory = require('./Class/NotificationFactory');

function sendNotification(type, message) {
    const notification = NotificationFactory.createNotification(type);
    notification.send(message);
}

sendNotification('email', 'Hola, esto es un correo');
sendNotification('sms', 'Este es un mensaje de Coopel');
sendNotification('push', 'Notificación recibida');
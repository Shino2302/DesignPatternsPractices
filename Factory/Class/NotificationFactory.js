const EmailNotification = require('./EmailNotifications');
const SMSNotification = require('./SMSNotificartion');
const PushNotification = require('./PushNotification');

class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error('Tipo de notificación desconocido');
        }
    }
}

module.exports = NotificationFactory;
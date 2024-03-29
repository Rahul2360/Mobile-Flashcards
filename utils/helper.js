import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

// Following Data or code is pick up from the udacifitness App
// That is make by the udacity teacher's
export function clearLocalNotification () {
   return AsyncStorage.removeItem(NOTIFICATION_KEY)
     .then(Notifications.cancelAllScheduledNotificationsAsync)
 }

 function createNotification () {
   return {
    title: 'Study reminder!',
     body: " don't forget to log your stats for today!",
     ios: {
       sound: true,
    },
    android: {
       sound: true,
       priority: 'high',
       sticky: false,
       vibrate: true,
     }
   }
 }

 export function setLocalNotification () {
   AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}

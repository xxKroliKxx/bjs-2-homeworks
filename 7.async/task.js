class AlarmClock {

    constructor() {
        this.alarmCollection = []
        this.timerId = null
    }

    addClock(t, f, id) {
        if (!id) {
            throw new Error('error text')
        }

        if (this.alarmCollection.findIndex(e => e.id === id) != -1) {
            console.log('the call id has already been added')
            return
        }
        this.alarmCollection.push({"id": id, "time": t, "callback": f})
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex(e => e.id === id)
        if (index === -1) return false
        this.alarmCollection.splice(index, 1)
        return true
    }

    getCurrentFormattedTime() {
        let t = new Date();
        return t.toLocaleString("ru", {hour: "numeric", minute: "numeric"})
    }

    start() {
        let checkClock = (id) => {
            let currentTime = this.getCurrentFormattedTime()
            let index = this.alarmCollection.findIndex(e => e.time === currentTime)
            if (index === -1) return
            alarmCollection[index].callback()
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(e => checkClock(e.id));
        }, 1000);
    }

    stop() {
        if (this.timerId != 0) {
            clearInterval(this.timerId)
            this.timerId = null
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(e => console.log('id ${e.id} time ${e.time}'));
    }

    clearAlarms() {
        stop()
        this.alarmCollection = []
    }

}


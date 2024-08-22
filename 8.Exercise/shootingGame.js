// ● Specifications :
    // ○ Create a shooting game between two player
    // ○ Each player has three properties : name, health and power
    // ○ Each player will take turns to shooting
    // ○ Before shooting, players get a chance to get random items (health +10 or power +10)
    // ○ The game will continue until one of the players has health < 0
// ● Requirements :
    // ○ Create ShootingGame & Player class
    // ○ ShootingGame class :
        // ■ constructor(player1, player2) → player objects as a parameter
        // ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
        // ■ start() → start shooting games
    // ○ Player class :
        // ■ Property → name, health (default 100), power (default 10)
        // ■ hit(power) → subtract player health
        // ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
        // ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
    // ○ ShootingGame start() function flow :
        // ■ In every turn :
            // ● Show each player status before shooting
            // ● Get random item for each player before shooting
            // ● Show each player status after shooting
        // ■ Show winner name

class Player {
    health = 20
    power = 10

    constructor(name) {
        this.name = name
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`)
    }

    hit(player) {
        this.health -= player.power
        console.log(`Player ${this.name} has been damaged by ${player.power} points`)
        console.log(`Player ${this.name} has ${this.health} remaining health`)
        player.power = 10
    }

    useItem(item) {
        if (item.health) {
            this.health += item.health
            console.log(`Player ${this.name} received ${item.health} health points`)
        }
        if (item.power) {
            this.power += item.power
            console.log(`Player ${this.name} received ${item.power} power points`)
        }
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem() {
        let item = {}
        let random = Math.floor(Math.random() * 2) // 0 ~ 9

        if (random == 0) {
            item.health = 10
        } else if (random == 1) {
            item.power = 10
        }

        return item // { health: 10 }, { power: 10 }, {}
    }

    start() {
        console.log('==== Start Game ====')
        while (this.player1.health > 1 && this.player2.health > 1) {
            console.log(`=== Player ${this.player1.name} turn ===`)
            this.player1.useItem(this.getRandomItem())
            this.player1.showStatus()
            this.player2.hit(this.player1)
            if (this.player2.health === 0) {
                break
            }

            console.log(`=== Player ${this.player2.name} turn ===`)
            this.player2.useItem(this.getRandomItem())
            this.player2.showStatus()
            this.player1.hit(this.player2)
            if (this.player1.health === 0) {
                break
            }
        }

        if (this.player1.health <= 0) {
            console.log(`The winner is ${this.player2.name}`)
        } else {
            console.log(`The winner is ${this.player1.name}`)
        }

        console.log('==== End Game ====')
    }
}

const ahmad = new Player("ahmad")
const budi = new Player("budi")

const game1 = new ShootingGame(ahmad, budi)
game1.start()
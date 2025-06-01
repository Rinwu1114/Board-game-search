console.log(`hello world`)

async function main() {
    const games = await fetch("https://rpggeek.com/xmlapi2/")
    const gamesData = await games.json()
    console.log(gamesData)
}

main()


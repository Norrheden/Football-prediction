let leagues = [
    {league: "premierLeague", teams: [
        {team: "Arsenal", color: "#EF0107"}, 
        {team: "Aston Villa", color: "#95BFE5"}, 
        {team: "Bournemouth", color: "#DA291C"}, 
        {team: "Brentford", color: "#E30613"}, 
        {team: "Brighton & Hove Albion", color: "#0057B8"}, 
        {team: "Burnley", color: "#6C1D45"}, 
        {team: "Chelsea", color: "#034694"}, 
        {team: "Crystal Palace", color: "#1B458F"}, 
        {team: "Everton", color: "#003399"}, 
        {team: "Fulham", color: "#FFFFFF"}, 
        {team: "Leeds United", color: "#FFCD00"}, 
        {team: "Liverpool", color: "#C8102E"}, 
        {team: "Manchester City", color: "#6CABDD"}, 
        {team: "Manchester United", color: "#DA291C"}, 
        {team: "Newcastle United", color: "#241F20"}, 
        {team: "Nottingham Forest", color: "#DD0000"}, 
        {team: "Sunderland", color: "#EB172B"}, 
        {team: "Tottenham Hotspur", color: "#132257"}, 
        {team: "West Ham United", color: "#7A263A"}, 
        {team: "Wolverhampton Wanderers", color: "#FDB913"}
    ]},

    {league: "bundesliga", teams: [
        {team: "FC Augsburg", color: "#FF0000"}, 
        {team: "Union Berlin", color: "#FFFFFF"}, 
        {team: "Werder Bremen", color: "#008000"}, 
        {team: "Borussia Dortmund", color: "#FFFF00"}, 
        {team: "Eintracht Frankfurt", color: "#000000"}, 
        {team: "SC Freiburg", color: "#FF4500"}, 
        {team: "Hamburger SV", color: "#0000FF"}, 
        {team: "1. FC Heidenheim", color: "#FF6347"}, 
        {team: "TSG 1899 Hoffenheim", color: "#1E90FF"}, 
        {team: "1. FC Köln", color: "#FF69B4"}, 
        {team: "RB Leipzig", color: "#FF0000"}, 
        {team: "Bayer Leverkusen", color: "#000000"}, 
        {team: "Mainz 05", color: "#FF4500"}, 
        {team: "Borussia Mönchengladbach", color: "#008000"}, 
        {team: "Bayern München", color: "#FF0000"}, 
        {team: "FC St. Pauli", color: "#8B4513"}, 
        {team: "VfB Stuttgart", color: "#FFFFFF"}, 
        {team: "VfL Wolfsburg", color: "#32CD32"}
    ]},

    {league: "serieA", teams: [
        {team: "Atalanta", color: "#0055A4"}, 
        {team: "Bologna", color: "#AF002A"}, 
        {team: "Cagliari", color: "#8B0000"}, 
        {team: "Como", color: "#005BAC"}, 
        {team: "Cremonese", color: "#FF0000"}, 
        {team: "Fiorentina", color: "#682A85"}, 
        {team: "Genoa", color: "#D1001C"}, 
        {team: "Inter Milan", color: "#0033A0"}, 
        {team: "Juventus", color: "#FFFFFF"}, 
        {team: "Lazio", color: "#87CEEB"}, 
        {team: "Lecce", color: "#FFCC00"}, 
        {team: "AC Milan", color: "#FB090B"}, 
        {team: "Napoli", color: "#007FFF"}, 
        {team: "Parma", color: "#FFD700"}, 
        {team: "Pisa", color: "#0000FF"}, 
        {team: "Roma", color: "#FF4500"}, 
        {team: "Sassuolo", color: "#008000"}, 
        {team: "Torino", color: "#8B0000"}, 
        {team: "Udinese", color: "#000000"}, 
        {team: "Verona", color: "#FFCC00"}
    ]},

    {league: "ligue1", teams: [
        {team: "Paris Saint-Germain (PSG)", color: "#004170"}, 
        {team: "Olympique de Marseille", color: "#00A0E1"}, 
        {team: "AS Monaco", color: "#CE1126"}, 
        {team: "OGC Nice", color: "#E30613"}, 
        {team: "LOSC Lille", color: "#D71920"}, 
        {team: "Olympique Lyonnais", color: "#00209F"}, 
        {team: "Stade Rennais", color: "#E60026"}, 
        {team: "RC Strasbourg", color: "#005BAC"}, 
        {team: "RC Lens", color: "#FFD700"}, 
        {team: "FC Nantes", color: "#FFF200"}, 
        {team: "Stade Brestois 29", color: "#FF0000"}, 
        {team: "Toulouse FC", color: "#4B0082"}, 
        {team: "AJ Auxerre", color: "#005BAC"}, 
        {team: "Angers SCO", color: "#000000"}, 
        {team: "Le Havre AC", color: "#87CEEB"}, 
        {team: "FC Lorient", color: "#FF4500"}, 
        {team: "Paris FC", color: "#004170"}, 
        {team: "FC Metz", color: "#800000"}
    ]},

    {league: "laLiga", teams: [
        {team: "Alavés", color: "#005BAC"}, 
        {team: "Athletic Bilbao", color: "#D50032"}, 
        {team: "Atlético Madrid", color: "#D71920"}, 
        {team: "Barcelona", color: "#A50044"}, 
        {team: "Celta Vigo", color: "#87CEEB"}, 
        {team: "Espanyol", color: "#005BAC"}, 
        {team: "Getafe", color: "#003DA5"}, 
        {team: "Girona", color: "#FF0000"}, 
        {team: "Mallorca", color: "#D50032"}, 
        {team: "Osasuna", color: "#D50032"}, 
        {team: "Rayo Vallecano", color: "#FFFFFF"}, 
        {team: "Real Betis", color: "#008000"}, 
        {team: "Real Madrid", color: "#FFFFFF"}, 
        {team: "Real Sociedad", color: "#005BAC"}, 
        {team: "Sevilla", color: "#FF0000"}, 
        {team: "Valencia", color: "#FF6600"}, 
        {team: "Villarreal", color: "#FFFF00"}, 
        {team: "Levante", color: "#003DA5"}, 
        {team: "Elche", color: "#008000"}, 
        {team: "Real Oviedo", color: "#005BAC"}
    ]}
];


let table = document.getElementById("table")

function setUptheLeague(nameOfTheLeague) {
    for(let league of leagues) {
        if(league.league === nameOfTheLeague) {
            for(let i = 0; i<league.teams.length; i++) {
                let row = document.createElement("div")
                row.classList.add("row")
                row.id = `${league.teams[i].team}`

                row.style.display = "flex"
                row.style.alignItems = "center"
                row.style.fontSize = "18px"
                
                row.style.padding = "6px"
                row.style.fontWeight = "bold"
                row.style.border = "1px solid #2d3b48"
                
                

                let number = document.createElement("div");
                number.textContent = `${i+1}.`
                if(i > 8) {
                    number.style.marginRight = "20px"


                } else {
                    number.style.marginRight = "30px"
                    

                }
                row.appendChild(number)

                let color = document.createElement("div")
                color.style.background = league.teams[i].color 
                color.style.width = "20px"
                color.style.height = "20px"
                color.style.marginRight = "30px"
                row.appendChild(color)

                let team = document.createElement("div");
                team.textContent = league.teams[i].team;
                row.appendChild(team);

                
                
               
                
                table.appendChild(row);


                row.draggable = true;

                row.addEventListener("dragstart", event => {
                    event.dataTransfer.setData("text/plain", row.id); 
                });

                row.addEventListener("dragover", event => {
                    event.preventDefault(); 
                    row.style.opacity = "0.5"
                });

                row.addEventListener("dragleave", event => {
                    event.preventDefault();
                    row.style.opacity = "1"
                })

                row.addEventListener("drop", event => {
                    event.preventDefault();
                    row.style.opacity = "1"
                    const draggedRowId = event.dataTransfer.getData("text/plain"); 
                    const draggedRow = document.getElementById(draggedRowId); 

                    if (draggedRow && draggedRow !== row) {
                        
                        const parent = row.parentNode;

                        const nextSibling = row.nextSibling === draggedRow ? row : row.nextSibling;

                        parent.insertBefore(row, draggedRow);
                        parent.insertBefore(draggedRow, nextSibling);

                        updateRowNumbers(parent);
                    }
                    console.log("Dropped:", draggedRowId, "on", row.id);
                });

                function updateRowNumbers(parent) {
                    const rows = parent.children;
                    for (let i = 0; i < rows.length; i++) {
                        const numberElement = rows[i].querySelector("div:first-child"); 
                        if (numberElement) {
                            numberElement.textContent = `${i + 1}.`; 

                            if (i > 8) {
                                numberElement.style.marginRight = "20px";
                            } else {
                                numberElement.style.marginRight = "30px";
                            }
                        }
                    }
                }



            }
        }

    }

}


